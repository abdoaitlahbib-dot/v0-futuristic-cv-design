import { NextResponse } from "next/server";

// This API route serves as a proxy for the n8n webhook
// Set NEXT_PUBLIC_N8N_WEBHOOK_URL in your environment variables to your n8n webhook URL
// Or use this route to handle contact form submissions directly

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // If n8n webhook URL is configured, forward the request
    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;
    
    if (n8nWebhookUrl) {
      const response = await fetch(n8nWebhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...body,
          timestamp: new Date().toISOString(),
          source: "portfolio-contact-form",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to forward to n8n");
      }
    }

    // Log the submission (in production, you might want to store this in a database)
    console.log("Contact form submission:", {
      name: body.name,
      email: body.email,
      service: body.service,
      budget: body.budget,
      message: body.message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { 
        success: true, 
        message: "Message received successfully" 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, ArrowUpRight, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services, type ContactFormData } from "@/lib/data";

export function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    service: "",
    message: "",
    budget: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // This is where you connect to n8n webhook
    // Replace with your n8n webhook URL
    const N8N_WEBHOOK_URL = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL || "/api/contact";

    try {
      const response = await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: "portfolio-website",
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", service: "", message: "", budget: "" });
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        throw new Error("Failed to submit");
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0A0A0A]" />
      <motion.div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#D4AF37]/5 rounded-full blur-[200px]"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full border border-[#2A2A2A] bg-[#111111]/50 text-[#888888] text-xs font-medium tracking-widest uppercase mb-6">
              Contact
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F5F5F5] mb-6 tracking-tight">
              Let&apos;s Create
              <span className="text-[#D4AF37]"> Together</span>
            </h2>
            <p className="text-[#666666] text-lg mb-8 leading-relaxed">
              Ready to bring your vision to life? Whether you need design, development, 
              or growth strategy, I&apos;m here to help transform your ideas into reality.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <motion.a 
                href="mailto:contact@aityzin.com"
                className="flex items-center gap-4 p-4 bg-[#111111] border border-[#1A1A1A] rounded-xl hover:border-[#2A2A2A] transition-all group"
                whileHover={{ x: 10 }}
              >
                <div className="p-3 rounded-lg bg-[#D4AF37]/10">
                  <Mail className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-[#666666]">Email</p>
                  <p className="text-[#F5F5F5] font-medium">contact@aityzin.com</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-[#2A2A2A] group-hover:text-[#D4AF37] transition-colors" />
              </motion.a>

              <motion.div 
                className="flex items-center gap-4 p-4 bg-[#111111] border border-[#1A1A1A] rounded-xl"
                whileHover={{ x: 10 }}
              >
                <div className="p-3 rounded-lg bg-[#8B5CF6]/10">
                  <MapPin className="w-5 h-5 text-[#8B5CF6]" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-[#666666]">Location</p>
                  <p className="text-[#F5F5F5] font-medium">Morocco - Available Worldwide</p>
                </div>
              </motion.div>
            </div>

            {/* External Links */}
            <div className="flex gap-4">
              <motion.a
                href="https://fiverr.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 bg-[#1DBF73]/10 border border-[#1DBF73]/30 rounded-full text-[#1DBF73] font-medium text-sm hover:bg-[#1DBF73]/20 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Fiverr
                <ArrowUpRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="https://etsy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 bg-[#F56400]/10 border border-[#F56400]/30 rounded-full text-[#F56400] font-medium text-sm hover:bg-[#F56400]/20 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Etsy
                <ArrowUpRight className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-[#111111] border border-[#1A1A1A] rounded-2xl p-8">
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#888888] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0A0A0A] border border-[#1A1A1A] rounded-xl text-[#F5F5F5] placeholder-[#666666] focus:outline-none focus:border-[#D4AF37] transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#888888] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0A0A0A] border border-[#1A1A1A] rounded-xl text-[#F5F5F5] placeholder-[#666666] focus:outline-none focus:border-[#D4AF37] transition-colors"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                {/* Service */}
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-[#888888] mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0A0A0A] border border-[#1A1A1A] rounded-xl text-[#F5F5F5] focus:outline-none focus:border-[#D4AF37] transition-colors appearance-none cursor-pointer"
                    required
                  >
                    <option value="" className="bg-[#0A0A0A]">Select a service</option>
                    {services.map((service) => (
                      <option key={service.id} value={service.title} className="bg-[#0A0A0A]">
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Budget */}
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-[#888888] mb-2">
                    Budget Range (Optional)
                  </label>
                  <select
                    id="budget"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0A0A0A] border border-[#1A1A1A] rounded-xl text-[#F5F5F5] focus:outline-none focus:border-[#D4AF37] transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-[#0A0A0A]">Select budget</option>
                    <option value="<500" className="bg-[#0A0A0A]">Less than $500</option>
                    <option value="500-1000" className="bg-[#0A0A0A]">$500 - $1,000</option>
                    <option value="1000-5000" className="bg-[#0A0A0A]">$1,000 - $5,000</option>
                    <option value="5000+" className="bg-[#0A0A0A]">$5,000+</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#888888] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 bg-[#0A0A0A] border border-[#1A1A1A] rounded-xl text-[#F5F5F5] placeholder-[#666666] focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                {/* Submit Button */}
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-[#D4AF37] hover:bg-[#B8962F] text-[#0A0A0A] py-6 rounded-xl font-semibold text-base disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : status === "success" ? (
                      <>
                        <Check className="w-5 h-5 mr-2" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </motion.div>

                {status === "error" && (
                  <p className="text-red-500 text-sm text-center">
                    Something went wrong. Please try again.
                  </p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

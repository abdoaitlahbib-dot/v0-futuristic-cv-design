"use client";

import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section id="services" className="py-24 relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0D0D15] to-[#0A0A0A]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#D4AF37]/10 via-[#8B5CF6]/10 to-[#D4AF37]/10 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Main CTA Card */}
        <div className="relative bg-gradient-to-br from-[#1A1A1A] to-[#111111] rounded-3xl p-8 md:p-12 border border-[#2A2A2A] overflow-hidden">
          {/* Decorative corner elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#D4AF37]/10 to-transparent" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#8B5CF6]/10 to-transparent" />
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 text-[#D4AF37] text-sm font-medium mb-6">
              READY TO COLLABORATE?
            </span>
            
            <h2 className="text-3xl md:text-5xl font-bold text-[#F5F5F5] mb-6 leading-tight">
              Let&apos;s Build Something
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#8B5CF6] bg-clip-text text-transparent"> Extraordinary</span>
            </h2>
            
            <p className="text-[#888888] text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Whether you need ornamental digital assets, custom automation scripts, 
              or expert marketplace optimization — I&apos;m here to help transform your vision into reality.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://www.fiverr.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group"
              >
                <Button 
                  className="bg-[#1DBF73] hover:bg-[#19a463] text-white px-8 py-6 text-base font-semibold rounded-full transition-all duration-300"
                >
                  <span>Hire on Fiverr</span>
                  <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </a>
              
              <a 
                href="https://www.etsy.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group"
              >
                <Button 
                  className="bg-[#F56400] hover:bg-[#d95a00] text-white px-8 py-6 text-base font-semibold rounded-full transition-all duration-300"
                >
                  <span>Shop on Etsy</span>
                  <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {[
            { value: "15+", label: "Years Experience" },
            { value: "500+", label: "Projects Completed" },
            { value: "100%", label: "Client Satisfaction" },
            { value: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <div 
              key={index}
              className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-6 text-center"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#8B5CF6] bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-[#888888]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

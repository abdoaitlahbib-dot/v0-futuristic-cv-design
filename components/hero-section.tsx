"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#0A0A0A] to-[#1A0A2E] opacity-80" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-[#8B5CF6]/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-[100px]" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-sm text-[#D4AF37] font-medium tracking-wide">
                15+ YEARS OF CRAFTSMANSHIP
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
              <span className="text-[#F5F5F5]">THE</span>
              <br />
              <span className="text-[#F5F5F5]">FUTURE OF</span>
              <br />
              <span className="bg-gradient-to-r from-[#D4AF37] via-[#F5D78B] to-[#D4AF37] bg-clip-text text-transparent">
                DESIGN
              </span>
            </h1>
            
            <p className="text-lg text-[#888888] max-w-md leading-relaxed">
              Digital Artisan & Full-Stack Vibe Coder. Bridging traditional 
              craftsmanship with cutting-edge digital architecture.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                className="group bg-[#D4AF37] hover:bg-[#B8962F] text-[#0A0A0A] px-6 py-6 text-base font-semibold rounded-full transition-all duration-300"
              >
                Explore Portfolio
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                className="border-[#2A2A2A] hover:border-[#8B5CF6] hover:bg-[#8B5CF6]/10 text-[#F5F5F5] px-6 py-6 text-base rounded-full transition-all duration-300"
              >
                Contact Me
              </Button>
            </div>
          </div>

          {/* Right Content - Featured Card */}
          <div className="relative">
            {/* Glowing ring */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#D4AF37]/20 via-[#8B5CF6]/20 to-[#D4AF37]/20 rounded-3xl blur-xl opacity-60" />
            
            <div className="relative bg-gradient-to-br from-[#1A1A1A] to-[#111111] rounded-3xl p-8 border border-[#2A2A2A]">
              <div className="aspect-square relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A]">
                {/* Profile placeholder with artistic effect */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-48 h-48 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#8B5CF6] opacity-20 blur-2xl absolute -inset-12" />
                    <div className="w-48 h-48 rounded-full border-2 border-[#D4AF37]/30 flex items-center justify-center">
                      <span className="text-6xl font-bold bg-gradient-to-br from-[#D4AF37] to-[#8B5CF6] bg-clip-text text-transparent">
                        AA
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-[#D4AF37] animate-pulse" />
                <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-[#8B5CF6] animate-pulse delay-500" />
              </div>
              
              <div className="mt-6 space-y-2">
                <h3 className="text-xl font-semibold text-[#F5F5F5]">Abdellah Ait Lahbib</h3>
                <p className="text-[#D4AF37] font-medium">Digital Artisan & Vibe Coder</p>
              </div>
            </div>

            {/* Floating skill badges */}
            <div className="absolute -top-4 -right-4 px-4 py-2 bg-[#1A1A1A] border border-[#D4AF37]/30 rounded-full">
              <span className="text-sm text-[#D4AF37] font-mono">AI Orchestration</span>
            </div>
            <div className="absolute -bottom-4 -left-4 px-4 py-2 bg-[#1A1A1A] border border-[#8B5CF6]/30 rounded-full">
              <span className="text-sm text-[#8B5CF6] font-mono">Full-Stack</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

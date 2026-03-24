"use client";

import { Gem, Code2, Rocket, ArrowRight } from "lucide-react";

const transitions = [
  {
    icon: Gem,
    title: "Traditional Craftsmanship",
    description: "Jewelry Models, Gravure & Garniture",
    color: "#D4AF37"
  },
  {
    icon: Code2,
    title: "Digital Architecture",
    description: "Full-Stack Development & Automation",
    color: "#8B5CF6"
  },
  {
    icon: Rocket,
    title: "Growth Mastery",
    description: "SEO, Copywriting & AI Orchestration",
    color: "#22D3EE"
  }
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative bg-gradient-to-b from-[#0A0A0A] via-[#0D0D12] to-[#0A0A0A]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[150px] -translate-y-1/2" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 text-[#D4AF37] text-sm font-medium mb-4">
                ABOUT ME
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-6 leading-tight">
                Digital Artisan &
                <span className="bg-gradient-to-r from-[#D4AF37] to-[#8B5CF6] bg-clip-text text-transparent"> Vibe Coder</span>
              </h2>
              <p className="text-[#888888] text-lg leading-relaxed">
                With 15+ years of industrial design heritage, I bridge the gap between 
                traditional craftsmanship and cutting-edge digital architecture. My journey 
                from intricate jewelry engraving to full-stack development has given me a 
                unique perspective on creating meaningful digital experiences.
              </p>
            </div>

            {/* Transition Cards */}
            <div className="space-y-4">
              {transitions.map((item, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-4 p-4 bg-[#111111] border border-[#2A2A2A] rounded-xl hover:border-[#3A3A3A] transition-all duration-300"
                >
                  <div 
                    className="p-3 rounded-lg shrink-0"
                    style={{ backgroundColor: `${item.color}15` }}
                  >
                    <item.icon 
                      className="w-5 h-5" 
                      style={{ color: item.color }} 
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-[#F5F5F5]">{item.title}</h4>
                    <p className="text-sm text-[#888888]">{item.description}</p>
                  </div>
                  <ArrowRight 
                    className="w-5 h-5 text-[#888888] opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right - Visual */}
          <div className="relative">
            {/* Outer glow ring */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/20 via-[#8B5CF6]/20 to-[#22D3EE]/20 rounded-3xl blur-2xl opacity-50" />
            
            {/* Main card */}
            <div className="relative bg-gradient-to-br from-[#1A1A1A] to-[#111111] rounded-3xl p-8 border border-[#2A2A2A]">
              {/* Heritage badge */}
              <div className="absolute -top-4 left-8 px-4 py-2 bg-[#0A0A0A] border border-[#D4AF37]/30 rounded-full">
                <span className="text-sm text-[#D4AF37] font-mono">Est. 2009</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-4">
                {/* Card 1 */}
                <div className="aspect-square bg-[#0A0A0A] rounded-2xl p-4 border border-[#2A2A2A] flex flex-col justify-between">
                  <Gem className="w-8 h-8 text-[#D4AF37]" />
                  <div>
                    <div className="text-2xl font-bold text-[#F5F5F5]">15+</div>
                    <div className="text-xs text-[#888888]">Years of Craft</div>
                  </div>
                </div>
                
                {/* Card 2 */}
                <div className="aspect-square bg-gradient-to-br from-[#D4AF37]/10 to-[#8B5CF6]/10 rounded-2xl p-4 border border-[#D4AF37]/20 flex flex-col justify-between">
                  <Code2 className="w-8 h-8 text-[#8B5CF6]" />
                  <div>
                    <div className="text-2xl font-bold text-[#F5F5F5]">Full</div>
                    <div className="text-xs text-[#888888]">Stack Dev</div>
                  </div>
                </div>
                
                {/* Card 3 */}
                <div className="aspect-square bg-gradient-to-br from-[#8B5CF6]/10 to-[#22D3EE]/10 rounded-2xl p-4 border border-[#8B5CF6]/20 flex flex-col justify-between">
                  <Rocket className="w-8 h-8 text-[#22D3EE]" />
                  <div>
                    <div className="text-2xl font-bold text-[#F5F5F5]">SEO</div>
                    <div className="text-xs text-[#888888]">Expert</div>
                  </div>
                </div>
                
                {/* Card 4 */}
                <div className="aspect-square bg-[#0A0A0A] rounded-2xl p-4 border border-[#2A2A2A] flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#8B5CF6] bg-clip-text text-transparent">
                      AI
                    </div>
                    <div className="text-xs text-[#888888] mt-1">Orchestration</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

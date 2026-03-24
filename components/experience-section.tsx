"use client";

import { Gem, Store, Cpu, ArrowUpRight } from "lucide-react";

const experiences = [
  {
    company: "Energie Gravure",
    role: "Master Craftsman",
    period: "Traditional Heritage",
    description: "Technical precision in jewelry engraving and ornamental design. Developed expertise in intricate pattern work and luxury branding through traditional craftsmanship methods.",
    icon: Gem,
    color: "#D4AF37",
    highlights: ["Jewelry Engraving", "Ornamental Design", "Luxury Branding"]
  },
  {
    company: "Star Garniture",
    role: "Design Specialist",
    period: "Industrial Design",
    description: "Specialized in garniture production and ornamental branding. Combined traditional techniques with modern manufacturing processes for high-quality output.",
    icon: Store,
    color: "#8B5CF6",
    highlights: ["Garniture Production", "Pattern Design", "Quality Control"]
  },
  {
    company: "AityZin Platform",
    role: "Digital Store Manager",
    period: "Present",
    description: "Managing a digital store for Moroccan Ornamental Assets and Automation Scripts. Bridging traditional craftsmanship with digital distribution and marketplace optimization.",
    icon: Cpu,
    color: "#22D3EE",
    highlights: ["Digital Assets", "Etsy & Fiverr", "Automation Scripts"]
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative bg-[#0A0A0A]">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #D4AF37 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full border border-[#8B5CF6]/30 bg-[#8B5CF6]/5 text-[#8B5CF6] text-sm font-medium mb-4">
            JOURNEY
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-4">
            From Craft to Code
          </h2>
          <p className="text-[#888888] text-lg max-w-2xl mx-auto">
            15+ years of evolution from traditional jewelry craftsmanship 
            to digital system architecture.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-[#1A1A1A] to-[#111111] rounded-2xl overflow-hidden border border-[#2A2A2A] hover:border-[#3A3A3A] transition-all duration-500"
            >
              {/* Top accent bar */}
              <div 
                className="h-1 w-full"
                style={{ backgroundColor: exp.color }}
              />
              
              <div className="p-6">
                {/* Icon and Company */}
                <div className="flex items-start justify-between mb-6">
                  <div 
                    className="p-3 rounded-xl"
                    style={{ backgroundColor: `${exp.color}15` }}
                  >
                    <exp.icon 
                      className="w-6 h-6" 
                      style={{ color: exp.color }} 
                    />
                  </div>
                  <span className="text-xs text-[#888888] font-mono uppercase tracking-wider">
                    {exp.period}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-[#F5F5F5] mb-1">
                  {exp.company}
                </h3>
                <p 
                  className="text-sm font-medium mb-4"
                  style={{ color: exp.color }}
                >
                  {exp.role}
                </p>
                <p className="text-[#888888] text-sm leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2">
                  {exp.highlights.map((highlight, hIndex) => (
                    <span
                      key={hIndex}
                      className="px-3 py-1 text-xs bg-[#0A0A0A] rounded-full text-[#888888] border border-[#2A2A2A]"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Hover arrow */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight 
                    className="w-5 h-5" 
                    style={{ color: exp.color }} 
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

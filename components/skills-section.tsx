"use client";

import { 
  Palette, 
  Code2, 
  TrendingUp, 
  Brain,
  Figma,
  PenTool,
  Layers,
  FileImage,
  Globe,
  GitBranch,
  Search,
  FileText,
  BarChart3,
  Zap,
  Bot,
  Sparkles
} from "lucide-react";

const skillCategories = [
  {
    title: "Creative Suite",
    icon: Palette,
    color: "#D4AF37",
    skills: [
      { name: "Illustrator", icon: PenTool },
      { name: "Photoshop", icon: Layers },
      { name: "Figma", icon: Figma },
      { name: "InDesign", icon: FileImage },
      { name: "Canva", icon: Sparkles },
      { name: "Affinity", icon: Palette },
    ]
  },
  {
    title: "Tech Stack",
    subtitle: "Vibe Coding",
    icon: Code2,
    color: "#8B5CF6",
    skills: [
      { name: "HTML5", icon: Globe },
      { name: "CSS3", icon: Layers },
      { name: "JavaScript", icon: Zap },
      { name: "GitHub", icon: GitBranch },
      { name: "VS Code", icon: Code2 },
      { name: "Cursor", icon: Bot },
    ]
  },
  {
    title: "Growth & Marketing",
    subtitle: "Self-Learned Mastery",
    icon: TrendingUp,
    color: "#22D3EE",
    skills: [
      { name: "SEO Mastery", icon: Search },
      { name: "Copywriting", icon: FileText },
      { name: "Marketplace Strategy", icon: TrendingUp },
      { name: "Google Analytics", icon: BarChart3 },
    ]
  },
  {
    title: "AI Orchestration",
    subtitle: "Master Level",
    icon: Brain,
    color: "#D4AF37",
    skills: [
      { name: "ChatGPT", icon: Bot },
      { name: "Gemini", icon: Sparkles },
      { name: "Claude", icon: Brain },
    ]
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative">
      {/* Background effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#8B5CF6]/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 text-[#D4AF37] text-sm font-medium mb-4">
            SKILL MATRIX
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-4">
            Engineered to Deliver
          </h2>
          <p className="text-[#888888] text-lg max-w-2xl mx-auto">
            Clarity, Depth, and Control. A unique blend of traditional craftsmanship 
            and modern digital expertise.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-[#1A1A1A] to-[#111111] rounded-2xl p-6 border border-[#2A2A2A] hover:border-[#3A3A3A] transition-all duration-500"
            >
              {/* Glow effect on hover */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${category.color}10 0%, transparent 70%)`
                }}
              />
              
              <div className="relative z-10">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div 
                    className="p-3 rounded-xl"
                    style={{ backgroundColor: `${category.color}15` }}
                  >
                    <category.icon 
                      className="w-6 h-6" 
                      style={{ color: category.color }} 
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#F5F5F5]">
                      {category.title}
                    </h3>
                    {category.subtitle && (
                      <span 
                        className="text-sm font-mono"
                        style={{ color: category.color }}
                      >
                        {category.subtitle}
                      </span>
                    )}
                  </div>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center gap-2 px-3 py-2 bg-[#0A0A0A] rounded-lg border border-[#2A2A2A] hover:border-[#3A3A3A] transition-colors"
                    >
                      <skill.icon className="w-4 h-4 text-[#888888]" />
                      <span className="text-sm text-[#F5F5F5]">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quote Section */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-[#1A1A1A] to-[#111111] rounded-2xl p-8 border border-[#2A2A2A] max-w-3xl">
            <p className="text-xl md:text-2xl text-[#F5F5F5] italic leading-relaxed">
              {'"People don\'t buy because they understand, they buy because they feel understood."'}
            </p>
            <p className="mt-4 text-[#D4AF37] font-medium">
              — The Art of Copywriting
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

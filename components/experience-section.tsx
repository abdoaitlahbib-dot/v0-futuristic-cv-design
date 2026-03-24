"use client";

import { motion } from "framer-motion";
import { Briefcase, ArrowUpRight, Gem, Star, Zap } from "lucide-react";

const experiences = [
  {
    id: "1",
    company: "Energie Gravure",
    role: "Jewelry Model Engraver",
    period: "2009 - 2015",
    description: "Mastered the art of precision engraving, translating intricate designs into tangible masterpieces.",
    achievements: [
      "Led complex jewelry model projects",
      "Developed expertise in precision craftsmanship",
      "Built foundation for digital design transition",
    ],
    icon: Gem,
    color: "#D4AF37",
  },
  {
    id: "2",
    company: "Star Garniture",
    role: "Jewelry Garniture Specialist",
    period: "2015 - 2020",
    description: "Advanced from engraving to comprehensive garniture work, expanding creative capabilities.",
    achievements: [
      "Managed high-value client projects",
      "Introduced digital tools to traditional workflow",
      "Mentored junior artisans",
    ],
    icon: Star,
    color: "#8B5CF6",
  },
  {
    id: "3",
    company: "AityZin Platform",
    role: "Digital Artisan & Founder",
    period: "2020 - Present",
    description: "Bridging traditional craftsmanship with cutting-edge digital solutions.",
    achievements: [
      "Launched successful Fiverr presence",
      "Built comprehensive service platform",
      "Integrated AI into workflow automation",
    ],
    icon: Zap,
    color: "#22D3EE",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#080810] to-[#0A0A0A]" />
      
      {/* Animated gradient */}
      <motion.div 
        className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#8B5CF6]/5 rounded-full blur-[200px]"
        animate={{ y: [0, 50, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#2A2A2A] bg-[#111111]/50 text-[#888888] text-xs font-medium tracking-widest uppercase mb-6">
            <Briefcase className="w-3 h-3" />
            Experience
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F5F5F5] mb-6 tracking-tight">
            The Journey
            <span className="text-[#D4AF37]">.</span>
          </h2>
          <p className="text-[#666666] text-lg">
            From traditional craftsmanship to digital innovation, each step has shaped 
            my unique approach to creating meaningful experiences.
          </p>
        </motion.div>

        {/* Timeline Cards */}
        <motion.div 
          className="grid lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              className="group relative bg-[#111111] rounded-2xl overflow-hidden border border-[#1A1A1A] hover:border-[#2A2A2A] transition-all duration-500"
              variants={item}
              whileHover={{ y: -8 }}
            >
              {/* Top accent bar */}
              <motion.div 
                className="h-1 w-full"
                style={{ backgroundColor: exp.color }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
              
              {/* Hover glow */}
              <motion.div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${exp.color}10 0%, transparent 70%)`
                }}
              />

              <div className="p-6 relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <motion.div 
                    className="p-3 rounded-xl"
                    style={{ backgroundColor: `${exp.color}10` }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <exp.icon className="w-6 h-6" style={{ color: exp.color }} />
                  </motion.div>
                  <span className="text-xs text-[#666666] font-mono uppercase tracking-wider">
                    {exp.period}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#F5F5F5] mb-1">
                  {exp.company}
                </h3>
                <p className="text-sm font-medium mb-4" style={{ color: exp.color }}>
                  {exp.role}
                </p>
                <p className="text-[#666666] text-sm leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Achievements */}
                <ul className="space-y-2 mb-4">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#888888]">
                      <div 
                        className="w-1 h-1 rounded-full mt-2 shrink-0" 
                        style={{ backgroundColor: exp.color }} 
                      />
                      {achievement}
                    </li>
                  ))}
                </ul>

                {/* Hover arrow */}
                <motion.div 
                  className="absolute bottom-6 right-6 w-8 h-8 rounded-full border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                  style={{ borderColor: exp.color }}
                  whileHover={{ scale: 1.1, backgroundColor: exp.color }}
                >
                  <ArrowUpRight className="w-4 h-4 text-[#F5F5F5]" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

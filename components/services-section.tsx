"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Palette, Code2, TrendingUp, Brain } from "lucide-react";
import { services } from "@/lib/data";

const iconMap = {
  design: Palette,
  development: Code2,
  marketing: TrendingUp,
  ai: Brain,
};

const colorMap = {
  design: "#D4AF37",
  development: "#8B5CF6",
  marketing: "#22D3EE",
  ai: "#F59E0B",
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export function ServicesSection() {
  return (
    <section id="services" className="py-24 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0D0D10] to-[#0A0A0A]" />
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#8B5CF6]/3 rounded-full blur-[200px]"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
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
          <span className="inline-block px-4 py-2 rounded-full border border-[#2A2A2A] bg-[#111111]/50 text-[#888888] text-xs font-medium tracking-widest uppercase mb-6">
            Services
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F5F5F5] mb-6 tracking-tight">
            Engineered to Deliver
            <span className="text-[#D4AF37]">.</span>
          </h2>
          <p className="text-[#666666] text-lg">
            Clarity, Depth, and Control. A unique blend of traditional craftsmanship 
            and modern digital expertise.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid md:grid-cols-2 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {services.map((service) => {
            const Icon = iconMap[service.category];
            const color = colorMap[service.category];
            
            return (
              <motion.div
                key={service.id}
                className="group relative bg-[#111111] rounded-2xl p-8 border border-[#1A1A1A] hover:border-[#2A2A2A] transition-all duration-500 overflow-hidden"
                variants={item}
                whileHover={{ y: -5 }}
              >
                {/* Hover glow */}
                <motion.div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at 50% 100%, ${color}08 0%, transparent 70%)`
                  }}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon & Arrow */}
                  <div className="flex items-start justify-between mb-6">
                    <div 
                      className="p-4 rounded-xl"
                      style={{ backgroundColor: `${color}10` }}
                    >
                      <Icon className="w-6 h-6" style={{ color }} />
                    </div>
                    <motion.div
                      className="w-10 h-10 rounded-full border border-[#2A2A2A] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ scale: 1.1, backgroundColor: color }}
                    >
                      <ArrowUpRight className="w-4 h-4 text-[#F5F5F5]" />
                    </motion.div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold text-[#F5F5F5] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[#666666] mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1.5 text-xs font-medium rounded-full bg-[#0A0A0A] text-[#888888] border border-[#1A1A1A]"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Quote Section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="inline-block bg-[#111111] rounded-2xl p-8 md:p-12 border border-[#1A1A1A] max-w-3xl">
            <p className="text-xl md:text-2xl text-[#F5F5F5] italic leading-relaxed font-light">
              &ldquo;People don&apos;t buy because they understand, they buy because they feel understood.&rdquo;
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="w-8 h-[1px] bg-[#D4AF37]" />
              <p className="text-[#D4AF37] font-medium text-sm tracking-wide">
                The Art of Copywriting
              </p>
              <div className="w-8 h-[1px] bg-[#D4AF37]" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

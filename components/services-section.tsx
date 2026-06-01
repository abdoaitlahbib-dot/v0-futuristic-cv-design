"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data";
import Image from "next/image";

const colorMap: Record<string, string> = {
  branding: "#D4AF37",
  logo: "#8B5CF6",
  website: "#22D3EE",
  uiux: "#F59E0B",
  pod: "#EC4899",
  digital: "#10B981",
  automation: "#06B6D4",
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export function ServicesSection() {
  const mainServices = services.filter(s => !["digital", "automation"].includes(s.category));
  const digitalServices = services.filter(s => ["digital", "automation"].includes(s.category));

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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F5F5F5] mb-6 tracking-tight text-balance">
            Engineered to Deliver
            <span className="text-[#D4AF37]">.</span>
          </h2>
          <p className="text-[#666666] text-lg leading-relaxed">
            Clarity, Depth, and Control. A unique blend of traditional craftsmanship 
            and modern digital expertise.
          </p>
        </motion.div>

        {/* Services Grid - Main Services */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {mainServices.map((service) => {
            const color = colorMap[service.category];
            
            return (
              <motion.div
                key={service.id}
                className="group relative bg-[#111111] rounded-2xl border border-[#1A1A1A] hover:border-[#2A2A2A] transition-all duration-500 overflow-hidden cursor-pointer"
                variants={item}
                whileHover={{ y: -8 }}
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/50 to-transparent" />
                  
                  {/* Category badge */}
                  <div 
                    className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-sm"
                    style={{ 
                      backgroundColor: `${color}20`,
                      color: color,
                      border: `1px solid ${color}40`
                    }}
                  >
                    {service.category.toUpperCase()}
                  </div>

                  {/* Arrow button */}
                  <motion.div
                    className="absolute top-4 right-4 w-10 h-10 rounded-full border border-[#ffffff20] backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                    whileHover={{ scale: 1.1, backgroundColor: color }}
                  >
                    <ArrowUpRight className="w-4 h-4 text-[#F5F5F5]" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#F5F5F5] mb-3 group-hover:text-[#D4AF37] transition-colors">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-[#666666] text-sm mb-5 leading-relaxed line-clamp-2">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <span 
                        key={idx}
                        className="px-2.5 py-1 text-[10px] font-medium rounded-full bg-[#0A0A0A] text-[#888888] border border-[#1A1A1A]"
                      >
                        {feature}
                      </span>
                    ))}
                    {service.features.length > 3 && (
                      <span className="px-2.5 py-1 text-[10px] font-medium rounded-full bg-[#0A0A0A] text-[#666666] border border-[#1A1A1A]">
                        +{service.features.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom accent line */}
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-[2px] origin-left"
                  style={{ backgroundColor: color }}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Digital Assets & Automations Section */}
        <motion.div 
          className="mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-[2px] bg-gradient-to-r from-[#10B981] to-[#06B6D4]" />
              <span className="text-xs font-medium tracking-widest uppercase text-[#10B981]">
                Expanded Offerings
              </span>
              <div className="w-12 h-[2px] bg-gradient-to-r from-[#06B6D4] to-[#10B981]" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-3 tracking-tight">
              Digital Assets & Automations
            </h3>
            <p className="text-[#666666] text-lg max-w-2xl">
              Streamline your workflow with smart solutions and ready-to-use digital products.
            </p>
          </div>

          {/* Digital Services Grid */}
          <motion.div 
            className="grid md:grid-cols-2 gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {digitalServices.map((service) => {
              const color = colorMap[service.category];
              
              return (
                <motion.div
                  key={service.id}
                  className="group relative bg-gradient-to-br from-[#111111] to-[#0D0D10] rounded-2xl border border-[#1A1A1A] hover:border-[#2A2A2A] transition-all duration-500 overflow-hidden cursor-pointer"
                  variants={item}
                  whileHover={{ y: -8 }}
                >
                  {/* Image Container */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/50 to-transparent" />
                    
                    {/* Category badge */}
                    <div 
                      className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-sm"
                      style={{ 
                        backgroundColor: `${color}20`,
                        color: color,
                        border: `1px solid ${color}40`
                      }}
                    >
                      {service.category.toUpperCase()}
                    </div>

                    {/* Arrow button */}
                    <motion.div
                      className="absolute top-4 right-4 w-10 h-10 rounded-full border border-[#ffffff20] backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                      whileHover={{ scale: 1.1, backgroundColor: color }}
                    >
                      <ArrowUpRight className="w-4 h-4 text-[#F5F5F5]" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Title */}
                    <h4 className="text-2xl font-bold text-[#F5F5F5] mb-3 group-hover:text-[#D4AF37] transition-colors">
                      {service.title}
                    </h4>
                    
                    {/* Description */}
                    <p className="text-[#666666] text-sm mb-5 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, idx) => (
                        <span 
                          key={idx}
                          className="px-2.5 py-1 text-[10px] font-medium rounded-full bg-[#0A0A0A] text-[#888888] border border-[#1A1A1A]"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-[2px] origin-left"
                    style={{ backgroundColor: color }}
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              );
            })}
          </motion.div>
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

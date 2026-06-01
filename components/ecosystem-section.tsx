"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

const platformCards = [
  {
    id: 1,
    label: "ETSY: INSTANT DIGITAL STAMPS",
    title: "Digital Asset Delivery",
    badge: "PREMIUM ADMINISTRATIVE STAMP",
    image: "/ecosystem/etsy-stamp.png",
    color: "#F56400",
    colorLight: "#F564001A",
  },
  {
    id: 2,
    label: "FIVERR: CUSTOM BRANDING SYSTEMS",
    title: "Luxury Branding Kit",
    badge: "LUXURY BRANDING KIT",
    image: "/ecosystem/fiverr-branding.png",
    color: "#1DBF73",
    colorLight: "#1DBF731A",
  },
  {
    id: 3,
    label: "PINTEREST: VISUAL SOLUTIONS",
    title: "Visual Concept Mood Board",
    badge: "VISUAL CONCEPT MOOD BOARD",
    image: "/ecosystem/pinterest-mood.png",
    color: "#E60023",
    colorLight: "#E600231A",
  },
  {
    id: 4,
    label: "BEHANCE: ARTISAN SHOWCASE",
    title: "Design System Case Study",
    badge: "VIEW THE CASE STUDY",
    image: "/ecosystem/behance-showcase.png",
    color: "#0A66FF",
    colorLight: "#0A66FF1A",
  },
];

const workflows = [
  {
    id: 1,
    title: "Etsy to PrintNode & Stripe Pipeline",
    description: "Instant digital asset delivery, transactional verification, and local cloud printing backup",
  },
  {
    id: 2,
    title: "Behance & Pinterest to Figma Generator",
    description: "Automated visual concept-to-asset pipeline",
  },
  {
    id: 3,
    title: "Fiverr to Supabase with Row-Level Security",
    description: "Automated user authentication, webhook sync, and absolute database control",
  },
  {
    id: 4,
    title: "Gmail Order to Physical Job Ticket",
    description: "Instant text/metadata extraction from emails to local shop printer",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function EcosystemSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0A0A0A]">
      {/* Background elements */}
      <motion.div 
        className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[200px] pointer-events-none"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-[2px] bg-gradient-to-r from-[#D4AF37] to-[#D4AF37]/50" />
            <span className="text-xs font-medium tracking-widest uppercase text-[#D4AF37]">
              Platform Integration
            </span>
            <div className="w-12 h-[2px] bg-gradient-to-r from-[#D4AF37]/50 to-[#D4AF37]" />
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#F5F5F5] mb-6 tracking-tight">
            Your Digital Ecosystem
          </h2>
          <p className="text-[#666666] text-lg max-w-3xl mx-auto">
            Connect your creative workflow across multiple platforms with luxury-grade integration and automation.
          </p>
        </motion.div>

        {/* Platform Cards Grid - 4 Columns */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {platformCards.map((card) => (
            <motion.div
              key={card.id}
              variants={item}
              whileHover={{ y: -8 }}
              className="group relative bg-black/40 backdrop-blur-md border border-neutral-800 rounded-2xl overflow-hidden"
            >
              {/* Border glow */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ 
                  background: `linear-gradient(135deg, ${card.color}20, transparent)`,
                  borderRadius: "1rem",
                }}
              />

              {/* Image container */}
              <div className="relative h-56 overflow-hidden bg-neutral-900">
                <Image
                  src={card.image}
                  alt={card.label}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 relative z-10">
                <p 
                  className="text-xs font-semibold tracking-wider uppercase mb-2"
                  style={{ color: card.color }}
                >
                  {card.label}
                </p>
                <h3 className="text-xl font-bold text-[#F5F5F5] mb-4">
                  {card.title}
                </h3>
                <div 
                  className="inline-block px-3 py-1.5 rounded-full text-xs font-medium"
                  style={{ 
                    backgroundColor: card.colorLight,
                    color: card.color,
                    border: `1px solid ${card.color}40`,
                  }}
                >
                  {card.badge}
                </div>
              </div>

              {/* Hover line */}
              <motion.div 
                className="absolute bottom-0 left-0 right-0 h-[2px] origin-left"
                style={{ backgroundColor: card.color }}
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Workflows Section */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Header */}
          <div className="mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-4 tracking-tight flex items-center gap-3">
              <Zap className="w-8 h-8 text-[#D4AF37]" />
              Automate Your Creative Workflow
            </h3>
            <p className="text-[#D4AF37] text-lg font-medium">
              Custom n8n & Make System Architecture
            </p>
          </div>

          {/* Workflows Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left - Workflows List */}
            <motion.div
              className="space-y-4"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {workflows.map((workflow, index) => (
                <motion.div
                  key={workflow.id}
                  variants={item}
                  className="group p-6 bg-black/40 backdrop-blur-md border border-neutral-800 rounded-xl hover:border-[#D4AF37]/50 transition-all duration-300 relative overflow-hidden"
                >
                  {/* Background accent */}
                  <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="w-8 h-8 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] font-bold text-sm flex-shrink-0">
                        {index + 1}
                      </div>
                      <h4 className="text-lg font-semibold text-[#F5F5F5] pt-1">
                        {workflow.title}
                      </h4>
                    </div>
                    <p className="text-[#666666] text-sm ml-12 leading-relaxed">
                      {workflow.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Right - CTA Module */}
            <motion.div
              className="flex flex-col justify-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="bg-black/40 backdrop-blur-md border border-neutral-800 rounded-2xl p-8 md:p-12 relative overflow-hidden">
                {/* Decorative gradient */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl -z-10" />

                <div className="relative z-10">
                  <h4 className="text-2xl md:text-3xl font-bold text-[#F5F5F5] mb-4">
                    Ready to Build Your System?
                  </h4>
                  <p className="text-[#666666] mb-8 leading-relaxed">
                    Let's architect a custom automation system tailored to your creative workflow. 
                    From concept to execution—fully integrated.
                  </p>

                  {/* Node connection lines - decorative */}
                  <svg className="absolute top-8 left-0 w-full h-full opacity-20 pointer-events-none" style={{ maxHeight: "300px" }}>
                    <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#D4AF37" strokeWidth="1" strokeDasharray="5,5" />
                    <circle cx="50%" cy="10" r="3" fill="#D4AF37" />
                    <circle cx="50%" cy="100" r="3" fill="#D4AF37" />
                  </svg>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative w-full py-4 px-6 bg-gradient-to-r from-[#D4AF37] to-[#B8962F] hover:from-[#E6C451] hover:to-[#D4AF37] text-[#0A0A0A] font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group border-2 border-[#D4AF37]"
                  >
                    Book an Architecture Session
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>

                  <p className="text-xs text-[#666666] text-center mt-4">
                    Custom workflows start at $500 • Enterprise solutions available
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

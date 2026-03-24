"use client";

import { motion } from "framer-motion";
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

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0A0A0A]" />
      <motion.div 
        className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[200px] -translate-y-1/2 -translate-x-1/2"
        animate={{ x: [0, 50, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <span className="inline-block px-4 py-2 rounded-full border border-[#2A2A2A] bg-[#111111]/50 text-[#888888] text-xs font-medium tracking-widest uppercase mb-6">
                About Me
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-6 leading-tight tracking-tight">
                Digital Artisan &
                <span className="text-[#D4AF37]"> Vibe Coder</span>
              </h2>
              <p className="text-[#666666] text-lg leading-relaxed">
                With 15+ years of industrial design heritage, I bridge the gap between 
                traditional craftsmanship and cutting-edge digital architecture. My journey 
                from intricate jewelry engraving to full-stack development has given me a 
                unique perspective on creating meaningful digital experiences.
              </p>
            </div>

            {/* Transition Cards */}
            <motion.div 
              className="space-y-3"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {transitions.map((trans, index) => (
                <motion.div
                  key={index}
                  className="group flex items-center gap-4 p-4 bg-[#111111] border border-[#1A1A1A] rounded-xl hover:border-[#2A2A2A] transition-all duration-300 cursor-pointer"
                  variants={item}
                  whileHover={{ x: 10 }}
                >
                  <div 
                    className="p-3 rounded-lg shrink-0 transition-colors duration-300"
                    style={{ backgroundColor: `${trans.color}10` }}
                  >
                    <trans.icon className="w-5 h-5" style={{ color: trans.color }} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-[#F5F5F5]">{trans.title}</h4>
                    <p className="text-sm text-[#666666]">{trans.description}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#2A2A2A] group-hover:text-[#F5F5F5] transition-colors" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Visual */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Outer glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/10 via-[#8B5CF6]/10 to-[#22D3EE]/10 rounded-3xl blur-3xl opacity-50" />
            
            {/* Main card */}
            <div className="relative bg-[#111111] rounded-3xl p-8 border border-[#1A1A1A]">
              {/* Heritage badge */}
              <motion.div 
                className="absolute -top-4 left-8 px-4 py-2 bg-[#0A0A0A] border border-[#D4AF37]/30 rounded-full"
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <span className="text-sm text-[#D4AF37] font-mono">Est. 2009</span>
              </motion.div>
              
              <div className="grid grid-cols-2 gap-4 mt-4">
                {/* Card 1 */}
                <motion.div 
                  className="aspect-square bg-[#0A0A0A] rounded-2xl p-5 border border-[#1A1A1A] flex flex-col justify-between"
                  whileHover={{ scale: 1.02, borderColor: "#D4AF37" }}
                  transition={{ duration: 0.2 }}
                >
                  <Gem className="w-8 h-8 text-[#D4AF37]" />
                  <div>
                    <div className="text-3xl font-bold text-[#F5F5F5]">15+</div>
                    <div className="text-xs text-[#666666]">Years of Craft</div>
                  </div>
                </motion.div>
                
                {/* Card 2 */}
                <motion.div 
                  className="aspect-square bg-gradient-to-br from-[#D4AF37]/5 to-[#8B5CF6]/5 rounded-2xl p-5 border border-[#D4AF37]/10 flex flex-col justify-between"
                  whileHover={{ scale: 1.02, borderColor: "#8B5CF6" }}
                  transition={{ duration: 0.2 }}
                >
                  <Code2 className="w-8 h-8 text-[#8B5CF6]" />
                  <div>
                    <div className="text-3xl font-bold text-[#F5F5F5]">Full</div>
                    <div className="text-xs text-[#666666]">Stack Dev</div>
                  </div>
                </motion.div>
                
                {/* Card 3 */}
                <motion.div 
                  className="aspect-square bg-gradient-to-br from-[#8B5CF6]/5 to-[#22D3EE]/5 rounded-2xl p-5 border border-[#8B5CF6]/10 flex flex-col justify-between"
                  whileHover={{ scale: 1.02, borderColor: "#22D3EE" }}
                  transition={{ duration: 0.2 }}
                >
                  <Rocket className="w-8 h-8 text-[#22D3EE]" />
                  <div>
                    <div className="text-3xl font-bold text-[#F5F5F5]">SEO</div>
                    <div className="text-xs text-[#666666]">Expert</div>
                  </div>
                </motion.div>
                
                {/* Card 4 */}
                <motion.div 
                  className="aspect-square bg-[#0A0A0A] rounded-2xl p-5 border border-[#1A1A1A] flex items-center justify-center"
                  whileHover={{ scale: 1.02, borderColor: "#F59E0B" }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-center">
                    <motion.div 
                      className="text-4xl font-bold bg-gradient-to-r from-[#D4AF37] via-[#8B5CF6] to-[#22D3EE] bg-clip-text text-transparent"
                      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      style={{ backgroundSize: "200% 200%" }}
                    >
                      AI
                    </motion.div>
                    <div className="text-xs text-[#666666] mt-1">Orchestration</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

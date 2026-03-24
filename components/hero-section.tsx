"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Sparkles, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/data";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function HeroSection() {
  const featuredServices = services.filter(s => s.featured).slice(0, 2);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0A0A0A]" />
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#0A0A0A] to-[#0D0D14]" />
      
      {/* Animated gradient orbs */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#D4AF37]/8 rounded-full blur-[150px]"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[#8B5CF6]/5 rounded-full blur-[120px]"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(#F5F5F5 1px, transparent 1px), linear-gradient(90deg, #F5F5F5 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Content - Main Hero */}
          <motion.div 
            className="lg:col-span-7 space-y-8"
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#2A2A2A] bg-[#111111]/50 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-xs text-[#888888] font-medium tracking-widest uppercase">
                  15+ Years of Craftsmanship
                </span>
              </span>
            </motion.div>
            
            {/* Main Headline */}
            <motion.h1 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter"
              variants={fadeInUp}
            >
              <span className="text-[#F5F5F5] block">THE</span>
              <span className="text-[#F5F5F5] block">FUTURE OF</span>
              <span className="text-[#D4AF37] block">DESIGN</span>
            </motion.h1>
            
            {/* Subtext */}
            <motion.p 
              className="text-base md:text-lg text-[#666666] max-w-md leading-relaxed"
              variants={fadeInUp}
            >
              Digital Artisan & Full-Stack Vibe Coder. Bridging traditional 
              craftsmanship with cutting-edge digital architecture.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-wrap gap-4"
              variants={fadeInUp}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  className="group bg-[#F5F5F5] hover:bg-[#E5E5E5] text-[#0A0A0A] px-6 py-6 text-base font-semibold rounded-full transition-all duration-300"
                  asChild
                >
                  <a href="#services">
                    Explore Collection
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  variant="outline" 
                  className="border-[#2A2A2A] hover:border-[#3A3A3A] hover:bg-[#111111] text-[#F5F5F5] px-6 py-6 text-base rounded-full transition-all duration-300"
                  asChild
                >
                  <a href="#about">Discover</a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content - Featured Card + Controls */}
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Profile/Hero Image Area */}
            <div className="relative aspect-[4/5] max-w-md mx-auto">
              {/* Decorative ring */}
              <motion.div 
                className="absolute -right-4 top-1/4 w-24 h-24 border border-[#2A2A2A] rounded-full flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <motion.div
                  className="absolute w-3 h-3 bg-[#D4AF37] rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
              </motion.div>

              {/* Arrow button */}
              <motion.button 
                className="absolute -right-2 top-1/4 translate-y-8 w-12 h-12 bg-[#F5F5F5] rounded-full flex items-center justify-center z-10 shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowUpRight className="w-5 h-5 text-[#0A0A0A]" />
              </motion.button>

              {/* Main visual card */}
              <div className="relative h-full bg-gradient-to-br from-[#1A1A1A] to-[#111111] rounded-3xl overflow-hidden border border-[#2A2A2A]">
                {/* Inner content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent z-10" />
                    
                    {/* Abstract visual representation */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div 
                        className="relative"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <div className="w-40 h-40 rounded-full bg-gradient-to-br from-[#D4AF37]/30 to-[#8B5CF6]/30 blur-2xl absolute -inset-10" />
                        <div className="w-40 h-40 rounded-full border border-[#D4AF37]/40 flex items-center justify-center backdrop-blur-sm">
                          <span className="text-5xl font-bold bg-gradient-to-br from-[#D4AF37] to-[#F5D78B] bg-clip-text text-transparent">
                            AA
                          </span>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Bottom info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <div className="text-[#F5F5F5] font-semibold text-lg">Abdellah Ait Lahbib</div>
                  <div className="text-[#888888] text-sm">Digital Artisan & Vibe Coder</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Feature Cards */}
        <motion.div 
          className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {/* Service Preview Card */}
          <motion.div 
            className="bg-[#111111] border border-[#2A2A2A] rounded-2xl p-5 hover:border-[#3A3A3A] transition-all group cursor-pointer"
            whileHover={{ y: -5 }}
          >
            <div className="flex gap-4">
              <div className="w-20 h-20 bg-[#1A1A1A] rounded-xl flex items-center justify-center shrink-0">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#D4AF37]/20 to-[#8B5CF6]/20 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-[#D4AF37]" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[#F5F5F5] font-semibold text-sm mb-1">ENGINEERED TO</h3>
                <p className="text-[#F5F5F5] font-bold">DELIVER CLARITY,</p>
                <p className="text-[#F5F5F5] font-bold">DEPTH, AND</p>
                <p className="text-[#F5F5F5] font-bold">CONTROL.</p>
              </div>
            </div>
            <motion.a 
              href="#services"
              className="mt-4 inline-flex items-center gap-1 text-sm text-[#888888] hover:text-[#F5F5F5] transition-colors"
              whileHover={{ x: 5 }}
            >
              Discover
              <ChevronRight className="w-4 h-4" />
            </motion.a>
          </motion.div>

          {/* Stats Card */}
          <motion.div 
            className="bg-[#111111] border border-[#2A2A2A] rounded-2xl p-5 hover:border-[#3A3A3A] transition-all hidden sm:block"
            whileHover={{ y: -5 }}
          >
            <div className="grid grid-cols-2 gap-4 h-full">
              <div className="flex flex-col justify-center">
                <span className="text-3xl font-bold text-[#D4AF37]">15+</span>
                <span className="text-xs text-[#888888]">Years Craft</span>
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-3xl font-bold text-[#F5F5F5]">Full</span>
                <span className="text-xs text-[#888888]">Stack Dev</span>
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-3xl font-bold text-[#8B5CF6]">SEO</span>
                <span className="text-xs text-[#888888]">Expert</span>
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-3xl font-bold text-[#22D3EE]">AI</span>
                <span className="text-xs text-[#888888]">Master</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links Card */}
          <motion.div 
            className="bg-gradient-to-br from-[#D4AF37]/10 to-[#8B5CF6]/10 border border-[#D4AF37]/20 rounded-2xl p-5 hover:border-[#D4AF37]/40 transition-all hidden lg:flex flex-col justify-between"
            whileHover={{ y: -5 }}
          >
            <div>
              <h3 className="text-[#D4AF37] font-semibold text-sm mb-2">READY TO START?</h3>
              <p className="text-[#888888] text-sm">Let&apos;s create something extraordinary together.</p>
            </div>
            <motion.a 
              href="#contact"
              className="mt-4 inline-flex items-center gap-2 text-sm text-[#D4AF37] font-medium"
              whileHover={{ x: 5 }}
            >
              Get in touch
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

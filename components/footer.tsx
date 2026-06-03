"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, ExternalLink, Mail, ArrowUp } from "lucide-react";
import { navLinks } from "@/lib/data";

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: ExternalLink, href: "https://fiverr.com", label: "Fiverr" },
  { icon: Mail, href: "mailto:contact@aityzin.com", label: "Email" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0A0A0A] border-t border-[#1A1A1A] relative">
      {/* Background gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#D4AF37]/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-12 gap-12 mb-12">
          {/* Logo and tagline */}
          <motion.div 
            className="md:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a href="#" className="flex items-center gap-2 mb-4">
              <Image 
                src="/logo.png" 
                alt="AityZin Logo"
                width={48}
                height={48}
                className="w-12 h-12"
                priority
              />
            </a>
            <p className="text-[#666666] mb-6 max-w-xs">
              Digital Artisan & Full-Stack Vibe Coder. Bridging traditional craftsmanship with cutting-edge digital solutions.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-3 bg-[#111111] border border-[#1A1A1A] rounded-xl text-[#666666] hover:text-[#D4AF37] hover:border-[#D4AF37]/30 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div 
            className="md:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-[#F5F5F5] font-semibold mb-4">Navigation</h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-[#666666] hover:text-[#F5F5F5] transition-colors text-sm"
                  whileHover={{ x: 5 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* Services */}
          <motion.div 
            className="md:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-[#F5F5F5] font-semibold mb-4">Services</h4>
            <nav className="flex flex-col gap-3">
              {["Creative Design", "Web Development", "SEO & Growth", "AI Orchestration"].map((service) => (
                <motion.a
                  key={service}
                  href="#services"
                  className="text-[#666666] hover:text-[#F5F5F5] transition-colors text-sm"
                  whileHover={{ x: 5 }}
                >
                  {service}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* Back to Top */}
          <motion.div 
            className="md:col-span-2 flex md:justify-end"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.button
              onClick={scrollToTop}
              className="w-12 h-12 bg-[#111111] border border-[#1A1A1A] rounded-full flex items-center justify-center text-[#666666] hover:text-[#D4AF37] hover:border-[#D4AF37]/30 transition-all self-start"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div 
          className="pt-8 border-t border-[#1A1A1A]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#666666]">
              &copy; {new Date().getFullYear()} Abdellah Ait Lahbib. All rights reserved.
            </p>
            <p className="text-sm text-[#666666]">
              Crafted with{" "}
              <span className="text-[#D4AF37]">precision</span> & {" "}
              <span className="text-[#8B5CF6]">passion</span>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

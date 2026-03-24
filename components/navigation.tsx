"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/data";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-4 md:mx-8 mt-4">
        <motion.nav 
          className={`backdrop-blur-xl border rounded-full px-4 md:px-8 py-3 transition-all duration-300 ${
            scrolled 
              ? "bg-[#0A0A0A]/95 border-[#2A2A2A]" 
              : "bg-[#111111]/60 border-[#1A1A1A]"
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a 
              href="#" 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative">
                <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                <div className="absolute inset-0 w-5 h-5 bg-[#D4AF37] blur-md opacity-50" />
              </div>
              <span className="text-xl font-bold text-[#F5F5F5]">
                Aity<span className="text-[#D4AF37]">Zin</span>
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="relative px-4 py-2 text-sm text-[#888888] hover:text-[#F5F5F5] transition-colors duration-300"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  className="bg-[#D4AF37] hover:bg-[#B8962F] text-[#0A0A0A] rounded-full px-6 font-semibold shadow-lg shadow-[#D4AF37]/20"
                  asChild
                >
                  <a href="#contact">Contact</a>
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden text-[#F5F5F5] p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div 
                className="md:hidden mt-4 pt-4 border-t border-[#2A2A2A]"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col gap-2">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      className="text-[#888888] hover:text-[#F5F5F5] transition-colors px-4 py-3 rounded-lg hover:bg-[#1A1A1A]"
                      onClick={() => setIsOpen(false)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {link.name}
                    </motion.a>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Button 
                      className="bg-[#D4AF37] hover:bg-[#B8962F] text-[#0A0A0A] rounded-full font-semibold mt-2 w-full"
                      asChild
                    >
                      <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </div>
    </motion.header>
  );
}

"use client";

import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Services", href: "#services" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-4 mt-4">
        <nav className="bg-[#111111]/80 backdrop-blur-xl border border-[#2A2A2A] rounded-full px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#D4AF37]" />
              <span className="text-xl font-bold text-[#F5F5F5]">
                Aity<span className="text-[#D4AF37]">Zin</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-[#888888] hover:text-[#F5F5F5] transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <Button 
                className="bg-[#D4AF37] hover:bg-[#B8962F] text-[#0A0A0A] rounded-full px-6 font-semibold"
              >
                Contact
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-[#F5F5F5]"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-[#2A2A2A]">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-[#888888] hover:text-[#F5F5F5] transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <Button 
                  className="bg-[#D4AF37] hover:bg-[#B8962F] text-[#0A0A0A] rounded-full font-semibold mt-2"
                >
                  Contact
                </Button>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}

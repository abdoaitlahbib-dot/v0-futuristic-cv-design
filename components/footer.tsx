"use client";

import { Sparkles, Github, Linkedin, Twitter, Mail } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "mailto:hello@aityzin.com", label: "Email" },
];

const footerLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Services", href: "#services" },
];

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#2A2A2A]">
      <div className="container mx-auto px-6 lg:px-12 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo and tagline */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-[#D4AF37]" />
              <span className="text-xl font-bold text-[#F5F5F5]">
                Aity<span className="text-[#D4AF37]">Zin</span>
              </span>
            </a>
            <p className="text-sm text-[#888888]">
              Digital Artisan & Full-Stack Vibe Coder
            </p>
          </div>

          {/* Navigation */}
          <div className="flex justify-center">
            <nav className="flex flex-wrap gap-6">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-[#888888] hover:text-[#F5F5F5] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="flex justify-end gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="p-2 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg text-[#888888] hover:text-[#D4AF37] hover:border-[#D4AF37]/30 transition-all duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[#2A2A2A]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#888888]">
              &copy; {new Date().getFullYear()} Abdellah Ait Lahbib. All rights reserved.
            </p>
            <p className="text-sm text-[#888888]">
              Crafted with{" "}
              <span className="text-[#D4AF37]">precision</span> & {" "}
              <span className="text-[#8B5CF6]">passion</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

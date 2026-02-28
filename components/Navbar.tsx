"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Make sure to install lucide-react: npm install lucide-react

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Studios", href: "/studios" },
  { name: "Advisory", href: "/advisory" },
  { name: "Ventures", href: "/ventures" },
  { name: "Insights", href: "/insights" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect for background transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Global Navigation Bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
          isScrolled ? "bg-[#0A0A0F]/90 backdrop-blur-md border-b border-[#E8E8F0]/10" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Wordmark Left */}
          <Link 
            href="/" 
            className="text-xl font-bold tracking-tight text-[#E8E8F0] z-50 relative"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            10QBIT
          </Link>

          {/* Desktop Links Centre */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#8888A0] hover:text-[#E8E8F0] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Right */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="px-5 py-2.5 text-sm font-medium border border-[#8888A0]/30 hover:border-[#6C5CE7] hover:text-[#6C5CE7] transition-all rounded-sm text-[#E8E8F0]"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-50 relative text-[#E8E8F0] p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay Menu */}
      <div
        className={`fixed inset-0 z-30 bg-[#0A0A0F] transform transition-transform duration-500 ease-in-out md:hidden flex flex-col items-center justify-center space-y-8 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-center space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-2xl font-medium text-[#E8E8F0] hover:text-[#6C5CE7] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
        {/* Mobile Floating CTA */}
        <div className="pt-8">
          <Link
            href="/contact"
            className="px-8 py-3 bg-[#6C5CE7] text-white font-medium rounded-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </>
  );
}
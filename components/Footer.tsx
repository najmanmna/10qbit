"use client";

import Link from "next/link";
import { ArrowRight, Twitter, Linkedin } from "lucide-react";


const navLinks = [
  { name: "About", href: "/about" },
  { name: "Studios", href: "/studios" },
  { name: "Advisory", href: "/advisory" },
  { name: "Ventures", href: "/ventures" },
  { name: "Insights", href: "/insights" },
];

export default function Footer() {
  return (
    <footer className="bg-[#050508] border-t border-[#E8E8F0]/10 pt-20 pb-10 px-6 font-sans text-[#8888A0]">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section: Brand & Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          
          {/* Brand Identity */}
          <div>
            <Link href="/" className="text-2xl font-bold tracking-tight text-[#E8E8F0] mb-4 inline-block">
              10QBIT
            </Link>
            <p className="max-w-sm mb-6">
              Building the ventures that legacy institutions can't, and advising the ones that need to adapt.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="LinkedIn" className="hover:text-[#6C5CE7] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" aria-label="X/Twitter" className="hover:text-[#00CEC9] transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Newsletter Signup: "The 10QBIT Signal" */}
          <div className="md:justify-self-end w-full max-w-md">
            <h3 className="text-[#E8E8F0] font-medium mb-2 font-mono uppercase tracking-wider text-sm">The 10QBIT Signal</h3>
            <p className="text-sm mb-4">
              A monthly briefing on the technologies, companies, and ideas shaping the deep-tech frontier. No noise. Just signal.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-[#0A0A0F] border border-[#8888A0]/30 rounded-sm px-4 py-3 text-[#E8E8F0] placeholder:text-[#8888A0]/50 focus:outline-none focus:border-[#6C5CE7] transition-colors"
                required
              />
              <button 
                type="submit" 
                className="bg-[#E8E8F0] text-[#0A0A0F] px-6 py-3 rounded-sm font-medium hover:bg-white transition-colors flex items-center justify-center whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section: Links & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-[#8888A0]/10 pt-8 text-sm">
          
          {/* Navigation Links (Mirror Main Nav) */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-6 md:mb-0">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-[#E8E8F0] transition-colors">
                {link.name}
              </Link>
            ))}
          </div>

          {/* Legal & Copyright */}
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[#E8E8F0] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#E8E8F0] transition-colors">Terms</Link>
            <span className="text-[#8888A0]/50 hidden md:inline">|</span>
            <span>© 2026 10QBIT. All rights reserved.</span>
          </div>

        </div>
      </div>
    </footer>
  );
}
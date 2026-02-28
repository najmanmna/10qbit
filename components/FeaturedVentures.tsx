"use client";

import Link from "next/link";
import { ArrowRight, ShieldAlert, Cpu, Leaf } from "lucide-react";

// Venture data from the content bible
const ventures = [
  {
    name: "Axion AI",
    mission: "Autonomous cybersecurity platform using adversarial AI.",
    stage: "Seed stage",
    sectors: ["AI", "Cybersecurity"],
    icon: ShieldAlert,
    accent: "#6C5CE7", // Primary Accent
    slug: "axion-ai"
  },
  {
    name: "QubitShield",
    mission: "Post-quantum cryptography for financial infrastructure.",
    stage: "Pre-seed",
    sectors: ["Quantum", "FinTech"],
    icon: Cpu,
    accent: "#00CEC9", // Secondary Accent
    slug: "qubitshield"
  },
  {
    name: "SynthBio",
    mission: "AI-designed synthetic biology for sustainable materials.",
    stage: "Concept",
    sectors: ["Biotech", "Materials"],
    icon: Leaf,
    accent: "#E8E8F0", // Text Main
    slug: "synthbio"
  }
];

export default function FeaturedVentures() {
  return (
    <section className="py-32 pl-6 pr-6 md:pr-0 border-t border-[#E8E8F0]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 pr-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Ventures</h2>
          <p className="text-[#8888A0] max-w-2xl text-lg">
            A selection of companies built from the lab, engineered for scale.
          </p>
        </div>
        <Link 
          href="/ventures" 
          className="inline-flex items-center text-[#E8E8F0] font-medium hover:text-[#6C5CE7] transition-colors font-mono uppercase tracking-wider text-sm whitespace-nowrap"
        >
          View All Ventures <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>

      {/* Horizontal Scroll Container 
        Uses native CSS scroll snapping for zero-JS performance
      */}
      <div className="max-w-7xl mx-auto">
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 pr-6 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          
          {ventures.map((venture) => (
            <Link 
              href={`/ventures/${venture.slug}`} 
              key={venture.name}
              className="group relative flex-none w-[85vw] md:w-[400px] snap-start bg-[#0A0A0F] border border-[#8888A0]/20 p-8 flex flex-col justify-between min-h-[320px] transition-all duration-300 hover:-translate-y-2 hover:border-[#E8E8F0]/50 hover:shadow-2xl hover:shadow-black"
            >
              {/* Top: Icon & Stage */}
              <div className="flex justify-between items-start mb-8">
                <div className="w-12 h-12 rounded-sm bg-[#050508] border border-[#8888A0]/20 flex items-center justify-center text-[#E8E8F0] group-hover:border-current transition-colors" style={{ color: venture.accent }}>
                  <venture.icon strokeWidth={1.5} size={24} />
                </div>
                <span className="text-xs font-mono px-3 py-1 bg-[#8888A0]/10 text-[#8888A0] rounded-sm uppercase tracking-wider">
                  {venture.stage}
                </span>
              </div>

              {/* Middle: Title & Sectors */}
              <div>
                <h3 className="text-2xl font-bold mb-3 text-[#E8E8F0]">{venture.name}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {venture.sectors.map(sector => (
                    <span key={sector} className="text-xs font-mono text-[#8888A0]">
                      [{sector}]
                    </span>
                  ))}
                </div>
                <p className="text-[#8888A0] leading-relaxed mb-8">
                  {venture.mission}
                </p>
              </div>

              {/* Bottom: Hover CTA */}
              <div className="mt-auto flex items-center text-sm font-medium text-[#8888A0] group-hover:text-[#E8E8F0] transition-colors">
                Learn more <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}

          {/* Spacer to allow the last card to scroll fully into view */}
          <div className="flex-none w-6 md:w-[30vw]"></div>
        </div>
      </div>
    </section>
  );
}
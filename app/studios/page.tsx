"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  BrainCircuit, Cpu, Leaf, Rocket, Zap, ShieldCheck, 
  ArrowRight, Beaker, Layers, Users, TrendingUp, Binary
} from "lucide-react";
import ScrambleText from "@/components/ScrambleText";
import QuantumMesh from "@/components/QuantumMesh";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function StudiosPage() {
  const sectors = [
    { name: "Artificial Intelligence", desc: "Autonomous systems and edge-neural architectures.", icon: BrainCircuit, color: "#6C5CE7" },
    { name: "Quantum Computing", desc: "Post-quantum cryptography and hardware simulation.", icon: Cpu, color: "#00CEC9" },
    { name: "Synthetic Biology", desc: "AI-designed proteins and computational drug discovery.", icon: Leaf, color: "#E8E8F0" },
    { name: "Space & Defence", desc: "Dual-use satellite intelligence and autonomous systems.", icon: Rocket, color: "#8888A0" },
    { name: "Energy & Climate", desc: "Fusion energy and next-gen carbon capture tech.", icon: Zap, color: "#E8E8F0" },
    { name: "Cybersecurity", desc: "Zero-trust architecture and AI-driven threat intelligence.", icon: ShieldCheck, color: "#6C5CE7" }
  ];

  const lifecycle = [
    { step: "01", title: "Discover", icon: Beaker, desc: "Advisory engagements and frontier research surface unmet industrial needs.", color: "#6C5CE7" },
    { step: "02", title: "Develop IP", icon: Layers, desc: "We invest in proprietary research and patent development before a company even exists.", color: "#00CEC9" },
    { step: "03", title: "Assemble", icon: Users, desc: "We recruit domain-expert founders and pair them with 10QBIT’s operational task force.", color: "#E8E8F0" },
    { step: "04", title: "Scale", icon: TrendingUp, desc: "Hands-on engineering, capital, and institutional access through Series A+.", color: "#6C5CE7" }
  ];

  return (
    <div className="flex flex-col min-h-screen text-[#E8E8F0] relative">
      
      {/* Background Layer */}
      <QuantumMesh />

      {/* 01. HERO SECTION */}
      <section className="relative min-h-[80vh] flex items-center px-6 z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <div className="flex items-center space-x-3 mb-6">
              <Binary className="text-[#6C5CE7] w-5 h-5 animate-pulse" />
              <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#6C5CE7]">Venture Creation Engine</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-[0.9] font-mono">
              We don’t find startups. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C5CE7] via-[#8888A0] to-[#00CEC9]">
                <ScrambleText text="We engineer them." />
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-[#8888A0] max-w-3xl leading-relaxed font-mono">
              10QBIT Studios identifies white space in frontier markets to build companies from zero to scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 02. THE STUDIO LIFECYCLE (Vertical Data-Stream Upgrade) */}
      <section className="py-32 px-6 border-y border-[#E8E8F0]/10 bg-[#0A0A0F]/80 backdrop-blur-md z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <h2 className="text-3xl font-mono uppercase tracking-tighter italic border-l-4 border-[#6C5CE7] pl-6">
              The Studio Lifecycle // <span className="text-[#8888A0]">Proprietary Methodology</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            {/* Connecting decorative line */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-[#6C5CE7] via-[#00CEC9] to-[#6C5CE7] opacity-20" />
            
            {lifecycle.map((item, i) => (
              <motion.div 
                key={i} 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                className="relative group"
              >
                <div 
                  className="w-12 h-12 rounded-sm bg-[#0A0A0F] border border-[#8888A0]/20 flex items-center justify-center mb-8 relative z-10 group-hover:border-[var(--step-color)] transition-all duration-500"
                  style={{ '--step-color': item.color } as React.CSSProperties}
                >
                  <item.icon size={20} style={{ color: item.color }} />
                  <div className="absolute -top-10 left-0 text-[40px] font-mono font-bold opacity-5 text-[#8888A0]">{item.step}</div>
                </div>
                <h4 className="text-2xl font-bold mb-4 font-mono uppercase tracking-tighter">{item.title}</h4>
                <p className="text-[#8888A0] text-sm leading-relaxed font-mono">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 03. SECTORS WE BUILD IN (Glassmorphic Bento Grid) */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-mono tracking-tighter uppercase">Frontier Sectors</h2>
            <div className="h-[1px] w-24 bg-[#6C5CE7] mx-auto mb-6" />
            <p className="text-[#8888A0] max-w-2xl mx-auto font-mono text-sm uppercase tracking-widest leading-loose">
              Focusing exclusively on technologies capable of restructuring global industries.
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#8888A0]/10 border border-[#8888A0]/20"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          >
            {sectors.map((sector, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                className="p-12 bg-[#0A0A0F]/40 backdrop-blur-xl group hover:bg-[#6C5CE7]/10 transition-all cursor-none"
              >
                <sector.icon className="w-10 h-10 mb-8 transition-transform group-hover:scale-110 group-hover:rotate-6" style={{ color: sector.color }} />
                <h3 className="text-xl font-bold mb-4 font-mono uppercase tracking-tighter text-[#E8E8F0]">{sector.name}</h3>
                <p className="text-[#8888A0] text-xs leading-relaxed font-mono uppercase tracking-wider">{sector.desc}</p>
                <div className="mt-8 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight size={16} style={{ color: sector.color }} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 04. STUDIO CTA (High-Intensity Finale) */}
      <section className="py-40 px-6 bg-[#050508]/80 backdrop-blur-xl border-t border-[#E8E8F0]/10 text-center relative z-10 overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#6C5CE7]/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto relative z-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-[1.1] tracking-tighter font-mono uppercase">
            Have a breakthrough <br /> that needs <span className="text-[#6C5CE7]">building?</span>
          </h2>
          <p className="text-[#8888A0] text-lg mb-12 max-w-2xl mx-auto font-mono">
            We are looking for technologists, researchers, and operators to co-create the next generation of deep-tech companies.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/contact" className="px-10 py-5 bg-[#6C5CE7] hover:bg-[#5b4dd1] text-white font-mono text-xs uppercase tracking-widest transition-all hover:scale-105 active:scale-95">
              Submit Venture Concept
            </Link>
            <Link href="/contact" className="px-10 py-5 border border-[#8888A0]/30 hover:border-[#E8E8F0] text-[#E8E8F0] font-mono text-xs uppercase tracking-widest transition-all backdrop-blur-sm">
              Join as Co-Founder
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
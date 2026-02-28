"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Shield, Hammer, Telescope, ArrowRight, Binary, 
  Fingerprint, Microscope, Zap, Globe, Cpu 
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
    transition: { staggerChildren: 0.1 }
  }
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen text-[#E8E8F0] relative overflow-hidden">
      
      {/* Background Layer */}
      <QuantumMesh />
      <div className="fixed inset-0 bg-[#0A0A0F]/20 pointer-events-none z-0" />

      {/* 01. MANIFESTO HERO */}
      <section className="relative min-h-[90vh] flex items-center px-6 z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <div className="flex items-center space-x-4 mb-8">
              <div className="h-[1px] w-12 bg-[#6C5CE7]" />
              <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#6C5CE7]">Established 2025 // Frontier Intelligence</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-10 leading-[0.9] font-mono">
              The future is <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8E8F0] via-[#8888A0] to-[#E8E8F0]/50">
                <ScrambleText text="not a prophecy." />
              </span>
              <br /> It is an engineering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C5CE7] to-[#00CEC9]">
                <ScrambleText text="problem." />
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-[#8888A0] max-w-2xl leading-relaxed font-mono">
              10QBIT bridges the collapse between breakthrough laboratory science and industrial-scale enterprise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 02. FRONTIER IMPACT STATS (New Kinetic Row) */}
      <section className="relative z-10 border-y border-[#E8E8F0]/10 bg-[#0A0A0F]/80 backdrop-blur-md py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "IP Assets", value: "14+", icon: Shield },
            { label: "Venture Value", value: "$50M+", icon: Zap },
            { label: "Partner Labs", value: "06", icon: Microscope },
            { label: "Global Reach", value: "12", icon: Globe },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center md:items-start">
              <stat.icon className="w-4 h-4 text-[#00CEC9] mb-3" />
              <span className="text-3xl font-bold font-mono tracking-tighter">{stat.value}</span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#8888A0]">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 03. MISSION DUALITY */}
      <section className="py-32 px-6 z-10 bg-gradient-to-b from-transparent to-[#0A0A0F]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-px bg-[#8888A0]/20 border border-[#8888A0]/20">
          <div className="p-16 bg-[#0A0A0F]/40 backdrop-blur-xl">
            <h2 className="text-xs font-mono text-[#6C5CE7] uppercase tracking-[0.3em] mb-12 flex items-center">
              <Binary className="mr-3 w-4 h-4" /> 01 // The Mission
            </h2>
            <p className="text-3xl font-bold leading-tight mb-8">
              To architect companies that solve civilizational hurdles through the lens of deep technology.
            </p>
            <p className="text-[#8888A0] font-mono text-sm leading-relaxed">
              We operate at the fringe where biology becomes digital, and compute becomes quantum.
            </p>
          </div>
          <div className="p-16 bg-[#0A0A0F]/40 backdrop-blur-xl">
            <h2 className="text-xs font-mono text-[#00CEC9] uppercase tracking-[0.3em] mb-12 flex items-center">
              <Fingerprint className="mr-3 w-4 h-4" /> 02 // The Thesis
            </h2>
            <p className="text-3xl font-bold leading-tight mb-8">
              Proprietary IP is the only true moat in an age of exponential AI.
            </p>
            <div className="space-y-4">
               {['Quantum Resistance', 'Synthetic Bio-Arrays', 'Edge-Neural Architectures'].map((item, i) => (
                 <div key={i} className="flex items-center text-xs font-mono text-[#8888A0]">
                   <span className="w-2 h-2 rounded-full bg-[#00CEC9] mr-3" /> {item}
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* 04. THE VALUES BENTO */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          >
            {[
              { title: "IP-First", icon: Shield, color: "#6C5CE7", desc: "We build on technical moats, not marketing hype." },
              { title: "Builder Code", icon: Hammer, color: "#E8E8F0", desc: "Our partners are in the IDEs and the labs, not just the boardrooms." },
              { title: "Decadal Scale", icon: Telescope, color: "#00CEC9", desc: "We optimize for the 2035 landscape, not the next quarter." }
            ].map((value, i) => (
              <motion.div 
                key={i} variants={fadeInUp}
                className="p-10 border border-[#8888A0]/10 bg-[#0A0A0F]/60 backdrop-blur-md hover:border-[var(--hover-color)] transition-all group"
                style={{ '--hover-color': value.color } as React.CSSProperties}
              >
                <value.icon className="w-8 h-8 mb-8 group-hover:rotate-12 transition-transform" style={{ color: value.color }} />
                <h3 className="text-2xl font-bold mb-4 font-mono uppercase tracking-tighter">{value.title}</h3>
                <p className="text-[#8888A0] text-sm leading-relaxed font-mono">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 05. TEAM REGISTRY */}
      <section className="py-32 px-6 z-10 border-t border-[#E8E8F0]/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24">
            <div>
              <h2 className="text-4xl font-bold mb-4 font-mono tracking-tighter uppercase italic">The Architects</h2>
              <p className="text-[#8888A0] max-w-md text-sm font-mono uppercase tracking-widest">A collective of engineers and strategists.</p>
            </div>
            <div className="hidden md:block text-[10px] font-mono text-[#8888A0]/40 text-right uppercase">
              // Registry Access: Authorized <br />
              // Last Scan: {new Date().toLocaleDateString()}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Ari's Intelligence Profile */}
            <motion.div whileHover={{ y: -5 }} className="group relative">
              <div className="w-full aspect-[4/5] bg-[#0d0d14] border border-[#8888A0]/20 mb-8 overflow-hidden relative">
                {/* Data Overlay Effect */}
                <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute top-4 left-4 text-[8px] font-mono text-[#00CEC9]">SCANNING_BIO...</div>
                  <div className="absolute bottom-4 right-4 text-[8px] font-mono text-[#00CEC9]">0x4492_ADVISOR</div>
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(0,206,201,0.05)_1px,transparent_1px)] bg-[size:100%_4px]" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] to-transparent z-10" />
                <div className="absolute inset-0 flex items-center justify-center text-[#8888A0]/10 font-mono text-5xl uppercase tracking-tighter -rotate-90">PROFILE_01</div>
              </div>
              <h3 className="text-xl font-bold mb-1">Ari [Last Name]</h3>
              <p className="text-xs font-mono text-[#6C5CE7] uppercase tracking-widest mb-6">Managing Partner // Strategy</p>
              <Link href="#" className="inline-flex items-center text-[10px] font-mono text-[#00CEC9] uppercase tracking-widest hover:tracking-[0.2em] transition-all">
                Access Intelligence File <ArrowRight className="ml-2 w-3 h-3" />
              </Link>
            </motion.div>

            {/* Technical Lead Placeholder */}
            <motion.div whileHover={{ y: -5 }} className="group relative">
              <div className="w-full aspect-[4/5] bg-[#0d0d14] border border-[#8888A0]/20 mb-8 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-[#8888A0]/10 font-mono text-5xl uppercase tracking-tighter -rotate-90">PROFILE_02</div>
              </div>
              <h3 className="text-xl font-bold mb-1"> Najman </h3>
              <p className="text-xs font-mono text-[#00CEC9] uppercase tracking-widest mb-6">Director // Systems Architecture</p>
              <div className="text-[10px] font-mono text-[#8888A0] uppercase tracking-widest">Lead Engineer / Studio Development</div>
            </motion.div>

            {/* Board Registry List */}
            <div className="bg-[#8888A0]/5 border border-[#8888A0]/10 p-8 flex flex-col">
              <h3 className="text-sm font-mono text-[#E8E8F0] uppercase tracking-[0.3em] mb-8 border-b border-[#E8E8F0]/10 pb-4">Advisory Board</h3>
              <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="group cursor-pointer">
                    <p className="text-sm font-bold text-[#E8E8F0] group-hover:text-[#00CEC9] transition-colors font-mono">DR. ACADEMIC_NAME_{i}</p>
                    <p className="text-[10px] font-mono text-[#8888A0] uppercase">Quantum Photonics // MIT</p>
                  </div>
                ))}
              </div>
              <div className="mt-auto pt-8 border-t border-[#8888A0]/10">
                <p className="text-[9px] font-mono text-[#8888A0] leading-tight italic">
                  * Our board consists of 12 global specialists across quantum, bio, and energy sectors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 06. FOOTER CTA */}
      <section className="py-32 px-6 z-10 text-center bg-[#0A0A0F]/40 backdrop-blur-md">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tighter font-mono">JOIN THE CONVICTION.</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link href="/contact" className="px-12 py-4 bg-[#6C5CE7] text-white font-mono text-sm uppercase tracking-widest hover:bg-[#5b4dd1] transition-all">
            Initiate Contact
          </Link>
          <Link href="/ventures" className="px-12 py-4 border border-[#8888A0]/30 text-white font-mono text-sm uppercase tracking-widest hover:border-[#E8E8F0] transition-all">
            Browse Ventures
          </Link>
        </div>
      </section>

    </div>
  );
}
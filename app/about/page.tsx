"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Shield, Hammer, Telescope, ArrowRight, Binary, Fingerprint, Microscope } from "lucide-react";
import ScrambleText from "@/components/ScrambleText";
import QuantumMesh from "@/components/QuantumMesh";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
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
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen text-[#E8E8F0] relative">
      
      {/* Persistent 3D Background */}
      <QuantumMesh />

      {/* 01. PAGE HERO */}
      <section className="relative min-h-[80vh] flex items-center px-6 z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-10 leading-tight font-mono">
              Born from a conviction that the most important companies of the next decade{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C5CE7] to-[#00CEC9]">
                <ScrambleText text="don't exist yet." />
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-[#8888A0] max-w-3xl leading-relaxed font-mono">
              10QBIT was founded to bridge the gap between breakthrough science and scalable enterprise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 02. MISSION & THESIS */}
      <section className="py-32 px-6 border-y border-[#E8E8F0]/10 bg-[#0A0A0F]/60 backdrop-blur-md z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="text-sm font-mono text-[#6C5CE7] uppercase tracking-widest mb-6 flex items-center">
              <Binary className="mr-2 w-4 h-4" /> [Our Mission]
            </h2>
            <p className="text-3xl leading-snug font-bold">
              To identify, build, and scale deep-technology ventures that solve civilisation-scale problems.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="text-sm font-mono text-[#00CEC9] uppercase tracking-widest mb-6 flex items-center">
              <Fingerprint className="mr-2 w-4 h-4" /> [Our Thesis]
            </h2>
            <p className="text-lg text-[#8888A0] leading-relaxed mb-6 font-mono">
              The next wave of trillion-dollar companies will emerge from the convergence of AI, quantum computing, and synthetic biology.
            </p>
            <p className="text-xl font-medium text-[#E8E8F0] border-l-2 border-[#00CEC9] pl-6 italic">
              "10QBIT exists to find them, fund them, and build them."
            </p>
          </motion.div>
        </div>
      </section>

      {/* 03. VALUES GRID (Glassmorphism Upgrade) */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#8888A0]/10 border border-[#8888A0]/20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Value 1 */}
            <motion.div variants={fadeInUp} className="p-12 bg-[#0A0A0F]/40 backdrop-blur-xl group hover:bg-[#6C5CE7]/10 transition-colors">
              <Shield className="w-10 h-10 text-[#6C5CE7] mb-8 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-4 font-mono">IP-First</h3>
              <p className="text-[#8888A0] text-sm leading-relaxed">
                Every venture begins with defensible intellectual property — not a pitch deck. We build on technical moats.
              </p>
            </motion.div>

            {/* Value 2 */}
            <motion.div variants={fadeInUp} className="p-12 bg-[#0A0A0F]/40 backdrop-blur-xl group hover:bg-[#E8E8F0]/10 transition-colors">
              <Hammer className="w-10 h-10 text-[#E8E8F0] mb-8 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-4 font-mono">Co-Founders</h3>
              <p className="text-[#8888A0] text-sm leading-relaxed">
                We don’t sit on boards. We co-found, co-build, and engineer the first 18 months of a company’s life.
              </p>
            </motion.div>

            {/* Value 3 */}
            <motion.div variants={fadeInUp} className="p-12 bg-[#0A0A0F]/40 backdrop-blur-xl group hover:bg-[#00CEC9]/10 transition-colors">
              <Telescope className="w-10 h-10 text-[#00CEC9] mb-8 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-4 font-mono">Long-Arc</h3>
              <p className="text-[#8888A0] text-sm leading-relaxed">
                Deep-tech demands patience. We build for decades, focusing on fundamental shifts in energy, compute, and matter.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 04. THE TEAM (Bio Interaction Upgrade) */}
      <section className="py-32 px-6 border-t border-[#E8E8F0]/10 bg-[#0A0A0F]/80 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl font-bold mb-4 font-mono">The <ScrambleText text="Architects" /></h2>
            <p className="text-[#8888A0] max-w-2xl text-lg font-mono">
              Engineers, researchers, and operators building the frontier.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            
            {/* Ari's Card */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="group cursor-none"
            >
              <div className="w-full aspect-[4/5] bg-[#11111a] border border-[#8888A0]/20 mb-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-transparent to-transparent opacity-80 z-10"></div>
                {/* Visual context for Ari - Imagined as a high-end black and white professional portrait */}
                <div className="absolute inset-0 flex items-center justify-center text-[#8888A0]/20 font-mono uppercase tracking-[0.5em] -rotate-12 select-none text-4xl">
                  Ari.Portrait.IMG
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#E8E8F0] mb-1">Ari [Last Name]</h3>
              <p className="text-sm font-mono text-[#6C5CE7] uppercase tracking-wider mb-4">Managing Partner</p>
              <p className="text-[#8888A0] text-sm leading-relaxed mb-6">
                Former deep-tech founder and strategic advisor to global institutions. Focuses on thesis generation and venture architecture.
              </p>
              <Link href="#" className="inline-flex items-center text-xs font-mono text-[#00CEC9] hover:underline">
                View Intelligence Profile <ArrowRight className="ml-2 w-3 h-3" />
              </Link>
            </motion.div>

            {/* Placeholder for others */}
            <div className="w-full aspect-[4/5] border border-[#8888A0]/10 flex flex-col items-center justify-center p-12 text-center bg-[#0A0A0F]/30">
               <Microscope className="w-12 h-12 text-[#8888A0]/20 mb-6" />
               <p className="text-xs font-mono text-[#8888A0] uppercase tracking-[0.2em]">Partner Recruitment Active</p>
            </div>
            
          </div>
        </div>
      </section>

    </div>
  );
}
"use client";

import { useState } from "react";
import { motion, AnimatePresence     } from "framer-motion";
import { ventures } from "@/data/ventures";
import ScrambleText from "@/components/ScrambleText";
import QuantumMesh from "@/components/QuantumMesh";
import { ArrowUpRight, Shield, Cpu, Activity, Binary, Search, Database } from "lucide-react";

const categories = ["All", "AI", "Quantum", "Biotech"];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } 
  }
};

export default function VenturesPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredVentures = activeFilter === "All" 
    ? ventures 
    : ventures.filter(v => v.category === activeFilter);

  return (
    <div className="flex flex-col min-h-screen text-[#E8E8F0] relative overflow-hidden">
      
      {/* Background Layer */}
      <QuantumMesh />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32 w-full">
        
        {/* 01. REGISTRY HEADER */}
        <header className="mb-24">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <div className="flex items-center space-x-3 mb-6">
              <Database className="text-[#6C5CE7] w-4 h-4" />
              <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-[#6C5CE7]">Venture Registry // Alpha_Access</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-bold mb-8 font-mono tracking-tighter uppercase leading-[0.9]">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C5CE7] to-[#00CEC9]">
                <ScrambleText text="Portfolio" />
              </span>
            </h1>
            <p className="text-[#8888A0] text-lg md:text-xl max-w-2xl font-mono uppercase tracking-tight leading-relaxed">
              Architecting the next generation of category-defining companies through proprietary IP and deep-tech convergence.
            </p>
          </motion.div>
        </header>

        {/* 02. TERMINAL FILTERS */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16 border-b border-[#8888A0]/10 pb-8">
          <div className="flex flex-wrap gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`text-[10px] font-mono uppercase tracking-[0.3em] transition-all px-6 py-2 border ${
                  activeFilter === cat 
                    ? "text-[#00CEC9] border-[#00CEC9] bg-[#00CEC9]/5" 
                    : "text-[#8888A0] border-[#8888A0]/20 hover:border-[#E8E8F0]/50"
                }`}
              >
                [{cat}]
              </button>
            ))}
          </div>
          <div className="flex items-center space-x-4 text-[#8888A0] font-mono text-[10px] uppercase tracking-widest">
            <Search size={14} />
            <span>Showing: {filteredVentures.length} Nodes</span>
          </div>
        </div>

        {/* 03. INTELLIGENCE GRID */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#8888A0]/10 border border-[#8888A0]/20">
          <AnimatePresence mode="popLayout">
            {filteredVentures.map((venture, i) => (
              <motion.div
                layout
                key={venture.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-[#0A0A0F]/60 backdrop-blur-xl p-10 flex flex-col min-h-[420px] hover:bg-[#0d0d14] transition-colors cursor-none overflow-hidden"
              >
                {/* Visual Data Scanners (Hidden by default, shown on hover) */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#6C5CE7]/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                <div className="flex justify-between items-start mb-16">
                  <div 
                    className="w-12 h-12 border border-[#8888A0]/20 flex items-center justify-center group-hover:border-[var(--v-color)] transition-colors duration-500"
                    style={{ '--v-color': venture.color } as React.CSSProperties}
                  >
                    {venture.category === "AI" && <Cpu size={20} className="text-[#6C5CE7]" />}
                    {venture.category === "Quantum" && <Shield size={20} className="text-[#00CEC9]" />}
                    {venture.category === "Biotech" && <Activity size={20} className="text-[#E8E8F0]" />}
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[9px] font-mono text-[#8888A0] uppercase tracking-widest mb-1">
                      Status // {venture.status}
                    </span>
                    <span className="text-[8px] font-mono text-[#8888A0]/40 uppercase tracking-[0.2em]">
                      ID_REF: 00{venture.id}
                    </span>
                  </div>
                </div>

                <div className="mb-auto">
                  <h3 className="text-3xl font-bold mb-4 font-mono tracking-tighter uppercase italic group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#E8E8F0] group-hover:to-[#8888A0] transition-all">
                    {venture.title}
                  </h3>
                  <p className="text-[#8888A0] text-sm leading-relaxed font-mono uppercase tracking-tight opacity-70 group-hover:opacity-100 transition-opacity">
                    {venture.description}
                  </p>
                </div>

                {/* Technical Footprint */}
                <div className="pt-8 border-t border-[#8888A0]/10 flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="text-[8px] font-mono text-[#8888A0] uppercase tracking-widest mb-1">Benchmark_Delta</span>
                    <span className="text-[10px] font-mono text-[#00CEC9] font-bold tracking-widest">{venture.metric}</span>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-[#8888A0]/20 flex items-center justify-center group-hover:bg-[#E8E8F0] group-hover:border-[#E8E8F0] transition-all">
                    <ArrowUpRight size={14} className="text-[#8888A0] group-hover:text-[#0A0A0F] transition-colors" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* 04. REGISTRY FOOTER */}
        <footer className="mt-20 border-t border-[#8888A0]/10 pt-8 flex justify-between items-center">
          <div className="flex items-center space-x-6">
             <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00CEC9] animate-pulse" />
                <span className="text-[9px] font-mono text-[#8888A0] uppercase tracking-widest">System_Active</span>
             </div>
             <span className="text-[9px] font-mono text-[#8888A0]/40 uppercase tracking-widest hidden md:block">
               // Encrypted Node Retrieval Perfected
             </span>
          </div>
          <p className="text-[9px] font-mono text-[#8888A0] uppercase tracking-widest">
            © 2026 10QBIT Studios
          </p>
        </footer>
      </div>
    </div>
  );
}
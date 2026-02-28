"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail, Terminal, BarChart3, Radio, Database } from "lucide-react";
import ScrambleText from "@/components/ScrambleText";
import QuantumMesh from "@/components/QuantumMesh";

// Mock Data (Unchanged content, upgraded structure)
const featuredPost = {
  title: "The Quantum Winter is Thawing: Commercial Viability by 2030",
  author: "Ari [Last Name]",
  date: "2026.02.18",
  category: "Market Signals",
  excerpt: "An analysis of recent cryptographic breakthroughs, the acceleration of quantum error correction, and what it means for legacy financial infrastructure.",
  slug: "quantum-winter-thawing"
};

const allPosts = [
  { title: "Adversarial AI in Critical National Infrastructure", author: "Dr. Elena Rostova", date: "2026.02.04", category: "Research Notes", excerpt: "How autonomous defense systems are evolving to counter zero-day automated threats.", slug: "adversarial-ai-infrastructure" },
  { title: "SynthBio Exits Stealth, Secures £12M Seed", author: "10QBIT Studios", date: "2026.01.22", category: "Venture Updates", excerpt: "Our latest studio spin-out is redefining the timeline for sustainable material discovery using generative proteins.", slug: "synthbio-seed" },
  { title: "The Next 10 Years of Autonomous Defense", author: "Marcus Chen", date: "2026.01.15", category: "AI", excerpt: "Why the perimeter defense model is dead, and how self-healing network architectures are replacing it.", slug: "autonomous-defense-future" },
  { title: "Evaluating Post-Quantum Cryptographic Migration Timelines", author: "Ari [Last Name]", date: "2025.12.10", category: "Quantum", excerpt: "A framework for Tier-1 banks and sovereign funds to assess their exposure to 'Harvest Now, Decrypt Later' attacks.", slug: "post-quantum-migration" },
  { title: "Why Silicon Valley is Missing the Biotech Revolution", author: "Technical Partner", date: "2025.11.28", category: "Biotech", excerpt: "The convergence of AI and biology requires a new kind of venture model.", slug: "silicon-valley-biotech" }
];

const categories = ["All", "AI", "Quantum", "Biotech", "Market Signals", "Venture Updates", "Research Notes"];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const
   } }
};

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = allPosts.filter(post => 
    activeCategory === "All" || post.category === activeCategory
  );

  return (
    <div className="flex flex-col min-h-screen text-[#E8E8F0] relative">
      
      {/* Background Physics */}
      <QuantumMesh />

      {/* 01. INTEL HERO */}
      <section className="relative min-h-[60vh] flex flex-col justify-center px-6 z-10">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <div className="flex items-center space-x-3 mb-6">
              <Radio className="text-[#00CEC9] w-4 h-4 animate-pulse" />
              <span className="text-xs font-mono tracking-[0.4em] uppercase text-[#00CEC9]">Intelligence Feed // Decrypted</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9] font-mono">
              Signals from the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00CEC9] to-[#6C5CE7]">
                <ScrambleText text="Frontier." />
              </span>
            </h1>
            <p className="text-lg md:text-xl text-[#8888A0] max-w-2xl leading-relaxed font-mono uppercase tracking-tight">
              Original research, market intelligence, and deep-tech perspective from across the 10QBIT flywheel.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 02. FEATURED SIGNAL (Glassmorphic Card) */}
      <section className="px-6 mb-32 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <Link href={`/insights/${featuredPost.slug}`} className="group block relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00CEC9]/20 to-[#6C5CE7]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative border border-[#8888A0]/20 bg-[#0A0A0F]/60 backdrop-blur-xl flex flex-col md:flex-row overflow-hidden">
                
                {/* Visual Scanner Side */}
                <div className="md:w-[40%] h-64 md:h-auto bg-[#0d0d14] relative border-b md:border-b-0 md:border-r border-[#8888A0]/20 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(0,206,201,0.05)_1px,transparent_1px)] bg-[size:100%_8px] z-10" />
                  <BarChart3 className="w-32 h-32 text-[#00CEC9]/10 group-hover:scale-110 group-hover:text-[#00CEC9]/20 transition-all duration-700" />
                  <div className="absolute top-6 left-6 flex space-x-2">
                    <span className="text-[10px] font-mono px-2 py-1 bg-[#00CEC9] text-[#0A0A0F] font-bold uppercase tracking-widest">
                      Priority_Alpha
                    </span>
                  </div>
                </div>
                
                {/* Content Side */}
                <div className="md:w-[60%] p-10 md:p-16 flex flex-col">
                  <div className="flex items-center gap-4 mb-8 font-mono text-[10px] uppercase tracking-[0.2em] text-[#8888A0]">
                    <span className="text-[#00CEC9]">{featuredPost.category}</span>
                    <span className="opacity-20">//</span>
                    <span>{featuredPost.date}</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-[#E8E8F0] mb-8 group-hover:text-[#00CEC9] transition-colors leading-tight font-mono tracking-tighter uppercase italic">
                    {featuredPost.title}
                  </h2>
                  <p className="text-[#8888A0] text-lg leading-relaxed mb-10 font-mono">
                    {featuredPost.excerpt}
                  </p>
                  <div className="mt-auto flex items-center justify-between border-t border-[#8888A0]/10 pt-8">
                    <span className="text-xs font-mono uppercase text-[#E8E8F0]">Auth: {featuredPost.author}</span>
                    <span className="flex items-center text-xs font-mono uppercase tracking-widest text-[#8888A0] group-hover:text-[#E8E8F0] transition-colors">
                      Decrypt File <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 03. FILTERED INTEL FEED */}
      <section className="px-6 pb-40 relative z-10 border-t border-[#E8E8F0]/10 bg-[#0A0A0F]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto pt-24">
          
          {/* Terminal Filters */}
          <div className="flex flex-wrap gap-4 mb-20">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[10px] font-mono uppercase tracking-[0.3em] transition-all px-4 py-2 border ${
                  activeCategory === cat 
                    ? "text-[#00CEC9] border-[#00CEC9] bg-[#00CEC9]/5" 
                    : "text-[#8888A0] border-[#8888A0]/20 hover:border-[#E8E8F0]/50"
                }`}
              >
                [{cat}]
              </button>
            ))}
          </div>

          {/* Grid with AnimatePresence */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#8888A0]/10 border border-[#8888A0]/20">
            <AnimatePresence mode="popLayout">
              {filteredPosts.map((post, i) => (
                <motion.div
                  layout
                  key={post.slug}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="bg-[#0A0A0F] p-10 hover:bg-[#0d0d14] transition-colors group flex flex-col h-[400px] cursor-none"
                >
                  <div className="flex justify-between items-start mb-10">
                    <span className="text-[9px] font-mono tracking-widest uppercase text-[#6C5CE7] border border-[#6C5CE7]/30 px-2 py-1">
                      {post.category}
                    </span>
                    <span className="text-[10px] font-mono text-[#8888A0]">{post.date}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-6 text-[#E8E8F0] group-hover:text-[#6C5CE7] transition-colors font-mono tracking-tighter leading-tight uppercase">
                    {post.title}
                  </h3>
                  
                  <p className="text-[#8888A0] text-sm leading-relaxed mb-8 flex-grow font-mono uppercase tracking-tight opacity-70 group-hover:opacity-100 transition-opacity">
                    {post.excerpt}
                  </p>

                  <Link href={`/insights/${post.slug}`} className="mt-auto flex items-center justify-between border-t border-[#8888A0]/10 pt-6 group/link">
                    <span className="text-[10px] font-mono text-[#8888A0]">REF: 00{i+1}</span>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#8888A0] group-hover/link:text-[#E8E8F0] transition-colors flex items-center">
                      Read <ArrowRight className="ml-2 w-3 h-3" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* 04. NEWSLETTER TERMINAL */}
      <section className="py-40 px-6 bg-[#050508]/90 backdrop-blur-3xl border-t border-[#E8E8F0]/10 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <Database className="w-10 h-10 text-[#6C5CE7] mx-auto mb-10 opacity-50" />
          <h2 className="text-4xl font-bold mb-6 font-mono tracking-tighter uppercase italic text-[#E8E8F0]">
            The 10QBIT <ScrambleText text="Signal" />
          </h2>
          <p className="text-[#8888A0] text-sm mb-12 max-w-lg mx-auto font-mono uppercase tracking-widest leading-loose">
            Monthly intelligence briefings on deep-tech convergence. <br />
            <span className="text-[#6C5CE7]">Zero Noise. Direct Feed.</span>
          </p>
          <form className="flex flex-col sm:flex-row gap-px bg-[#8888A0]/20 border border-[#8888A0]/20 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="ENTER_EMAIL_FOR_UPLINK" 
              className="flex-grow bg-[#0A0A0F] px-6 py-4 text-xs font-mono text-[#E8E8F0] placeholder:text-[#8888A0]/30 focus:outline-none focus:bg-[#0d0d14] transition-all"
              required
            />
            <button 
              type="submit" 
              className="bg-[#6C5CE7] text-white px-8 py-4 text-[10px] font-mono font-bold uppercase tracking-[0.2em] hover:bg-[#5b4dd1] transition-all flex items-center justify-center"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}
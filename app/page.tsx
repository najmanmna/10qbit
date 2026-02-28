"use client";


import Link from "next/link";
import { ArrowRight, Binary, Fingerprint, Activity, Zap } from "lucide-react";
import FeaturedVentures from "@/components/FeaturedVentures";
import TrustSignals from "@/components/TrustSignals";
import FlywheelAnimation from "@/components/FlywheelAnimation";
import QuantumMesh from "@/components/QuantumMesh";
import ScrambleText from "@/components/ScrambleText";
import LatestInsights from "@/components/LatestInsights";
import { motion, Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1] // Now TS knows this is a cubic-bezier tuple
    } 
  }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen text-[#E8E8F0] relative overflow-hidden">
      
      {/* Global 3D Background */}
      <QuantumMesh />

      {/* 01. HERO SECTION // THE UPLINK */}
      <section className="relative min-h-screen flex items-center justify-center px-6 z-10">
        {/* Subtle Radial Vignette */}
        <div className="absolute inset-0 z-0 opacity-40 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#6C5CE7]/10 via-[#0A0A0F] to-[#0A0A0F] pointer-events-none" />
        
        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={fadeInUp}
            className="flex flex-col items-center"
          >
            <div className="flex items-center space-x-3 mb-8 bg-[#E8E8F0]/5 border border-[#E8E8F0]/10 px-4 py-1 rounded-full backdrop-blur-md">
              <Binary className="w-3 h-3 text-[#00CEC9] animate-pulse" />
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#8888A0]">System Status: Optimal</span>
            </div>

            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9] font-mono uppercase">
              We don’t just <br /> invest in the future. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8E8F0] via-[#8888A0] to-[#E8E8F0]/50 inline-block font-mono">
                <ScrambleText text="We engineer it." />
              </span>
            </h1>

            <p className="text-lg md:text-xl text-[#8888A0] mb-12 max-w-2xl leading-relaxed font-mono uppercase tracking-tight">
              10QBIT is a deep-tech venture studio and strategic advisory — building breakthrough companies at the intersection of AI, Quantum, and Advanced Science.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link href="/ventures" className="px-10 py-4 bg-[#6C5CE7] hover:bg-[#5b4dd1] text-white font-mono text-xs uppercase tracking-widest transition-all hover:scale-105 active:scale-95 flex items-center justify-center group">
                Explore Ventures 
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/contact" className="px-10 py-4 border border-[#8888A0]/30 hover:border-[#E8E8F0] text-[#E8E8F0] font-mono text-xs uppercase tracking-widest transition-all backdrop-blur-sm flex items-center justify-center">
                Work With Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <TrustSignals />

      {/* 02. THE FLYWHEEL // KINETIC ADVANTAGE */}
      <section className="py-40 px-6 border-y border-[#E8E8F0]/10 bg-[#0A0A0F]/60 backdrop-blur-xl relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-24 max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-mono tracking-tighter uppercase">Studio + Advisory</h2>
            <div className="h-[1px] w-24 bg-[#6C5CE7] mx-auto mb-8" />
            <p className="text-[#8888A0] text-lg font-mono uppercase tracking-tight leading-relaxed">
              Our advisory engagements surface frontier opportunities. Our studio builds ventures around them. The ventures generate IP that deepens our advisory. <br />
              <span className="text-[#E8E8F0]">This is the 10QBIT Flywheel.</span>
            </p>
          </motion.div>
          <FlywheelAnimation />
        </div>
      </section>

      {/* 03. DUAL CORE // STUDIO & ADVISORY */}
      <section className="py-40 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-px bg-[#0A0A0F]/60 backdrop-blur-xl border border-[#8888A0]/20">
          
          {/* Studio Panel */}
          <motion.div 
            whileHover={{ backgroundColor: "rgba(108, 92, 231, 0.05)" }}
            className="bg-[#0A0A0F]/80 backdrop-blur-md p-12 md:p-24 flex flex-col justify-between group transition-colors relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#6C5CE7] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <Fingerprint className="text-[#6C5CE7] w-5 h-5" />
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#6C5CE7]">Venture Creation</span>
              </div>
              <h2 className="text-4xl font-bold mb-8 font-mono uppercase tracking-tighter italic">10QBIT Studios</h2>
              <p className="text-[#8888A0] leading-relaxed mb-12 font-mono text-sm uppercase tracking-wider">
                We build companies from scratch — starting with proprietary IP, assembling founder-calibre teams, and engineering them through to scale.
              </p>
            </div>
            <Link href="/studios" className="inline-flex items-center text-[#E8E8F0] font-mono text-xs uppercase tracking-[0.2em] group-hover:text-[#6C5CE7] transition-colors">
              Access Registry <ArrowRight className="ml-3 w-4 h-4" />
            </Link>
          </motion.div>

          {/* Advisory Panel */}
          <motion.div 
            whileHover={{ backgroundColor: "rgba(0, 206, 201, 0.05)" }}
            className="bg-[#0A0A0F]/80 backdrop-blur-md p-12 md:p-24 flex flex-col justify-between group transition-colors relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00CEC9] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <Activity className="text-[#00CEC9] w-5 h-5" />
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#00CEC9]">Strategic Intelligence</span>
              </div>
              <h2 className="text-4xl font-bold mb-8 font-mono uppercase tracking-tighter italic">10QBIT Advisory</h2>
              <p className="text-[#8888A0] leading-relaxed mb-12 font-mono text-sm uppercase tracking-wider">
                We advise governments and Fortune 500 companies on deep-tech strategy — from AI readiness to quantum risk management.
              </p>
            </div>
            <Link href="/advisory" className="inline-flex items-center text-[#E8E8F0] font-mono text-xs uppercase tracking-[0.2em] group-hover:text-[#00CEC9] transition-colors">
              Request Briefing <ArrowRight className="ml-3 w-4 h-4" />
            </Link>
          </motion.div>

        </div>
      </section>

      <FeaturedVentures />
      <LatestInsights />

      {/* 04. FINAL UPLINK // CTA */}
      <section className="py-40 px-6 bg-[#0A0A0F]/60 backdrop-blur-xlç border-t border-[#E8E8F0]/10 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Zap className="w-10 h-10 text-[#6C5CE7] mx-auto mb-10 opacity-50" />
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-[1.1] font-mono tracking-tighter uppercase">
              Building the future <br /> demands a different <br /> <span className="text-[#6C5CE7]">kind of partner.</span>
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
              <Link href="/contact" className="px-12 py-5 bg-[#E8E8F0] text-[#0A0A0F] hover:bg-white font-mono text-xs font-bold uppercase tracking-widest transition-all hover:scale-105">
                Initiate Contact
              </Link>
              <Link href="/advisory" className="px-12 py-5 border border-[#8888A0]/30 hover:border-[#E8E8F0] text-[#E8E8F0] font-mono text-xs uppercase tracking-widest transition-all backdrop-blur-sm">
                Explore Advisory
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
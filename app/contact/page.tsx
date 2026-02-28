"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Globe, MessageSquare, ShieldCheck, Zap } from "lucide-react";
import ScrambleText from "@/components/ScrambleText";
import QuantumMesh from "@/components/QuantumMesh";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [intent, setIntent] = useState("advisory"); // 'advisory' or 'studio'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API delay
    setTimeout(() => {
      setLoading(false);
      alert("Transmission Received. Our intelligence team will reach out shortly.");
    }, 2000);
  };

  return (
    <div className="flex flex-col min-h-screen text-[#E8E8F0] relative overflow-hidden">
      <QuantumMesh />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32 w-full grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Left Column: Briefing Meta */}
        <div className="flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 font-mono tracking-tighter uppercase italic">
              Initiate <br />
              <span className={`text-transparent bg-clip-text bg-gradient-to-r transition-all duration-500 ${
                intent === 'studio' ? 'from-[#6C5CE7] to-[#E8E8F0]' : 'from-[#00CEC9] to-[#E8E8F0]'
              }`}>
                <ScrambleText text="Uplink" />
              </span>
            </h1>
            <p className="text-[#8888A0] text-lg font-mono mb-12 max-w-md leading-relaxed">
              Whether you are a sovereign fund, a frontier researcher, or a strategic partner, our intake terminal is the first step toward the flywheel.
            </p>

            <div className="space-y-8">
              <div className="flex items-center space-x-4 group cursor-none">
                <div className={`p-3 rounded-sm border transition-colors ${intent === 'studio' ? 'border-[#6C5CE7]/50 text-[#6C5CE7]' : 'border-[#00CEC9]/50 text-[#00CEC9]'}`}>
                  <Globe size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-[#8888A0]">Global Operations</p>
                  <p className="text-sm font-mono">London // New York // Singapore</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group cursor-none">
                <div className={`p-3 rounded-sm border transition-colors ${intent === 'studio' ? 'border-[#6C5CE7]/50 text-[#6C5CE7]' : 'border-[#00CEC9]/50 text-[#00CEC9]'}`}>
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-[#8888A0]">Security Protocol</p>
                  <p className="text-sm font-mono">Encrypted 256-bit Transmission</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: The Terminal Form */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-[#0A0A0F]/60 backdrop-blur-xl border border-[#8888A0]/20 p-8 md:p-12 relative"
        >
          {/* Subtle Scanline Effect */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(108,92,231,0.03)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none" />

          <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
            {/* Intent Selector */}
            <div className="grid grid-cols-2 gap-px bg-[#8888A0]/20 border border-[#8888A0]/20 mb-12">
              <button 
                type="button"
                onClick={() => setIntent('advisory')}
                className={`py-4 text-[10px] font-mono uppercase tracking-[0.2em] transition-all ${intent === 'advisory' ? 'bg-[#00CEC9] text-[#0A0A0F] font-bold' : 'bg-transparent text-[#8888A0] hover:text-[#E8E8F0]'}`}
              >
                Strategy Advisory
              </button>
              <button 
                type="button"
                onClick={() => setIntent('studio')}
                className={`py-4 text-[10px] font-mono uppercase tracking-[0.2em] transition-all ${intent === 'studio' ? 'bg-[#6C5CE7] text-white font-bold' : 'bg-transparent text-[#8888A0] hover:text-[#E8E8F0]'}`}
              >
                Venture Studio
              </button>
            </div>

            <div className="space-y-6">
              <div className="group">
                <label className="block text-[10px] font-mono uppercase tracking-widest text-[#8888A0] mb-2 group-focus-within:text-[#E8E8F0]">Full Name</label>
                <input required type="text" className="w-full bg-transparent border-b border-[#8888A0]/30 py-3 focus:outline-none focus:border-[#E8E8F0] transition-colors font-mono text-sm" placeholder="TYPE_NAME_HERE" />
              </div>

              <div className="group">
                <label className="block text-[10px] font-mono uppercase tracking-widest text-[#8888A0] mb-2 group-focus-within:text-[#E8E8F0]">Organization</label>
                <input required type="text" className="w-full bg-transparent border-b border-[#8888A0]/30 py-3 focus:outline-none focus:border-[#E8E8F0] transition-colors font-mono text-sm" placeholder="ENTITY_IDENTIFIER" />
              </div>

              <div className="group">
                <label className="block text-[10px] font-mono uppercase tracking-widest text-[#8888A0] mb-2 group-focus-within:text-[#E8E8F0]">Email Address</label>
                <input required type="email" className="w-full bg-transparent border-b border-[#8888A0]/30 py-3 focus:outline-none focus:border-[#E8E8F0] transition-colors font-mono text-sm" placeholder="NETWORK_ADDRESS" />
              </div>

              <div className="group">
                <label className="block text-[10px] font-mono uppercase tracking-widest text-[#8888A0] mb-2 group-focus-within:text-[#E8E8F0]">Briefing Summary</label>
                <textarea rows={4} className="w-full bg-[#0A0A0F]/50 border border-[#8888A0]/30 p-4 focus:outline-none focus:border-[#E8E8F0] transition-colors font-mono text-sm resize-none" placeholder="DESCRIBE_THE_BREAKTHROUGH_OR_CHALLENGE..." />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className={`w-full py-5 font-mono text-xs uppercase tracking-[0.4em] font-bold transition-all flex items-center justify-center space-x-3 ${
                intent === 'studio' 
                  ? 'bg-[#6C5CE7] hover:bg-[#5b4dd1] text-white shadow-[0_0_20px_rgba(108,92,231,0.2)]' 
                  : 'bg-[#E8E8F0] hover:bg-white text-[#0A0A0F]'
              } ${loading ? 'opacity-50 cursor-wait' : ''}`}
            >
              {loading ? (
                <span>PROCESSING_TRANSMISSION...</span>
              ) : (
                <>
                  <span>Submit Intake Request</span>
                  <Send size={14} className="animate-pulse" />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>

      <footer className="mt-auto py-12 px-6 border-t border-[#8888A0]/10 text-center relative z-10">
        <p className="text-[10px] font-mono text-[#8888A0] uppercase tracking-[0.3em]">
          Transmission Protocol v2.0 // Secured by 10QBIT Cryptography
        </p>
      </footer>
    </div>
  );
}
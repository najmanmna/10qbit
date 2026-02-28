"use client"; // Make sure this is at the very top!

import { motion } from "framer-motion";
import { BrainCircuit, Lightbulb, Hexagon, Database } from "lucide-react";

const nodes = [
  { icon: BrainCircuit, title: "Advisory", desc: "Market intelligence", color: "#00CEC9", shadow: "shadow-[#00CEC9]/20" },
  { icon: Lightbulb, title: "Thesis", desc: "Identify white space", color: "#E8E8F0", shadow: "shadow-[#E8E8F0]/20" },
  { icon: Hexagon, title: "Studio", desc: "Build ventures", color: "#6C5CE7", shadow: "shadow-[#6C5CE7]/20" },
  { icon: Database, title: "IP & Data", desc: "Proprietary moat", color: "#E8E8F0", shadow: "shadow-[#E8E8F0]/20" }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, 
      delayChildren: 0.3,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" as const } 
  }
};

const lineVariants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: { 
    scaleX: 1, 
    opacity: 1,
    transition: { duration: 1, ease: "easeInOut" as const }
  }
};

export default function FlywheelAnimation() {
  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-4 gap-8 relative"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      // THE FIX IS HERE: Changed margin to amount for a more reliable trigger
      viewport={{ once: true, amount: 0.2 }} 
    >
  {/* Animated Connecting Line (Desktop) */}
      <motion.div 
        className="hidden md:block absolute top-1/2 left-[10%] w-[80%] h-[2px] bg-gradient-to-r from-[#00CEC9]/20 via-[#00CEC9] to-[#6C5CE7] -translate-y-1/2 z-0 origin-left drop-shadow-[0_0_8px_rgba(0,206,201,0.6)]"
        variants={lineVariants}
      ></motion.div>
      
      {nodes.map((node, i) => (
        <motion.div 
          key={i} 
          variants={itemVariants}
          className="relative z-10 flex flex-col items-center text-center group cursor-pointer"
        >
          <div 
            className={`w-20 h-20 rounded-sm bg-[#0A0A0F] border border-[#8888A0]/20 flex items-center justify-center mb-6 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-lg ${node.shadow}`}
            style={{ '--hover-border': node.color } as React.CSSProperties}
          >
            <div className="absolute inset-0 border border-transparent group-hover:border-[var(--hover-border)] rounded-sm transition-colors duration-300 pointer-events-none"></div>
            <node.icon size={32} style={{ color: node.color }} />
          </div>
          <h3 className="text-xl font-bold mb-2 font-mono">{node.title}</h3>
          <p className="text-[#8888A0] text-sm">{node.desc}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
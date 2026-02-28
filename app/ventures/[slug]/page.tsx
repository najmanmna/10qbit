import Link from "next/link";
import { ArrowRight, ShieldAlert, CheckCircle2, Activity, Users, Target, ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

// Mock database fetch based on the slug
const getVentureData = (slug: string) => {
  const db: Record<string, any> = {
    "axion-ai": {
      name: "Axion AI",
      tagline: "Autonomous cybersecurity platform using adversarial AI.",
      sectors: ["AI", "Cybersecurity"],
      stage: "Seed",
      accent: "#6C5CE7",
      icon: ShieldAlert,
      problem: "Legacy cybersecurity relies on perimeter defense and reactive patching. By the time a zero-day vulnerability is identified, malicious actors have already breached the network. Human response times are fundamentally too slow for modern, automated attacks.",
      approach: "Axion AI shifts the paradigm from reactive to preemptive. We deploy autonomous agents that constantly map, attack, and heal the network from the inside out, neutralizing threats milliseconds after they execute.",
      technology: "Our core IP is a proprietary adversarial neural network. It runs millions of simulated attack vectors against a digital twin of the client's infrastructure, effectively training the defensive algorithms against attacks that haven't been invented yet.",
      market: "The global cybersecurity market is projecting a $300B TAM by 2027. However, the specific niche for autonomous, AI-driven remediation is growing at a 45% CAGR, driven by critical infrastructure and financial sector mandates.",
      milestones: [
        { date: "Q4 2025", text: "Proprietary adversarial engine patent filed." },
        { date: "Q1 2026", text: "Closed £3.5M Seed round led by 10QBIT." },
        { date: "Q3 2026", text: "Targeting enterprise beta deployment." }
      ],
      team: [
        { name: "Dr. Elena Rostova", role: "Co-Founder & CEO", bg: "Former Head of Offensive Security at DARPA." },
        { name: "Marcus Chen", role: "Co-Founder & CTO", bg: "PhD in Machine Learning; Ex-DeepMind." }
      ]
    }
  };

  return db[slug] || null;
};

export default function VentureDetailPage({ params }: { params: { slug: string } }) {
  const venture = getVentureData(params.slug);

  if (!venture) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#0A0A0F] text-[#E8E8F0] pt-20">
      
      {/* Back Navigation */}
      <div className="border-b border-[#E8E8F0]/10 bg-[#0A0A0F]">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <Link href="/ventures" className="inline-flex items-center text-sm font-mono text-[#8888A0] hover:text-[#E8E8F0] transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
          </Link>
        </div>
      </div>

      {/* 01. HERO SECTION */}
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Subtle background glow based on venture accent color */}
        <div 
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 pointer-events-none"
          style={{ backgroundColor: venture.accent }}
        ></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-sm bg-[#050508] border border-[#8888A0]/20 flex items-center justify-center text-[#E8E8F0]" style={{ color: venture.accent }}>
              <venture.icon strokeWidth={1.5} size={32} />
            </div>
            <div className="flex gap-2">
              <span className="text-xs font-mono px-3 py-1 bg-[#8888A0]/10 text-[#8888A0] rounded-sm uppercase tracking-wider">
                {venture.stage}
              </span>
              {venture.sectors.map((sector: string) => (
                <span key={sector} className="text-xs font-mono px-3 py-1 bg-[#8888A0]/10 text-[#E8E8F0] rounded-sm uppercase tracking-wider">
                  {sector}
                </span>
              ))}
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">{venture.name}</h1>
          <p className="text-2xl text-[#8888A0] max-w-3xl leading-relaxed border-l-2 pl-6" style={{ borderColor: venture.accent }}>
            {venture.tagline}
          </p>
        </div>
      </section>

      {/* 02. CONTENT GRID */}
      <section className="py-20 px-6 border-t border-[#E8E8F0]/10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          
          {/* Main Content Column (Left - 2/3 width) */}
          <div className="md:col-span-2 space-y-20">
            
            {/* The Problem & Our Approach */}
            <div className="space-y-12">
              <div>
                <h2 className="text-sm font-mono text-[#8888A0] uppercase tracking-widest mb-4 flex items-center">
                  <Target className="w-4 h-4 mr-2" /> The Problem
                </h2>
                <p className="text-lg leading-relaxed text-[#E8E8F0]">{venture.problem}</p>
              </div>
              <div className="p-8 border border-[#8888A0]/20 bg-[#050508]">
                <h2 className="text-sm font-mono uppercase tracking-widest mb-4 flex items-center" style={{ color: venture.accent }}>
                  <CheckCircle2 className="w-4 h-4 mr-2" /> Our Approach
                </h2>
                <p className="text-lg leading-relaxed text-[#8888A0]">{venture.approach}</p>
              </div>
            </div>

            {/* The Technology */}
            <div>
              <h2 className="text-2xl font-bold mb-6">The Technology</h2>
              <p className="text-[#8888A0] leading-relaxed text-lg">{venture.technology}</p>
            </div>

            {/* Market Opportunity */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Market Opportunity</h2>
              <p className="text-[#8888A0] leading-relaxed text-lg">{venture.market}</p>
            </div>

            {/* Team */}
            <div>
              <h2 className="text-2xl font-bold mb-8 flex items-center">
                <Users className="w-6 h-6 mr-3 text-[#8888A0]" /> Core Team
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {venture.team.map((member: any, i: number) => (
                  <div key={i} className="p-6 border border-[#8888A0]/20 bg-[#0A0A0F]">
                    <h3 className="text-lg font-bold text-[#E8E8F0] mb-1">{member.name}</h3>
                    <p className="text-sm font-mono text-[#8888A0] mb-3">{member.role}</p>
                    <p className="text-sm text-[#8888A0]/80">{member.bg}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar (Right - 1/3 width) */}
          <div className="md:col-span-1">
            <div className="sticky top-32 border border-[#8888A0]/20 bg-[#050508] p-8">
              <h2 className="text-lg font-bold mb-6 flex items-center border-b border-[#8888A0]/20 pb-4">
                <Activity className="w-5 h-5 mr-3 text-[#8888A0]" /> Status & Milestones
              </h2>
              <ul className="space-y-8 relative before:absolute before:inset-0 before:ml-[5px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#8888A0]/30 before:to-transparent">
                {venture.milestones.map((milestone: any, i: number) => (
                  <li key={i} className="relative flex items-start">
                    <div className="absolute left-0 mt-1.5 w-3 h-3 rounded-full bg-[#050508] border-2 z-10" style={{ borderColor: i === 0 ? venture.accent : '#8888A0' }}></div>
                    <div className="ml-8">
                      <span className="text-xs font-mono text-[#8888A0] block mb-1">{milestone.date}</span>
                      <p className="text-sm text-[#E8E8F0]">{milestone.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* 03. CTA SECTION */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#0A0A0F] to-[#050508] border-t border-[#E8E8F0]/10 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Interested in this venture?</h2>
          <p className="text-[#8888A0] text-lg mb-10">
            We are actively seeking strategic partners, co-investors, and exceptional talent to accelerate {venture.name}'s trajectory.
          </p>
          <Link 
            href={`/contact?intent=venture-partnership&venture=${params.slug}`} 
            className="inline-flex items-center px-8 py-4 bg-[#E8E8F0] text-[#0A0A0F] hover:bg-white font-bold rounded-sm transition-colors"
          >
            Start a Conversation <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
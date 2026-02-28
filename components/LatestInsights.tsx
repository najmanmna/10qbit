import Link from "next/link";
import { ArrowRight } from "lucide-react";

const insights = [
  {
    tag: "Market Signals",
    title: "The Quantum Winter is Thawing: Commercial Viability by 2030",
    date: "Feb 18, 2026",
    excerpt: "An analysis of recent cryptographic breakthroughs and what they mean for legacy financial infrastructure.",
    slug: "quantum-winter-thawing"
  },
  {
    tag: "Research Notes",
    title: "Adversarial AI in Critical National Infrastructure",
    date: "Feb 04, 2026",
    excerpt: "How autonomous defense systems are evolving to counter zero-day automated threats.",
    slug: "adversarial-ai-infrastructure"
  },
  {
    tag: "Venture Updates",
    title: "SynthBio Exits Stealth, Secures £12M Seed for Generative Proteins",
    date: "Jan 22, 2026",
    excerpt: "Our latest studio spin-out is redefining the timeline for sustainable material discovery.",
    slug: "synthbio-seed-funding"
  }
];

export default function LatestInsights() {
  return (
    <section className="py-32 px-6 border-t border-[#E8E8F0]/10 bg-[#0A0A0F]/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Insights</h2>
            <p className="text-[#8888A0] max-w-2xl text-lg">
              Signals from the frontier. Original research and market intelligence.
            </p>
          </div>
          <Link 
            href="/insights" 
            className="inline-flex items-center text-[#E8E8F0] font-medium hover:text-[#00CEC9] transition-colors font-mono uppercase tracking-wider text-sm whitespace-nowrap"
          >
            View All Insights <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((post, i) => (
            <Link 
              key={i} 
              href={`/insights/${post.slug}`}
              className="group flex flex-col bg-[#050508] border border-[#8888A0]/20 hover:border-[#E8E8F0]/50 transition-colors p-8 rounded-sm"
            >
              {/* Image Placeholder (Can be replaced with next/image later) */}
              <div className="w-full h-48 bg-[#8888A0]/10 mb-6 rounded-sm overflow-hidden relative border border-[#8888A0]/10 group-hover:border-[#00CEC9]/30 transition-colors">
                 <div className="absolute inset-0 bg-gradient-to-tr from-[#050508] to-transparent z-10"></div>
              </div>

              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono px-2 py-1 bg-[#8888A0]/10 text-[#00CEC9] rounded-sm uppercase tracking-wider">
                  {post.tag}
                </span>
                <span className="text-sm text-[#8888A0] font-mono">{post.date}</span>
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-[#E8E8F0] group-hover:text-[#00CEC9] transition-colors line-clamp-2">
                {post.title}
              </h3>
              
              <p className="text-[#8888A0] text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                {post.excerpt}
              </p>

              <div className="mt-auto flex items-center text-sm font-medium text-[#8888A0] group-hover:text-[#E8E8F0] transition-colors">
                Read Article <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
export default function TrustSignals() {
  const stats = [
    { value: "£50M+", label: "In advisory mandates" },
    { value: "4", label: "Ventures in build" },
    { value: "12", label: "Deep-tech sectors" },
    { value: "Tier-1", label: "Institutional partners" },
  ];

  return (
    <section className="py-20 px-6 bg-[#050508] border-t border-b border-[#E8E8F0]/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x-0 md:divide-x divide-[#8888A0]/20">
          {stats.map((stat, i) => (
            <div key={i} className={`flex flex-col items-center text-center ${i !== 0 ? 'md:pl-12' : ''}`}>
              <span className="text-4xl md:text-5xl font-bold text-[#E8E8F0] mb-2 font-mono tracking-tight">
                {stat.value}
              </span>
              <span className="text-sm font-medium text-[#8888A0] uppercase tracking-wider font-mono">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
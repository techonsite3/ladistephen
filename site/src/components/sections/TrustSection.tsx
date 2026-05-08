export default function TrustSection() {
  const institutions = [
    { name: "GHSC-PSM", abbr: "GP" },
    { name: "Chemonics International", abbr: "CI" },
    { name: "WomenLift Health", abbr: "WL" },
    { name: "Forbes Nonprofit Council", abbr: "FN" },
    { name: "Maxwell Leadership", abbr: "ML" },
    { name: "American Psychological Association", abbr: "AP" },
  ];

  return (
    <section id="trust" className="relative bg-soft-white py-16 lg:py-20 overflow-hidden">
      {/* Top subtle divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.25em] text-navy/40 font-semibold">
            Trusted Leadership Across Global Institutions
          </p>
        </div>

        {/* Logo Strip */}
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 lg:gap-x-16">
          {institutions.map((inst) => (
            <div
              key={inst.name}
              className="flex items-center gap-3 px-4 py-3 select-none group cursor-default"
              title={inst.name}
            >
              {/* Institutional icon placeholder */}
              <div className="w-9 h-9 rounded-full bg-navy/8 flex items-center justify-center group-hover:bg-gold/15 transition-colors duration-300">
                <span className="text-navy/50 text-[10px] font-bold tracking-tight group-hover:text-gold-dark transition-colors duration-300">
                  {inst.abbr}
                </span>
              </div>
              <span className="text-navy/70 text-sm font-semibold tracking-wide whitespace-nowrap group-hover:text-navy transition-colors duration-300">
                {inst.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom subtle divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy/8 to-transparent" />
    </section>
  );
}

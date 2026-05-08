export default function ExpertiseSection() {
  const expertiseAreas = [
    {
      id: "global-health",
      number: "01",
      title: "Global Health Systems",
      description:
        "Strengthening healthcare infrastructure, commodity management, and service delivery across complex donor-funded programs in sub-Saharan Africa.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
      ),
    },
    {
      id: "supply-chain",
      number: "02",
      title: "Supply Chain & Logistics",
      description:
        "End-to-end supply chain leadership from forecasting and procurement to last-mile delivery, ensuring life-saving commodities reach those who need them most.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
        </svg>
      ),
    },
    {
      id: "strategic-ops",
      number: "03",
      title: "Strategic Operations",
      description:
        "Designing and executing operational strategies that transform organizational performance, drive efficiency, and build institutional resilience.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
        </svg>
      ),
    },
    {
      id: "leadership-dev",
      number: "04",
      title: "Leadership Development",
      description:
        "Building high-performing, cross-cultural teams through coaching, mentorship, and behavioral leadership methodologies that unlock organizational potential.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      ),
    },
    {
      id: "behavioral-leadership",
      number: "05",
      title: "Behavioral Leadership",
      description:
        "Applying behavioral science and emotional intelligence frameworks to cultivate authentic leadership, organizational culture, and sustainable change.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="expertise"
      className="relative section-padding bg-navy overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 pattern-dots opacity-20" />
        <div className="glow-orb w-[500px] h-[500px] bg-teal/10 top-0 right-0" />
        <div className="glow-orb w-[400px] h-[400px] bg-gold/8 bottom-0 left-0" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="reveal">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="gold-divider" />
              <span className="text-gold/80 text-xs uppercase tracking-[0.25em] font-medium">
                Areas of Expertise
              </span>
              <div className="gold-divider" />
            </div>

            <h2 className="heading-serif text-3xl md:text-4xl lg:text-[2.75rem] text-soft-white mb-6 text-balance">
              Core Expertise & Impact Areas
            </h2>
            <p className="text-warm-gray/50 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
              More than 16 years of strategic leadership across global health,
              supply chain systems, and organizational transformation.
            </p>
          </div>
        </div>

        {/* Expertise Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseAreas.map((area, index) => (
            <div
              key={area.id}
              className={`expertise-card-dark reveal reveal-delay-${index + 1} ${
                index === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
              id={`expertise-${area.id}`}
            >
              {/* Icon & Number */}
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 flex items-center justify-center border border-gold/15 text-gold/70">
                  {area.icon}
                </div>
                <span className="text-gold/20 text-sm font-mono tracking-wider">
                  {area.number}
                </span>
              </div>

              {/* Content */}
              <h3 className="heading-serif text-xl text-soft-white mb-4">
                {area.title}
              </h3>
              <p className="text-warm-gray/50 text-sm leading-relaxed">
                {area.description}
              </p>

              {/* Bottom accent */}
              <div className="mt-6 pt-4 border-t border-gold/8">
                <span className="text-gold/40 text-xs uppercase tracking-widest font-medium">
                  Learn More →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

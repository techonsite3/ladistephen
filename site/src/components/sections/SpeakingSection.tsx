import Image from "next/image";

export default function SpeakingSection() {
  const topics = [
    "Leadership in Complex Environments",
    "Building Resilient Health Systems",
    "Women in Global Leadership",
    "Human-Centered Leadership",
    "Strategic Supply Chain Leadership",
    "Cross-Cultural Team Management",
    "Ethics, Leadership & Sustainable Impact",
    "Behavioral Intelligence in Leadership",
  ];

  const audiences = [
    "Global Health Conferences",
    "Leadership Summits",
    "Women Leadership Forums",
    "Healthcare Organizations",
    "Nonprofit & NGO Platforms",
    "Corporate Leadership Events",
  ];

  return (
    <section
      id="speaking"
      className="relative section-padding bg-soft-white overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left: Content */}
          <div>
            <div className="reveal">
              <div className="flex items-center gap-3 mb-6">
                <div className="gold-divider" />
                <span className="text-gold-dark text-xs uppercase tracking-[0.25em] font-medium">
                  Engagements
                </span>
              </div>

              <h2 className="heading-serif text-3xl md:text-4xl lg:text-[2.75rem] text-navy mb-8 text-balance">
                Speaking & Executive Engagements
              </h2>
            </div>

            <div className="reveal reveal-delay-1">
              <p className="text-charcoal/70 text-base lg:text-lg leading-relaxed mb-8">
                Ladi brings a powerful combination of real-world leadership
                experience and strategic insight to every engagement. Her
                presentations draw from over a decade of leading at the
                intersection of global health, operations, and human development.
              </p>

              <p className="text-charcoal/60 text-sm leading-relaxed mb-10">
                Available for keynote presentations, panel discussions,
                leadership workshops, and executive advisory sessions.
              </p>
            </div>

            {/* Topics */}
            <div className="reveal reveal-delay-2">
              <h3 className="text-xs uppercase tracking-[0.2em] text-navy/50 font-semibold mb-6">
                Signature Speaking Themes
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {topics.map((topic) => (
                  <div
                    key={topic}
                    className="flex items-start gap-3 py-2"
                  >
                    <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 shrink-0" />
                    <span className="text-charcoal/70 text-sm">{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 reveal reveal-delay-3">
              <a href="#contact" className="btn-primary bg-navy text-soft-white hover:bg-charcoal" id="speaking-cta">
                Request Speaking Engagement
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Image + Audiences */}
          <div>
            <div className="reveal">
              <div className="relative mb-10">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src="/images/ladi-stephen-generated-05-speaking-dark-bg-3x4.png"
                    alt="Ladi Agbenu Stephen — Speaking Engagement"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
                </div>
                {/* Decorative */}
                <div className="absolute -bottom-3 -left-3 w-full h-full border border-gold/10 -z-10" />
              </div>
            </div>

            {/* Audiences */}
            <div className="reveal reveal-delay-2">
              <h3 className="text-xs uppercase tracking-[0.2em] text-navy/50 font-semibold mb-5">
                Ideal Audiences
              </h3>
              <div className="flex flex-wrap gap-2">
                {audiences.map((audience) => (
                  <span
                    key={audience}
                    className="px-4 py-2 bg-navy/5 text-navy/60 text-xs font-medium tracking-wide uppercase border border-navy/8 hover:border-gold/30 hover:text-navy/80 transition-all duration-300 cursor-default"
                  >
                    {audience}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

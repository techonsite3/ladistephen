import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-navy overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-800 to-charcoal" />
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 pattern-dots opacity-30" />
        {/* Gradient orbs */}
        <div className="glow-orb w-[600px] h-[600px] bg-gold/20 -top-40 -right-40" />
        <div className="glow-orb w-[400px] h-[400px] bg-teal/15 bottom-20 -left-20" />
        {/* Decorative line */}
        <div className="absolute top-0 left-1/2 w-px h-32 bg-gradient-to-b from-gold/30 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-32 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Column */}
          <div className="order-2 lg:order-1 animate-fade-up">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8">
              <div className="gold-divider" />
              <span className="text-gold/80 text-xs uppercase tracking-[0.25em] font-medium">
                Global Health Executive
              </span>
            </div>

            {/* Headline */}
            <h1 className="heading-serif text-3xl md:text-4xl lg:text-[2.75rem] text-soft-white leading-[1.15] mb-8 text-balance">
              Advancing Global Health Systems Through Strategic Leadership &
              Human&#8209;Centered Impact
            </h1>

            {/* Intro Copy */}
            <p className="text-warm-gray/60 text-base lg:text-lg leading-relaxed mb-10 max-w-lg">
              Ladi Agbenu Stephen is a global health executive and international
              development leader with more than 16 years of experience leading
              complex donor-funded health systems and supply chain initiatives
              across Africa.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary" id="hero-cta-speak">
                Invite Ladi to Speak
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
              <a
                href="#expertise"
                className="btn-secondary"
                id="hero-cta-profile"
              >
                View Leadership Profile
              </a>
            </div>
          </div>

          {/* Portrait Column */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 border border-gold/10 -z-10" />
              <div className="absolute -inset-8 border border-gold/5 -z-10" />
              {/* Gold corner accents */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-gold/40" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-gold/40" />

              {/* Portrait */}
              <div className="relative w-72 md:w-80 lg:w-[380px] aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/ladi-stephen-generated-01-homepage-hero-warm-4x5.png"
                  alt="Ladi Agbenu Stephen — Global Health Executive Portrait"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 380px"
                />
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="text-warm-gray/30 text-[10px] uppercase tracking-[0.3em]">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-gold/40 to-transparent" />
      </div>
    </section>
  );
}

import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative section-padding bg-soft-white overflow-hidden"
    >
      {/* Decorative element */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <div className="lg:col-span-2 reveal">
            <div className="relative">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="/images/ladi-stephen-generated-02-about-profile-square.png"
                  alt="Ladi Agbenu Stephen — Executive Profile"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              {/* Decorative border offset */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold/15 -z-10" />
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-3">
            <div className="reveal">
              <div className="flex items-center gap-3 mb-6">
                <div className="gold-divider" />
                <span className="text-gold-dark text-xs uppercase tracking-[0.25em] font-medium">
                  Executive Profile
                </span>
              </div>

              <h2 className="heading-serif text-3xl md:text-4xl lg:text-[2.75rem] text-navy mb-8 text-balance">
                Leadership at the Intersection of Systems, Strategy & Human
                Impact
              </h2>
            </div>

            <div className="space-y-5 reveal reveal-delay-1">
              <p className="text-charcoal/70 text-base lg:text-lg leading-relaxed">
                With a career spanning complex multicultural environments across
                Nigeria and Angola, Ladi Agbenu Stephen has established herself
                as a leader who bridges the gap between operational excellence
                and human-centered transformation.
              </p>
              <p className="text-charcoal/70 text-base lg:text-lg leading-relaxed">
                Her expertise in global health systems, supply chain
                optimization, and strategic operations has contributed to
                strengthening healthcare infrastructure serving millions across
                the African continent.
              </p>
              <p className="text-charcoal/70 text-base lg:text-lg leading-relaxed">
                As a certified behavioral leadership professional and active
                member of the Forbes Nonprofit Council, she brings a unique
                perspective that integrates systems thinking with authentic,
                people-first leadership.
              </p>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 reveal reveal-delay-2">
              <a href="#expertise" className="btn-primary bg-navy text-soft-white hover:bg-charcoal" id="about-cta-leadership">
                View Full Profile
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
        </div>
      </div>
    </section>
  );
}

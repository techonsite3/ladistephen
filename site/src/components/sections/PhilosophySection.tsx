export default function PhilosophySection() {
  return (
    <section id="philosophy" className="relative py-24 lg:py-32 bg-navy overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-800 to-charcoal" />
        <div className="glow-orb w-[600px] h-[600px] bg-gold/8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="reveal">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="gold-divider" />
            <span className="text-gold/80 text-xs uppercase tracking-[0.25em] font-medium">
              Leadership Philosophy
            </span>
            <div className="gold-divider" />
          </div>
          <div className="relative">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-gold/10 heading-serif text-[120px] leading-none select-none pointer-events-none">
              &ldquo;
            </div>
            <blockquote className="heading-serif text-2xl md:text-3xl lg:text-4xl text-soft-white leading-snug mb-8 text-balance relative z-10">
              Effective leadership requires more than technical expertise. It requires the ability to build trust, strengthen systems, empower people, and create environments where sustainable impact becomes possible.
            </blockquote>
          </div>
          <div className="gold-divider-long mx-auto mb-6" />
          <p className="text-gold/60 text-sm uppercase tracking-[0.15em] font-medium">
            Ladi Agbenu Stephen
          </p>
        </div>
      </div>
    </section>
  );
}

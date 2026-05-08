import Image from "next/image";

export default function MediaSection() {
  const linkedInPosts = [
    {
      id: "post-mental-health",
      title: "Leadership Shapes Mental Health at Work Environments",
      excerpt:
        "Leaders don't need to have all the answers or be therapists. But they do need to understand the environments they create. If you lead people, mental health is already part of your job — whether you feel prepared for it or not.",
      keyInsight:
        "One of the biggest challenges organizations face today is not always absenteeism — it is presenteeism. People are at work, but they are depleted, distracted, or disengaged.",
      stat: "Depression and anxiety cost the global economy nearly US$1 trillion each year.",
      statSource: "WHO & ILO",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7455678759766114304/",
      tags: ["Mental Health", "Leadership", "Workplace Wellbeing"],
    },
  ];

  const featuredMedia = [
    {
      type: "Forbes",
      title: "Forbes Nonprofit Council — Contributing Member",
      description:
        "Ladi Stephen is an active contributor to the Forbes Nonprofit Council, sharing perspectives on leadership, organizational development, and global health.",
    },
    {
      type: "WomenLift",
      title: "WomenLift Health — Leadership Fellow",
      description:
        "Recognized through the WomenLift Health initiative for advancing women's leadership in global health systems across Africa.",
    },
    {
      type: "Publication",
      title: "Chemonics International — GHSC-PSM Project",
      description:
        "Published author on public health supply chain transformation, drug revolving funds, and HIV service delivery continuity in Angola.",
    },
  ];

  return (
    <section id="media" className="relative section-padding bg-navy overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 pattern-dots opacity-15" />
        <div className="glow-orb w-[500px] h-[500px] bg-teal/8 top-0 left-0" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="gold-divider" />
            <span className="text-gold/80 text-xs uppercase tracking-[0.25em] font-medium">
              Media & Features
            </span>
            <div className="gold-divider" />
          </div>
          <h2 className="heading-serif text-3xl md:text-4xl lg:text-[2.75rem] text-soft-white mb-6 text-balance">
            Featured Perspectives
          </h2>
          <p className="text-warm-gray/50 text-base max-w-2xl mx-auto">
            Leadership insights, published work, and featured contributions across global health and organizational development.
          </p>
        </div>

        {/* Featured LinkedIn Post */}
        {linkedInPosts.map((post) => (
          <a
            key={post.id}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-12 reveal reveal-delay-1 group"
            id={post.id}
          >
            <div className="border border-gold/10 p-8 lg:p-12 hover:border-gold/25 transition-all duration-500 relative overflow-hidden">
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                {/* Post header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-gold/20">
                    <Image
                      src="/images/ladi-stephen-generated-06-executive-square-gray.png"
                      alt="Ladi Stephen"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-soft-white text-sm font-medium">Ladi Agbenu Stephen</p>
                    <p className="text-warm-gray/40 text-xs">LinkedIn Article</p>
                  </div>
                  <div className="ml-auto">
                    <svg className="w-5 h-5 text-[#0A66C2] opacity-60 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                </div>

                {/* Title */}
                <h3 className="heading-serif text-xl lg:text-2xl text-soft-white mb-4 group-hover:text-gold-light transition-colors duration-300">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-warm-gray/60 text-base leading-relaxed mb-6 max-w-3xl">
                  {post.excerpt}
                </p>

                {/* Key insight callout */}
                <div className="border-l-2 border-gold/40 pl-6 py-2 mb-6">
                  <p className="text-warm-gray/50 text-sm leading-relaxed italic">
                    &ldquo;{post.keyInsight}&rdquo;
                  </p>
                </div>

                {/* Stat */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="px-4 py-3 bg-gold/5 border border-gold/10">
                    <p className="text-gold text-lg font-semibold">{post.stat}</p>
                    <p className="text-warm-gray/40 text-xs mt-1">Source: {post.statSource}</p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-gold/50 text-[10px] uppercase tracking-[0.15em] font-medium border border-gold/10"
                    >
                      #{tag.replace(/\s+/g, "")}
                    </span>
                  ))}
                </div>

                {/* Read more */}
                <div className="mt-6 pt-5 border-t border-gold/8">
                  <span className="text-gold/40 text-xs uppercase tracking-widest font-medium group-hover:text-gold transition-colors duration-300 inline-flex items-center gap-2">
                    Read Full Post on LinkedIn
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </a>
        ))}

        {/* Media Grid */}
        <div className="grid md:grid-cols-3 gap-6 reveal reveal-delay-2">
          {featuredMedia.map((item) => (
            <div
              key={item.title}
              className="expertise-card-dark"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="px-2.5 py-1 bg-gold/8 text-gold/70 text-[10px] uppercase tracking-[0.15em] font-semibold">
                  {item.type}
                </span>
              </div>
              <h3 className="heading-serif text-base text-soft-white mb-3 leading-snug">
                {item.title}
              </h3>
              <p className="text-warm-gray/45 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* LinkedIn CTA */}
        <div className="mt-12 text-center reveal reveal-delay-3">
          <a
            href="https://www.linkedin.com/in/ladi-stephen-a9b4b814b"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
            id="media-linkedin-cta"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            Follow on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

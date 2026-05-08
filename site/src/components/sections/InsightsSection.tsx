import Image from "next/image";

export default function InsightsSection() {
  const articles = [
    {
      id: "insights-1",
      category: "Leadership",
      title: "Leadership Shapes Mental Health at Work Environments",
      excerpt:
        "Leaders don't need to have all the answers or be therapists. But they do need to understand the environments they create. If you lead people, mental health is already part of your job.",
      date: "2025",
      image: "/images/ladi-stephen-generated-04-insights-warm-editorial-4x3.png",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7455678759766114304/",
    },
    {
      id: "insights-2",
      category: "Global Health",
      title: "Public-Private Partnerships Can Thrive in Health Development",
      excerpt:
        "A field perspective on how strategic public-private partnerships are transforming healthcare delivery and supply chain systems across sub-Saharan Africa.",
      date: "Nov 2022",
      image: "/images/ladi-stephen-generated-03-media-office-4x3.png",
      link: "https://www.linkedin.com/in/ladi-stephen-a9b4b814b",
    },
    {
      id: "insights-3",
      category: "Supply Chain",
      title:
        "Building People for the Future of Public Health Supply Chains in Angola",
      excerpt:
        "How strategic partnerships and capacity building are strengthening public health supply chain infrastructure for long-term sustainability in Angola.",
      date: "2022",
      image: "/images/ladi-stephen-generated-06-executive-square-gray.png",
      link: "https://www.linkedin.com/in/ladi-stephen-a9b4b814b",
    },
  ];

  const additionalArticles = [
    {
      title: "Making Drug Revolving Funds Work — Perspectives from the Field",
      category: "Health Systems",
    },
    {
      title: "In Angola, People Living with HIV Stay Healthy Despite COVID-19",
      category: "Global Health",
    },
  ];

  return (
    <section
      id="insights"
      className="relative section-padding bg-soft-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div className="reveal">
            <div className="flex items-center gap-3 mb-6">
              <div className="gold-divider" />
              <span className="text-gold-dark text-xs uppercase tracking-[0.25em] font-medium">
                Thought Leadership
              </span>
            </div>
            <h2 className="heading-serif text-3xl md:text-4xl lg:text-[2.75rem] text-navy text-balance">
              Insights & Perspectives
            </h2>
          </div>
          <div className="reveal reveal-delay-1">
            <a
              href="https://www.linkedin.com/in/ladi-stephen-a9b4b814b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy/50 text-sm font-medium uppercase tracking-wider hover:text-gold-dark transition-colors inline-flex items-center gap-2"
            >
              View All on LinkedIn
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
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Featured Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.map((article, index) => (
            <a
              key={article.id}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`insight-card reveal reveal-delay-${index + 1} group block`}
              id={article.id}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover insight-image transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-navy/80 backdrop-blur-sm text-gold text-[10px] uppercase tracking-[0.2em] font-medium">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <p className="text-warm-gray/50 text-xs uppercase tracking-wider mb-3">
                  {article.date}
                </p>
                <h3 className="heading-serif text-lg text-navy mb-3 leading-snug group-hover:text-gold-dark transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="text-charcoal/50 text-sm leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="mt-5 pt-4 border-t border-navy/5">
                  <span className="text-navy/40 text-xs uppercase tracking-widest font-medium group-hover:text-gold-dark transition-colors duration-300">
                    Read Article →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Additional Publications */}
        <div className="reveal reveal-delay-3">
          <div className="border-t border-navy/8 pt-10">
            <h3 className="text-xs uppercase tracking-[0.2em] text-navy/40 font-semibold mb-6">
              Additional Publications
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {additionalArticles.map((article) => (
                <div
                  key={article.title}
                  className="flex items-start gap-4 p-5 border border-navy/6 hover:border-gold/20 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 shrink-0" />
                  <div>
                    <span className="text-gold-dark/60 text-[10px] uppercase tracking-[0.2em] font-medium">
                      {article.category}
                    </span>
                    <p className="text-navy/70 text-sm font-medium mt-1 group-hover:text-navy transition-colors">
                      {article.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

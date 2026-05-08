import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy border-t border-gold/10" id="site-footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <h3 className="heading-serif text-xl text-soft-white">
                Ladi Agbenu Stephen
              </h3>
            </Link>
            <p className="mt-6 text-warm-gray/70 text-sm leading-relaxed max-w-md">
              Global Health Executive and International Development Leader with
              more than 16 years of experience leading complex donor-funded
              health systems and supply chain initiatives across Africa.
            </p>
            {/* Social */}
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/ladi-stephen-a9b4b814b"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-gold/15 text-warm-gray/50 hover:text-gold hover:border-gold/40 transition-all duration-300"
                aria-label="LinkedIn"
                id="footer-linkedin"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="mailto:contact@ladistephen.com"
                className="w-10 h-10 flex items-center justify-center border border-gold/15 text-warm-gray/50 hover:text-gold hover:border-gold/40 transition-all duration-300"
                aria-label="Email"
                id="footer-email"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold/80 font-semibold mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { label: "About", href: "#about" },
                { label: "Leadership & Expertise", href: "#expertise" },
                { label: "Speaking", href: "#speaking" },
                { label: "Insights", href: "#insights" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-warm-gray/50 hover:text-soft-white text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Inquiries */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold/80 font-semibold mb-6">
              Inquiries
            </h4>
            <ul className="space-y-3">
              {[
                "Speaking Engagements",
                "Advisory Opportunities",
                "Media Requests",
                "Partnership Inquiries",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#contact"
                    className="text-warm-gray/50 hover:text-soft-white text-sm transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gold/8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-warm-gray/40 text-xs">
            © {currentYear} Ladi Agbenu Stephen. All rights reserved.
          </p>
          <a
            href="https://www.practicalabs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-warm-gray/30 text-xs hover:text-gold/50 transition-colors duration-300"
          >
            Built By Practicalabs
          </a>
        </div>
      </div>
    </footer>
  );
}

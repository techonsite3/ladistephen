"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Leadership", href: "#expertise" },
    { label: "Speaking", href: "#speaking" },
    { label: "Insights", href: "#insights" },
    { label: "Media", href: "#media" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-xl shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" id="site-logo">
            <span className="heading-serif text-lg text-soft-white tracking-wide">
              Ladi Agbenu Stephen
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" id="desktop-nav">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <a href="#contact" className="btn-primary text-xs" id="header-cta">
              Invite Ladi to Speak
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1.5"
            id="mobile-menu-toggle"
            aria-label="Toggle mobile menu"
          >
            <span
              className={`w-6 h-[1.5px] bg-soft-white transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-[4.5px]" : ""
              }`}
            />
            <span
              className={`w-6 h-[1.5px] bg-soft-white transition-all duration-300 ${
                mobileOpen ? "opacity-0 scale-0" : ""
              }`}
            />
            <span
              className={`w-6 h-[1.5px] bg-soft-white transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-[4.5px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-500 overflow-hidden ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
        id="mobile-menu"
      >
        <div className="bg-navy/98 backdrop-blur-xl border-t border-gold/10 px-6 py-8">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="nav-link text-base"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t border-gold/10">
              <a
                href="#contact"
                className="btn-primary text-xs w-full justify-center"
                onClick={() => setMobileOpen(false)}
              >
                Invite Ladi to Speak
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

"use client";

import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    inquiryType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const inquiryTypes = [
    "Speaking Engagement",
    "Advisory Opportunity",
    "Media Request",
    "Partnership Inquiry",
    "General Inquiry",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative section-padding bg-navy overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 pattern-dots opacity-15" />
        <div className="glow-orb w-[500px] h-[500px] bg-gold/8 -top-20 -right-20" />
        <div className="glow-orb w-[400px] h-[400px] bg-teal/8 bottom-0 left-0" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="gold-divider" />
            <span className="text-gold/80 text-xs uppercase tracking-[0.25em] font-medium">Get in Touch</span>
            <div className="gold-divider" />
          </div>
          <h2 className="heading-serif text-3xl md:text-4xl lg:text-[2.75rem] text-soft-white mb-6 text-balance">
            Speaking, Advisory & Leadership Inquiries
          </h2>
          <p className="text-warm-gray/50 text-base max-w-xl mx-auto">
            For speaking engagements, advisory opportunities, media requests, or partnership inquiries, please reach out using the form below.
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-16 reveal">
            <div className="w-16 h-16 mx-auto mb-6 border border-gold/30 flex items-center justify-center">
              <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h3 className="heading-serif text-2xl text-soft-white mb-4">Thank You</h3>
            <p className="text-warm-gray/60 text-base">Your inquiry has been received. We will respond within 48 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="reveal reveal-delay-1">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="contact-name" className="block text-warm-gray/50 text-xs uppercase tracking-wider mb-2">Name *</label>
                <input
                  type="text"
                  id="contact-name"
                  required
                  className="form-input"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="contact-org" className="block text-warm-gray/50 text-xs uppercase tracking-wider mb-2">Organization</label>
                <input
                  type="text"
                  id="contact-org"
                  className="form-input"
                  placeholder="Organization Name"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="contact-email" className="block text-warm-gray/50 text-xs uppercase tracking-wider mb-2">Email *</label>
                <input
                  type="email"
                  id="contact-email"
                  required
                  className="form-input"
                  placeholder="email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="contact-inquiry" className="block text-warm-gray/50 text-xs uppercase tracking-wider mb-2">Inquiry Type *</label>
                <select
                  id="contact-inquiry"
                  required
                  className="form-input appearance-none cursor-pointer"
                  value={formData.inquiryType}
                  onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                >
                  <option value="" disabled>Select Inquiry Type</option>
                  {inquiryTypes.map((type) => (
                    <option key={type} value={type} className="bg-navy text-soft-white">{type}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mb-8">
              <label htmlFor="contact-message" className="block text-warm-gray/50 text-xs uppercase tracking-wider mb-2">Message *</label>
              <textarea
                id="contact-message"
                required
                rows={5}
                className="form-input resize-none"
                placeholder="Please describe your inquiry..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <button type="submit" className="btn-primary" id="contact-submit">
                Submit Inquiry
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </button>
              <p className="text-warm-gray/30 text-xs">
                Or email directly: <a href="mailto:contact@ladistephen.com" className="text-gold/50 hover:text-gold transition-colors">contact@ladistephen.com</a>
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

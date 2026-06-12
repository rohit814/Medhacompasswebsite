import logo from "../../imports/2.png";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function CTA() {
  return (
    <section className="py-24 bg-[#1a7a8a] relative overflow-hidden">
      {/* Decorative background text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="text-white/5"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(5rem, 15vw, 14rem)',
            fontWeight: 700,
            whiteSpace: 'nowrap',
            letterSpacing: '-0.04em',
          }}
        >
          Medha Compass
        </span>
      </div>

      <div className="relative max-w-4xl mx-auto px-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-8 h-px bg-white/30" />
          <span className="text-white/55 text-xs tracking-[0.2em] uppercase" style={{ fontFamily: 'var(--font-body)' }}>
            For A Bright Future
          </span>
          <div className="w-8 h-px bg-white/30" />
        </div>

        <h2
          className="text-white mb-6"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontWeight: 600,
            lineHeight: 1.2,
          }}
        >
          Your child's future is worth a 30-minute conversation
        </h2>

        <p
          className="text-white/70 mb-10 max-w-xl mx-auto"
          style={{ fontFamily: 'var(--font-body)', lineHeight: 1.8 }}
        >
          The discovery call with Swathi is free. No pressure, no sales pitch — just an honest
          conversation about where your child is and where they want to go.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="bg-white text-[#1a7a8a] hover:bg-[#f0fafa] px-10 py-4 text-sm font-medium transition-colors duration-200 shadow-lg rounded-sm"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Book My Free Call with Swathi
          </a>
          <a
            href="#assessment"
            className="border border-white/35 hover:border-white text-white px-10 py-4 text-sm transition-colors duration-200 rounded-sm"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Start the Career Quiz →
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 mt-14 pt-10 border-t border-white/15">
          {[
            '✓  No commitment required',
            '✓  Response within 24 hours',
            '✓  In-person or online sessions',
          ].map((item) => (
            <span key={item} className="text-white/65 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#0a1518] py-12">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-2">
            <ImageWithFallback
              src={logo}
              alt="Medha Compass Career Guidance"
              className="h-12 w-auto object-contain mb-4 opacity-90"
            />
            <p className="text-white/35 text-xs max-w-xs" style={{ fontFamily: 'var(--font-body)', lineHeight: 1.8 }}>
              Personalised career guidance for students in Grades 8–12. Helping families
              across India build purposeful academic and career futures.
            </p>
            <div className="flex flex-col gap-1.5 mt-4">
              <a href="mailto:swathi.medhacompass@gmail.com" className="text-white/40 hover:text-white/70 text-xs transition-colors" style={{ fontFamily: 'var(--font-body)' }}>
                swathi.medhacompass@gmail.com
              </a>
              <a href="tel:+917619343941" className="text-white/40 hover:text-white/70 text-xs transition-colors" style={{ fontFamily: 'var(--font-body)' }}>
                +91 76193 43941
              </a>
              <span className="text-white/30 text-xs" style={{ fontFamily: 'var(--font-body)' }}>
                Rajarajeshwari Nagar, Bengaluru 560098
              </span>
            </div>
          </div>
          {[
            {
              heading: 'Services',
              links: ['Career Assessment', 'Subject Selection', 'University Planning', 'Parent Workshops', 'School Programs'],
            },
            {
              heading: 'About',
              links: ['Swathi Kadur', 'Testimonials', 'FAQ', 'Contact'],
            },
          ].map(({ heading, links }) => (
            <div key={heading}>
              <h4 className="text-white/25 text-xs tracking-[0.15em] uppercase mb-4" style={{ fontFamily: 'var(--font-body)' }}>
                {heading}
              </h4>
              <div className="flex flex-col gap-2">
                {links.map((link) => (
                  <a key={link} href="#" className="text-white/40 hover:text-white/70 text-xs transition-colors" style={{ fontFamily: 'var(--font-body)' }}>
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-3">
          <span className="text-white/20 text-xs" style={{ fontFamily: 'var(--font-body)' }}>
            © 2026 Medha Compass Career Guidance · Medha Trust. All rights reserved.
          </span>
          <span className="text-white/20 text-xs" style={{ fontFamily: 'var(--font-body)' }}>
            Bengaluru, Karnataka, India
          </span>
        </div>
      </div>
    </footer>
  );
}

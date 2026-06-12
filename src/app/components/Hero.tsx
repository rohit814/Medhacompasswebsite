import logo from "../../imports/2.png";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0f2028]">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1800&h=1000&fit=crop&auto=format"
          alt="Student with books"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f2028]/95 via-[#0f2028]/80 to-[#1a7a8a]/40" />
      </div>

      {/* Nav */}
      <nav className="absolute top-0 left-0 right-0 flex items-center justify-between px-8 py-5 z-10">
        <div className="flex items-center gap-3">
          <ImageWithFallback
            src={logo}
            alt="Medha Compass logo"
            className="h-10 w-auto object-contain"
          />
        </div>
        <div className="hidden md:flex items-center gap-8">
          {['Services', 'About', 'Testimonials', 'FAQ', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white/65 hover:text-white text-sm transition-colors duration-200"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {item}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="bg-[#e8502a] hover:bg-[#d04420] text-white px-5 py-2.5 text-sm transition-colors duration-200 rounded-sm"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Book a Free Call
        </a>
      </nav>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 w-full pt-24">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#e8502a]" />
            <span className="text-[#e8502a] text-xs tracking-[0.2em] uppercase" style={{ fontFamily: 'var(--font-body)' }}>
              Global Career Counselling · Grades 8 – 12
            </span>
          </div>

          <h1
            className="text-white mb-6"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
              fontWeight: 600,
              lineHeight: 1.15,
            }}
          >
            Empowering Students to Build{' '}
            <em style={{ fontStyle: 'italic', color: '#5cc8d8' }}>Purposeful Futures</em>
          </h1>

          <p
            className="text-white/65 mb-10 max-w-lg"
            style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: 1.8 }}
          >
            Personalised career guidance for students in Grades 8–12. Medha Compass helps
            your child discover their strengths, explore career pathways, and build an
            academic roadmap aligned to their long-term goals.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="bg-[#e8502a] hover:bg-[#d04420] text-white px-8 py-4 text-sm transition-all duration-200 hover:shadow-lg rounded-sm"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Book a Free Discovery Call
            </a>
            <a
              href="#assessment"
              className="border border-white/25 hover:border-white/50 text-white/75 hover:text-white px-8 py-4 text-sm transition-all duration-200 rounded-sm"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Take the Career Quiz →
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center gap-8 mt-14 pt-8 border-t border-white/10">
            {[
              { number: '18+', label: 'Years of experience' },
              { number: '3', label: 'Countries served' },
              { number: '6', label: 'Qualifications & certifications' },
            ].map(({ number, label }) => (
              <div key={label}>
                <div
                  className="text-white"
                  style={{ fontFamily: 'var(--font-display)', fontSize: '1.7rem', fontWeight: 600 }}
                >
                  {number}
                </div>
                <div
                  className="text-white/45 text-xs tracking-wide uppercase mt-0.5"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

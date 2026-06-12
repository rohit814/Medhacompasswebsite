import counselorPhoto from "../../imports/IMG-20260307-WA0074_1_.jpg";
import logo from "../../imports/2.png";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const credentials = [
  'Certificate in Global Career Counselling — UCLA Extension & Univariety',
  'Master\'s in Educational Psychology — Andrews University, USA',
  'Bachelor\'s in Psychology — California State University, Northridge, USA',
  'Harvard Certificate in School Management & Leadership (Distinction)',
  'International Certificate in Education for Preschool Teaching — Singapore',
  'Certificate in Art Therapy (Distinction)',
];

const roles = [
  'Former CBSE Principal & Head of School',
  'Founder, Medha Bright Beginnings Preschool',
  'Curriculum Leader & Guidance Counsellor',
  'School Leadership Consultant',
];

const countries = ['India', 'United States', 'Trinidad & Tobago'];

export function CounselorProfile() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Image column */}
          <div className="relative">
            {/* Teal decorative border */}
            <div
              className="absolute -top-4 -left-4 w-full h-full border-2 border-[#1a7a8a]/20 rounded-sm"
            />
            <ImageWithFallback
              src={counselorPhoto}
              alt="Swathi Kadur — Founder & Global Career Counsellor, Medha Compass"
              className="relative w-full object-cover object-top rounded-sm"
              style={{ maxHeight: '580px' }}
            />
            {/* Quote badge */}
            <div
              className="absolute -bottom-6 -right-4 bg-[#1a7a8a] text-white p-5 max-w-[240px] rounded-sm"
              style={{ boxShadow: '0 8px 32px rgba(26,122,138,0.35)' }}
            >
              <div className="text-[#5cc8d8] text-xl mb-1">"</div>
              <p
                className="text-white/90 text-xs leading-relaxed italic"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Empowering students to discover their strengths, explore possibilities, and build purposeful futures.
              </p>
            </div>
          </div>

          {/* Content column */}
          <div className="pt-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#e8502a]" />
              <span
                className="text-[#e8502a] text-xs tracking-[0.2em] uppercase"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Your Counsellor
              </span>
            </div>

            <h2
              className="text-[#0f2028] mb-1"
              style={{ fontFamily: 'var(--font-display)', fontSize: '2.4rem', fontWeight: 600 }}
            >
              Swathi Kadur
            </h2>
            <p
              className="text-[#1a7a8a] mb-2 text-sm"
              style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
            >
              Global Career Counsellor · Education Leader · School Leadership Consultant
            </p>
            <div className="flex items-center gap-2 mb-6">
              <ImageWithFallback
                src={logo}
                alt="Medha Compass"
                className="h-5 w-auto object-contain opacity-80"
              />
              <span className="text-[#4a6872] text-xs" style={{ fontFamily: 'var(--font-body)' }}>
                Founder, Medha Compass Career Guidance
              </span>
            </div>

            <p
              className="text-[#4a6872] mb-5"
              style={{ fontFamily: 'var(--font-body)', lineHeight: 1.8 }}
            >
              Swathi Kadur is an accomplished education leader with more than{' '}
              <strong className="text-[#0f2028]">18 years of experience</strong> in career
              guidance, educational leadership, counselling, curriculum development, and
              student development across India, the United States, and Trinidad and Tobago.
            </p>
            <p
              className="text-[#4a6872] mb-8"
              style={{ fontFamily: 'var(--font-body)', lineHeight: 1.8 }}
            >
              Through Medha Compass, Swathi works closely with students in Grades 8 to 12,
              partnering with schools and families to identify strengths, explore emerging
              career pathways, align subject choices with long-term goals, and build
              personalised academic and career roadmaps.
            </p>

            {/* International experience */}
            <div className="flex gap-2 mb-8">
              {countries.map((c) => (
                <span
                  key={c}
                  className="px-3 py-1.5 text-xs border border-[#1a7a8a]/25 text-[#1a7a8a] rounded-sm"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  🌐 {c}
                </span>
              ))}
            </div>

            {/* Roles */}
            <div className="mb-6">
              <h4
                className="text-[#0f2028] mb-3 text-xs tracking-[0.15em] uppercase"
                style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}
              >
                Leadership Roles
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {roles.map((r) => (
                  <div key={r} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#e8502a] shrink-0 mt-1.5" />
                    <span className="text-[#4a6872] text-xs" style={{ fontFamily: 'var(--font-body)', lineHeight: 1.6 }}>
                      {r}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Qualifications */}
            <div className="mb-10">
              <h4
                className="text-[#0f2028] mb-3 text-xs tracking-[0.15em] uppercase"
                style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}
              >
                Qualifications &amp; Certifications
              </h4>
              <div className="flex flex-col gap-2">
                {credentials.map((c) => (
                  <div key={c} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1a7a8a] shrink-0 mt-1.5" />
                    <span className="text-[#4a6872] text-xs" style={{ fontFamily: 'var(--font-body)', lineHeight: 1.6 }}>
                      {c}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="#contact"
              className="inline-block bg-[#1a7a8a] hover:bg-[#155f6e] text-white px-8 py-4 text-sm transition-colors rounded-sm"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Book a Session with Swathi
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

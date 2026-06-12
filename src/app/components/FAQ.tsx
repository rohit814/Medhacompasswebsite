import { useState } from 'react';

const faqs = [
  {
    q: 'What grade should my child start career counselling?',
    a: "Medha Compass works with students from Grade 8 upward. Grade 8–9 is ideal for broad exploration and subject-choice preparation. Grade 10–11 focuses on narrowing down and planning for university applications. Grade 12 support centres on final decisions and application strategy. The earlier you start, the more options remain open.",
  },
  {
    q: 'What does the counselling process look like?',
    a: "Swathi follows a structured process: Intake + Context → Psychometric Assessment(s) → 1:1 Student Counselling → Strengths & Interests Mapping → Career Pathway Exploration → Subject/Stream Selection → University + Course Planning → Career Pathway Report → Year-wise Development Plan → Parent Consultations throughout.",
  },
  {
    q: 'Do both the student and parent need to attend sessions?',
    a: "Parent consultations are built into the process as a key component. The assessment debrief and goal-setting sessions work best with both present. However, individual sessions with just the student are available when a teenager needs a private space to explore ideas. We discuss the best format during the initial discovery call.",
  },
  {
    q: 'How is Medha Compass different from a school counsellor?',
    a: "School counsellors typically manage hundreds of students and cover discipline, mental health, and academics. Swathi dedicates focused one-on-one time exclusively to career development, uses validated psychometric tools, and produces a personalised written Career Pathway Report and Year-wise Development Plan — resources schools rarely have capacity to provide.",
  },
  {
    q: 'What psychometric assessments does Swathi use?',
    a: "Swathi uses a combination of validated assessments suited to the student's grade and context. These cover interests, personality type, values, cognitive strengths, and learning style. The results are interpreted in a dedicated debrief session with the student and parents to ensure the findings are meaningful and actionable.",
  },
  {
    q: 'Does Swathi work with schools as well as individual families?',
    a: "Yes. Medha Compass offers both individual family programmes and school-level services including Career Awareness Workshops, Grade 8–12 Career Readiness Programs, Parent Guidance Workshops, School Career Guidance Frameworks, Teacher Capacity Building, and School Leadership Consulting.",
  },
  {
    q: 'How do I get started?',
    a: "Fill in the enquiry form below or call/email directly. Swathi will schedule a free 30-minute discovery call to understand your child's situation, answer your questions, and suggest the most appropriate next step. There is no obligation to proceed.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-[#f8fafb]">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid md:grid-cols-3 gap-16">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#e8502a]" />
              <span className="text-[#e8502a] text-xs tracking-[0.2em] uppercase" style={{ fontFamily: 'var(--font-body)' }}>
                FAQ
              </span>
            </div>
            <h2
              className="text-[#0f2028] mb-6"
              style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 600, lineHeight: 1.2 }}
            >
              Questions parents ask most
            </h2>
            <p className="text-[#4a6872] text-sm mb-8" style={{ fontFamily: 'var(--font-body)', lineHeight: 1.8 }}>
              Can't find what you're looking for? Send Swathi a message and she'll get
              back to you within one business day.
            </p>
            <a
              href="#contact"
              className="inline-block border border-[#1a7a8a] text-[#1a7a8a] hover:bg-[#1a7a8a] hover:text-white px-6 py-3 text-sm transition-all duration-200 rounded-sm"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Ask a question →
            </a>

            {/* Contact quick-links */}
            <div className="mt-10 p-6 bg-[#e6f3f5] rounded-sm border border-[#1a7a8a]/15">
              <div className="text-[#1a7a8a] text-xs tracking-wide uppercase mb-4" style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}>
                Contact Swathi directly
              </div>
              <div className="flex flex-col gap-3">
                <a href="mailto:swathi.medhacompass@gmail.com" className="text-[#0f2028] text-xs hover:text-[#1a7a8a] transition-colors" style={{ fontFamily: 'var(--font-body)' }}>
                  📧 swathi.medhacompass@gmail.com
                </a>
                <a href="tel:+917619343941" className="text-[#0f2028] text-xs hover:text-[#1a7a8a] transition-colors" style={{ fontFamily: 'var(--font-body)' }}>
                  📞 +91 76193 43941
                </a>
                <p className="text-[#4a6872] text-xs" style={{ fontFamily: 'var(--font-body)', lineHeight: 1.6 }}>
                  📍 Bengaluru, Karnataka<br />
                  Online sessions available nationwide
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="flex flex-col divide-y divide-[#1a7a8a]/10">
              {faqs.map((faq, i) => (
                <div key={i} className="py-5">
                  <button
                    className="w-full text-left flex items-start justify-between gap-4 group"
                    onClick={() => setOpen(open === i ? null : i)}
                  >
                    <span
                      className="text-[#0f2028] group-hover:text-[#1a7a8a] transition-colors"
                      style={{ fontFamily: 'var(--font-body)', fontWeight: 500, lineHeight: 1.5 }}
                    >
                      {faq.q}
                    </span>
                    <span
                      className="shrink-0 w-6 h-6 flex items-center justify-center border border-[#0f2028]/15 text-[#4a6872] transition-all duration-200 mt-0.5 rounded-full"
                      style={{ transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)' }}
                    >
                      +
                    </span>
                  </button>
                  {open === i && (
                    <p
                      className="text-[#4a6872] mt-4 pr-10"
                      style={{ fontFamily: 'var(--font-body)', lineHeight: 1.8, fontSize: '0.95rem' }}
                    >
                      {faq.a}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

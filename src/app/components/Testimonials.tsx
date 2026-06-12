import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    quote:
      "Before working with Swathi, my daughter had no idea what she wanted to do after school. After just a few sessions, she had a clear direction and the confidence to pursue it. The career roadmap document was incredibly detailed and practical.",
    name: 'Priya R.',
    role: 'Parent of Grade 12 student, Bengaluru',
    avatar: 'PR',
    color: '#1a7a8a',
    outcome: 'Engineering stream confirmed with university shortlist',
  },
  {
    id: 2,
    quote:
      "Swathi's approach is different — she actually listens to the student, not just the parent. My son went from feeling completely lost to having a clear three-year plan. The psychometric assessment opened his eyes to strengths he didn't know he had.",
    name: 'Anand M.',
    role: 'Parent of Grade 10 student',
    avatar: 'AM',
    color: '#2d8a6a',
    outcome: 'Shifted to Commerce stream with data science focus',
  },
  {
    id: 3,
    quote:
      "As a Grade 9 student I was nervous about subject choices. Swathi explained everything in a way that made sense to me — not just jargon. I now feel confident about my path and actually look forward to my subjects.",
    name: 'Riya S.',
    role: 'Student, Grade 9',
    avatar: 'RS',
    color: '#e8502a',
    outcome: 'Clear subject plan and year-wise development tracker',
  },
  {
    id: 4,
    quote:
      "The Harvard-level expertise Swathi brings combined with her genuine warmth makes all the difference. Our twins both went through the programme and came out with completely different but equally well-defined roadmaps.",
    name: 'Kavitha N.',
    role: 'Parent of twins, Grade 11',
    avatar: 'KN',
    color: '#7a4a1a',
    outcome: 'Dual personalised career roadmaps for both students',
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section id="testimonials" className="py-24 bg-[#0f2028]">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#e8502a]" />
              <span className="text-[#e8502a] text-xs tracking-[0.2em] uppercase" style={{ fontFamily: 'var(--font-body)' }}>
                Parent &amp; Student Stories
              </span>
            </div>
            <h2 className="text-white" style={{ fontFamily: 'var(--font-display)', fontSize: '2.4rem', fontWeight: 600 }}>
              Real families, real outcomes
            </h2>
          </div>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="transition-all duration-300"
                style={{
                  width: i === active ? '2.5rem' : '0.5rem',
                  height: '0.5rem',
                  backgroundColor: i === active ? '#e8502a' : 'rgba(255,255,255,0.2)',
                  borderRadius: '99px',
                }}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div className="md:col-span-2 bg-white/6 border border-white/10 p-10 rounded-sm">
            <div className="text-[#5cc8d8] mb-6" style={{ fontSize: '2rem', lineHeight: 1 }}>❝</div>
            <p
              className="text-white/85 mb-8"
              style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', lineHeight: 1.75, fontStyle: 'italic' }}
            >
              {t.quote}
            </p>
            <div className="flex items-center gap-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs shrink-0"
                style={{ backgroundColor: t.color, fontFamily: 'var(--font-body)' }}
              >
                {t.avatar}
              </div>
              <div>
                <div className="text-white" style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}>
                  {t.name}
                </div>
                <div className="text-white/45 text-xs mt-0.5" style={{ fontFamily: 'var(--font-body)' }}>
                  {t.role}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center bg-[#e8502a]/18 border border-[#e8502a]/30 p-8 rounded-sm">
            <div className="text-[#ff8a6a] text-xs tracking-[0.15em] uppercase mb-3" style={{ fontFamily: 'var(--font-body)' }}>
              Outcome
            </div>
            <p className="text-white" style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 600, lineHeight: 1.5 }}>
              {t.outcome}
            </p>
            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="text-white/45 text-xs mb-1" style={{ fontFamily: 'var(--font-body)' }}>
                Overall satisfaction
              </div>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s} className="text-[#e8502a]">★</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {testimonials.map((item, i) => (
            <button
              key={item.id}
              onClick={() => setActive(i)}
              className="text-left p-4 border transition-all duration-200 rounded-sm"
              style={{
                borderColor: i === active ? '#e8502a' : 'rgba(255,255,255,0.08)',
                backgroundColor: i === active ? 'rgba(232,80,42,0.10)' : 'rgba(255,255,255,0.03)',
              }}
            >
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs mb-3"
                style={{ backgroundColor: item.color, fontFamily: 'var(--font-body)' }}
              >
                {item.avatar}
              </div>
              <div className="text-white/80 text-xs" style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}>
                {item.name}
              </div>
              <div className="text-white/35 text-xs mt-0.5" style={{ fontFamily: 'var(--font-body)' }}>
                {item.role}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

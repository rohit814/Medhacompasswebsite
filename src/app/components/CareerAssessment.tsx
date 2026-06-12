import { useState } from 'react';

const questions = [
  {
    id: 1,
    question: 'When given a free afternoon, your teen is most likely to…',
    options: [
      { label: 'Take something apart to see how it works', cluster: 'investigative' },
      { label: 'Sketch, write, or make something creative', cluster: 'artistic' },
      { label: 'Organise their room or plan out a schedule', cluster: 'conventional' },
      { label: 'Hang out and talk with friends or family', cluster: 'social' },
    ],
  },
  {
    id: 2,
    question: 'Which school subject do they talk about most at home?',
    options: [
      { label: 'Science or Mathematics', cluster: 'investigative' },
      { label: 'Art, Drama, or English', cluster: 'artistic' },
      { label: 'Economics or Business Studies', cluster: 'enterprising' },
      { label: 'History or Social Sciences', cluster: 'social' },
    ],
  },
  {
    id: 3,
    question: 'When facing a difficult problem, they usually…',
    options: [
      { label: 'Research every angle before deciding', cluster: 'investigative' },
      { label: 'Go with their gut and improvise', cluster: 'artistic' },
      { label: 'Make a pros-and-cons list', cluster: 'conventional' },
      { label: 'Ask a friend or teacher for their take', cluster: 'social' },
    ],
  },
  {
    id: 4,
    question: 'Their ideal future role would involve…',
    options: [
      { label: 'Building or inventing things', cluster: 'realistic' },
      { label: 'Leading a team toward a big goal', cluster: 'enterprising' },
      { label: 'Helping people through tough times', cluster: 'social' },
      { label: 'Creating art, music, or stories', cluster: 'artistic' },
    ],
  },
];

const clusterResults: Record<string, { title: string; careers: string[]; color: string }> = {
  investigative: {
    title: 'The Analytical Mind',
    careers: ['Medicine & Research', 'Engineering', 'Data Science', 'Architecture'],
    color: '#1a7a8a',
  },
  artistic: {
    title: 'The Creative Spirit',
    careers: ['Design & UX', 'Filmmaking', 'Journalism', 'Performing Arts'],
    color: '#e8502a',
  },
  social: {
    title: 'The People Person',
    careers: ['Psychology', 'Teaching', 'Social Work', 'Healthcare'],
    color: '#2d8a6a',
  },
  enterprising: {
    title: 'The Natural Leader',
    careers: ['Entrepreneurship', 'Law', 'Management', 'Marketing'],
    color: '#7a4a1a',
  },
  conventional: {
    title: 'The Structured Thinker',
    careers: ['Finance & Accounting', 'Project Management', 'Operations', 'Law'],
    color: '#3a5a8a',
  },
  realistic: {
    title: 'The Builder',
    careers: ['Engineering', 'Architecture', 'Sports Science', 'Technology'],
    color: '#5a3a8a',
  },
};

const services = [
  { step: '01', title: 'Intake + Context', desc: 'Understanding your child\'s background, interests, and aspirations.' },
  { step: '02', title: 'Psychometric Assessment', desc: 'Validated tools to map strengths, interests, values, and learning style.' },
  { step: '03', title: 'Strengths & Interests Mapping', desc: '1:1 counselling sessions to interpret results and explore fit.' },
  { step: '04', title: 'Career Pathway Report', desc: 'A written roadmap with top career paths, subject guidance, and a year-wise development plan.' },
];

export function CareerAssessment() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<string | null>(null);

  const handleAnswer = (cluster: string) => {
    const next = [...answers, cluster];
    setAnswers(next);
    if (next.length < questions.length) {
      setCurrentQ((q) => q + 1);
    } else {
      const freq = next.reduce<Record<string, number>>((acc, c) => {
        acc[c] = (acc[c] || 0) + 1;
        return acc;
      }, {});
      const top = Object.entries(freq).sort((a, b) => b[1] - a[1])[0][0];
      setResult(top);
    }
  };

  const reset = () => {
    setCurrentQ(0);
    setAnswers([]);
    setResult(null);
  };

  const progress = (answers.length / questions.length) * 100;
  const q = questions[currentQ];
  const res = result ? clusterResults[result] : null;

  return (
    <section id="assessment" className="py-24 bg-[#f8fafb]">
      <div className="max-w-6xl mx-auto px-8">
        <div className="max-w-xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#e8502a]" />
            <span className="text-[#e8502a] text-xs tracking-[0.2em] uppercase" style={{ fontFamily: 'var(--font-body)' }}>
              Career Assessment
            </span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.4rem', fontWeight: 600, color: '#0f2028' }}>
            What career path fits your child?
          </h2>
          <p className="text-[#4a6872] mt-4" style={{ fontFamily: 'var(--font-body)', lineHeight: 1.8 }}>
            Answer 4 quick questions for an initial direction. Swathi's full psychometric assessment
            goes much deeper — mapping strengths, interests, values, and learning style.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Quiz card */}
          <div className="bg-white border border-[#1a7a8a]/15 p-10 rounded-sm shadow-sm">
            {!result ? (
              <>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-[#4a6872]" style={{ fontFamily: 'var(--font-body)' }}>
                    Question {answers.length + 1} of {questions.length}
                  </span>
                  <span className="text-xs text-[#4a6872]" style={{ fontFamily: 'var(--font-body)' }}>
                    {Math.round(progress)}%
                  </span>
                </div>
                <div className="w-full h-1 bg-[#edf4f6] mb-8 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#1a7a8a] transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <h3
                  className="mb-8 text-[#0f2028]"
                  style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 600, lineHeight: 1.4 }}
                >
                  {q.question}
                </h3>

                <div className="flex flex-col gap-3">
                  {q.options.map((opt) => (
                    <button
                      key={opt.label}
                      onClick={() => handleAnswer(opt.cluster)}
                      className="text-left px-5 py-4 border border-[#1a7a8a]/15 hover:border-[#1a7a8a] hover:bg-[#e6f3f5] text-[#0f2028] text-sm transition-all duration-200 rounded-sm"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <div>
                <div
                  className="w-12 h-12 rounded-full mb-6 flex items-center justify-center"
                  style={{ backgroundColor: res!.color + '18' }}
                >
                  <span style={{ fontSize: '1.4rem' }}>✦</span>
                </div>
                <div className="text-xs tracking-[0.15em] uppercase mb-2" style={{ fontFamily: 'var(--font-body)', color: res!.color }}>
                  Your child's profile
                </div>
                <h3
                  className="mb-4"
                  style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 600, color: '#0f2028' }}
                >
                  {res!.title}
                </h3>
                <p className="text-[#4a6872] mb-6 text-sm" style={{ fontFamily: 'var(--font-body)', lineHeight: 1.75 }}>
                  Career areas that align well with your child's natural strengths:
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {res!.careers.map((c) => (
                    <span
                      key={c}
                      className="px-3 py-1.5 text-xs rounded-sm"
                      style={{ fontFamily: 'var(--font-body)', backgroundColor: res!.color + '15', color: res!.color }}
                    >
                      {c}
                    </span>
                  ))}
                </div>
                <p className="text-[#4a6872] text-xs mb-6" style={{ fontFamily: 'var(--font-body)', lineHeight: 1.7 }}>
                  This is a starting point. Swathi's full psychometric assessment provides a
                  comprehensive career roadmap tailored specifically to your child.
                </p>
                <div className="flex gap-3">
                  <a
                    href="#contact"
                    className="bg-[#1a7a8a] hover:bg-[#155f6e] text-white px-6 py-3 text-sm transition-colors rounded-sm"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Book a Full Assessment
                  </a>
                  <button
                    onClick={reset}
                    className="border border-[#1a7a8a]/25 hover:border-[#1a7a8a]/50 text-[#4a6872] px-6 py-3 text-sm transition-colors rounded-sm"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Retake Quiz
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Process */}
          <div>
            <h3
              className="mb-8 text-[#0f2028]"
              style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 600 }}
            >
              Swathi's Counselling Process
            </h3>
            <div className="flex flex-col gap-6">
              {services.map(({ step, title, desc }) => (
                <div key={step} className="flex gap-5">
                  <div
                    className="shrink-0 text-[#e8502a]"
                    style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 600, paddingTop: '2px', minWidth: '1.5rem' }}
                  >
                    {step}
                  </div>
                  <div>
                    <div className="text-[#0f2028] mb-1" style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}>
                      {title}
                    </div>
                    <div className="text-[#4a6872] text-sm" style={{ fontFamily: 'var(--font-body)', lineHeight: 1.7 }}>
                      {desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 bg-[#e6f3f5] border border-[#1a7a8a]/20 rounded-sm">
              <p
                className="text-[#1a7a8a] italic"
                style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', lineHeight: 1.7 }}
              >
                "Swathi's counselling approach includes psychometric assessments, one-on-one
                guidance, parent consultations, career pathway reports, and year-wise
                development plans."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

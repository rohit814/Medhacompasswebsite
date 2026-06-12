import { useState } from 'react';

type FormData = {
  parentName: string;
  studentName: string;
  grade: string;
  email: string;
  phone: string;
  concern: string;
  message: string;
};

const initialForm: FormData = {
  parentName: '',
  studentName: '',
  grade: '',
  email: '',
  phone: '',
  concern: '',
  message: '',
};

const concerns = [
  'Psychometric Assessment & Profiling',
  'Subject / Stream Selection (Grade 9–10)',
  'Career Pathway Exploration',
  'University & Course Planning',
  'Career Awareness Workshop (school)',
  'Parent Guidance Workshop',
  'School Career Guidance Framework',
  'Other',
];

export function LeadForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = (): boolean => {
    const e: Partial<FormData> = {};
    if (!form.parentName.trim()) e.parentName = 'Required';
    if (!form.studentName.trim()) e.studentName = 'Required';
    if (!form.grade) e.grade = 'Required';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid email required';
    if (!form.concern) e.concern = 'Please select a topic';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (validate()) setSubmitted(true);
  };

  const inputClass =
    'w-full px-4 py-3 bg-white border border-[#1a7a8a]/15 focus:border-[#1a7a8a] focus:outline-none text-[#0f2028] placeholder:text-[#4a6872]/40 transition-colors duration-200 text-sm rounded-sm';

  if (submitted) {
    return (
      <section id="contact" className="py-24 bg-[#0f2028]">
        <div className="max-w-lg mx-auto px-8 text-center">
          <div className="w-16 h-16 rounded-full bg-[#1a7a8a]/25 flex items-center justify-center mx-auto mb-6">
            <span className="text-[#5cc8d8] text-2xl">✓</span>
          </div>
          <h2
            className="text-white mb-4"
            style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 600 }}
          >
            Swathi will be in touch soon
          </h2>
          <p className="text-white/55 mb-8" style={{ fontFamily: 'var(--font-body)', lineHeight: 1.8 }}>
            Thank you, {form.parentName}. Swathi will review your message and contact you within
            one business day to schedule your free discovery call.
          </p>
          <button
            onClick={() => { setSubmitted(false); setForm(initialForm); }}
            className="border border-white/20 hover:border-white/45 text-white/65 hover:text-white px-6 py-3 text-sm transition-all rounded-sm"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Submit another enquiry
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-[#0f2028]">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid md:grid-cols-5 gap-16">
          {/* Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#e8502a]" />
              <span className="text-[#e8502a] text-xs tracking-[0.2em] uppercase" style={{ fontFamily: 'var(--font-body)' }}>
                Get in touch
              </span>
            </div>
            <h2
              className="text-white mb-6"
              style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 600, lineHeight: 1.2 }}
            >
              Start with a free discovery call
            </h2>
            <p
              className="text-white/55 mb-10"
              style={{ fontFamily: 'var(--font-body)', lineHeight: 1.8, fontSize: '0.95rem' }}
            >
              Fill in the form and Swathi will contact you within one business day to schedule
              a 30-minute call — no commitment, no cost.
            </p>

            <div className="flex flex-col gap-6">
              {[
                { icon: '📞', label: 'Phone', value: '+91 76193 43941', href: 'tel:+917619343941' },
                { icon: '✉️', label: 'Email', value: 'swathi.medhacompass@gmail.com', href: 'mailto:swathi.medhacompass@gmail.com' },
                { icon: '📍', label: 'Address', value: 'Pattanagere Main Road, BHEL Layout\nRajarajeshwari Nagar, Bengaluru 560098', href: undefined },
                { icon: '🌐', label: 'Online sessions', value: 'Available nationwide across India', href: undefined },
              ].map(({ icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <span className="text-lg shrink-0 mt-0.5">{icon}</span>
                  <div>
                    <div className="text-white/35 text-xs tracking-wide uppercase mb-0.5" style={{ fontFamily: 'var(--font-body)' }}>
                      {label}
                    </div>
                    {href ? (
                      <a href={href} className="text-white/75 hover:text-white text-sm transition-colors" style={{ fontFamily: 'var(--font-body)' }}>
                        {value}
                      </a>
                    ) : (
                      <div className="text-white/75 text-sm whitespace-pre-line" style={{ fontFamily: 'var(--font-body)' }}>
                        {value}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/55 text-xs mb-1.5 tracking-wide" style={{ fontFamily: 'var(--font-body)' }}>
                    Your name *
                  </label>
                  <input
                    type="text"
                    value={form.parentName}
                    onChange={(e) => setForm({ ...form, parentName: e.target.value })}
                    placeholder="Parent / guardian name"
                    className={inputClass}
                  />
                  {errors.parentName && <span className="text-red-400 text-xs mt-1" style={{ fontFamily: 'var(--font-body)' }}>{errors.parentName}</span>}
                </div>
                <div>
                  <label className="block text-white/55 text-xs mb-1.5 tracking-wide" style={{ fontFamily: 'var(--font-body)' }}>
                    Student's name *
                  </label>
                  <input
                    type="text"
                    value={form.studentName}
                    onChange={(e) => setForm({ ...form, studentName: e.target.value })}
                    placeholder="Student's name"
                    className={inputClass}
                  />
                  {errors.studentName && <span className="text-red-400 text-xs mt-1" style={{ fontFamily: 'var(--font-body)' }}>{errors.studentName}</span>}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/55 text-xs mb-1.5 tracking-wide" style={{ fontFamily: 'var(--font-body)' }}>
                    Current grade *
                  </label>
                  <select value={form.grade} onChange={(e) => setForm({ ...form, grade: e.target.value })} className={inputClass}>
                    <option value="">Select grade…</option>
                    {['Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'].map((g) => (
                      <option key={g} value={g}>{g}</option>
                    ))}
                  </select>
                  {errors.grade && <span className="text-red-400 text-xs mt-1" style={{ fontFamily: 'var(--font-body)' }}>{errors.grade}</span>}
                </div>
                <div>
                  <label className="block text-white/55 text-xs mb-1.5 tracking-wide" style={{ fontFamily: 'var(--font-body)' }}>
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+91 ..."
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/55 text-xs mb-1.5 tracking-wide" style={{ fontFamily: 'var(--font-body)' }}>
                  Email address *
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  className={inputClass}
                />
                {errors.email && <span className="text-red-400 text-xs mt-1" style={{ fontFamily: 'var(--font-body)' }}>{errors.email}</span>}
              </div>

              <div>
                <label className="block text-white/55 text-xs mb-1.5 tracking-wide" style={{ fontFamily: 'var(--font-body)' }}>
                  What do you need help with? *
                </label>
                <select value={form.concern} onChange={(e) => setForm({ ...form, concern: e.target.value })} className={inputClass}>
                  <option value="">Select a service…</option>
                  {concerns.map((c) => (<option key={c} value={c}>{c}</option>))}
                </select>
                {errors.concern && <span className="text-red-400 text-xs mt-1" style={{ fontFamily: 'var(--font-body)' }}>{errors.concern}</span>}
              </div>

              <div>
                <label className="block text-white/55 text-xs mb-1.5 tracking-wide" style={{ fontFamily: 'var(--font-body)' }}>
                  Tell us more (optional)
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Any context that would help Swathi prepare for your call…"
                  rows={4}
                  className={inputClass}
                  style={{ resize: 'vertical' }}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#e8502a] hover:bg-[#d04420] text-white py-4 text-sm font-medium transition-colors duration-200 mt-2 rounded-sm"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Request My Free Discovery Call with Swathi
              </button>

              <p className="text-white/25 text-xs text-center" style={{ fontFamily: 'var(--font-body)' }}>
                No spam, ever. Your information is kept strictly private.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Hero } from './components/Hero';
import { CareerAssessment } from './components/CareerAssessment';
import { Testimonials } from './components/Testimonials';
import { CounselorProfile } from './components/CounselorProfile';
import { FAQ } from './components/FAQ';
import { LeadForm } from './components/LeadForm';
import { CTA, Footer } from './components/CTA';

export default function App() {
  return (
    <div className="min-h-screen" style={{ fontFamily: 'var(--font-body)' }}>
      <Hero />
      <CareerAssessment />
      <Testimonials />
      <CounselorProfile />
      <FAQ />
      <LeadForm />
      <CTA />
      <Footer />
    </div>
  );
}

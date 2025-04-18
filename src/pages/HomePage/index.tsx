import { MainContent } from '@/pages/HomePage/MainContent';
import { Partners } from '@/pages/HomePage/Partners';
import { Services } from '@/pages/HomePage/Services';
import { CTABlock } from '@/pages/HomePage/CTABlock';
import { CaseStudies } from '@/pages/HomePage/CaseStudies';
import { WorkingProcess } from '@/pages/HomePage/WorkingProcess';
import { Team } from '@/pages/HomePage/Team';
import { Testimonials } from '@/pages/HomePage/Testimonials';
import { ContactUs } from '@/pages/HomePage/ContactUs';

export function HomePage() {
  return (
    <main className="flex flex-col justify-center">
      <MainContent />
      <Partners />
      <Services />
      <CTABlock />
      <CaseStudies />
      <WorkingProcess />
      <Team />
      <Testimonials />
      <ContactUs />
    </main>
  );
}

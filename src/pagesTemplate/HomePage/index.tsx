import { MainContent } from '@/pagesTemplate/HomePage/MainContent';
import { Partners } from '@/pagesTemplate/HomePage/Partners';
import { Services } from '@/pagesTemplate/HomePage/Services';
import { CTABlock } from '@/pagesTemplate/HomePage/CTABlock';
import { CaseStudies } from '@/pagesTemplate/HomePage/CaseStudies';
import { WorkingProcess } from '@/pagesTemplate/HomePage/WorkingProcess';
import { Team } from '@/pagesTemplate/HomePage/Team';
import { Testimonials } from '@/pagesTemplate/HomePage/Testimonials';
import { ContactUs } from '@/pagesTemplate/HomePage/ContactUs';

export default function HomePage() {
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

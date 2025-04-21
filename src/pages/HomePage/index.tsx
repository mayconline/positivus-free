import { MainContent } from '@/pages/HomePage/MainContent';
import { Partners } from '@/pages/HomePage/Partners';
import { Services } from '@/pages/HomePage/Services';
import { CTABlock } from '@/pages/HomePage/CTABlock';
import { CaseStudies } from '@/pages/HomePage/CaseStudies';
import { WorkingProcess } from '@/pages/HomePage/WorkingProcess';
import { Team } from '@/pages/HomePage/Team';
import { Testimonials } from '@/pages/HomePage/Testimonials';
import { ContactUs } from '@/pages/HomePage/ContactUs';
import type { ContactUsFormResponse } from '@/types';
import { handleNotify, simulatePromise } from '@/utils';

export function HomePage() {
  const handleSubmitForm = async (
    prevActionState: ContactUsFormResponse,
    formData: FormData
  ): Promise<ContactUsFormResponse> => {
    'use server';

    try {
      const contactReason = formData.get('contact-reason');
      const name = formData.get('name');
      const email = formData.get('email');
      const message = formData.get('message');

      console.log('Raw Form Data', {
        contactReason,
        name,
        email,
        message,
      });

      await simulatePromise();

      return {
        status: 'Success',
        message: 'Form submitted successfully!',
      };
    } catch (error) {
      return {
        status: 'Error',
        message: 'An error occurred while submitting the form.',
      };
    }
  };

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
      <ContactUs onSubmitForm={handleSubmitForm} />
    </main>
  );
}

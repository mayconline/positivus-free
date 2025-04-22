import Image from 'next/image';
import { SectionTitle } from '@/components';
import ContactUSIllustration from '@/assets/img/contact-us-illustration.svg';
import { ContactUsForm } from '@/pages/HomePage/ContactUs/ContactUsForm';

export const ContactUs = () => {
  return (
    <SectionTitle
      title="Contact Us"
      description="Connect with Us: Let's Discuss Your Digital Marketing Needs"
    >
      <main className="relative flex justify-between items-center bg-grey rounded-5xl pt-14 pb-20 px-12 lg:px-24 overflow-hidden">
        <ContactUsForm />

        <Image
          src={ContactUSIllustration}
          alt="circle with stars next to it"
          className="absolute top-1/2 -right-80 -translate-y-1/2"
        />
      </main>
    </SectionTitle>
  );
};

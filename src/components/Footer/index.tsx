import Image from 'next/image';
import {
  MenuBar,
  Paragraph,
  ParagraphAsVariant,
  ParagraphSizeVariant,
  SocialBar,
} from '@/components';
import { SubscribeForm } from '@/components/Footer/SubscribeForm';
import { handleSubscribe } from '@/services/api';

export const Footer = () => {
  return (
    <footer className="flex flex-col bg-dark rounded-tl-5xl rounded-tr-5xl gap-12 pt-14 px-16 pb-12">
      <nav className="flex justify-between items-center ">
        <Image
          src="/logo-secondary.svg"
          alt="Positivus logo"
          width={180}
          height={29}
        />
        <MenuBar
          className="text-white underline"
          size={ParagraphSizeVariant.Small}
          isFooter
        />
        <SocialBar />
      </nav>
      <main className="flex items-center justify-between gap-10">
        <section className="flex flex-1 flex-col gap-5 w-1/2">
          <Paragraph
            as={ParagraphAsVariant.H4}
            className="font-medium bg-green w-fit rounded-lg"
          >
            Contact us:
          </Paragraph>
          <Paragraph size={ParagraphSizeVariant.Small} className="text-white">
            Email: info@positivus.com
          </Paragraph>
          <Paragraph size={ParagraphSizeVariant.Small} className="text-white">
            Phone: 555-567-8901
          </Paragraph>
          <Paragraph size={ParagraphSizeVariant.Small} className="text-white">
            Address: 1234 Main St
          </Paragraph>
          <Paragraph
            size={ParagraphSizeVariant.Small}
            className="text-white -mt-6"
          >
            Moonstone City, Stardust State 12345
          </Paragraph>
        </section>
        <SubscribeForm onSubmitForm={handleSubscribe} />
      </main>
      <aside className="flex items-center gap-10">
        <Paragraph size={ParagraphSizeVariant.Small} className="text-white">
          © 2023 Positivus. All Rights Reserved.
        </Paragraph>
        <Paragraph
          size={ParagraphSizeVariant.Small}
          className="text-white underline"
        >
          Privacy Policy
        </Paragraph>
      </aside>
    </footer>
  );
};

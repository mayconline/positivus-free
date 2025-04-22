import Image from 'next/image';
import {
  Divider,
  MenuList,
  Paragraph,
  ParagraphAsVariant,
  ParagraphSizeVariant,
  SocialBar,
} from '@/components';
import { SubscribeForm } from '@/components/Footer/SubscribeForm';

export const Footer = () => {
  return (
    <footer className="flex flex-col bg-dark rounded-tl-5xl rounded-tr-5xl gap-12 pt-14 px-16 pb-12">
      <nav className="flex flex-col xl:flex-row justify-between items-center gap-10 ">
        <Image
          src="/logo-secondary.svg"
          alt="Positivus logo"
          width={180}
          height={29}
        />
        <MenuList
          className="text-white underline"
          size={ParagraphSizeVariant.Small}
          isFooter
        />
        <SocialBar />
      </nav>
      <main className="flex flex-col xl:flex-row items-center justify-between gap-10">
        <section className="flex flex-wrap lg:flex-nowrap flex-1 flex-col gap-5 lg:w-1/2 text-center lg:text-left">
          <Paragraph
            as={ParagraphAsVariant.H4}
            className="font-medium bg-green rounded-lg w-fit"
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
        <SubscribeForm />
      </main>

      <Divider />

      <aside className="flex flex-col lg:flex-row items-center gap-10">
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

import Image from 'next/image';
import {
  Paragraph,
  ParagraphSizeVariant,
  Button,
  ButtonVariant,
  ParagraphAsVariant,
} from '@/components';
import HomeIllustration from '@/assets/img/home-illustration.svg';

export const MainContent = () => {
  return (
    <section className="flex justify-between items-center my-16 gap-[108.54px]">
      <article className="flex flex-col w-1/2">
        <Paragraph
          as={ParagraphAsVariant.H1}
          size={ParagraphSizeVariant.ExtraLarge}
        >
          Navigating the digital landscape for success
        </Paragraph>
        <Paragraph className="py-9">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </Paragraph>

        <Button variant={ButtonVariant.Secondary}>Book a consultation</Button>
      </article>

      <Image
        src={HomeIllustration}
        alt="speaker with several illustrative icons around it"
        width={600.46}
        height={515}
        priority
      />
    </section>
  );
};

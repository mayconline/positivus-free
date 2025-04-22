import Image from 'next/image';
import {
  Paragraph,
  Button,
  ParagraphSizeVariant,
  ButtonVariant,
} from '@/components';

import CTABlockIllustation from '@/assets/img/cta-block-illustation.svg';

export const CTABlock = () => {
  return (
    <section className="flex justify-between items-center bg-grey rounded-5xl relative p-14">
      <article className="flex flex-col w-[500px]">
        <Paragraph size={ParagraphSizeVariant.Large}>
          Let’s make things happen
        </Paragraph>

        <Paragraph size={ParagraphSizeVariant.Small} className="my-6">
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </Paragraph>

        <Button
          variant={ButtonVariant.Secondary}
          className="w-full lg:w-[288px]"
        >
          Get your free proposal
        </Button>
      </article>

      <Image
        src={CTABlockIllustation}
        className="absolute -top-6 -bottom-8 right-32 hidden lg:block"
        alt="black circle with 3 stars next to it"
        width={359}
        height={394.27}
      />
    </section>
  );
};

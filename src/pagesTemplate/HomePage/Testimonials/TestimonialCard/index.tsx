import { Paragraph, ParagraphSizeVariant } from '@/components';

import BgTestimonal from '@/assets/img/bg-testimonial.svg';
import Image from 'next/image';

interface TestimonialCardProps {
  content: string;
  author: string;
  position: string;
}

export const TestimonialCard = ({
  content,
  author,
  position,
}: TestimonialCardProps) => {
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <main className="bg-transparent! p-6 text-white text-center lg:w-[600px] relative">
        <Image
          src={BgTestimonal}
          alt="bg-testimonial"
          className="absolute top-0 left-0 -z-10 hidden lg:block"
        />

        <Paragraph
          className="text-white mt-4"
          size={ParagraphSizeVariant.Small}
        >
          {`"${content}"`}
        </Paragraph>

        <span className="flex flex-col mt-24 w-full text-left">
          <Paragraph className="text-green" size={ParagraphSizeVariant.Small}>
            {author}
          </Paragraph>
          <Paragraph className="text-white" size={ParagraphSizeVariant.Small}>
            {position}
          </Paragraph>
        </span>
      </main>
    </div>
  );
};

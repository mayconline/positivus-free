import {
  Paragraph,
  ParagraphAsVariant,
  ParagraphSizeVariant,
} from '@/components';

interface SectionTitleProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

export const SectionTitle = ({
  title,
  description,
  children,
}: SectionTitleProps) => {
  return (
    <section className="flex flex-col my-24">
      <header className="flex flex-col lg:flex-row items-center text-center lg:text-left mb-20 gap-5">
        <Paragraph
          as={ParagraphAsVariant.H2}
          size={ParagraphSizeVariant.SemiLarge}
          className="font-medium bg-green"
        >
          {title}
        </Paragraph>
        <Paragraph
          size={ParagraphSizeVariant.Small}
          className="lg:w-[580px] ml-10"
        >
          {description}
        </Paragraph>
      </header>

      {children}
    </section>
  );
};

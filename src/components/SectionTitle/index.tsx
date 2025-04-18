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
      <header className="flex items-center mb-20">
        <Paragraph
          as={ParagraphAsVariant.H2}
          size={ParagraphSizeVariant.SemiLarge}
          className="font-medium bg-green"
        >
          {title}
        </Paragraph>
        <Paragraph
          size={ParagraphSizeVariant.Small}
          className="w-[580px] ml-10"
        >
          {description}
        </Paragraph>
      </header>

      {children}
    </section>
  );
};

import Image from 'next/image';
import {
  Button,
  ButtonVariant,
  Divider,
  Paragraph,
  ParagraphAsVariant,
  ParagraphSizeVariant,
  SectionTitle,
} from '@/components';

import ArrowUpRightTertiary from '@/assets/icons/arrow-up-right-tertiary.svg';

const articleList = [
  'For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.',
  'For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.',
  'For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.',
];

export const CaseStudies = () => {
  return (
    <SectionTitle
      title="Case Studies"
      description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
    >
      <main className="flex flex-col lg:flex-row justify-between items-center bg-dark rounded-5xl relative p-14">
        {articleList.map((article, index) => (
          <div key={article}>
            <article className="flex flex-col w-[286px] gap-4">
              <Paragraph
                size={ParagraphSizeVariant.Small}
                className="text-white"
              >
                {article}
              </Paragraph>

              <Button
                variant={ButtonVariant.Link}
                className="w-[140px] text-green"
              >
                Learn more
                <Image
                  src={ArrowUpRightTertiary}
                  alt="arrow right up icon"
                  width={20}
                  height={20}
                />
              </Button>
            </article>

            {index !== articleList.length - 1 && (
              <Divider className="absolute top-14 ml-80 h-[186px] hidden xl:block" />
            )}
          </div>
        ))}
      </main>
    </SectionTitle>
  );
};

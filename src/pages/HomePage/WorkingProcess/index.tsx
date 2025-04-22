'use client';

import Image from 'next/image';
import { useState } from 'react';
import {
  Button,
  ButtonVariant,
  Card,
  CardVariant,
  Divider,
  DividerVariant,
  Paragraph,
  ParagraphSizeVariant,
  SectionTitle,
} from '@/components';

import MinusIcon from '@/assets/icons/minus-icon.svg';
import PlusIcon from '@/assets/icons/plus-icon.svg';
import clsx from 'clsx';

const workingProcessList = [
  {
    id: '01',
    title: 'Consultation',
    subTitle:
      'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
  },
  {
    id: '02',
    title: 'Research and Strategy Development',
    subTitle:
      'We will conduct thorough research on your industry, competitors, and target audience. Based on this research, we will develop a comprehensive marketing strategy that outlines the best approach to achieve your goals.',
  },
  {
    id: '03',
    title: 'Implementation',
    subTitle:
      'Once the strategy is approved, we will begin implementing the plan. This may include creating content, setting up advertising campaigns, and optimizing your website for search engines.',
  },
  {
    id: '04',
    title: 'Monitoring and Optimization',
    subTitle:
      'We will continuously monitor the performance of our marketing efforts and make adjustments as needed to ensure that we are achieving the best possible results.',
  },
  {
    id: '05',
    title: 'Reporting and Communication',
    subTitle:
      'We will provide regular reports on the performance of our marketing efforts, including key metrics and insights. We will also maintain open lines of communication to ensure that you are always informed and involved in the process.',
  },
  {
    id: '06',
    title: 'Continual Improvement',
    subTitle:
      'We will continue to refine our marketing strategy based on feedback and data to ensure that we are delivering the best possible results for your business.',
  },
];

export const WorkingProcess = () => {
  const [openCard, setOpenCard] = useState<string | null>(null);

  const handleSetOpenCard = (id: string) => {
    if (openCard === id) {
      setOpenCard(null);
    } else {
      setOpenCard(id);
    }
  };

  return (
    <SectionTitle
      title="Our Working Process"
      description="Step-by-Step Guide to Achieving Your Business Goals"
    >
      <main>
        {workingProcessList.map((workingProcess) => (
          <Card
            key={workingProcess.id}
            className="justify-between items-center mb-8"
            variant={
              openCard === workingProcess.id
                ? CardVariant.Secondary
                : CardVariant.Primary
            }
            onClick={() => handleSetOpenCard(workingProcess.id)}
          >
            <div className="flex flex-col w-full">
              <header className="flex items-center justify-between">
                <span className="flex items-center gap-4">
                  <Paragraph
                    size={ParagraphSizeVariant.ExtraLarge}
                    className="font-medium"
                  >
                    {workingProcess.id}
                  </Paragraph>
                  <Paragraph
                    size={ParagraphSizeVariant.Large}
                    className="font-medium"
                  >
                    {workingProcess.title}
                  </Paragraph>
                </span>

                <Button
                  variant={ButtonVariant.Link}
                  onClick={() => handleSetOpenCard(workingProcess.id)}
                  className="w-14 h-14"
                >
                  <Image
                    src={openCard === workingProcess.id ? MinusIcon : PlusIcon}
                    alt={
                      openCard === workingProcess.id
                        ? 'minus icon'
                        : 'plus icon'
                    }
                  />
                </Button>
              </header>

              <div
                className={clsx('transition-all', {
                  'hidden opacity-0': openCard !== workingProcess.id,
                  'display-block opacity-100': openCard === workingProcess.id,
                })}
              >
                <Divider variant={DividerVariant.Secondary} className="my-8" />

                <Paragraph size={ParagraphSizeVariant.Small} className="mt-4">
                  {workingProcess.subTitle}
                </Paragraph>
              </div>
            </div>
          </Card>
        ))}
      </main>
    </SectionTitle>
  );
};

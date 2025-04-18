import Image from 'next/image';

import {
  Paragraph,
  ParagraphSizeVariant,
  Card,
  CardVariant,
  Button,
  ButtonVariant,
  SectionTitle,
} from '@/components';

import EngineOpt from '@/assets/services/engine-opt.svg';
import PayperClick from '@/assets/services/payper-click.svg';
import SocialMedia from '@/assets/services/social-media.svg';
import EmailMarketing from '@/assets/services/email-marketing.svg';
import ContentCreation from '@/assets/services/content-creation.svg';
import Analytics from '@/assets/services/analytics.svg';
import ArrowUpRightPrimary from '@/assets/icons/arrow-up-right-primary.svg';
import ArrowUpRightSecondary from '@/assets/icons/arrow-up-right-secondary.svg';
import clsx from 'clsx';

const servicesList = [
  {
    src: EngineOpt,
    alt: 'Engine Optimization Logo',
    description: 'Search engine optimization',
    cardVariant: CardVariant.Primary,
    bgTitle: 'bg-green',
    icon: ArrowUpRightPrimary,
  },
  {
    src: PayperClick,
    alt: 'Payper Click Logo',
    description: 'Pay-per-click advertising',
    cardVariant: CardVariant.Secondary,
    bgTitle: 'bg-white',
    icon: ArrowUpRightPrimary,
  },
  {
    src: SocialMedia,
    alt: 'Social Media Logo',
    description: 'Social Media Marketing',
    cardVariant: CardVariant.Tertiary,
    bgTitle: 'bg-white',
    icon: ArrowUpRightSecondary,
  },
  {
    src: EmailMarketing,
    alt: 'Email Marketing Logo',
    description: 'Email Marketing',
    cardVariant: CardVariant.Primary,
    bgTitle: 'bg-green',
    icon: ArrowUpRightPrimary,
  },
  {
    src: ContentCreation,
    alt: 'Content Creation Logo',
    description: 'Content Creation',
    cardVariant: CardVariant.Secondary,
    bgTitle: 'bg-white',
    icon: ArrowUpRightPrimary,
  },
  {
    src: Analytics,
    alt: 'Analytics Logo',
    description: 'Analytics and Tracking',
    cardVariant: CardVariant.Tertiary,
    bgTitle: 'bg-green',
    icon: ArrowUpRightSecondary,
  },
];

export const Services = () => {
  return (
    <SectionTitle
      title="Services"
      description="At our digital marketing agency, we offer a range of services to
            help businesses grow and succeed online. These services include:"
    >
      <main className="grid grid-cols-2 gap-8">
        {servicesList.map((service) => (
          <Card
            key={service.description}
            variant={service.cardVariant}
            className="w-[560px] flex-row justify-between gap-8"
          >
            <div className="flex flex-col justify-between">
              <Paragraph
                className={clsx(
                  'font-medium w-full rounded-lg',
                  service.bgTitle
                )}
                size={ParagraphSizeVariant.Large}
              >
                {service.description}
              </Paragraph>

              <Button className="mt-20" variant={ButtonVariant.Link}>
                <Image src={service.icon} alt="arrow up right icon" />
                <Paragraph
                  className={clsx('ml-4', {
                    'text-white': service.cardVariant === CardVariant.Tertiary,
                  })}
                >
                  Learning more
                </Paragraph>
              </Button>
            </div>

            <Image src={service.src} alt={service.alt} />
          </Card>
        ))}
      </main>
    </SectionTitle>
  );
};

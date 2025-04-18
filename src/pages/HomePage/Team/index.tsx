import Image from 'next/image';
import {
  Button,
  ButtonVariant,
  Card,
  Divider,
  DividerVariant,
  Paragraph,
  ParagraphAsVariant,
  ParagraphSizeVariant,
  SectionTitle,
} from '@/components';

import JohnS from '@/assets/team/jonh-s.svg';
import JaneD from '@/assets/team/jane-d.svg';
import MichaelB from '@/assets/team/michael.b.svg';
import EmilyJ from '@/assets/team/emily-j.svg';
import BrianW from '@/assets/team/brian-w.svg';
import SarahK from '@/assets/team/sarah-k.svg';
import Linkedin from '@/assets/icons/linkedin-icon.svg';

export const teamList = [
  {
    title: 'John Smith',
    subTitle: 'CEO and Founder',
    description:
      '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
    image: JohnS,
  },
  {
    title: 'Jane Doe',
    subTitle: 'Director of Operations',
    description:
      '7+ years of experience in project management and team leadership. Strong organizational and communication skills',
    image: JaneD,
  },
  {
    title: 'Michael Brown',
    subTitle: 'Senior SEO Specialist',
    description:
      '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization',
    image: MichaelB,
  },
  {
    title: 'Emily Johnson',
    subTitle: 'PPC Manager',
    description:
      '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis',
    image: EmilyJ,
  },
  {
    title: 'Brian Williams',
    subTitle: 'Social Media Specialist',
    description:
      '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement',
    image: BrianW,
  },
  {
    title: 'Sarah Kim',
    subTitle: 'Content Creator',
    description:
      '2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries',
    image: SarahK,
  },
];

export const Team = () => {
  return (
    <SectionTitle
      title="Team"
      description="Meet the skilled and experienced team behind our successful digital marketing strategies"
    >
      <main className="grid grid-cols-3 gap-10">
        {teamList.map((team) => (
          <Card key={team.title} className="w-[387px] gap-8 px-8! py-10!">
            <header className="flex flex-row gap-2">
              <Image src={team.image} alt={team.title} />

              <span className="flex flex-col self-end">
                <Paragraph as={ParagraphAsVariant.H4} className="font-medium">
                  {team.title}
                </Paragraph>
                <Paragraph size={ParagraphSizeVariant.Small}>
                  {team.subTitle}
                </Paragraph>
              </span>

              <Image
                src={Linkedin}
                alt={'linkedin icon'}
                className="self-start"
              />
            </header>

            <Divider variant={DividerVariant.Secondary} />

            <footer>
              <Paragraph size={ParagraphSizeVariant.Small}>
                {team.description}
              </Paragraph>
            </footer>
          </Card>
        ))}
      </main>

      <footer className="mt-10 flex justify-end">
        <Button variant={ButtonVariant.Secondary} className="w-[269px]">
          See all team
        </Button>
      </footer>
    </SectionTitle>
  );
};

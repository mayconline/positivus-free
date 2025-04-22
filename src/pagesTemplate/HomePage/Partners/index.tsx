import Image from 'next/image';

import Amazon from '@/assets/partners/amazon.svg';
import Dribble from '@/assets/partners/dribble.svg';
import HubSpot from '@/assets/partners/hubspot.svg';
import NetFlix from '@/assets/partners/netflix.svg';
import Notion from '@/assets/partners/notion.svg';
import Zoom from '@/assets/partners/zoom.svg';

const partnersLogo = [
  {
    src: Amazon,
    alt: 'Amazon Logo',
  },
  {
    src: Dribble,
    alt: 'Dribble Logo',
  },
  {
    src: HubSpot,
    alt: 'HubSpot Logo',
  },
  {
    src: NetFlix,
    alt: 'NetFlix Logo',
  },
  {
    src: Notion,
    alt: 'Notion Logo',
  },
  {
    src: Zoom,
    alt: 'Zoom Logo',
  },
];

export const Partners = () => {
  return (
    <section className="flex flex-wrap justify-between items-center gap-2">
      {partnersLogo.map((partners) => (
        <Image
          className="mix-blend-luminosity"
          key={partners.alt}
          src={partners.src}
          alt={partners.alt}
          width={126}
          height={48}
        />
      ))}
    </section>
  );
};

import Image from 'next/image';
import Link from 'next/link';

import FacebookIcon from '@/assets/icons/facebook-icon.svg';
import LinkedInIconSecondary from '@/assets/icons/linkedin-icon-secondary.svg';
import Twitter from '@/assets/icons/twitter-icon.svg';

export const SocialBar = () => {
  return (
    <nav className="flex justify-between items-center gap-5">
      <Link href="/" target="_blank">
        <Image src={LinkedInIconSecondary} alt="LinkedIn logo" />
      </Link>
      <Link href="/" target="_blank">
        <Image src={FacebookIcon} alt="Facebook logo" />
      </Link>
      <Link href="/" target="_blank">
        <Image src={Twitter} alt="Twitter logo" />
      </Link>
    </nav>
  );
};

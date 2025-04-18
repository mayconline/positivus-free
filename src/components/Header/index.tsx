import Image from 'next/image';
import { MenuBar } from '@/components';

export const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <Image
        src="/logo.svg"
        alt="Positivus logo"
        width={219.54}
        height={36}
        priority
      />
      <MenuBar />
    </header>
  );
};

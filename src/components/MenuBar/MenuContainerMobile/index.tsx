'use client';

import Image from 'next/image';
import { useState } from 'react';
import clsx from 'clsx';
import { MenuList } from '@/components';
import MenuIcon from '@/assets/icons/menu-icon.svg';

export const MenuContainerMobile = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const handleOpenMobileMenu = () => {
    setOpenMobileMenu((prev) => !prev);
  };

  return (
    <span className="relative xl:hidden">
      <Image
        src={MenuIcon}
        alt="menu icon"
        width={48}
        height={48}
        onClick={handleOpenMobileMenu}
      />

      <header
        className={clsx(
          'absolute top-0 right-16 bg-dark/90 rounded-1xl p-5 transition-all z-10',
          {
            hidden: !openMobileMenu,
            'block w-[300px]': openMobileMenu,
          }
        )}
      >
        <MenuList className={'text-white'} />
      </header>
    </span>
  );
};

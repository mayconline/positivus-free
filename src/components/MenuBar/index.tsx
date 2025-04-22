import type { ParagraphSizeVariant } from '@/components';
import { MenuContainerMobile } from './MenuContainerMobile';
import { MenuList } from './MenuList';

interface MenuBarProps {
  className?: string;
  size?: ParagraphSizeVariant;
  isFooter?: boolean;
}

export const MenuBar = ({
  className,
  size,
  isFooter = false,
}: MenuBarProps) => {
  return (
    <>
      <header className="hidden xl:flex">
        <MenuList className={className} isFooter={isFooter} size={size} />
      </header>
      <MenuContainerMobile />
    </>
  );
};

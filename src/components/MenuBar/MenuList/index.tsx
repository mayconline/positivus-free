import { Button } from '@/components/Button';
import { Paragraph, type ParagraphSizeVariant } from '@/components/Paragraph';
import Link from 'next/link';

interface MenuBarProps {
  className?: string;
  size?: ParagraphSizeVariant;
  isFooter?: boolean;
}

export const MenuList = ({ className, isFooter, size }: MenuBarProps) => {
  return (
    <nav className="flex flex-col xl:flex-row items-center gap-10">
      <Link href="/">
        <Paragraph className={className} size={size}>
          About
        </Paragraph>
      </Link>
      <Link href="/">
        <Paragraph className={className} size={size}>
          Services
        </Paragraph>
      </Link>
      <Link href="/">
        <Paragraph className={className} size={size}>
          Use Cases
        </Paragraph>
      </Link>
      <Link href="/">
        <Paragraph className={className} size={size}>
          Blog
        </Paragraph>
      </Link>

      {!isFooter && <Button>Request a quote</Button>}
    </nav>
  );
};

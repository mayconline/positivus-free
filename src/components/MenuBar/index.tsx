import Link from 'next/link';
import { Button, Paragraph, type ParagraphSizeVariant } from '@/components';

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
    <nav className="flex items-center gap-10">
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

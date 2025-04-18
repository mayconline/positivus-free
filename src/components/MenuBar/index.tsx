import Link from 'next/link';
import { Button, Paragraph } from '@/components';

export const MenuBar = () => {
  return (
    <nav className="flex items-center gap-10">
      <Link href="/">
        <Paragraph>About</Paragraph>
      </Link>
      <Link href="/">
        <Paragraph>Services</Paragraph>
      </Link>
      <Link href="/">
        <Paragraph>Use Cases</Paragraph>
      </Link>
      <Link href="/">
        <Paragraph>Blog</Paragraph>
      </Link>

      <Button>Request a quote</Button>
    </nav>
  );
};

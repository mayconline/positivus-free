import clsx from 'clsx';
import type { HTMLAttributes, ReactNode } from 'react';

export enum ParagraphAsVariant {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  P = 'p',
}

export enum ParagraphSizeVariant {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
  SemiLarge = 'semi-large',
  ExtraLarge = 'extra-large',
}

interface ParagraphProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  className?: string;
  size?: ParagraphSizeVariant;
  as?: ParagraphAsVariant;
}

export const Paragraph = ({
  children,
  className,
  size = ParagraphSizeVariant.Medium,
  as = ParagraphAsVariant.P,
  ...props
}: ParagraphProps) => {
  const Component = as;

  const ParagraphClassesSize = {
    [ParagraphSizeVariant.Small]: 'text-lg',
    [ParagraphSizeVariant.Medium]: 'text-xl',
    [ParagraphSizeVariant.Large]: 'text-3xl',
    [ParagraphSizeVariant.SemiLarge]: 'text-4xl',
    [ParagraphSizeVariant.ExtraLarge]: 'text-6xl',
  };

  return (
    <Component
      className={clsx(ParagraphClassesSize[size], className)}
      title={children as string}
      {...props}
    >
      {children}
    </Component>
  );
};

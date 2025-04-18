import { clsx } from 'clsx';

export enum CardVariant {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
}

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  url?: string;
  variant?: CardVariant;
}

export const Card = ({
  children,
  className,
  url,
  variant = CardVariant.Primary,
  ...props
}: CardProps) => {
  const cardClassesVariant = {
    [CardVariant.Primary]: 'bg-grey',
    [CardVariant.Secondary]: 'bg-green',
    [CardVariant.Tertiary]: 'bg-dark',
  };

  return (
    <article
      className={clsx(
        'flex flex-col rounded-5xl py-10 px-14 border border-dark shadow-card',
        {
          'cursor-pointer': !!url,
        },
        cardClassesVariant[variant],
        className
      )}
      {...props}
    >
      {children}
    </article>
  );
};

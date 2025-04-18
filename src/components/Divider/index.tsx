import clsx from 'clsx';

export enum DividerVariant {
  Primary = 'primary',
  Secondary = 'secondary',
}

interface DividerProps {
  className?: string;
  variant?: DividerVariant;
}

export const Divider = ({
  className,
  variant = DividerVariant.Primary,
}: DividerProps) => {
  const dividerClassesVariant = {
    [DividerVariant.Primary]: 'border-white',
    [DividerVariant.Secondary]: 'border-black',
  };

  return (
    <hr className={clsx('border', dividerClassesVariant[variant], className)} />
  );
};

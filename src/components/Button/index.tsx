import clsx from 'clsx';
import type { ButtonHTMLAttributes } from 'react';
import { Spinner } from '@/components';

export enum ButtonVariant {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
  Link = 'link',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  isLoading?: boolean;
}

export const Button = ({
  children,
  variant = ButtonVariant.Primary,
  className,
  disabled,
  isLoading = false,
  ...props
}: ButtonProps) => {
  const buttonClassesVariant = {
    [ButtonVariant.Primary]:
      'py-5 px-8 bg-background hover:bg-black/10 text-black border border-dark',
    [ButtonVariant.Secondary]:
      'py-5 px-8 bg-dark hover:bg-dark/90 text-white border border-dark',
    [ButtonVariant.Tertiary]:
      'py-5 px-8 bg-green hover:bg-green/90 text-black border border-green',
    [ButtonVariant.Link]: 'bg-transparent',
  };

  return (
    <button
      className={clsx(
        'flex items-center justify-center rounded-xl font-normal text-xl gap-2 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed',
        buttonClassesVariant[variant],
        className
      )}
      disabled={disabled}
      {...props}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  );
};

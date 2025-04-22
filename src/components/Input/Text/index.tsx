import clsx from 'clsx';

export enum InputTextVariant {
  Primary = 'primary',
  Secondary = 'secondary',
}

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  variant?: InputTextVariant;
}

export const InputText = ({
  label,
  name,
  type,
  variant = InputTextVariant.Primary,
  ...props
}: InputTextProps) => {
  const inputClassesVariant = {
    [InputTextVariant.Primary]:
      'bg-white border border-black placeholder:text-grey-light',
    [InputTextVariant.Secondary]:
      'bg-transparent border border-white placeholder:text-white text-white',
  };

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={name} className="text-base">
          {label}
        </label>
      )}
      <input
        type={type ?? 'text'}
        name={name}
        id={name}
        className={clsx('rounded-1xl py-4 px-7', inputClassesVariant[variant])}
        autoComplete="off"
        {...props}
      />
    </div>
  );
};

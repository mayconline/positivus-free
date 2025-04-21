interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const InputText = ({ label, name, type, ...props }: InputTextProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-base">
        {label}
      </label>
      <input
        type={type ?? 'text'}
        name={name}
        id={name}
        className="bg-white border border-black rounded-1xl py-4 px-7"
        autoComplete="off"
        {...props}
      />
    </div>
  );
};

interface InputTextAreaProps
  extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export const InputTextArea = ({
  label,
  name,
  ...props
}: InputTextAreaProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-base">
        {label}
      </label>
      <textarea
        name={name}
        id={name}
        className="bg-white border border-black rounded-1xl py-4 px-7"
        rows={8}
        {...props}
      />
    </div>
  );
};

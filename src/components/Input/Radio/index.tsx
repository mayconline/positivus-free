interface InputRadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const InputRadio = ({ label, name, id, ...props }: InputRadioProps) => {
  return (
    <div className="flex gap-2">
      <input type="radio" name={name} id={id} {...props} />
      <label htmlFor={id} className="text-lg">
        {label}
      </label>
    </div>
  );
};

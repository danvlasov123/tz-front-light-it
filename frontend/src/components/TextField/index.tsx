interface IPropsTextField {
  label?: string;
  value?: string;
  type?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField = ({
  label,
  onChange,
  placeholder,
  value,
  type = "text",
}: IPropsTextField): JSX.Element => {
  return (
    <div className="flex flex-col mb-4">
      <label className="mb-2 font-normal text-slate-700">{label}</label>
      <input
        {...(placeholder && { placeholder: placeholder })}
        onChange={onChange}
        value={value}
        className="py-2 px-3 rounded-md outline-none border border-solid bg-slate-100 border-slate-200"
        type={type}
      />
    </div>
  );
};

export { TextField };

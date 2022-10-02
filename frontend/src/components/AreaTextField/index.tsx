interface IPropsTextField {
  label?: string;
  value?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const AreaTextField = ({
  label,
  onChange,
  placeholder,
  value,
}: IPropsTextField): JSX.Element => {
  return (
    <div className="flex flex-col mb-4">
      <label className="mb-2 font-normal text-slate-700">{label}</label>
      <textarea
        {...(placeholder && { placeholder: placeholder })}
        onChange={onChange}
        value={value}
        className="py-2 px-3 min-h-[50px] rounded-md outline-none border border-solid bg-slate-100 border-slate-200"
      />
    </div>
  );
};

export { AreaTextField };

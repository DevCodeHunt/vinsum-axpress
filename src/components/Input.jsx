const Input = ({
  type = "text",
  id,
  name,
  placeholder,
  value,
  onChange,
  label,
  ...rest
}) => {
  return (
    <div>
       {label && <label htmlFor={id} className="text-black">{label}</label>}
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...rest}
        className="w-full py-3.5 text-sm text-gray-900 bg-neutral-200 outline-none border-none rounded-2xl px-4 placeholder:text-gray-600"
      />
    </div>
  );
};

export default Input;

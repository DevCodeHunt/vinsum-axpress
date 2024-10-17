const Input = ({
  type = "text",
  id,
  name,
  placeholder,
  value,
  onChange,
  ...rest
}) => {
  return (
    <div>
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...rest}
        className="w-full py-3.5 text-sm bg-card outline-none border-none rounded-2xl px-4 placeholder:text-zinc-400"
      />
    </div>
  );
};

export default Input;

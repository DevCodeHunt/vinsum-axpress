const Input = ({ type = "text", id, name, placeholder, ...rest }) => {
  return (
    <div>
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        {...rest}
        className="w-full py-3.5 text-sm bg-cardSecondary outline-none border-none rounded-2xl px-4 placeholder:text-zinc-400"
      />
    </div>
  );
};

export default Input;

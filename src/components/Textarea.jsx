const Textarea = ({
  label,
  id,
  placeholder,
  value,
  onChange,
  rows = 5,
  error,
  ...rest
}) => {
  return (
    <div className="flex flex-col gap-1">
      {label && <label htmlFor={id} className="text-black">{label}</label>}
      <textarea
        id={id}
        placeholder={placeholder}
        rows={rows}
        value={value}
        onChange={onChange}
        {...rest}
        className="bg-neutral-200 outline-none focus:outline-0 rounded-lg py-3 px-3 text-sm text-gray-900  resize-none"
      />
      {error && <small className="text-red-600">Required</small>}
    </div>
  );
};

export default Textarea;

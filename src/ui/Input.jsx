function Input({
  type = "text",
  min,
  label,
  id,
  value,
  onChange,
  container,
  inputClass,
  labelClass,
}) {
  return (
    <div className={container}>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <input
        type={type}
        name={id}
        id={id}
        value={value}
        onChange={onChange}
        autoComplete="off"
        className={inputClass}
        min={min}
      />
    </div>
  );
}

export default Input;

function SelectOptions({
  id,
  label,
  index,
  value,
  onChange,
  container,
  labelClass,
  selectClass,
  options,
}) {
  return (
    <div className={container}>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <select
        name={id}
        id={id}
        className={selectClass}
        value={value}
        onChange={onChange}
      >
        <option value="">{index}</option>
        {options.map((option) => (
          <option key={option.id} value={option.title}>
            {option.title}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectOptions;

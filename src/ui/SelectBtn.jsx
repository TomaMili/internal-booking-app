function Select({ options, value, onChange, type = "default", ...props }) {
  const baseClasses =
    "text-sm px-4 py-2 rounded border shadow-sm font-medium bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-all duration-300 cursor-pointer";

  const borderClass = type === "white" ? "border-zinc-100" : "border-zinc-300";

  return (
    <select
      value={value}
      onChange={onChange}
      className={`${baseClasses} ${borderClass}`}
      {...props}
    >
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;

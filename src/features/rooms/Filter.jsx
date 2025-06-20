import clsx from "clsx";
import { useSearchParams } from "react-router-dom";

function Filter({ field, options, ...props }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(field) || options.at(0).value;

  function handleClick(value) {
    searchParams.set(field, value);
    if (searchParams.get("page")) searchParams.set("page", 1);
    setSearchParams(searchParams);
  }

  return (
    <div
      className="flex gap-1 border border-zinc-100 bg-zinc-50 shadow-sm rounded p-1"
      {...props}
    >
      {options.map((option) => {
        const isActive = option.value === currentFilter;

        return (
          <button
            key={option.value}
            onClick={() => handleClick(option.value)}
            disabled={isActive}
            className={clsx(
              "rounded px-3 py-[0.44rem] text-sm font-medium transition-all duration-300 cursor-pointer",
              isActive
                ? "bg-emerald-700 text-emerald-50"
                : "bg-zinc-50 text-zinc-800 hover:bg-emerald-700 hover:text-emerald-50"
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

export default Filter;

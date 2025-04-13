import { useState } from "react";
import { DayPicker, getDefaultClassNames } from "react-day-picker";
import "react-day-picker/dist/style.css";

function Calendar() {
  const [selected, setSelected] = useState({
    from: new Date(),
    to: new Date(),
  });
  const defaultClassNames = getDefaultClassNames();

  const formatDate = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  let footer = "";
  if (selected?.from) {
    footer =
      selected.to.toLocaleDateString() !== selected.from.toLocaleDateString()
        ? `${selected.from.toLocaleDateString(
            "en-GB",
            formatDate
          )} – ${selected.to.toLocaleDateString("en-GB", formatDate)}`
        : `${selected.from.toLocaleDateString("en-GB", formatDate)}`;
  }

  return (
    <div className="p-5 px-15 max-w-md rounded-lg">
      <DayPicker
        mode="range"
        required
        animate
        selected={selected}
        onSelect={setSelected}
        footer={
          <p className="font-semibold pt-4 p-0 mx-0 text-center text-zinc-600">
            {footer}
          </p>
        }
        className="h-107 flex flex-col justify-between"
        classNames={{
          ...defaultClassNames,
          root: `${defaultClassNames.root} shadow-lg p-5 rounded-lg bg-white!`,
          chevron: `${defaultClassNames.chevron} fill-emerald-900!`,
          today: ``,
          selected: `bg-emerald-600! font-bold`,
          range_start: "rounded-l-4xl!",
          range_middle: "",
          range_end: "rounded-r-4xl",
        }}
        modifierStyles={{}}
      />
    </div>
  );
}

export default Calendar;

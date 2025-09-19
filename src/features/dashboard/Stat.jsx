function Stat({ icon, title, value, color }) {
  const bgColor = {
    indigo: "bg-indigo-100",
    green: "bg-green-100",
    red: "bg-red-100",
    yellow: "bg-yellow-100",
    blue: "bg-blue-100",
    purple: "bg-purple-100",
    gray: "bg-gray-100",
  }[color];

  const textColor = {
    indigo: "text-indigo-700",
    green: "text-green-700",
    red: "text-red-700",
    yellow: "text-yellow-700",
    blue: "text-blue-700",
    purple: "text-purple-700",
    gray: "text-gray-700",
  }[color];

  return (
    <div
      className="
        bg-white 
        border border-zinc-200 
        rounded-md 
        p-4 
        grid 
        grid-cols-[6.4rem_1fr] 
        grid-rows-[auto_auto] 
        gap-x-4 
        gap-y-1
        
      "
    >
      <div
        className={`row-span-2  rounded-full flex items-center justify-center ${bgColor}`}
      >
        <div className={`w-5 h-5 ${textColor}`}>{icon}</div>
      </div>
      <h5 className="self-end text-xs uppercase tracking-[0.4px] font-semibold text-gray-500">
        {title}
      </h5>
      <p className="text-2xl font-medium leading-none">{value}</p>
    </div>
  );
}

export default Stat;

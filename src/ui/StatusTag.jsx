import clsx from "clsx";

function StatusTag({ type = "gray", children }) {
  return (
    <span
      className={clsx(
        "uppercase cursor-pointer text-sm font-bold rounded-3xl py-3 px-4 flex items-center justify-center mx-5 my-3",
        {
          "text-green-700 bg-green-100": type === "green",
          "text-blue-700 bg-blue-100": type === "blue",
          "text-yellow-700 bg-yellow-100": type === "yellow",
          "text-red-700 bg-red-100": type === "red",
          "text-sky-700 bg-sky-100": type === "sky",
          "text-slate-700 bg-slate-100": type === "silver",
          "text-gray-700 bg-gray-100": type === "gray",
        }
      )}
    >
      {children}
    </span>
  );
}

export default StatusTag;

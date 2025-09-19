function DashboardBox({ children }) {
  return (
    <div
      className="
        bg-white 
        border-1 border-zinc-200 
        rounded-md 
        p-8 
        flex flex-col gap-6
        w-full col-span-4
      "
    >
      {children}
    </div>
  );
}

export default DashboardBox;

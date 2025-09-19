function DashboardBox({ children }) {
  return (
    <div
      className="
        bg-white 
        border border-gray-200 
        rounded-md 
        p-8 
        flex flex-col gap-6
        w-494
      "
    >
      {children}
    </div>
  );
}

export default DashboardBox;

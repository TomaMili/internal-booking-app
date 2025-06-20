import Navigation from "./Navigation";

function Sidebar({ onHover, isNavActive }) {
  return (
    <aside
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      className="bg-zinc-0 min-h-dvh z-2 shadow-[0_0_15px_-12px] shadow-zinc-900 bg-emerald-0 flex flex-col items-center gap-6"
    >
      <img
        src="/vite.svg"
        width="60%"
        className={`mx-4 h-1/8 mt-3 transition-all duration-300 `}
      />
      <Navigation isNavActive={isNavActive} />
    </aside>
  );
}

export default Sidebar;

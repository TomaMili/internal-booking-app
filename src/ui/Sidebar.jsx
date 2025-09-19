import Navigation from "./Navigation";

function Sidebar({ onHover, isNavActive }) {
  return (
    <aside
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      className="bg-zinc-0 min-h-dvh z-2 shadow-[0_0_15px_-12px] shadow-zinc-900 bg-white flex flex-col items-center gap-6"
    >
      <img
        src="/logo.png"
        width={isNavActive ? "70%" : "100%"}
        height="40px"
        className={`mx-4 ${
          isNavActive ? "mt-10" : "mt-10.5"
        } transition-all duration-300 object-contain`}
      />
      <Navigation isNavActive={isNavActive} />
    </aside>
  );
}

export default Sidebar;

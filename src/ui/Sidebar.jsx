import Navigation from "./Navigation";

function Sidebar() {
  return (
    <aside className="bg-zinc-0 h-screen z-2 shadow-[0_0_15px_-12px] shadow-zinc-900 bg-emerald-0 flex flex-col items-center gap-6 ">
      <img src="public/vite.svg" width="140px" className="mt-8" />
      <Navigation />
    </aside>
  );
}

export default Sidebar;

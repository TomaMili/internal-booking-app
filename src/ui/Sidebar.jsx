import { useDarkMode } from "../context/DarkModeContext";
import Navigation from "./Navigation";
import MiniLogoDark from "../assets/mini-logo-dark-cropped.svg?react";
import MiniLogoLight from "../assets/mini-logo-light-cropped.svg?react";

function Sidebar({ onHover, isNavActive }) {
  const { isDarkMode } = useDarkMode();

  return (
    <aside
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      className="bg-zinc-0 min-h-dvh z-2 shadow-[0_0_15px_-12px] shadow-zinc-900 bg-white flex flex-col items-center gap-6"
    >
      {isDarkMode ? (
        <MiniLogoDark
          className={`px-4 ${
            isNavActive ? "mt-10 w-[70%]" : "mt-10 w-full !h-20"
          } h-40 transition-all duration-300 object-contain`}
        />
      ) : (
        <MiniLogoLight
          className={`px-4 ${
            isNavActive ? "mt-10 w-[70%]" : "mt-10 w-full !h-20"
          } h-40 transition-all duration-300 object-contain`}
        />
      )}

      <Navigation isNavActive={isNavActive} />
    </aside>
  );
}

export default Sidebar;

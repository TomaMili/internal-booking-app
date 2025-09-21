import { Moon, Sun } from "lucide-react";
import { useDarkMode } from "../context/DarkModeContext";

function DarkModeBtn({ isNavActive }) {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      disabled={false}
      className={`w-full px-4 py-4 gap-3 rounded-md transition-all duration-300 flex items-center hover:bg-zinc-100 cursor-pointer`}
    >
      {!isDarkMode ? (
        <Moon className="text-[26px] absolute ml-1" />
      ) : (
        <Sun className="text-[26px] absolute ml-1" />
      )}
      <span
        className={`font-semibold transition-opacity duration-100 ml-9 opacity-0 ${
          isNavActive && "opacity-100"
        }`}
      >
        {!isDarkMode ? "Dark" : "Light"}
      </span>
    </button>
  );
}

export default DarkModeBtn;

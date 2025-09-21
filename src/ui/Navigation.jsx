import { NavLink } from "react-router-dom";
import {
  BiHome,
  BiCalendar,
  BiBed,
  BiGroup,
  BiCog,
  BiLogOut,
} from "react-icons/bi";
import Uploader from "../data/Uploader";
import { useLogout } from "../hooks/useLogout";
import DarkModeBtn from "./DarkModeBtn";

function Navigation({ isNavActive }) {
  const { logout, isLoading } = useLogout();

  return (
    <nav
      className={`flex flex-col justify-between h-full w-full px-3 py-2 text-xl items-end tracking-normal font-[500] text-zinc-700 opacity-80 transition-all duration-200 ease-out`}
    >
      <div className={`flex flex-col h-full w-full gap-2.5 `}>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `w-full px-5 py-4 gap-3 rounded-md transition-all duration-300 flex items-center ${
              isActive
                ? "bg-zinc-200 opacity-100 text-emerald-900"
                : "hover:bg-zinc-100"
            }`
          }
        >
          <BiHome className={`text-[26px] absolute `} />
          <span
            className={`font-semibold transition-opacity duration-100 ml-9 opacity-0 ${
              isNavActive && "opacity-100 "
            }`}
          >
            Home
          </span>
        </NavLink>

        <NavLink
          to="/bookings"
          className={({ isActive }) =>
            `w-full px-5 py-4 gap-3 rounded-md transition-all duration-300 flex items-center ${
              isActive
                ? "bg-zinc-200 opacity-100 text-emerald-900"
                : "hover:bg-zinc-100"
            }`
          }
        >
          <BiCalendar className="text-[26px] absolute" />
          <span
            className={`font-semibold transition-opacity duration-100 ml-9 opacity-0 ${
              isNavActive && "opacity-100 "
            }`}
          >
            Bookings
          </span>
        </NavLink>

        <NavLink
          to="/rooms"
          className={({ isActive }) =>
            `w-full px-5 py-4 gap-3 rounded-md transition-all duration-300 flex items-center ${
              isActive
                ? "bg-zinc-200 opacity-100 text-emerald-900"
                : "hover:bg-zinc-100"
            }`
          }
        >
          <BiBed className="text-[26px] absolute" />
          <span
            className={`font-semibold transition-opacity duration-100 ml-9 opacity-0 ${
              isNavActive && "opacity-100 "
            }`}
          >
            Rooms
          </span>
        </NavLink>

        <NavLink
          to="/users"
          className={({ isActive }) =>
            `w-full px-5 py-4 gap-3 rounded-md transition-all duration-300 flex items-center ${
              isActive
                ? "bg-zinc-200 opacity-100 text-emerald-900"
                : "hover:bg-zinc-100"
            }`
          }
        >
          <BiGroup className="text-[26px] absolute" />
          <span
            className={`font-semibold transition-opacity duration-100 ml-9 opacity-0 ${
              isNavActive && "opacity-100 "
            }`}
          >
            Users
          </span>
        </NavLink>
        {/* <Uploader /> */}
      </div>
      <div className={`flex flex-col w-full gap-2.5 `}>
        <DarkModeBtn isNavActive={isNavActive} />
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `w-full px-5 py-4 gap-3 rounded-md transition-all duration-300 flex items-center ${
              isActive
                ? "bg-zinc-200 opacity-100 text-emerald-900"
                : "hover:bg-zinc-100"
            }`
          }
        >
          <BiCog className="text-[26px] absolute" />
          <span
            className={`font-semibold transition-opacity duration-100 ml-9 opacity-0 ${
              isNavActive && "opacity-100 "
            }`}
          >
            Settings
          </span>
        </NavLink>
        <button
          onClick={logout}
          disabled={isLoading}
          className={`w-full px-4 py-4 gap-3 rounded-md transition-all duration-300 flex items-center hover:bg-zinc-100 cursor-pointer`}
        >
          <BiLogOut className="text-[26px] absolute" />
          <span
            className={`font-semibold transition-opacity duration-100 ml-9 opacity-0 ${
              isNavActive && "opacity-100"
            }`}
          >
            Logout
          </span>
        </button>
      </div>
    </nav>
  );
}

export default Navigation;

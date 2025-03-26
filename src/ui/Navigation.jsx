import { NavLink } from "react-router-dom";
import { BiHome, BiCalendar, BiBed, BiGroup, BiCog } from "react-icons/bi";

function Navigation() {
  return (
    <nav className="flex flex-col w-full px-6 py-6 gap-2.5 text-xl items-end tracking-normal font-[500] text-zinc-700 opacity-80 transition-all duration-800 ease-in">
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          `w-full px-8 py-4 semi flex items-center gap-3 rounded-md transition-all duration-300 ${
            isActive
              ? "bg-zinc-200 opacity-100 text-emerald-900"
              : "hover:bg-zinc-100"
          }`
        }
      >
        <BiHome className="text-[26px]" />
        <span className="font-semibold">Home</span>
      </NavLink>

      <NavLink
        to="/bookings"
        className={({ isActive }) =>
          `w-full px-8 py-4 flex items-center gap-3 rounded-md transition-all duration-300 ${
            isActive
              ? "bg-zinc-200 opacity-100 text-emerald-900"
              : "hover:bg-zinc-100"
          }`
        }
      >
        <BiCalendar className="text-[26px]" />
        <span className="font-semibold">Bookings</span>
      </NavLink>

      <NavLink
        to="/cabins"
        className={({ isActive }) =>
          `w-full px-8 py-4 flex items-center gap-3 rounded-md transition-all duration-300 ${
            isActive
              ? "bg-zinc-200 opacity-100 text-emerald-900"
              : "hover:bg-zinc-100"
          }`
        }
      >
        <BiBed className="text-[26px]" />
        <span className="font-semibold">Rooms</span>
      </NavLink>

      <NavLink
        to="/users"
        className={({ isActive }) =>
          `w-full px-8 py-4 flex items-center gap-3 rounded-md transition-all duration-300 ${
            isActive
              ? "bg-zinc-200 opacity-100 text-emerald-900"
              : "hover:bg-zinc-100"
          }`
        }
      >
        <BiGroup className="text-[26px]" />
        <span className="font-semibold">Users</span>
      </NavLink>

      <NavLink
        to="/settings"
        className={({ isActive }) =>
          `w-full px-8 py-4 flex items-center gap-3 rounded-md transition-all duration-300 ${
            isActive
              ? "bg-zinc-200 opacity-100 text-emerald-900"
              : "hover:bg-zinc-100"
          }`
        }
      >
        <BiCog className="text-[26px]" />
        <span className="font-semibold">Settings</span>
      </NavLink>
    </nav>
  );
}

export default Navigation;

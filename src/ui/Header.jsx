import HeaderUser from "./HeaderUser";

function Header() {
  return (
    <header className="h-26 z-20 bg-white shadow-[0_5px_9px_-12px] shadow-zinc-900 flex justify-end items-center pr-7">
      <HeaderUser />
    </header>
  );
}

export default Header;

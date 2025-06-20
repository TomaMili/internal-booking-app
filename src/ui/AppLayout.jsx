import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useState } from "react";

function AppLayout() {
  const [isNavActive, setIsNavActive] = useState(false);
  return (
    <>
      <div
        style={{ transitionProperty: "grid-template-columns" }}
        className={`grid  ${
          isNavActive ? "grid-cols-[16rem_1fr]" : "grid-cols-[5.5rem_1fr]"
        } min-h-dvh text-zinc-900 transition-all duration-300 ease-in-out`}
      >
        <Sidebar onHover={setIsNavActive} isNavActive={isNavActive} />
        <div className="flex flex-col min-h-screen ">
          <Header />
          <main className="flex-1 bg-zinc-100 pt-10 pb-4 px-10 overflow-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}

export default AppLayout;

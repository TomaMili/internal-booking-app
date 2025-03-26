import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <>
      <div className="grid grid-cols-[18rem_1fr] min-h-screen text-zinc-900">
        <Sidebar />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 bg-zinc-100 py-16 px-10">
            <Outlet />
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AppLayout;

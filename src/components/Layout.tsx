import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { ThemeToggle } from "./ThemeToggle";

const Layout = () => {
  return (
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 relative">
        <div className="absolute top-4 right-4 z-50 hide-on-print">
          <ThemeToggle />
        </div>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
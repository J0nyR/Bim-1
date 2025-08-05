import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { ThemeToggle } from "./ThemeToggle";
import Watermark from "./Watermark";

const Layout = () => {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <Sidebar />
      <main className="flex-1 relative">
        <Watermark />
        <div className="absolute top-4 right-4 z-50 hide-on-print">
          <ThemeToggle />
        </div>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
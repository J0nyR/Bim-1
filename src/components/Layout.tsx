import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { ThemeToggle } from "./ThemeToggle";
import AppFooter from "./AppFooter";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 relative">
          <div className="absolute top-4 right-4 z-50 hide-on-print">
            <ThemeToggle />
          </div>
          <Outlet />
        </main>
      </div>
      <AppFooter />
    </div>
  );
};

export default Layout;
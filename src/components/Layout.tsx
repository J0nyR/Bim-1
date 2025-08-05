import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import { ThemeToggle } from "./ThemeToggle";
import AppFooter from "./AppFooter";
import { useSession } from "@/context/SessionContext";
import { useEffect } from "react";

const Layout = () => {
  const { session, loading } = useSession();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !session) {
      navigate("/login");
    }
  }, [session, loading, navigate]);

  if (loading) {
    return <div>Loading...</div>; // Or a proper spinner component
  }

  if (!session) {
    return null; // Or a redirect component, though useEffect handles it
  }

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
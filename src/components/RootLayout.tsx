import { Outlet } from "react-router-dom";
import AppFooter from "./AppFooter";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Outlet />
      <AppFooter />
    </div>
  );
};

export default RootLayout;
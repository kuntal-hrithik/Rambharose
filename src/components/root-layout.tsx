import { Outlet } from "react-router-dom";
import Navbar from "./navbar";

const RootLayout = () => {
  return (
    <div className="min-h-screen scroll-smooth antialiased">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RootLayout;

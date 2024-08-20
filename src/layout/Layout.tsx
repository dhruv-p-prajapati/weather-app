import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
const Layout = () => {
  return (
    <div className="h-screen w-screen bg-primary">
      <Sidebar>
        <div className="text fixed -left-1 top-1/2 flex -translate-y-1/2 items-center justify-center rounded bg-background py-1 text-2xl duration-300 hover:pl-2">
          <MdOutlineKeyboardDoubleArrowRight />
        </div>
      </Sidebar>

      <div className="container text-background">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

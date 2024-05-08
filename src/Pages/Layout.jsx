import { Outlet, Link } from "react-router-dom";
import ModeSwitch from "../Components/ModeSwitch";

const Layout = () => {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <span className="navbar-text title poppins-regular">
            Countries Card View
          </span>

          <ModeSwitch />
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;

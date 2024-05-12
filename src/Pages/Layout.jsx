import { Outlet } from "react-router-dom";
import SwitchMode from "../Components/SwitchMode/SwitchMode";

const Layout = () => {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          {/* Header section */}
          <span className="navbar-text title poppins-regular">
            Countries Card View
          </span>

          {/* Dark and Light Mode component */}
          <SwitchMode />
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;

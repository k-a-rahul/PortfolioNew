import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
const Navbar = ({ changeTheme }) => {
  return (
    <>
      <div className="sm:bg-transparent w-screen overflow-hidden flex text-white justify-end sm:justify-center gap-8 lg:gap-16 items-center p-1 sm:pl-4 pr-4 ">
        <NavLink
          className={({ isActive }) =>
            `sm:text-[38px] text-2xl hover:text-lighttext delay-75 transition-all ${
              isActive ? "text-lighttext" : ""
            }`
          }
          to="/"
        >
          Home
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `sm:text-[38px] text-2xl hover:text-lighttext delay-75 transition-all ${
              isActive ? "text-lighttext" : ""
            }`
          }
          to="/contact"
        >
          Contact
        </NavLink>
        {/* <button className="dark:text-white" onClick={changeTheme}>
          <FaSun
            className="sm:text-2xl hover:scale-125 transition-transform delay-75"
            data-twe-toggle="tooltip"
            title="Switch Theme"
          />
        </button> */}
      </div>
    </>
  );
};

export default Navbar;

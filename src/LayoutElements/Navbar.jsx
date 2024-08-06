import React, { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar = ({ changeTheme }) => {
  return (
    <>
      <div className="sm:bg-transparent w-screen overflow-hidden flex md:bg-transparent text-white justify-start sm:justify-start gap-4 lg:gap-16 items-center sm:ml-4 ">
        <NavLink
          className={({ isActive }) =>
            `sm:text-[30px]  hover:text-lighttext bg-background p-2 delay-75 transition-all rounded-b-xl ${
              isActive ? "text-lighttext" : ""
            }`
          }
          to="/"
        >
          Rahul's PortFolio
        </NavLink>
        <Link
        className=" invisible sm:visible"
          to={
            "https://1drv.ms/w/c/650e2b831a2c7771/EeVpv9wlNGJEh4Vj3ggxjgoBQYiGoS3YO-MgmQYEovmDEA?e=qeefHU"
          }
          target="_blank"
        >
          Download Resume
        </Link>

        {/* <NavLink
          className={({ isActive }) =>
            `sm:text-[32px] text-xl hover:text-lighttext delay-75 transition-all ${
              isActive ? "text-lighttext" : ""
            }`
          }
          to="/contact"
        >
          Contact
        </NavLink> */}
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

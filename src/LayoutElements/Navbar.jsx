import React from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
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
        <Link className="visible"
        target="_top">Resume</Link>
      </div>
    </>
  );
};

export default Navbar;

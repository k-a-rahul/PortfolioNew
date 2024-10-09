import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

function Navbar() {
  return (
    <>
      {
        <div className="md:w-auto group p-2 cursor-pointer absolute top-0 right-1 sm:gap-2 md:absolute md:top-0 md:right-2  overflow-hidden z-10 flex justify-center items-center">
          <button>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "lg:text-lg text-sm text-lighttext bg-white p-1 rounded-md"
                  : " text-sm lg:text-lg hover:bg-white p-1 rounded-md"
              }
            >
              Home
            </NavLink>
          </button>
          <button>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                isActive
                  ? "lg:text-lg text-sm text-lighttext  bg-white p-1 rounded-md"
                  : "text-sm lg:text-lg hover:bg-white p-1 rounded-md "
              }
            >
              Skills
            </NavLink>
          </button>
          <button>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? "lg:text-lg text-sm text-lighttext bg-white p-1 rounded-md"
                  : "text-sm lg:text-lg hover:bg-white p-1 rounded-md"
              }
            >
              Projects
            </NavLink>
          </button>
          <button>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "lg:text-lg text-sm text-lighttext bg-white  p-1 rounded-md"
                  : "text-sm lg:text-lg hover:bg-white p-1 rounded-md"
              }
            >
              Contact
            </NavLink>
          </button>
        </div>
      }
    </>
  );
}

export default Navbar;

import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

function Navbar() {
 
  return (
    <>
      
        {
          <div className="md:w-auto group absolute top-0 right-0 md:absolute md:top-0 md:right-2 sm:gap-1 overflow-hidden z-10 flex justify-center items-center">
          <button >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "lg:text-lg text-xs text-lighttext bg-slate-300 p-1 "
                  : " text-xs lg:text-lg hover:bg-slate-300 p-1 "
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
                  ? "lg:text-lg text-xs text-lighttext  bg-slate-300  p-1"
                  : "text-xs lg:text-lg hover:bg-slate-300 p-1 "
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
                  ? "lg:text-lg text-xs text-lighttext bg-slate-300  p-1"
                  : "text-xs lg:text-lg hover:bg-slate-300 p-1 "
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
                  ? "lg:text-lg text-xs text-lighttext bg-slate-300  p-1"
                  : "text-xs lg:text-lg hover:bg-slate-300 p-1 "
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

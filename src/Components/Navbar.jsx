import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Resume from "./Resume";
import Modal from "./Modal";

function Navbar() {
  return (
    <>
      <div className="w-screen md:w-auto bg-slate-300 p-2 rounded-b-xl absolute top-0 md:right-1 z-10 gap-6 md:gap-0 flex md:flex-col justify-center items-center">
            <button>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "lg:text-xl text-sm text-lighttext"
                    : " text-sm lg:text-xl hover:text-lighttext"
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
                    ? "lg:text-xl text-sm text-lighttext"
                    : "text-sm lg:text-xl hover:text-lighttext"
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
                    ? "lg:text-xl text-sm text-lighttext"
                    : "text-sm lg:text-xl hover:text-lighttext"
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
                    ? "lg:text-xl text-sm text-lighttext"
                    : "text-sm lg:text-xl hover:text-lighttext"
                }
              >
                Contact
              </NavLink>
            </button>
      </div>
    </>
  );
}

export default Navbar;

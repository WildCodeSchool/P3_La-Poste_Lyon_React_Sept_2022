import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import profil from "../assets/profil.png";
import categories from "../assets/categories.png";
import tutoriels from "../assets/tutoriels.png";
// import jeux from "../assets/jeux.png";
import recompenses from "../assets/recompenses.png";
// import parcours from "../assets/parcours.png";
import logo from "../assets/Logo.png";

function NavigationBar() {
  // useState used to open and close the burger menu
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div>
      <nav className="flex bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded white:bg-gray-900 drop-shadow">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link to="/">
            <img className="h-14" src={logo} alt="logo" />
          </Link>
          <div
            className={
              open === true
                ? "absolute top-0 right-0 fixed w-full md:block md:w-auto"
                : "hidden w-full md:block md:w-auto"
            }
            id="navbar-default"
          >
            <button
              onClick={handleOpen}
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="absolute md:top-14 z-30 flex items-center cursor-pointer w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <ul className="block border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {/* Empty NavLink because it is necessary to have all the other well placed (otherwise the first tab is shifted) */}
              <li className="flex flex-wrap">
                <NavLink
                  to="/"
                  className={
                    open === true
                      ? "block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-black-700 md:p-0 dark:text-white"
                      : "block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-black-700 md:p-0 dark:text-white md:hidden"
                  }
                  aria-current="page"
                />
              </li>
              <li className="flex flex-wrap">
                <img
                  className={open === true ? "h-12" : "hidden"}
                  src={profil}
                  alt="myprofile"
                />
                <NavLink
                  to="/"
                  className={
                    open === true
                      ? "block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-black-700 md:p-0 dark:text-white"
                      : "block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-black-700 md:p-0 dark:text-white md:hidden"
                  }
                  aria-current="page"
                >
                  Maison
                </NavLink>
              </li>
              <li className="flex flex-wrap">
                <img
                  className={open === true ? "h-12" : "hidden"}
                  src={profil}
                  alt="myprofile"
                />
                <NavLink
                  to="/profil"
                  className={
                    open === true
                      ? "block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-black-700 md:p-0 dark:text-white"
                      : "block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-black-700 md:p-0 dark:text-white md:hidden"
                  }
                  aria-current="page"
                >
                  Mon Profil
                </NavLink>
              </li>
              <li className="flex flex-wrap">
                <img
                  className={open === true ? "h-12" : "hidden"}
                  src={categories}
                  alt="categories"
                />
                <NavLink
                  to="/categories"
                  className={
                    open === true
                      ? "block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-black-700 md:p-0 dark:text-white"
                      : "block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-black-700 md:p-0 dark:text-white md:hidden"
                  }
                >
                  Catégories
                </NavLink>
              </li>
              <li className="flex flex-wrap">
                <img
                  className={open === true ? "h-12" : "hidden"}
                  src={tutoriels}
                  alt="tutoriels"
                />
                <NavLink
                  to="/tutoriels"
                  className={
                    open === true
                      ? "block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-black-700 md:p-0 dark:text-white"
                      : "block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-black-700 md:p-0 dark:text-white md:hidden"
                  }
                >
                  Tutoriels
                </NavLink>
              </li>
              {/* Usable but not ready for use
              <li className="flex flex-wrap">
                <img
                  className={open === true ? "h-12" : "hidden"}
                  src={jeux}
                  alt="jeux"
                />
                <NavLink
                  to="/jeux"
                  className={
                    open === true
                      ? "block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-black-700 md:p-0 dark:text-white"
                      : "block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-black-700 md:p-0 dark:text-white md:hidden"
                  }
                >
                  Jeux
                </NavLink>
              </li> */}
              <li className="flex flex-wrap">
                <img
                  className={open === true ? "h-12" : "hidden"}
                  src={recompenses}
                  alt="recompenses"
                />
                <NavLink
                  to="/recompense"
                  className={
                    open === true
                      ? "block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-black-700 md:p-0 dark:text-white"
                      : "block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-black-700 md:p-0 dark:text-white md:hidden"
                  }
                >
                  Récompenses
                </NavLink>
              </li>
              {/* Usable but not ready for use
              <li className="flex flex-wrap">
                <img
                  className={open === true ? "h-12" : "hidden"}
                  src={parcours}
                  alt="parcours"
                />
                <NavLink
                  to="/parcours"
                  className={
                    open === true
                      ? "block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-black-700 md:p-0 dark:text-white"
                      : "block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-black-700 md:p-0 dark:text-white md:hidden"
                  }
                >
                  Mon parcours
                </NavLink>
              </li> */}
              <li className="text-white">
                <button className={open === true ? "" : "hidden"} type="button">
                  Me déconnecter
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavigationBar;

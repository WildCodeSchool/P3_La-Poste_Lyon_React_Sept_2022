import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function NavigationBar() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div>
      <nav className="relative flex bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div className="container flex flex-wrap items-center justify-end mx-auto">
          <button
            onClick={handleOpen}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
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
          <div
            className={
              open === true
                ? "absolute top-12 w-full md:block md:w-auto"
                : "hidden w-full md:block md:w-auto"
            }
            id="navbar-default"
          >
            <ul className="flex flex-end p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink
                  to="/"
                  className={
                    open === true
                      ? "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                      : "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:hidden"
                  }
                  aria-current="page"
                >
                  Maison
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/profil"
                  className={
                    open === true
                      ? "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                      : "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:hidden"
                  }
                  aria-current="page"
                >
                  Mon Profil
                </NavLink>
              </li>
              {/* <li>
                <NavLink
                  href="/categories"
                  className={
                    open === true
                      ? "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                      : "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:hidden"
                  }
                >
                  Catégories
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="/tutoriels"
                  className={
                    open === true
                      ? "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                      : "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:hidden"
                  }
                >
                  Tutoriels
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="/jeux"
                  className={
                    open === true
                      ? "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                      : "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:hidden"
                  }
                >
                  Jeux
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="#"
                  className={
                    open === true
                      ? "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                      : "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:hidden"
                  }
                >
                  Récompenses
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="#"
                  className={
                    open === true
                      ? "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                      : "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:hidden"
                  }
                >
                  Mon parcours
                </NavLink>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavigationBar;

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import tutoManagement from "../assets/navbarAdmin/TutoManagement.svg";
import tutoCreation from "../assets/navbarAdmin/TutoCreation.svg";
import usersManagement from "../assets/navbarAdmin/usersManagement.svg";
import logo from "../assets/Logo.png";

function NavigationBar() {
  // useState used to open and close the burger menu
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="justify-between mx-autol md:items-center shadow-lg flex h-20 relative z-10">
        <Link to="/dashboard" className="flex items-center">
          <img src={logo} alt="Ligne Bleue" className="h-14 w-14" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white" />
        </Link>

        {/*  */}
        <div className="block">
          <button
            type="button"
            className="p-2 text-black rounded-md outline-none"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <svg
                onClick={() => setOpen(!open)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#333"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#333"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div className="relative z-10">
        <div
          className={`flex-1 justify-self-center md:block md:pb-0 md:mt-0 ${
            open
              ? "block absolute shadow-lg top-0 right-0 bg-white w-screen md:w-96 h-screen z-0 "
              : "hidden"
          }`}
        >
          <ul
            className={
              open
                ? " flex flex-col items-end space-y-4 m-3 text-xl "
                : "hidden"
            }
          >
            {/* Tutos creation  */}
            <li className="text-[#333]  text-right pr-3 flex   w-full md:justify-start ">
              <NavLink to="/creation" className="flex justify-end items-center">
                <img
                  src={tutoCreation}
                  className="h-20 w-20 mx-6"
                  alt="Mon profil"
                />
                <h3>Créer un tutoriel</h3>
              </NavLink>
            </li>

            {/* Tutos management */}
            <li className="text-[#333] text-right pr-3 flex   w-full  md:justify-start">
              <NavLink
                to="/creation"
                className="flex  justify-end  items-center"
              >
                <img
                  src={tutoManagement}
                  className="h-20 w-20 mx-6"
                  alt="Catégories de tutoriels"
                />
                <h3>Gérer les tutoriels</h3>
              </NavLink>
            </li>

            {/* Users management  */}
            <li className="text-[#333] text-right pr-3 flex  w-full  md:justify-start ">
              <NavLink to="/users" className="flex  items-center">
                <img
                  src={usersManagement}
                  className="h-20 w-20 mx-6"
                  alt="Catégories de tutoriels"
                />
                <h3>Gérer les utilisateurs</h3>
              </NavLink>
            </li>

            {/* Logout */}
            <li className="text-right pr-3 flex  w-full justify-center ">
              <button
                type="button"
                className="text-xl underline text-[#003DA5]"
              >
                Me déconnecter
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;

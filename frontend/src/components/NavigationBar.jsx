import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import profil from "../assets/profil.png";
import categories from "../assets/categories.png";
import jeux from "../assets/jeux.png";
import recompenses from "../assets/recompenses.png";
import parcours from "../assets/parcours.png";
import logo from "../assets/Logo.png";
import historic from "../assets/Historique.png";

function NavigationBar() {
  // useState used to open and close the burger menu
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="justify-between mx-autol md:items-center shadow-lg flex h-20 relative z-10">
        <Link to="/profil" className="flex items-center">
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
              ? "block absolute shadow-lg top-20 right-0 bg-white w-screen md:w-96 h-screen z-0 "
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
            {/* Profil  */}
            <li className="text-[#333]  text-right pr-3 flex   w-full md:justify-start ">
              <NavLink to="/profil" className="flex justify-end items-center">
                <img src={profil} className="h-20 w-20 mx-6" alt="Mon profil" />
                <h3>Mon Espace</h3>
              </NavLink>
            </li>

            {/* Categories */}
            <li className="text-[#333] text-right pr-3 flex   w-full  md:justify-start">
              <NavLink
                to="/categories"
                className="flex  justify-end  items-center"
              >
                <img
                  src={categories}
                  className="h-20 w-20 mx-6"
                  alt="Catégories de tutoriels"
                />
                <h3>Catégories de tutoriels</h3>
              </NavLink>
            </li>

            {/* Games  */}
            <li className="text-[#333] grayscale  text-right pr-3 flex  w-full  md:justify-start ">
              <NavLink to="/jeux" className="flex  items-center">
                <img
                  src={jeux}
                  className="h-20 w-20 mx-6"
                  alt="Catégories de tutoriels"
                />
                <h3>Mes jeux</h3>
              </NavLink>
            </li>

            {/* Journey  */}
            <li className="text-[#333] grayscale text-right pr-3 flex  w-full md:justify-start">
              <NavLink to="/parcours" className="flex  items-center">
                <img
                  src={parcours}
                  className="h-20 w-20 mx-6"
                  alt="Catégories de tutoriels"
                />
                <h3>Mon Parcours</h3>
              </NavLink>
            </li>

            {/* Rewards */}
            <li className="text-[#333]  text-right pr-3 flex   w-full  md:justify-start">
              <NavLink to="/recompenses" className="flex    items-center">
                <img
                  src={recompenses}
                  className="h-20 w-20 mx-6"
                  alt="Catégories de tutoriels"
                />
                <h3>Mes récompenses</h3>
              </NavLink>
            </li>

            {/* Historic */}
            <li className="text-[#333] text-right pr-3 flex  w-full  md:justify-start ">
              <NavLink to="/historique" className="flex  items-center">
                <img
                  src={historic}
                  className="h-20 w-20 mx-6"
                  alt="Catégories de tutoriels"
                />
                <h3 className="">Mon historique</h3>
              </NavLink>
            </li>

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

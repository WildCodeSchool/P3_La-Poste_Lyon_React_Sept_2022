import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import profil from "../assets/profil.png";
import categories from "../assets/categories.svg";
import jeux from "../assets/jeux.png";
import recompenses from "../assets/recompenses.png";
import parcours from "../assets/parcours.png";
import historic from "../assets/Historique.png";

function NavigationBarUser({ open }) {
  const navigate = useNavigate();

  // Log Out remove localStorage and navigate to the main page with a reload
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    navigate("/");
    window.location.reload();
  };

  return (
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
            open ? " flex flex-col items-end space-y-4 m-3 text-xl " : "hidden"
          }
        >
          {/* Profil  */}

          <li className="text-[#333]  text-right pr-3 flex   w-full md:justify-start ">
            <NavLink to="/dashboard" className="flex justify-end items-center">
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
            <NavLink to="/games" className="flex  items-center">
              <img
                src={jeux}
                className="h-20 w-20 mx-6"
                alt="Catégories de tutoriels"
              />
              <h3>Mes jeux</h3>
            </NavLink>
          </li>

          {/* Journey  */}
          <li className="text-[#333] text-right pr-3 flex  w-full md:justify-start">
            <NavLink to="/course" className="flex  items-center">
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
            <NavLink to="/reward" className="flex items-center">
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
            <NavLink to="/history" className="flex  items-center">
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
              onClick={() => handleLogout()}
              type="button"
              className="text-xl underline text-[#003DA5]"
            >
              Me déconnecter
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavigationBarUser;

import React from "react";
import { useNavigate } from "react-router-dom";
import NavigationBarLink from "./NavigationBarLink";

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

          <NavigationBarLink
            imgSrc={profil}
            text="Mon Espace"
            linkDestination="/dashboard"
          />

          {/* Categories */}
          <NavigationBarLink
            imgSrc={categories}
            text="Catégories de tutoriels"
            linkDestination="/categories"
          />

          {/* Games  */}
          <NavigationBarLink
            imgSrc={jeux}
            text="Mes jeux"
            linkDestination="/games"
          />

          {/* Journey  */}
          <NavigationBarLink
            imgSrc={parcours}
            text="Mon Parcours"
            linkDestination="/course"
          />

          {/* Rewards */}
          <NavigationBarLink
            imgSrc={recompenses}
            text="Mes récompenses"
            linkDestination="/reward"
          />

          {/* Historic */}
          <NavigationBarLink
            imgSrc={historic}
            text="Mon historique"
            linkDestination="/history"
          />

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

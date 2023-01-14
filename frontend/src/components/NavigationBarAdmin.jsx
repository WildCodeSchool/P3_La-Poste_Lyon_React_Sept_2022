import React from "react";
import { useNavigate } from "react-router-dom";
import NavigationBarLink from "./NavigationBarLink";
import profil from "../assets/profil.png";

import tutoManagement from "../assets/navbarAdmin/TutoManagement.svg";
import tutoCreation from "../assets/navbarAdmin/TutoCreation.svg";
import usersManagement from "../assets/navbarAdmin/usersManagement.svg";

function NavigationBarAdmin({ open }) {
  const navigate = useNavigate();

  // Log Out remove localStorage and navigate to the main page with a reload
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    navigate("/");
    window.location.reload();
  };

  return (
    <nav className="navbar">
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
            {/* Dashboard */}
            <NavigationBarLink
              imgSrc={profil}
              text="Tableau de bord"
              linkDestination="/dashboard"
            />

            {/* Tutos creation  */}
            <NavigationBarLink
              imgSrc={tutoCreation}
              text="Créer un tutoriel"
              linkDestination="/creation"
            />
            {/* Tutos management */}
            <NavigationBarLink
              imgSrc={tutoManagement}
              text="Gérer les tutoriels"
              linkDestination="/tutos"
            />

            {/* Users management  */}
            <NavigationBarLink
              imgSrc={usersManagement}
              text="Gérer les utilisateurs"
              linkDestination="/users"
            />

            {/* Logout */}
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
    </nav>
  );
}

export default NavigationBarAdmin;

import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
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

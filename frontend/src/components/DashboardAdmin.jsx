import React from "react";
import { Link } from "react-router-dom";
import BannerProfile from "./BannerProfile";
import tutoManagement from "../assets/navbarAdmin/TutoManagement.svg";
import tutoCreation from "../assets/navbarAdmin/TutoCreation.svg";
import usersManagement from "../assets/navbarAdmin/usersManagement.svg";
import AccessButton from "./AccessButton";
import Mestutos from "../assets/Mestutos.svg";

// page component for admin only.
function DashboardAdmin() {
  return (
    <div className="">
      <BannerProfile />
      <ul className="grid overflow-hidden grid-cols-1 grid-rows-4 gap-5 md:grid md:overflow-hidden md:grid-cols-2 md:grid-rows-2 md:gap-5 mx-6">
        {/* <li> elements are contained in <Link> to redirect the user to the corresponding page */}
        <li className=" box row-start-1 row-span-1 col-start-1 col-span-1 my-3 md:m-6 border shadow-xl rounded-lg text-center h-65 md:box md:row-start-1 md:row-span-1 md:col-start-1 md:col-span-1">
          <h2 className="text-xl md:text-2xl text-[#003DA5] font-bold p-2 bg-white shadow-md rounded-tl-lg rounded-tr-lg h-17 flex justify-center items-center">
            Gérer les utilisateurs
          </h2>
          <div className="flex justify-center my-5">
            <img
              className="h-20"
              src={usersManagement}
              alt="gestionUtilisateurs"
            />
          </div>
          <Link to="/users">
            <AccessButton />
          </Link>
        </li>
        {/* Should send the user on the page of all the tutorials he already did */}
        <li className="box row-start-2 row-span-1 col-start-1 col-span-1 my-3 md:m-6 border shadow-xl rounded-lg text-center h-65 md:box md:row-start-2 md:row-span-1 md:col-start-1 md:col-span-1">
          <h2 className="text-xl md:text-2xl text-[#003DA5] font-bold p-2 bg-white shadow-md rounded-tl-lg rounded-tr-lg h-17 flex justify-center items-center">
            Gérer les tutoriels existants
          </h2>
          <div className="flex justify-center my-5">
            <img className="h-20" src={tutoManagement} alt="gestionTutos" />
          </div>
          <Link to="/categories/:id/tutorials">
            <AccessButton />
          </Link>
        </li>
        {/* Should send the user on the page of HIS tutorials that he already began and not all the tutorials */}
        <li className="box row-start-3 row-span-1 col-start-1 col-span-2 my-3 md:m-6 border shadow-xl rounded-lg text-center h-65 md:box md:row-start-1 md:row-span-1 md:col-start-2 md:col-span-2">
          <h2 className="text-xl md:text-2xl text-[#003DA5] font-bold p-2 bg-white shadow-md rounded-tl-lg rounded-tr-lg h-17 flex justify-center items-center">
            Créer un tutoriel
          </h2>
          <div className="flex flex-col justify-center h-max">
            <div className="flex justify-center my-5">
              <img className="h-20" src={tutoCreation} alt="creationTutos" />
            </div>
            <Link to="/creation">
              <AccessButton />
            </Link>
          </div>
        </li>
        {/* */}
        <li className="box row-start-4 row-span-1 col-start-1 col-span-2 my-3 md:m-6 border shadow-xl rounded-lg text-center h-65 md:box md:row-start-2 md:row-span-1 md:col-start-2 md:col-span-2">
          <h2 className="text-xl md:text-2xl text-[#003DA5] font-bold p-2 bg-white shadow-md rounded-tl-lg rounded-tr-lg h-17 flex justify-center items-center">
            Tous les tutoriels
          </h2>
          <div className="flex flex-wrap justify-around my-5">
            <img className="h-20" src={Mestutos} alt="tousLesTutos" />
          </div>
          <Link to="/categories">
            <AccessButton />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default DashboardAdmin;

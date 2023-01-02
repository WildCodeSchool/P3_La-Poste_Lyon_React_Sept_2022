import React from "react";
import { Link } from "react-router-dom";
import Historique from "../assets/Historique.png";
import Mestutos from "../assets/Mestutos.png";
import badge1 from "../assets/badge1.png";
import AccessButton from "./AccessButton";
import BannerProfile from "./BannerProfile";

function DashboardUser() {
  return (
    <div className="">
      <BannerProfile />
      <ul className="grid overflow-hidden grid-cols-2 grid-rows-3 gap-5 md:grid md:overflow-hidden md:grid-cols-3 md:grid-rows-2 md:gap-5">
        {/* <li> elements are contained in <Link> to redirect the user to the corresponding page */}
        <li className=" box row-start-1 row-span-1 col-start-1 col-span-1 my-3 md:m-6 border shadow-xl rounded-lg text-center h-70 md:box md:row-start-1 md:row-span-1 md:col-start-1 md:col-span-1">
          <h2 className="text-xl md:text-2xl text-white font-bold p-2 bg-[#003DA5] rounded-tl-lg rounded-tr-lg h-20 flex justify-center items-center">
            Mon historique
          </h2>
          <div className="flex justify-center my-5">
            <img className="h-20" src={Historique} alt="historique" />
          </div>
          <Link to="/historique" className="">
            <AccessButton />
          </Link>
        </li>
        {/* Should send the user on the page of all the tutorials he already did */}
        <li className="box row-start-1 row-span-1 col-start-2 col-span-1 my-3 md:m-6 border shadow-xl rounded-lg text-center h-70 md:box md:row-start-2 md:row-span-1 md:col-start-1 md:col-span-1">
          <h2 className="text-xl md:text-2xl text-white font-bold p-2 bg-[#003DA5] rounded-tl-lg rounded-tr-lg h-20 flex justify-center items-center">
            Mes tutoriels
          </h2>
          <div className="flex justify-center my-5">
            <img className="h-20" src={Mestutos} alt="mestutos" />
          </div>
          <Link to="/tutoriels">
            <AccessButton />
          </Link>
        </li>
        {/* Should send the user on the page of HIS tutorials that he already began and not all the tutorials */}
        <li className="box row-start-2 row-span-1 col-start-1 col-span-2 my-3 md:m-6 border shadow-xl rounded-lg text-center h-70 md:box md:row-start-1 md:row-span-1 md:col-start-2 md:col-span-2">
          <h2 className="text-xl md:text-2xl text-white font-bold p-2 bg-[#003DA5] rounded-tl-lg rounded-tr-lg h-20 flex justify-center items-center">
            Mon parcours utilisateur
          </h2>
          <div className="flex flex-col justify-center h-max">
            <div className="mt-8 mb-8">
              <p className="text-gray-700 text-base">
                Accéder à mon parcours utilisateur
              </p>
            </div>
            <Link to="/course" className="">
              <AccessButton />
            </Link>
          </div>
        </li>
        {/* Should send the user on the badges page */}
        <li className="box row-start-3 row-span-1 col-start-1 col-span-2 my-3 md:m-6 border shadow-xl rounded-lg text-center h-70 md:box md:row-start-2 md:row-span-1 md:col-start-2 md:col-span-2">
          <h2 className="text-xl md:text-2xl text-white font-bold p-2 bg-[#003DA5] rounded-tl-lg rounded-tr-lg h-20 flex justify-center items-center">
            Badges obtenus
          </h2>
          <div className="flex flex-wrap justify-around my-5">
            <img className="h-20" src={badge1} alt="badge1" />
            <img className="h-20" src={badge1} alt="badge2" />
            <img className="h-20" src={badge1} alt="badge3" />
            <img className="h-20" src={badge1} alt="badge4" />
          </div>
          <Link to="/tutoriels" className="">
            <AccessButton />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default DashboardUser;

import React from "react";
import { Link } from "react-router-dom";
import Historique from "../assets/Historique.png";
import Mestutos from "../assets/Mestutos.png";
import badge1 from "../assets/badge1.png";
import badge2 from "../assets/badge2.png";
import badge3 from "../assets/badge3.png";
import badge4 from "../assets/badge4.png";
import AccessButton from "./AccessButton";
import BannerProfile from "./BannerProfile";

function DashboardUser() {
  return (
    <div className="">
      <BannerProfile />
      <ul className="grid overflow-hidden grid-cols-2 grid-rows-2 gap-6">
        {/* <li> elements are contained in <Link> to redirect the user to the corresponding page */}
        <div className="flex flex-wrap justify-around">
          <li className=" my-3 md:m-6 border shadow-xl rounded-lg text-center">
            <h2 className="text-xl text-white p-2 bg-[#003DA5] rounded-tl-lg rounded-tr-lg h-20 flex justify-center items-center">
              Mon historique
            </h2>
            <img src={Historique} alt="historique" />
            <Link to="/historique">
              <AccessButton />
            </Link>
          </li>
          {/* Should send the user on the page of HIS tutorials that he already began and not all the tutorials */}
          <li className=" my-3 md:m-6 border shadow-xl rounded-lg text-center">
            <h2 className="text-xl text-white p-2 bg-[#003DA5] rounded-tl-lg rounded-tr-lg h-20 flex justify-center items-center">
              Tutoriels en cours
            </h2>
            <p className="text-gray-700 text-base">Nom du tutoriel en cours</p>
            <Link to="/tutoriels">
              <AccessButton />
            </Link>
          </li>
        </div>
        <div className="flex flex-wrap justify-around">
          {/* Should send the user on the page of all the tutorials he already did */}
          <li className=" my-3 md:m-6 border shadow-xl rounded-lg text-center">
            <h2 className="text-xl text-white p-2 bg-[#003DA5] rounded-tl-lg rounded-tr-lg h-20 flex justify-center items-center">
              Mes tutoriels
            </h2>
            <img src={Mestutos} alt="mestutos" />
            <Link to="/tutoriels">
              <AccessButton />
            </Link>
          </li>
          {/* Should send the user on the badges page */}
          <li className=" my-3 md:m-6 border shadow-xl rounded-lg text-center">
            <h2 className="text-xl text-white p-2 bg-[#003DA5] rounded-tl-lg rounded-tr-lg h-20 flex justify-center items-center">
              Badges obtenus
            </h2>
            <div className="flex flex-wrap justify-around">
              <img src={badge1} alt="badge1" />
              <img src={badge2} alt="badge2" />
              <img src={badge3} alt="badge3" />
              <img src={badge4} alt="badge4" />
            </div>
            <Link to="/tutoriels">
              <AccessButton />
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default DashboardUser;

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
      <ul className="grid overflow-hidden grid-cols-2 grid-rows-4 gap-9 md:grid md:overflow-hidden md:grid-cols-3 md:grid-rows-4 md:gap-6">
        {/* <li> elements are contained in <Link> to redirect the user to the corresponding page */}
        <li className=" box row-start-1 row-span-1 col-start-1 col-span-1 my-3 md:m-6 border shadow-xl rounded-lg text-center h-80 md:box md:row-start-1 md:row-span-1 md:col-start-1 md:col-span-1">
          <h2 className="text-xl md:text-2xl text-white font-bold p-2 bg-[#003DA5] rounded-tl-lg rounded-tr-lg h-20 flex justify-center items-center">
            Mon historique
          </h2>
          <div className="flex justify-center my-5">
            <img className="h-14" src={Historique} alt="historique" />
          </div>
          <Link to="/historique" className="">
            <AccessButton />
          </Link>
        </li>
        {/* Should send the user on the page of all the tutorials he already did */}
        <li className="box row-start-1 row-span-1 col-start-2 col-span-1 my-3 md:m-6 border shadow-xl rounded-lg text-center h-80 md:box md:row-start-2 md:row-span-1 md:col-start-1 md:col-span-1">
          <h2 className="text-xl md:text-2xl text-white font-bold p-2 bg-[#003DA5] rounded-tl-lg rounded-tr-lg h-20 flex justify-center items-center">
            Mes tutoriels
          </h2>
          <div className="flex justify-center my-5">
            <img className="h-14" src={Mestutos} alt="mestutos" />
          </div>
          <Link to="/tutoriels">
            <AccessButton />
          </Link>
        </li>
        {/* Should send the user on the page of HIS tutorials that he already began and not all the tutorials */}
        <li className="box row-start-2 row-span-1 col-start-1 col-span-2 my-3 md:m-6 border shadow-xl rounded-lg text-center h-80 md:box md:row-start-1 md:row-span-1 md:col-start-2 md:col-span-2">
          <h2 className="text-xl md:text-2xl text-white font-bold p-2 bg-[#003DA5] rounded-tl-lg rounded-tr-lg h-20 flex justify-center items-center">
            Tutoriels en cours
          </h2>
          <div className="grid overflow-hidden grid-cols-1 grid-rows-1 gap-6">
            <div className="box row-start-1">
              <p className="text-gray-700 text-base">
                Nom du tutoriel en cours
              </p>
              <p className="text-gray-700 text-base">
                Nom du tutoriel en cours
              </p>
              <p className="text-gray-700 text-base">
                Nom du tutoriel en cours
              </p>
              <p className="text-gray-700 text-base">
                Nom du tutoriel en cours
              </p>
            </div>
            <div className="box row-start-2">
              <Link to="/tutoriels">
                <AccessButton />
              </Link>
            </div>
          </div>
        </li>
        {/* Should send the user on the badges page */}
        <li className="box row-start-3 row-span-1 col-start-1 col-span-2 my-3 md:m-6 border shadow-xl rounded-lg text-center h-80 md:box md:row-start-2 md:row-span-1 md:col-start-2 md:col-span-2">
          <h2 className="text-xl md:text-2xl text-white font-bold p-2 bg-[#003DA5] rounded-tl-lg rounded-tr-lg h-20 flex justify-center items-center">
            Badges obtenus
          </h2>
          <div className="flex flex-wrap justify-around my-5">
            <img src={badge1} alt="badge1" />
            <img src={badge2} alt="badge2" />
            <img src={badge3} alt="badge3" />
            <img src={badge4} alt="badge4" />
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

import React from "react";
import { Link } from "react-router-dom";
import User from "../assets/User.png";
import medaille from "../assets/medaille.png";
import parametres from "../assets/parametres.png";

function BannerProfile() {
  return (
    <div className="w-full h-full">
      <div className="mt-4 flex justify-center">
        <h1 className="flex justify-center items-center text-bold text-xl text-white rounded-3xl shadow-lg bg-[#003DA5] w-2/3 h-10 md:text-2xl text-center md:w-1/4 md:h-14 md:text-center">
          Mon tableau de bord
        </h1>
      </div>
      <div className="py-2" />
      <div className="flex bg-[#FFC928] justify-between rounded-xl w-full">
        <div className="flex flex-wrap">
          <div className="rounded-full w-100 h-100 my-5">
            <Link to="/profil">
              <img
                className="border-black rounded-full w-20 h-20"
                src={User}
                alt="userImage"
              />
            </Link>
          </div>
          <div className="my-5">
            <h2 className="text-2xl">Enfant FindBug</h2>
            <div className="flex flex-wrap">
              <img className="w-5" src={medaille} alt="userImage" />
              <h2 className="text-2xl">Débutant</h2>
            </div>
          </div>
        </div>
        <div className="my-2">
          {/* Will send the user on the road parameters not the home page */}
          <Link to="/settings">
            <img className="mr-2 h-10" src={parametres} alt="parametres" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BannerProfile;

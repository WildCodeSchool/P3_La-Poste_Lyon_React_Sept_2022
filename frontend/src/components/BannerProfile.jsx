import React from "react";
import { Link } from "react-router-dom";
import User from "../assets/User.png";
import medaille from "../assets/medaille.png";
import parametres from "../assets/parametres.png";

function BannerProfile() {
  return (
    <div className="w-full h-full">
      <div className="mt-4 flex justify-center">
        <h1 className="text-center rounded-3xl bg-[#003DA5] px-3 text-white">
          Mon tableau de bord
        </h1>
      </div>
      <div className="py-2" />
      <div className="flex bg-[#FFC928] justify-between rounded-xl">
        <div className="rounded-full w-100 h-100 my-5">
          <img
            className="border-black border-2 rounded-full w-20 h-20"
            src={User}
            alt="userImage"
          />
        </div>
        <div>
          <h2>Enfant FindBug</h2>
          <div className="flex flex-wrap">
            <img className="w-5" src={medaille} alt="userImage" />
            <h2>Débutant</h2>
          </div>
        </div>
        <div>
          <Link to="/">
            <img className="mt-5 mr-5 h-5" src={parametres} alt="parametres" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BannerProfile;

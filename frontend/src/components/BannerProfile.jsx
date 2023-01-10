import React from "react";
import { Link } from "react-router-dom";
import User from "../assets/User.png";
import medaille from "../assets/medaille.png";
import parametres from "../assets/parametres.png";

function BannerProfile() {
  return (
    <div className="w-full h-full">
      <div className="py-2" />
      <div className="flex bg-[#FFC928] w-full justify-between drop-shadow-2xl">
        <div className="flex justify-around flex-wrap md:mx-10">
          <div className="flex flex-wrap">
            <div className="rounded-full w-100 h-100 my-5">
              <Link to="/dashboard">
                <img
                  className="border-black rounded-full w-20 h-20 mr-8"
                  src={User}
                  alt="userImage"
                />
              </Link>
            </div>
          </div>
          <div className="my-5 md:flex md:flex-wrap md:items-center">
            <h2 className="text-2xl">Enfant FindBug</h2>
            <div className="flex items-center flex-wrap">
              <img className="h-7 mx-3" src={medaille} alt="userImage" />
              <h2 className="text-2xl">Débutant</h2>
            </div>
          </div>
        </div>
        <div className="my-2  justify-end">
          <Link to="/settings">
            <img className="mr-2 h-10" src={parametres} alt="parametres" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BannerProfile;

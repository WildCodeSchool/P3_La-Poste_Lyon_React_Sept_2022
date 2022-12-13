import React from "react";
import User from "../assets/User.png";
import medaille from "../assets/medaille.png";
import parametres from "../assets/parametres.png";

function DashboardUser() {
  return (
    <div className="">
      <div className="mt-4 flex justify-center">
        <h1 className="text-center rounded-3xl bg-blue-800 px-3">
          Mon tableau de bord
        </h1>
      </div>
      <div className="py-2" />
      <div className="flex bg-yellow-500 justify-between rounded-xl">
        <img
          className="border-black w-400 h-400 rounded-3xl"
          src={User}
          alt="userImage"
        />
        <div>
          <h2>Enfant FindBug</h2>
          <div className="flex flex-wrap">
            <img className="w-5" src={medaille} alt="userImage" />
            <h2>Débutant</h2>
          </div>
        </div>
        <div>
          <button type="button">
            <img className="mt-5 mr-5 h-5" src={parametres} alt="parametres" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default DashboardUser;

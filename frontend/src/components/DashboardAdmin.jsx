import React from "react";
import BannerProfile from "./BannerProfile";

// page component for admin only.
function DashboardAdmin() {
  return (
    <div className="DashboardAdmin">
      <div className="min-h-full w-full flex flex-col justify-center items-center text-xl">
        <h1 className="flex justify-center bg-[#003DA5] text-white rounded-xl w-4/6 mb-10 mt-5 md:text-2xl p-1">
          Mon tableau de bord
        </h1>

        <BannerProfile />

        <div className="w-5/6 mb-10">
          <p className="flex justify-center bg-[#003DA5] rounded-t-lg text-white md:text-2xl p-2">
            gérer les utilisateur
          </p>
          <button
            type="button"
            className="flex shadow-lg items-center w-full justify-between p-2"
          >
            <img src="" alt="gérer les utilisateurs" />
            <div>
              <p className="md:text-2xl">modifier les utilisateurs exitant</p>
            </div>
            <img src="" alt="fleche vers la droite" />
          </button>
        </div>
        <div className="w-5/6 mb-10">
          <p className="flex justify-center bg-[#003DA5] rounded-t-lg text-white md:text-2xl p-2">
            Gérer les tutoriels existants
          </p>
          <button
            type="button"
            className="flex shadow-lg items-center w-full justify-between p-2"
          >
            <img src="" alt="gérer les tutoriel" />
            <div>
              <p className="md:text-2xl">
                Modifier ou supprimer les tutoriels existants
              </p>
            </div>
            <img src="" alt="fleche vers la droite" />
          </button>
        </div>
        <div className="w-5/6">
          <p className="flex justify-center bg-[#003DA5] rounded-t-lg text-white md:text-2xl p-2">
            Créer un tutoriel
          </p>
          <button
            type="button"
            className="flex shadow-lg items-center w-full justify-between"
          >
            <img className="w-24 h-auto" src="" alt="créer un tutoriel" />
            <div>
              <p className="md:text-2xl">créer un tutoriel</p>
            </div>
            <img src="" alt="fleche vers la droite" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default DashboardAdmin;

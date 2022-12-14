import React from "react";
// page component for admin only.
function DashboardAdmin() {
  return (
    <div className="min-h-full w-full flex flex-col justify-center items-center">
      <h1 className="flex justify-center bg-blue-600 text-white rounded-xl w-1/6 ">
        coucou
      </h1>
      <div className="text-4xl bg-yellow-400 w-full">Profil</div>

      <div>
        <p className="bg-blue-600 rounded-t-lg">gérer les utilisateur</p>
        <button type="button" className="flex shadow-lg">
          <img src="./src/assets/utilisateur.png" alt="utilisateur" />
          <div>
            <p>modifier les utilisateur exitant</p>
          </div>
          <img src="./src/assets/indexdroite.png" alt="fleche vers la droite" />
        </button>
      </div>
    </div>
  );
}

export default DashboardAdmin;

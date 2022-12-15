import React from "react";
// page component for admin only.
function DashboardAdmin() {
  return (
    <div className="min-h-full w-full flex flex-col justify-center items-center text-xl">
      <h1 className="flex justify-center bg-blue-600 text-white rounded-xl w-4/6 mb-10 mt-5 lg:text-2xl p-1">
        Mon tableau de bord
      </h1>
      <div className="text-4xl bg-yellow-400 w-full mb-10">Profil</div>

      <div className="w-5/6 mb-10">
        <p className="flex justify-center bg-blue-600 rounded-t-lg text-white lg:text-2xl p-2">
          gérer les utilisateur
        </p>
        <button
          type="button"
          className="flex shadow-lg items-center w-full justify-between p-2"
        >
          <img
            src="./src/assets/gererlesutilisateurs.png"
            alt="gérer les utilisateurs"
          />
          <div>
            <p className="lg:text-2xl">modifier les utilisateurs exitant</p>
          </div>
          <img src="./src/assets/indexdroite.png" alt="fleche vers la droite" />
        </button>
      </div>
      <div className="w-5/6 mb-10">
        <p className="flex justify-center bg-blue-600 rounded-t-lg text-white lg:text-2xl p-2">
          Gérer les tutoriels existants
        </p>
        <button
          type="button"
          className="flex shadow-lg items-center w-full justify-between p-2"
        >
          <img src="/src/assets/gererlestuto.png" alt="gérer les tutoriel" />
          <div>
            <p className="lg:text-2xl">
              Modifier ou supprimer les tutoriels existants
            </p>
          </div>
          <img src="./src/assets/indexdroite.png" alt="fleche vers la droite" />
        </button>
      </div>
      <div className="w-5/6">
        <p className="flex justify-center bg-blue-600 rounded-t-lg text-white lg:text-2xl p-2">
          Créer un tutoriel
        </p>
        <button
          type="button"
          className="flex shadow-lg items-center w-full justify-between"
        >
          <img
            className="w-24 h-auto"
            src="./src/assets/créer un tutoriel.png"
            alt="créer un tutoriel"
          />
          <div>
            <p className="lg:text-2xl">créer un tutoriel</p>
          </div>
          <img src="./src/assets/indexdroite.png" alt="fleche vers la droite" />
        </button>
      </div>
    </div>
  );
}

export default DashboardAdmin;

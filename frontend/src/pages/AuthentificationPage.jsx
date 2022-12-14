import React from "react";
import granny from "../assets/granny1.svg";
import arobase from "../assets/arobaselogo.png";
import locker from "../assets/lockerlogo.png";
import forgotpass from "../assets/forgotpass.svg";

function AuthentificationPage() {
  return (
    // Je créée la page d'authentification avec des éléments simples : un H1, deux input décorés de petites icônes, une image pour la version mobile
    // et une autre qui apparaît en version Desktop, et enfin un bouton pour valider la connexion.
    <div className=" flex flex-col items-center justify-center  ">
      <h1 className=" items-center content-center justify-center text-3xl mb-20 mt-12">
        CONNECTEZ-VOUS
      </h1>

      <div className=" flex ml-10 md:w-3/5 md:justify-center ">
        <img src={arobase} alt="arobase" className="w-14 h-14 ml1-1" />
        <input
          placeholder="Entrez votre addresse email"
          className="bg-gray-200 -4mb0 text-gray-600   py-2 px-4 border rounded-2xl   md:w-3/5 "
        />
      </div>
      <p className="italic text-gray-400 underline mb-12 ml-40">
        addresse email oubliée?
      </p>

      <div className="flex ml-10 md:w-3/5 md:justify-center">
        <img src={locker} alt="locker" className="w-14 h-14 ml1-1" />
        <input
          placeholder="Entrez votre mot de passe"
          className="bg-gray-200 -4mb0 text-gray-600   py-2 px-4 border  rounded-2xl md:w-3/5 "
        />
      </div>
      <p className="italic text-gray-400 underline mb-20 ml-40">
        mot de passe oublié?
      </p>

      <div className=" flex flex-col items-center justify-center ml-20 mr-20 ">
        <img
          src={granny}
          className=" max-w-sm w-64 h-64 md:hidden mb-16"
          alt="granny"
        />
        <img
          src={forgotpass}
          className=" hidden w-21 h-31 mr-50 md:block mb-16"
          alt="forgotpass"
        />
      </div>
      <div className="md:ml-48">
        <button
          type="button"
          className="bg-blue-800 text-white mt-30 py-2 px-4  border rounded "
        >
          Connexion
        </button>
      </div>
    </div>
  );
}

export default AuthentificationPage;

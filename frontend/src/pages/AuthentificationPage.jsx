import React from "react";
import granny from "../assets/granny.svg";
import arobase from "../assets/arobase.png";
import locker from "../assets/locker.jpg";
import forgotpass from "../assets/forgotpass.svg";

function AuthentificationPage() {
  return (
    <div className=" flex flex-col items-center justify-center ">
      <h1 className=" items-center content-center justify-center text-3xl mb-20">
        CONNECTEZ-VOUS
      </h1>

      <div className=" flex ml-10 md:w-3/5 md:justify-center">
        <img src={arobase} alt="arobase" className="w-12 h-12 mr-5" />
        <input
          placeholder="Entrez votre addresse email"
          className="bg-gray-200 -4mb0 rounded-lg text-gray-600   py-2 px-4 border rounded-2xl   md:w-3/5 "
        />
      </div>
      <p className="italic text-gray-400 underline mb-10 ml-40">
        addresse email oubliée?
      </p>

      <div className="flex ml-10 md:w-3/5 md:justify-center">
        <img src={locker} alt="locker" className="w-14 h-14 mr-5" />
        <input
          placeholder="Entrez votre mot de passe"
          className="bg-gray-200 -4mb0 rounded-lg text-gray-600   py-2 px-4 border  rounded-2xl md:w-3/5 "
        />
      </div>
      <p className="italic text-gray-400 underline mb-40 ml-40">
        mot de passe oublié?
      </p>

      <div className=" flex flex-col items-center justify-center ml-20 mr-20 ">
        <img
          src={granny}
          className=" max-w-sm w-21 h-31 md:hidden"
          alt="granny"
        />
        <img
          src={forgotpass}
          className=" hidden w-21 h-31 mr-50 md:block"
          alt="forgotpass"
        />
      </div>

      <div className="">
        <button
          type="button"
          className="bg-blue-800 text-white rounded-lg mt-10 py-2 px-4  border rounded md:justify-end"
        >
          Connexion
        </button>
      </div>
    </div>
  );
}

export default AuthentificationPage;

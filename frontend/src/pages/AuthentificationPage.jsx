import React from "react";
import { Link } from "react-router-dom";
import granny from "../assets/granny1.svg";
import arobase from "../assets/arobaselogo.png";
import locker from "../assets/lockerlogo.png";
import forgotpass from "../assets/forgotpass.svg";

function AuthentificationPage() {
  return (
    <div className=" flex flex-col items-center justify-center  ">
      <h1 className=" items-center content-center justify-center text-3xl mb-10 mt-10">
        CONNECTEZ-VOUS
      </h1>

      <div className=" flex justify-center md:w-3/5 md:justify-center">
        <img src={arobase} alt="arobase" className="w-14 h-14 ml1-1" />
        <input
          placeholder="Entrez votre addresse email"
          className="bg-gray-200 -4mb0 text-gray-600 py-2 px-4 border rounded-2xl md:w-3/5 "
        />
      </div>
      <p className="italic text-gray-400 underline mb-12 ml-28 md:ml-80 text-xs md:text-sm">
        adresse e-mail oubliée ?
      </p>

      <div className="flex justify-center md:w-3/5 md:justify-center">
        <img src={locker} alt="locker" className="w-14 h-14 ml1-1" />
        <input
          placeholder="Entrez votre mot de passe"
          className="bg-gray-200 -4mb0 text-gray-600   py-2 px-4 border  rounded-2xl md:w-3/5 "
        />
      </div>
      <p className="italic text-gray-400 underline mb-4 ml-28 md:ml-80 text-xs md:text-sm md:mb-16">
        mot de passe oublié ?
      </p>

      <div className=" flex flex-col items-center justify-center ml-20 mr-20 md:mb-4">
        <img
          src={granny}
          className=" max-w-sm w-64 h-64 md:hidden mb-8"
          alt="granny"
        />
        <img
          src={forgotpass}
          className=" hidden w-21 h-31 mr-50 md:block mb-8 md:mb-9"
          alt="forgotpass"
        />
      </div>
      <Link to="/dashboard">
        <button
          type="button"
          className="bg-[#003DA5] text-white m-1 py-1 px-4 rounded-lg shadow-lg md:h-14 md:w-44 md:text-lg hover:shadow hover:bg-[#FFC927] hover:text-black mb-28"
        >
          Connexion
        </button>
      </Link>
    </div>
  );
}

export default AuthentificationPage;

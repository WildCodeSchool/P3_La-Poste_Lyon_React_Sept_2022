import React from "react";
import TutoSearchbarAide from "../components/TutoSearchbarAide";

function Help() {
  return (
    <div className="Help relative flex justify-center items-center">
      <div className="w-full">
        <div className="mt-7 mb-7 flex flex-col items-center">
          <img
            src="./src/assets/help/undraw_questions_re_1fy7.svg"
            alt="personnages se posant des questions"
            className="hidden md:block lg:block h-60"
          />
          <h1 className="flex justify-center items-center text-bold text-white rounded-xl shadow-lg bg-main-yellow w-2/3 h-10 text-xl md:text-3xl text-center md:w-1/4 md:h-14 md:text-center m-3 md:mb-10">
            Besoin d'aide?
          </h1>
          <p className="text-center text-lg md:text-xl">
            Le plus simple reste de nous contacter !
          </p>
        </div>
        <div className="mt-7 mb-7 md:mb-10 flex flex-col items-center text-lg md:text-xl">
          <p>Parlez a un conseiller à ce numéro :</p>
          <button
            type="button"
            className="flex justify-center items-center text-bold text-xl text-white rounded-xl shadow-lg bg-main-blue w-2/3 h-10 md:text-3xl text-center md:w-1/4 md:h-14 md:text-center mt-3"
          >
            <div className="flex md:justify-center md:w-full">
              <img
                src="./src/assets/help/message.png"
                alt="téléphone"
                className="h-8 md:h-12 lg:h-12 "
              />
            </div>
            <div className="flex md:justify-start md:w-full md:mr-16">
              <p className="text-xl md:text-3xl">3631</p>
            </div>
          </button>
          <p className="text-[12px]">De 10h à 12h puis 14h à 16h</p>
        </div>
        <div className="mt-7 mb-7 ms:mb-10 flex flex-col items-center text-lg md:text-xl">
          <p className="text-center">
            Sourd ou mal-entendant?
            <br /> Cliquez-sur ce lien <br />
            pour nous envoyer un E-mail :
          </p>
          <div className="flex justify-center items-center">
            <img
              className="h-12"
              src="./src/assets/mailaide.png"
              alt="lettre"
            />
            <p className="text-blue-500 underline underline-offset-2 ml-2">
              Nous contacter par E-mail
            </p>
          </div>
        </div>

        <div className="mt-7 mb-7 flex flex-col items-center text-lg md:text-xl">
          <p className="text-center mb-3">
            Peut-être que votre solution est déjà disponible parmis nos
            tutoriels :
          </p>
        </div>
        <div>
          <TutoSearchbarAide />
        </div>
      </div>
    </div>
  );
}

export default Help;

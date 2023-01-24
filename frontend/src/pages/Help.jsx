import React, { useState } from "react";
import TutoSearchbarAide from "../components/TutoSearchbarAide";

function Help() {
  const [open, setOpen] = useState(true);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="Help relative">
      <div className="mb-24">
        <div className="mt-7 mb-7 flex flex-col items-center">
          <h1 className="flex justify-center items-center text-bold text-lg text-white rounded-3xl shadow-lg bg-[#003DA5] w-2/3 h-10 md:text-2xl text-center md:w-1/4 md:h-14 md:text-center m-3">
            Besoin d'aide?
          </h1>
          <p className="text-center text-lg">
            Le plus simple reste de nous contacter !
          </p>
        </div>
        <div className="mt-7 mb-7 flex flex-col items-center text-lg">
          <p>Parlez a un conseiller à ce numéro :</p>
          <button
            type="button"
            className="flex items-center justify-center text-bold text-xl text-white rounded-3xl shadow-lg bg-green-500 w-2/3 h-10 md:text-2xl text-center md:w-1/4 md:h-14 md:text-center mt-3"
          >
            <img
              src="./src/assets/phonehelp.png"
              alt="téléphone"
              className="h-8 md:h-12 lg:h-12"
            />
            <p>36LOVE</p>
          </button>
          <p className="text-[12px]">De 10h à 12h puis 14h à 16h</p>
        </div>
        <div className="mt-7 mb-7 flex flex-col items-center text-lg">
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

        <div className="mt-7 mb-7 flex flex-col items-center text-lg">
          <p className="text-center mb-3">
            Peut-être que votre solution est déjà disponible dans nos tutoriel :
          </p>
          <button type="button" onClick={handleOpen}>
            cherchez parmi nos tutoriel :
          </button>
        </div>
      </div>
      <div className="absolute top-0">
        {open ? (
          <TutoSearchbarAide
            open={open}
            setOpen={setOpen}
            handleOpen={handleOpen}
          />
        ) : null}
      </div>
    </div>
  );
}

export default Help;

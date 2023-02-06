import React from "react";
import winner from "../assets/connexionPage/registerPage/winner.svg";

function RegisterFourthStep({
  submitRegisterInformations,
  handlePreviousStep,
  currentStep,
}) {
  return (
    <form
      onSubmit={submitRegisterInformations}
      className="mx-3 border rounded-xl shadow-lg bg-main-blue flex flex-col items-center w-10/12 md:w-6/12 h-[50vh] "
    >
      <h1 className="text-white text-center text-2xl border-b-2 pt-6 pb-3 h-20 border-b-[#01378e] shadow-md w-full ">
        Félicitations !
      </h1>

      <img
        src={winner}
        alt="Création de compte réussie"
        style={{ width: "45%", height: "45%" }}
      />

      <h2 className="text-white text-lg text-center">
        Dernière étape de création,
        <br />
        il ne reste plus qu'à <b>valider</b> !
      </h2>

      <div className="flex gap-6 ">
        {currentStep === 3 && (
          <button
            type="button"
            className="bg-[#003DA5] border  items-center flex justify-center text-white mt-8 py-2 px-4 rounded-lg shadow-lg md:h-14 md:w-44 md:text-lg hover:shadow hover:bg-[#FFC927] hover:text-black"
            onClick={handlePreviousStep}
          >
            Précédent
          </button>
        )}
        <button
          type="submit"
          className="bg-[#003DA5] border items-center flex justify-center text-white mt-8 py-2 px-4 rounded-lg shadow-lg md:h-14 md:w-44 md:text-lg hover:shadow hover:bg-[#FFC927] hover:text-black"
        >
          Valider
        </button>
      </div>
    </form>
  );
}

export default RegisterFourthStep;

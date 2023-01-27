import React from "react";
import winner from "../assets/connexionPage/registerPage/winner.svg";

function RegisterFourthStep({ submitRegisterInformations }) {
  return (
    <div>
      <div>
        <h1>Félicitations !</h1>
      </div>
      <section>
        <img
          src={winner}
          alt="Création de compte réussie"
          style={{ width: "5%", height: "15%" }}
        />
      </section>
      <section>
        <div>
          <h1>
            Votre compte est créé,
            <br />
            il ne reste plus qu'à vous{" "}
            <span id="RegisterFourthStep" className="underline">
              connecter{" "}
            </span>{" "}
            !
          </h1>
        </div>
      </section>

      <button
        type="button"
        className="bg-[#003DA5] items-center flex justify-center text-white m-3 py-1 px-4  rounded-lg shadow-lg md:h-14 md:w-44 md:text-xl hover:shadow hover:bg-[#FFC927] hover:text-black"
        onClick={submitRegisterInformations}
        /* We will need to create an onClick event which send the complete status of the tutorial to the backend. Maybe later we can link this button to the quizz */
      >
        Se connecter
      </button>
    </div>
  );
}

export default RegisterFourthStep;

import React from "react";
import nextBtn from "@assets/items/nextBtn.svg";

import questionbtn from "../assets/items/question-circle.svg";
import RegisterFirstStepModale from "./RegisterFirstStepModale";

function RegisterFirstStep({
  handleNextStep,
  currentStep,
  setRegisterInformations,
  registerInformations,
}) {
  const [showModal, setShowModal] = React.useState(false);

  const [email, setEmail] = React.useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const submitEmail = () => {
    setRegisterInformations({
      ...registerInformations,
      email,
    });
    handleNextStep();
  };

  return (
    <form onSubmit={submitEmail}>
      <div>
        <h1>Créez votre identifiant</h1>
        <div>
          <img src="" alt="Première étape d'inscription" />
        </div>
      </div>
      <div>
        <p>Tous les champs sont obligatoires</p>
        <label htmlFor="username">
          Adresse e-mail{" "}
          <button
            className="flex"
            type="button"
            onClick={() => setShowModal(true)}
          >
            <img src={questionbtn} alt="Modale d'aide" />
          </button>
          {showModal ? (
            <RegisterFirstStepModale setShowModal={setShowModal} />
          ) : null}
        </label>
        <input
          id="username"
          type="email"
          pattern="/^([a-z0-9.])+\@gmail.com+$/"
          required
          value={email}
          onChange={handleEmail}
          placeholder="Entrez votre adresse mail"
        />
      </div>
      {currentStep < 1 && (
        <button
          type="submit"
          className="bg-[#003DA5] flex justify-center text-white m-3 py-1 px-4 rounded-lg shadow-lg md:h-14 md:w-44 md:text-lg hover:shadow hover:bg-[#FFC927] hover:text-black"
        >
          <img src={nextBtn} alt="next button" className="mx-3 w-10 h-10" />
        </button>
      )}
    </form>
  );
}

export default RegisterFirstStep;

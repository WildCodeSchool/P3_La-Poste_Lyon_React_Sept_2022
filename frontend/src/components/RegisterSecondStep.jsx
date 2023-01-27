import React from "react";
import nextBtn from "@assets/items/nextBtn.svg";
import questionbtn from "../assets/items/question-circle.svg";
import RegisterSecondStepModale from "./RegisterSecondStepModale";

function RegisterSecondStep({
  handleNextStep,
  handlePreviousStep,
  currentStep,
  setRegisterInformations,
  registerInformations,
}) {
  /* State to make the helper modale */
  const [showModal, setShowModal] = React.useState(false);

  /* Set password */
  const [password, setPassword] = React.useState("");
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const submitPassword = () => {
    setRegisterInformations({
      ...registerInformations,
      password,
    });

    handleNextStep();
  };

  return (
    <form onSubmit={submitPassword}>
      <div>
        <h1>Choississez votre mot de passe</h1>

        <div>
          <img src="" alt="Deuxième étape d'inscription" />
        </div>
      </div>
      <div>
        <p>Tous les champs sont obligatoires</p>
        <label htmlFor="password">
          Mot de passe
          <button
            className="flex"
            type="button"
            onClick={() => setShowModal(true)}
          >
            <img src={questionbtn} alt="helper modale" />
          </button>
          {/* Modale */}
          {showModal ? (
            <RegisterSecondStepModale setShowModal={setShowModal} />
          ) : null}
          {/* End of the modale */}
        </label>

        <input
          id="password"
          value={password}
          required
          onChange={handlePassword}
          type="password"
          placeholder="Entrez un mot de passe"
        />
      </div>
      {currentStep === 1 && (
        <button
          type="button"
          className="bg-[#003DA5] flex  items-center justify-center text-white m-3 py-1 px-4 rounded-lg shadow-lg md:h-14 md:w-44 md:text-xl hover:shadow hover:bg-[#FFC927] hover:text-black"
          onClick={handlePreviousStep}
        >
          Précédent
        </button>
      )}
      {currentStep === 1 && (
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

export default RegisterSecondStep;

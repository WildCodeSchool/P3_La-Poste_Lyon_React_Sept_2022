import React from "react";
import nextBtn from "../assets/items/nextBtn.svg";
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
    <form
      onSubmit={submitPassword}
      className="mx-3 border rounded-xl shadow-lg bg-main-blue flex flex-col items-center w-10/12 lg:w-6/12 h-[50vh] "
    >
      <h1 className="text-white text-center text-xl lg:text-2xl border-b-2 pt-6 pb-3 h-20 border-b-[#01378e] shadow-md w-full ">
        Choississez votre mot de passe
      </h1>
      <div className="lg:px-6 w-full">
        <div className="my-8 w-full px-6 ">
          <p className="italic text-gray-50 opacity-80  text-center text-sm lg:text-lg">
            * Tous les champs sont obligatoires
          </p>
          <label
            htmlFor="password"
            className="flex text-white mt-6 text-lg items-center"
          >
            Mot de passe
            <button
              className="flex px-3"
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
            minLength="8"
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&-])[A-Za-z\d@$!%*-?&]{8,}$"
            title="Votre mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial"
            placeholder="Entrez un mot de passe"
            className="p-2 rounded-md w-full"
          />
        </div>
      </div>
      <div className="flex gap-6 ">
        {currentStep === 1 && (
          <button
            type="button"
            className="bg-[#003DA5] border  items-center flex justify-center text-white mt-8 py-2 px-4 rounded-lg shadow-lg lg:h-14 lg:w-44 lg:text-lg hover:shadow hover:bg-[#FFC927] hover:text-black"
            onClick={handlePreviousStep}
          >
            Précédent
          </button>
        )}
        {currentStep === 1 && (
          <button
            type="submit"
            className="bg-[#003DA5] border  flex justify-center text-white mt-8 py-2 px-4 rounded-lg shadow-lg lg:h-14 lg:w-44 lg:text-lg hover:shadow hover:bg-[#FFC927] hover:text-black"
          >
            <img src={nextBtn} alt="next button" className="mx-3 w-10 h-10" />
          </button>
        )}
      </div>
    </form>
  );
}

export default RegisterSecondStep;

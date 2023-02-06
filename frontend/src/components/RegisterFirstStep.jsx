import React from "react";
import nextBtn from "../assets/items/nextBtn.svg";

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
    <form
      onSubmit={submitEmail}
      className="mx-3 border rounded-xl shadow-lg bg-main-blue flex flex-col items-center w-10/12 md:w-6/12 h-[50vh] "
    >
      <h1 className="text-white text-center text-2xl border-b-2 pt-6 pb-3 h-20 border-b-[#01378e] shadow-md w-full ">
        Créez votre identifiant
      </h1>
      <div className="md:px-6 w-full">
        <div className="my-8 w-full px-6 ">
          <p className="italic text-gray-50 opacity-80  text-center text-sm md:text-lg">
            * Tous les champs sont obligatoires
          </p>
          <label
            htmlFor="username"
            className="flex text-white mt-6 text-lg items-center"
          >
            Adresse e-mail{" "}
            <button
              className="flex px-3"
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
            className="p-2 rounded-md w-full"
          />
        </div>
      </div>
      {currentStep < 1 && (
        <button
          type="submit"
          className="bg-[#003DA5] border  flex justify-center text-white mt-8 py-2 px-4 rounded-lg shadow-lg md:h-14 md:w-44 md:text-lg hover:shadow hover:bg-[#FFC927] hover:text-black"
        >
          <img src={nextBtn} alt="next button" className="mx-3 w-10 h-10" />
        </button>
      )}
    </form>
  );
}

export default RegisterFirstStep;

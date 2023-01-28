import React from "react";

function RegisterThirdStep({
  handlePreviousStep,
  currentStep,
  handleNextStep,
  setRegisterInformations,
  registerInformations,
}) {
  const [firstname, setFirstname] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [phone, setPhone] = React.useState("");

  /* set the firstname */
  const handleFirstname = (event) => {
    setFirstname(event.target.value);
  };

  /* set the lastname */
  const handleLastname = (event) => {
    setLastname(event.target.value);
  };

  /* set the phone */
  const handlePhone = (event) => {
    setPhone(event.target.value);
  };

  const handleUserInfos = () => {
    setRegisterInformations({
      ...registerInformations,
      firstname,
      lastname,
      phone,
    });
    handleNextStep();
  };

  return (
    <form
      onSubmit={handleUserInfos}
      className="mx-3 border rounded-xl shadow-lg bg-main-blue flex flex-col items-center w-10/12 md:w-6/12 h-[50vh] "
    >
      <h1 className="text-white text-center text-2xl border-b-2 pt-6 pb-3 h-20 border-b-[#01378e] shadow-md w-full ">
        Renseignez vos informations
      </h1>
      <div className="md:px-6 w-full">
        <div className=" mt-3 w-full px-6 ">
          <p className="italic text-gray-50 opacity-80  text-center text-sm md:text-lg">
            Tous les champs sont obligatoires
          </p>

          <label
            htmlFor="firstname"
            className="flex text-white mt-3 text-lg items-center"
          >
            Prénom
          </label>
          <input
            id="firstname"
            value={firstname}
            onChange={handleFirstname}
            required
            type="text"
            placeholder="Entrez votre prénom"
            className="p-2 rounded-md w-full"
          />

          <div>
            <label
              htmlFor="lastname"
              className="flex text-white mt-1 text-lg items-center"
            >
              Nom
            </label>
            <input
              id="lastname"
              value={lastname}
              required
              onChange={handleLastname}
              type="text"
              placeholder="Entrez votre nom"
              className="p-2 rounded-md w-full"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="flex text-white mt-1 text-lg items-center"
            >
              Téléphone
            </label>
            <input
              id="phone"
              pattern="^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$"
              value={phone}
              required
              onChange={handlePhone}
              type="tel"
              placeholder="Entrez votre numéro de téléphone"
              className="p-2 rounded-md w-full"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-6 ">
        {currentStep === 2 && (
          <button
            type="button"
            className="bg-[#003DA5] border  items-center flex justify-center text-white mt-8 py-2 px-4 rounded-lg shadow-lg md:h-14 md:w-44 md:text-lg hover:shadow hover:bg-[#FFC927] hover:text-black"
            onClick={handlePreviousStep}
          >
            Précédent
          </button>
        )}
        {currentStep === 2 && (
          <button
            type="submit"
            className="bg-[#003DA5] border  items-center flex justify-center text-white mt-8 py-2 px-4 rounded-lg shadow-lg md:h-14 md:w-44 md:text-lg hover:shadow hover:bg-[#FFC927] hover:text-black"

            /* We will need to create an onClick event which send the complete status of the tutorial to the backend. Maybe later we can link this button to the quizz */
          >
            Valider
          </button>
        )}
      </div>
    </form>
  );
}

export default RegisterThirdStep;

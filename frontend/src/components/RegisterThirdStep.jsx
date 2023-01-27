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
    <form onSubmit={handleUserInfos}>
      <div>
        <div>
          <div>
            <h1>Renseignez vos informations</h1>

            <div>
              <img src="" alt="Troisième étape d'inscription" />
            </div>
          </div>

          <p>Tous les champs sont obligatoires</p>
          <div>
            <label htmlFor="firstname">Prénom</label>
            <input
              id="firstname"
              value={firstname}
              onChange={handleFirstname}
              required
              type="text"
              placeholder="Entrez votre prénom"
            />
          </div>
          <div>
            <label htmlFor="lastname">Nom</label>
            <input
              id="lastname"
              value={lastname}
              required
              onChange={handleLastname}
              type="text"
              placeholder="Entrez votre nom"
            />
          </div>
          <div>
            <label htmlFor="phone">Téléphone</label>
            <input
              id="phone"
              pattern="^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$"
              value={phone}
              required
              onChange={handlePhone}
              type="tel"
              placeholder="Entrez votre numéro de téléphone"
            />
          </div>
          <div />
        </div>
      </div>
      {currentStep === 2 && (
        <button
          type="button"
          className="bg-[#003DA5] flex  items-center justify-center text-white m-3 py-1 px-4 rounded-lg shadow-lg md:h-14 md:w-44 md:text-xl hover:shadow hover:bg-[#FFC927] hover:text-black"
          onClick={handlePreviousStep}
        >
          Précédent
        </button>
      )}
      {currentStep === 2 && (
        <button
          type="submit"
          className="bg-[#003DA5] items-center flex justify-center text-white m-3 py-1 px-4  rounded-lg shadow-lg md:h-14 md:w-44 md:text-xl hover:shadow hover:bg-[#FFC927] hover:text-black"

          /* We will need to create an onClick event which send the complete status of the tutorial to the backend. Maybe later we can link this button to the quizz */
        >
          Valider
        </button>
      )}
    </form>
  );
}

export default RegisterThirdStep;

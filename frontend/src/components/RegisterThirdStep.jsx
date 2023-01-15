import React from "react";
import { scroller } from "react-scroll";
import RegisterFourthStep from "./RegisterFourthStep";
import step3 from "../assets/id3create.svg";

function RegisterThirdStep({
  registerInformations,
  setRegisterInformations,
  submitRegisterInformations,
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

  /* upload all values to of the registerInformations object and scroll to the last step */
  const toTheLastStep = () => {
    setRegisterInformations({
      ...registerInformations,
      firstname,
      lastname,
      phone,
    });

    scroller.scrollTo("RegisterFourthStep", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -100,
    });
  };

  return (
    <>
      <div
        className="flex justify-center flex-col items-center h-screen w-screen"
        id="RegisterThirdStep"
      >
        <div className="md:shadow-2xl md:border md:border-grey-50 h-fit">
          <div className="flex flex-col items-center justify-center pb-10 pt-10">
            <div className="relative flex items-center justify-start flex-col font-bold text-3xl text-center bg-[#FFC928] rounded-xl w-4/5 h-4/5 py-14">
              <div className="absolute top-1 left-3 text-white rounded-full h-10 w-10 bg-[#003DA5] flex justify-center">
                <h3>3</h3>
              </div>
              Renseigner son profil utilisateur
            </div>

            <img src={step3} alt="step 3" />
          </div>
          <div className="flex justify-center items-center">
            <div className="w-screen max-w-md">
              <div className="bg-white rounded px-8 pb-8 mb-4">
                <p className="text-gray-300 font-light italic">
                  Tous les champs sont obligatoires
                </p>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="username"
                  >
                    Prénom
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    value={firstname}
                    onChange={handleFirstname}
                    type="text"
                    placeholder="Entrez votre prénom"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="username"
                  >
                    Nom
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    value={lastname}
                    required
                    onChange={handleLastname}
                    type="text"
                    placeholder="Entrez votre nom"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="username"
                  >
                    Téléphone
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    pattern="^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$"
                    value={phone}
                    required
                    onChange={handlePhone}
                    type="tel"
                    placeholder="Entrez votre numéro de téléphone"
                  />
                </div>
                <div className="mt-8">
                  <div className="flex justify-center">
                    <button type="button" onClick={toTheLastStep}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="w-10 h-10"
                        strokeWidth="3"
                        stroke="#003DA5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5L21 12m0 0l-7.5 7.5M 21 12H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RegisterFourthStep
        submitRegisterInformations={submitRegisterInformations}
      />
    </>
  );
}

export default RegisterThirdStep;

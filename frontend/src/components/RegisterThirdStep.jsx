import React from "react";
import { scroller } from "react-scroll";
import RegisterFourthStep from "./RegisterFourthStep";
import step3 from "../assets/id3create.svg";
import nextBtn from "../assets/nextBtn.svg";

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
  const toTheLastStep = (e) => {
    e.preventDefault();
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
      <form
        onSubmit={toTheLastStep}
        id="RegisterThirdStep"
        className="flex justify-center flex-col items-center h-screen w-screen pb-64"
      >
        <div className=" rounded-xl  md:py-10 h-fit bg-gradient-to-b from-[#003DA5] to-[#023998]">
          <div className="  h-fit ">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-white text-3xl">
                Renseignez vos informations
              </h1>

              <div>
                <img src={step3} alt="third step" />
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="w-screen max-w-md">
                <div className=" rounded px-8 pb-8 mb-4">
                  <p className="text-gray-300 font-light italic">
                    Tous les champs sont obligatoires
                  </p>
                  <div className="mb-4">
                    <label
                      className="block text-white text-sm font-bold mb-2"
                      htmlFor="username"
                    >
                      Prénom
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      value={firstname}
                      onChange={handleFirstname}
                      required
                      type="text"
                      placeholder="Entrez votre prénom"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-white text-sm font-bold mb-2"
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
                      className="block text-white text-sm font-bold mb-2"
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
                      {/* eslint-disable react/button-has-type */}
                      <button type="onSubmit" className="flex">
                        <img
                          src={nextBtn}
                          alt="next button"
                          className="mx-3 w-10 h-10"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <RegisterFourthStep
        submitRegisterInformations={submitRegisterInformations}
      />
    </>
  );
}

export default RegisterThirdStep;

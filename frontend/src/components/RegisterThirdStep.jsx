import React from "react";
import { scroller } from "react-scroll";
import RegisterFourthStep from "./RegisterFourthStep";
import step3 from "../assets/connexionPage/registerPage/id3create.svg";
import nextBtn from "../assets/items/nextBtn.svg";

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
        className="flex justify-center flex-col items-center h-screen w-screen "
      >
        <div className="p-1 w-11/12  md:w-3/6 rounded-xl  md:py-10 h-[70%] md:h-fit md:mb-[15%] bg-gradient-to-b from-[#003DA5] to-[#023998]">
          <div className="  h-fit ">
            <div className=" m-6 flex flex-col items-center justify-center">
              <h1 className="text-white text-3xl" id="RegisterThirdStep">
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
                      htmlFor="firstname"
                    >
                      Prénom
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="firstname"
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
                      htmlFor="lastname"
                    >
                      Nom
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="lastname"
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
                      htmlFor="phone"
                    >
                      Téléphone
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="phone"
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

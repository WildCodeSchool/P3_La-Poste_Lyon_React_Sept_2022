import React from "react";
import { scroller } from "react-scroll";
import RegisterThirdStep from "./RegisterThirdStep";
import questionbtn from "../assets/question-circle.svg";
import step2 from "../assets/connexionPage/registerPage/id2create.svg";
import RegisterSecondStepModale from "./RegisterSecondStepModale";
import nextBtn from "../assets/items/nextBtn.svg";

function RegisterSecondStep({
  registerInformations,
  setRegisterInformations,
  submitRegisterInformations,
}) {
  /* State to make the helper modale */
  const [showModal, setShowModal] = React.useState(false);

  /* Set password */
  const [password, setPassword] = React.useState("");
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  /* We upload the registerInformations object with the password and we scroll to the third step */
  const toTheThirdStep = (e) => {
    e.preventDefault();
    setRegisterInformations({
      ...registerInformations,
      password,
    });

    scroller.scrollTo("RegisterThirdStep", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -100,
    });
  };

  return (
    <>
      <form
        onSubmit={toTheThirdStep}
        className="flex justify-evenly flex-col items-center h-screen w-screen pb-60"
        id="RegisterSecondStep"
      >
        <div className="md:shadow-2xl md:border rounded-xl md:border-grey-50 md:py-10  h-fit bg-gradient-to-b from-[#003DA5] to-[#023998]">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-white  text-center text-3xl">
              Choississez votre mot de passe
            </h1>

            <div>
              <img src={step2} alt="second step" />
            </div>
          </div>
          <div className="flex justify-center items-center pt-10">
            <div className="w-screen max-w-md">
              <div className=" rounded px-8 pt-6 ">
                <div className="mb-6">
                  <p className="text-gray-300 font-light italic">
                    Tous les champs sont obligatoires
                  </p>
                  <label
                    className="flex flex-ro items-center text-white text-sm font-bold mb-2 pb-3"
                    htmlFor="password"
                  >
                    Mot de passe
                    <button
                      className="flex"
                      type="button"
                      onClick={() => setShowModal(true)}
                    >
                      <img
                        src={questionbtn}
                        alt="helper modale"
                        className="mx-3"
                      />
                    </button>
                    {/* Modale */}
                    {showModal ? (
                      <RegisterSecondStepModale setShowModal={setShowModal} />
                    ) : null}
                    {/* End of the modale */}
                  </label>

                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    value={password}
                    required
                    onChange={handlePassword}
                    type="password"
                    placeholder="Entrez un mot de passe"
                  />

                  <div className="flex justify-center pt-10">
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
      </form>
      <RegisterThirdStep
        setRegisterInformations={setRegisterInformations}
        submitRegisterInformations={submitRegisterInformations}
        registerInformations={registerInformations}
      />
    </>
  );
}

export default RegisterSecondStep;

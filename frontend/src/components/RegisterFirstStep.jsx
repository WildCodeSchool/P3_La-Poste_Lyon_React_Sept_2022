import React from "react";
import { scroller } from "react-scroll";
import firststep from "../assets/connexionPage/registerPage/idcreate.svg";
import questionbtn from "../assets/items/question-circle.svg";
import RegisterFirstStepModale from "./RegisterFirstStepModale";
import RegisterSecondStep from "./RegisterSecondStep";
import nextBtn from "../assets/items/nextBtn.svg";

function RegisterFirstStep({
  setRegisterInformations,
  registerInformations,
  submitRegisterInformations,
}) {
  const [showModal, setShowModal] = React.useState(false);

  const [email, setEmail] = React.useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  /* Update the registerInformations object  */
  const toTheSecondStep = (e) => {
    e.preventDefault();
    setRegisterInformations({
      ...registerInformations,
      email,
    });

    scroller.scrollTo("RegisterSecondStep", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -100,
    });
  };

  return (
    <div className="">
      <form
        onSubmit={toTheSecondStep}
        className="flex justify-center items-center flex-col h-screen  pb-36"
      >
        <div className="md:shadow-2xl md:border rounded-xl md:border-grey-50 md:py-10 h-fit bg-gradient-to-b from-[#003DA5] to-[#023998]">
          <div className="flex flex-col items-center justify-center">
            {/*             <div className="relative flex items-center justify-start flex-col font-bold text-3xl text-center bg-[#FFC928] rounded-xl w-4/5 h-4/5 py-14">
             */}{" "}
            <h1 className="text-white text-3xl">Créez votre identifiant</h1>
            {/*   </div> */}
            <div>
              <img src={firststep} alt="first step" />
            </div>
          </div>
          <div className="flex justify-center items-center ">
            <div className="w-screen max-w-md h-content max-h-xl">
              <div className="rounded px-8 pt-6 pb-8">
                <div className="mb-4">
                  <p className="text-gray-300 font-light italic">
                    Tous les champs sont obligatoires
                  </p>
                  <label
                    className="flex flex-ro items-center text-white text-sm font-bold mb-2 pb-3"
                    htmlFor="username"
                  >
                    Adresse e-mail{" "}
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
                    {showModal ? (
                      <RegisterFirstStepModale setShowModal={setShowModal} />
                    ) : null}
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="email"
                    pattern="/^([a-z0-9.])+\@gmail.com+$/"
                    required
                    value={email}
                    onChange={handleEmail}
                    placeholder="Entrez votre adresse mail"
                  />
                </div>
                {/*  */}
                <div className="mb-6">
                  <div className="flex justify-center pt-5">
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
      <RegisterSecondStep
        setRegisterInformations={setRegisterInformations}
        registerInformations={registerInformations}
        submitRegisterInformations={submitRegisterInformations}
      />
    </div>
  );
}

export default RegisterFirstStep;

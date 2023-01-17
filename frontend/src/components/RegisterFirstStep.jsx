import React from "react";
import { scroller } from "react-scroll";
import firststep from "../assets/idcreate.svg";
import questionbtn from "../assets/question-circle.svg";
import RegisterSecondStep from "./RegisterSecondStep";

function RegisterFirstStep({
  setRegisterInformations,
  registerInformations,
  submitRegisterInformations,
}) {
  /* State to make the helper modale */
  const [showModal, setShowModal] = React.useState(false);

  /* Store the email */
  const [email, setEmail] = React.useState("");

  /* Set email */
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
    <>
      <div className="flex justify-center items-center flex-col h-screen w-screen">
        <div className="md:shadow-2xl md:border md:border-grey-50 md:py-10 h-fit">
          <div className="flex flex-col items-center justify-center">
            <div className="relative flex items-center justify-start flex-col font-bold text-3xl text-center bg-[#FFC928] rounded-xl w-4/5 h-4/5 py-14">
              <div className="absolute top-1 left-3 text-white rounded-full h-10 w-10 bg-[#003DA5] flex justify-center">
                <h3>1</h3>
              </div>
              <h1>Créer son identifiant</h1>
            </div>
            <div>
              <img src={firststep} alt="first step" />
            </div>
          </div>
          <div className="flex justify-center items-center pt-10">
            <div className="w-screen max-w-md h-content max-h-xl">
              <div className="rounded px-8 pt-6 pb-8">
                <div className="mb-4">
                  <p className="text-gray-300 font-light italic">
                    Tous les champs sont obligatoires
                  </p>
                  <label
                    className="flex flex-ro items-center text-gray-700 text-sm font-bold mb-2 pb-3"
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
                    {/* Modale */}
                    {showModal ? (
                      <>
                        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                          <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/* content */}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                              {/* header */}
                              <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                <h3 className="text-2xl font-semibold">
                                  Créer son identifiant
                                </h3>
                                <button
                                  type="button"
                                  className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                  onClick={() => setShowModal(false)}
                                >
                                  <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    ×
                                  </span>
                                </button>
                              </div>
                              {/* body */}
                              <div className="relative p-6 flex-auto">
                                <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                  Besoin d'aide ?
                                </p>
                                <p className="my-4 text-black font-light">
                                  Afin de vous connecter sur la plateforme, vous
                                  devez utiliser un identifiant.
                                  <br />
                                  L'identifiant est un code personnel permettant
                                  de se connecter à un service informatique.
                                  Dans le cadre de notre
                                  application,l'identifiant demandé est votre
                                  addresse e-mail.
                                  <br />
                                  <br />
                                  <br />
                                  Nous vous invitions à conserver votre
                                  identifiant dans un endroit sécurisé afin de
                                  ne pas l'oublier !
                                </p>
                              </div>
                              {/* footer */}
                              <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                <button
                                  className="text-[#003DA5] background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                  type="button"
                                  onClick={() => setShowModal(false)}
                                >
                                  Fermer
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black" />
                      </>
                    ) : null}
                    {/* End of the modale */}
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
                <p className=" bg-gray-100 p-3 rounded text-gray-600 text-center text-md  pt-3 pb-3">
                  Il s'agit de l'adresse e-mail qui vous permet de vous
                  connecter lors de chaque visite, retenez la bien !
                </p>
                <div className="mb-6">
                  <div className="flex justify-center pt-5">
                    <button
                      onClick={toTheSecondStep}
                      type="button"
                      className="flex"
                    >
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
      <RegisterSecondStep
        setRegisterInformations={setRegisterInformations}
        registerInformations={registerInformations}
        submitRegisterInformations={submitRegisterInformations}
      />
    </>
  );
}

export default RegisterFirstStep;

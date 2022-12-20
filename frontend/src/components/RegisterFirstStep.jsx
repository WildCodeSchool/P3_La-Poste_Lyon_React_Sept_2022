import React from "react";
import { Link } from "react-scroll";
import RegisterSecondStep from "./RegisterSecondStep";

function RegisterFirstStep() {
  return (
    <>
      <div className="flex justify-center items-center flex-col h-screen w-screen">
        <div className="md:shadow-2xl md:border md:border-grey-50 md:py-10 h-fit">
          <div className="flex justify-center pb-10 md:pt-20">
            <h1 className="font-bold text-3xl text-center bg-yellow-400 rounded-xl w-4/5">
              Créer son identifiant
            </h1>
          </div>
          <div className="flex justify-center items-center pt-10">
            <div className="w-screen max-w-md h-content max-h-xl">
              <form className="rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2 pb-3"
                    htmlFor="username"
                  >
                    Email
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Entrez votre adresse mail"
                  />
                </div>
                <p className="text-red-500 text-center text-md italic pt-3 pb-3">
                  Il s'agit de l'adresse e-mail qui te permettra de te connecter
                  lors de chaque visite, retiens la bien !
                </p>
                <div className="mb-6">
                  <div className="flex justify-center pt-5">
                    {/* add the Link to scroll the de second register step component */}
                    <Link to="RegisterSecondStep" smooth duration={800}>
                      <button type="button" className="flex">
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
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <RegisterSecondStep />
    </>
  );
}

export default RegisterFirstStep;

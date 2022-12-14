import React from "react";

function RegisterThirdStep() {
  return (
    <div className="flex justify-center flex-col items-center h-screen">
      <div className="shadow-2xl border border-grey-50">
        <div className="flex justify-center pb-10 pt-20">
          <h1 className="font-bold text-3xl text-center bg-yellow-400 rounded-xl w-4/5">
            Renseigner son profil utilisateur
          </h1>
        </div>
        <div className="flex justify-center items-center pt-10">
          <div className="w-screen max-w-md">
            <form className="bg-white rounded px-8 pt-6 pb-8 mb-4">
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
                  type="text"
                  placeholder="Entrez votre numéro de téléphone"
                />
              </div>
              <div className="mt-12">
                <div className="flex justify-center">
                  <button type="button">
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterThirdStep;

import React from "react";

function RegisterSecondStepModale({ setShowModal }) {
  return (
    <div>
      {" "}
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/* content */}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/* header */}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-[#003DA5] text-2xl font-semibold">
                Créer son mot de passe
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
                Afin de vous connecter sur la plateforme, vous devez après avoir
                créer votre identifiant, choisir un mot de passe
                <br />
                Le mot de passe est un code personnel et confidentiel qui vous
                permet de vous connecter à l'application. Votre mot de passe
                peut être assimiler à une "clé" que vous seul devez conserver.
                <br />
                <br />
                <br />
                Nous vous invitions vivement à conserver votre mot de passe dans
                un endroit sécurisé afin de ne pas l'oublier !
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
    </div>
  );
}

export default RegisterSecondStepModale;

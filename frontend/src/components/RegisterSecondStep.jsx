import React from "react";
import { Link } from "react-scroll";
import RegisterThirdStep from "./RegisterThirdStep";

function RegisterSecondStep() {
  return (
    <>
      <div
        className="flex justify-evenly flex-col items-center h-screen w-screen"
        id="RegisterSecondStep"
      >
        <div className="md:shadow-2xl md:border md:border-grey-50 h-fit">
          <div className="flex flex-col items-center justify-center pt-20">
            <h1 className="flex items-center justify-start flex-col font-bold text-3xl text-center bg-yellow-400 rounded-xl w-4/5 h-4/5 py-14">
              Créer votre mot de passe
            </h1>
            <div>
              <svg
                width="200"
                height="100"
                viewBox="0 0 722 198"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="pt-10"
              >
                <path
                  d="M98.7538 197.508C153.294 197.508 197.508 153.294 197.508 98.7538C197.508 44.2136 153.294 0 98.7538 0C44.2136 0 0 44.2136 0 98.7538C0 153.294 44.2136 197.508 98.7538 197.508Z"
                  fill="#E4E4E4"
                />
                <path
                  d="M98.7538 181.049C144.204 181.049 181.049 144.204 181.049 98.7538C181.049 53.3036 144.204 16.459 98.7538 16.459C53.3036 16.459 16.459 53.3036 16.459 98.7538C16.459 144.204 53.3036 181.049 98.7538 181.049Z"
                  fill="#003DA5"
                />
                <path
                  d="M623.246 197.508C677.786 197.508 722 153.294 722 98.7538C722 44.2136 677.786 0 623.246 0C568.706 0 524.492 44.2136 524.492 98.7538C524.492 153.294 568.706 197.508 623.246 197.508Z"
                  fill="#E4E4E4"
                />
                <path
                  d="M623.246 181.049C668.696 181.049 705.541 144.204 705.541 98.7538C705.541 53.3036 668.696 16.459 623.246 16.459C577.796 16.459 540.951 53.3036 540.951 98.7538C540.951 144.204 577.796 181.049 623.246 181.049Z"
                  fill="white"
                />
                <path
                  d="M91.7611 128.514C91.614 128.514 91.4667 128.51 91.3192 128.503C90.0177 128.44 88.7452 128.097 87.5889 127.496C86.4326 126.895 85.4199 126.051 84.6204 125.022L71.9967 108.792C70.5268 106.898 69.8683 104.498 70.1656 102.118C70.4629 99.7393 71.6918 97.5752 73.5826 96.101L74.0367 95.7474C75.9312 94.2776 78.3312 93.6192 80.7105 93.9165C83.0898 94.2138 85.254 95.4426 86.7285 97.3334C87.44 98.2482 88.3407 98.9985 89.369 99.5329C90.3974 100.067 91.5291 100.373 92.6866 100.43C93.8441 100.486 95.0002 100.292 96.0757 99.8598C97.1511 99.428 98.1205 98.7689 98.9176 97.9276L124.55 70.87C125.367 70.0078 126.346 69.3149 127.43 68.8309C128.515 68.3469 129.684 68.0813 130.871 68.0492C132.059 68.0171 133.241 68.2192 134.35 68.644C135.459 69.0688 136.474 69.7079 137.336 70.5248L137.754 70.9213C139.495 72.5709 140.51 74.8445 140.574 77.2421C140.639 79.6397 139.749 81.9648 138.099 83.7059L98.3245 125.689C97.48 126.582 96.4624 127.292 95.3339 127.778C94.2054 128.264 92.9897 128.514 91.7611 128.514V128.514Z"
                  fill="white"
                />
                <path
                  d="M352.754 197.508C407.294 197.508 451.508 153.294 451.508 98.7538C451.508 44.2136 407.294 0 352.754 0C298.214 0 254 44.2136 254 98.7538C254 153.294 298.214 197.508 352.754 197.508Z"
                  fill="#FFC928"
                />
                <path
                  d="M345.761 128.514C345.614 128.514 345.467 128.51 345.319 128.503C344.018 128.44 342.745 128.097 341.589 127.496C340.433 126.895 339.42 126.051 338.62 125.022L325.997 108.792C324.527 106.898 323.868 104.498 324.166 102.118C324.463 99.7393 325.692 97.5752 327.583 96.101L328.037 95.7474C329.931 94.2776 332.331 93.6192 334.711 93.9165C337.09 94.2138 339.254 95.4426 340.729 97.3334C341.44 98.2482 342.341 98.9985 343.369 99.5329C344.397 100.067 345.529 100.373 346.687 100.43C347.844 100.486 349 100.292 350.076 99.8598C351.151 99.428 352.121 98.7689 352.918 97.9276L378.55 70.87C379.367 70.0078 380.346 69.3149 381.43 68.8309C382.515 68.3469 383.684 68.0813 384.871 68.0492C386.059 68.0171 387.241 68.2192 388.35 68.644C389.459 69.0688 390.474 69.7079 391.336 70.5248L391.754 70.9213C393.495 72.5709 394.51 74.8445 394.574 77.2421C394.639 79.6397 393.749 81.9648 392.099 83.7059L352.324 125.689C351.48 126.582 350.462 127.292 349.334 127.778C348.205 128.264 346.99 128.514 345.761 128.514V128.514Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <div className="flex justify-center items-center pt-10">
            <div className="w-screen max-w-md">
              <form className="bg-white rounded px-8 pt-6 pb-8 mb-10">
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-md font-bold mb-2 pb-4"
                    htmlFor="password"
                  >
                    Mot de passe
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="Entrez un mot de passe"
                  />
                  <p className="text-red-500 text-md italic pt-3">
                    Pensez à bien le retenir !
                  </p>
                  <div className="flex justify-center pt-10">
                    {/* add the Link to scroll the de third register step component */}
                    <Link to="RegisterThirdStep" smooth duration={800}>
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
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <RegisterThirdStep />
    </>
  );
}

export default RegisterSecondStep;

import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { Link } from "react-router-dom";

function TutorialValidator(allStepsContent) {
  const [showModal, setShowModal] = React.useState(false);

  /* We will post this data to create tutorial */
  /*   const tutorialDataToValidate = allStepsContent.allStepsContent;
   */
  // eslint-disable-next-line react/destructuring-assignment
  const mandatory = allStepsContent.allStepsContent[0];
  // eslint-disable-next-line react/destructuring-assignment
  const { steps } = allStepsContent.allStepsContent[1];

  /* Modale Stepper States */
  /* State to check step's status - we fill all the arr with initial value at false */
  const [modalestepsCompleted, setModaleStepsCompleted] = useState(
    Array(steps.length).fill("")
  );

  /* State to set up the current step */
  const [currentModaleStep, setCurrentModaleStep] = useState(0);

  /* onClick event of buttons - set the next step and trigger the value of step'statuts */
  const handleModaleNextStep = () => {
    setCurrentModaleStep(currentModaleStep + 1);
    setModaleStepsCompleted((prevStepsCompleted) => {
      return prevStepsCompleted.map((completed, i) =>
        i === currentModaleStep ? true : completed
      );
    });
  };

  /* onClick event on stepper's label  */
  const handleModaleStepClick = (index) => {
    setCurrentModaleStep(index);
    setModaleStepsCompleted((prevStepsCompleted) => {
      return prevStepsCompleted.map((completed, i) =>
        i === index ? true : completed
      );
    });
  };
  /* End */

  const handlePublication = () => {
    /* We will post this data to create tutorial 
  with the tutorialDataToValidae */
  };
  return (
    <div className="m-O p-0">
      <div className=" my-6 p-6  border w-[45vw] rounded-xl shadow-xl flex-col justify-end items-center relative">
        <h1 className="text-2xl text-center m-6 text-[#003DA5]">Validation</h1>
        <article>
          Votre tutoriel est prêt à être publié. Vous pouvez encore le modifier
          ou le prévisualiser avant de le publier.
          <hr className="my-6" />
          Une fois publié, votre tutoriel pourra être modifié directement depuis
          la page de votre tutoriel.
        </article>
        <section className="my-8">
          {
            // eslint-disable-next-line react/destructuring-assignment
            allStepsContent.currentStep === 2 && (
              <button
                type="button"
                className="bg-[#003DA5] text-white m-3 py-1 px-4 rounded-lg shadow-lg md:h-14 md:w-44 md:text-lg hover:shadow hover:bg-[#FFC927] hover:text-black"
                // eslint-disable-next-line react/destructuring-assignment
                onClick={allStepsContent.handlePreviousStep}
              >
                Précédent
              </button>
            )
          }
          <button
            type="button"
            onClick={() => setShowModal(true)}
            className="bg-[#003DA5] text-white m-3 py-1 px-4 rounded-lg shadow-lg md:h-14 md:w-44 md:text-lg hover:shadow hover:bg-[#FFC927] hover:text-black"
          >
            Prévisualisation
          </button>
          <Link to="/dashboard">
            <button
              type="button"
              className="bg-[#FFC927] text-black m-3 py-1 px-4 rounded-lg shadow-lg md:h-14 md:w-44 md:text-lg hover:shadow hover:scale-110"
              onClick={handlePublication}
            >
              Publication
            </button>
          </Link>
          {/*  */}
        </section>

        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/* content */}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/* header */}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl  text-[#003DA5]  font-semibold">
                      Prévisualisation du tutoriel
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
                  {/* CONTENT OF THE MODAL */}
                  <div className="relative p-6 flex-auto">
                    <h1 className="my-6 text-2xl md:text-3xl text-[#003DA5] text-center ">
                      {mandatory.title}
                    </h1>
                    <div className="stepper m-6">
                      <div>
                        <ReactQuill
                          value={mandatory.introduction_text}
                          readOnly
                          theme="bubble"
                        />
                      </div>
                      <div className="stepper-header flex flex-row items-center justify-center">
                        {steps?.map((step, index) => (
                          <>
                            <div className="inline-block h-1  w-5 md:w-20 border-t-4 border-dark-500 " />

                            {/* The stepper button will take the stepper label and get a ternary condition to change his look :
             Not start  / In progress / Finished */}
                            <button
                              type="button"
                              key={step.position}
                              className={`relative rounded-full h-7 w-7 ${
                                index === currentModaleStep
                                  ? "bg-[#003DA5] text-white"
                                  : modalestepsCompleted[index]
                                  ? "bg-[#FFC927] text-dark"
                                  : "bg-gray-100 text-dark"
                              }`}
                              onClick={() => handleModaleStepClick(index)}
                            >
                              {index === currentModaleStep ? (
                                `${step.position}`
                              ) : modalestepsCompleted[index] ? (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="-7 0 24 27"
                                  strokeWidth="2"
                                  stroke="#003DA5"
                                  className="w-4 h-6"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4.5 12.75l6 6 9-13.5"
                                  />
                                </svg>
                              ) : (
                                `${step.position}`
                              )}
                            </button>
                            <div className="inline-block h-1 w-5 md:w-20 border-t-4 border-dark-500" />
                          </>
                        ))}
                      </div>

                      {/* Content of the stepper */}
                      <div className="stepper-content">
                        <ReactQuill
                          value={steps[currentModaleStep].content}
                          readOnly
                          theme="bubble"
                        />
                      </div>

                      {/*  /* The previous button  -  (current > lentgh 0 ) /  The next button -  (current < length -1) / The validate button (current  = length -1) */}
                      <div className="stepper-footer flex justify-center">
                        {currentModaleStep > 0 && (
                          <button
                            type="button"
                            className="bg-[#003DA5] text-white m-3 py-1 px-4 rounded-lg shadow-lg md:h-14 md:w-44 md:text-lg hover:shadow hover:bg-[#FFC927] hover:text-black"
                            onClick={() =>
                              setCurrentModaleStep(currentModaleStep - 1)
                            }
                          >
                            Précédent
                          </button>
                        )}
                        {currentModaleStep < steps.length - 1 && (
                          <button
                            type="button"
                            className="bg-[#003DA5] text-white m-3 py-1 px-4 rounded-lg shadow-lg md:h-14 md:w-44 md:text-lg hover:shadow hover:bg-[#FFC927] hover:text-black"
                            onClick={handleModaleNextStep}
                          >
                            Suivant
                          </button>
                        )}

                        {currentModaleStep === steps.length - 1 && (
                          <button
                            type="button"
                            className="bg-[#003DA5] text-white m-3 py-1 px-4 rounded-lg shadow-lg md:h-14 md:w-44 md:text-lg hover:shadow hover:bg-[#FFC927] hover:text-black"

                            /* We will need to create an onClick event which send the complete status of the tutorial to the backend. Maybe later we can link this button to the quizz */
                          >
                            Valider
                          </button>
                        )}
                      </div>
                    </div>
                    {/* ///End modale content/// */}
                  </div>
                  {/* footer */}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-[#003DA5]  background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
      </div>
    </div>
  );
}

export default TutorialValidator;

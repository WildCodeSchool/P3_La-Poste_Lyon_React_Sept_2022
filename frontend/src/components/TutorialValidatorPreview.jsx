import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import stepCompleted from "../assets/step-complete.svg";

function TutorialValidatorPreview({
  previewData,
  showModal,
  setShowModal,
  steps,

  modalestepsCompleted,
  currentModaleStep,
  setCurrentModaleStep,
  handleModaleStepClick,
  handleModaleNextStep,
}) {
  return (
    /* eslint-disable react/jsx-no-useless-fragment
     */ <>
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
                    {previewData?.title}
                  </h1>
                  <div className="stepper m-6">
                    <div>
                      <ReactQuill
                        value={previewData?.introduction_text}
                        readOnly
                        theme="bubble"
                      />
                    </div>
                    <div className="stepper-header flex flex-row items-center justify-center">
                      {steps?.map((step, index) => (
                        <div key={index} className="flex items-center">
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
                              `${step.positionStep}`
                            ) : modalestepsCompleted[index] ? (
                              <img
                                src={stepCompleted}
                                alt="step completed"
                                className="w-5 h-6"
                              />
                            ) : (
                              `${step.positionStep}`
                            )}
                          </button>
                          <div className="inline-block h-1 w-5 md:w-20 border-t-4 border-dark-500" />
                        </div>
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
    </>
  );
}

export default TutorialValidatorPreview;

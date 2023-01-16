import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import { Link } from "react-router-dom";
import TutorialValidatorPreview from "./TutorialValidatorPreview";

function TutorialValidator(allStepsContent) {
  const [showModal, setShowModal] = React.useState(false);

  /* We will post this data to create tutorial */
  /*  const tutorialDataToValidate = allStepsContent.allStepsContent;
   */

  // eslint-disable-next-line react/destructuring-assignment
  const mandatory = allStepsContent.allStepsContent;

  // eslint-disable-next-line react/destructuring-assignment
  const { steps } = allStepsContent.allStepsContent;

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

  const handlePublication = (e) => {
    e.preventDefault();
    /* We will post this data to create tutorial 
  with the tutorialDataToValidae */
  };

  return (
    <div className="m-O p-0">
      <div className=" my-6 p-6  border w-[45vw] rounded-xl shadow-xl flex-col justify-end items-center relative">
        <h1 className="text-2xl text-center m-6 text-[#003DA5]">Validation</h1>
        <article className="text-center">
          Votre tutoriel est prêt ! Vous pouvez le prévisualiser avant de le
          publier.
          <hr className="my-6" />
        </article>
        <section className="my-8 flex flex-wrap justify-center">
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

        <TutorialValidatorPreview
          showModal={showModal}
          setShowModal={setShowModal}
          steps={steps}
          mandatory={mandatory}
          modalestepsCompleted={modalestepsCompleted}
          currentModaleStep={currentModaleStep}
          setCurrentModaleStep={setCurrentModaleStep}
          handleModaleNextStep={handleModaleNextStep}
          handleModaleStepClick={handleModaleStepClick}
        />
      </div>
    </div>
  );
}

export default TutorialValidator;

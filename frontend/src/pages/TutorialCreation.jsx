/*eslint-disable*/
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import { CategoryContextProvider } from "../contexts/CategoryContext";
import StepperCreation from "@components/StepperCreation";
import NavigationBar from "../components/NavigationBar";
import PreviousButton from "../components/PreviousButton";
/* Mandatory Informations components is for the first step */
import MandatoryInformations from "../components/MandatoryInformations";
import TutorialValidator from "../components/TutorialValidator";

function TutorialCreation() {
  const navigate = useNavigate();
  /* Set to get the value of all stepperCreation content */
  const [allStepsContent, setAllStepsContent] = useState([]);

  /* I want to add the new value in the current value when I handAllStepsContent */
  const handleAllStepsContent = (newContent) => {
    setAllStepsContent((prevAllStepsContent) => [
      ...prevAllStepsContent,
      newContent,
    ]);
  };

  /* State to set up the current step */
  const [currentStep, setCurrentStep] = useState(0);

  /* onClick event of buttons - set the next step and trigger the value of step'statuts */
  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
    setStepsCompleted((prevStepsCompleted) => {
      return prevStepsCompleted.map((completed, i) =>
        i === currentStep ? true : completed
      );
    });
  };

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  /* Stepper */
  const stepperCreation = [
    {
      position: 1,
      component: (
        <MandatoryInformations
          handleAllStepsContent={handleAllStepsContent}
          currentStep={currentStep}
          handleNextStep={handleNextStep}
        />
      ),
    },
    {
      position: 2,
      component: (
        <StepperCreation
          handleAllStepsContent={handleAllStepsContent}
          currentStep={currentStep}
          handleNextStep={handleNextStep}
          handlePreviousStep={handlePreviousStep}
        />
      ),
    },
    {
      position: 3,
      component: (
        <TutorialValidator
          handleAllStepsContent={handleAllStepsContent}
          currentStep={currentStep}
          handleNextStep={handleNextStep}
        />
      ),
    },
  ];

  /* State to check step's status - we fill all the arr with initial value at false */
  const [stepsCompleted, setStepsCompleted] = useState(
    Array(stepperCreation.length).fill("")
  );

  return (
    <>
      {" "}
      <CategoryContextProvider>
        <NavigationBar />
        <section className="m-6 flex flex-col items-center">
          <Link to={navigate(-1)}>
            {/* This button will link to the Dashboard */}
            <PreviousButton />
          </Link>
          <h1 className="m-6 text-xl md:text-3xl">Création de tutoriel</h1>

          <div className="stepper-header flex flex-row items-center justify-center ">
            {stepperCreation?.map((step, index) => (
              <>
                <div className="inline-block h-1  w-5 md:w-20 border-t-4 border-dark-500 " />

                {/* The stepper button will take the stepper label and get a ternary condition to change his look :
             Not start  / In progress / Finished */}
                <button
                  type="button"
                  key={step.position}
                  className={`relative rounded-full h-10 w-10 ${
                    index === currentStep
                      ? "bg-[#003DA5] text-white"
                      : stepsCompleted[index]
                      ? "bg-[#003DA5] text-dark"
                      : "bg-gray-100 text-dark"
                  }`}
                >
                  {index === currentStep ? (
                    `${step.position}`
                  ) : stepsCompleted[index] ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="-7 0 24 27"
                      strokeWidth="2"
                      stroke="white"
                      className="w-7 h-7"
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
          <div className="stepper-content m-0">
            {stepperCreation[currentStep].component}
          </div>
        </section>
        {/* Button Next to second step */}
        {currentStep === 0 && (
          <button
            type="button"
            className="bg-[#003DA5] text-white m-3 py-1 px-4 rounded-lg shadow-lg md:h-14 md:w-44 md:text-lg hover:shadow hover:bg-[#FFC927] hover:text-black"
            onClick={handleNextStep}
          >
            Suivant
          </button>
        )}
        {/*  Button to validate to the third step */}
        {currentStep === 1 && (
          <button
            type="button"
            className="bg-[#003DA5] text-white m-3 py-1 px-4 rounded-lg shadow-lg md:h-14 md:w-44 md:text-lg hover:shadow hover:bg-[#FFC927] hover:text-black"
            onClick={handlePreviousStep}
          >
            Précédent
          </button>
        )}
        {currentStep === 1 && (
          <button
            type="button"
            className="bg-[#003DA5] text-white m-3 py-1 px-4 rounded-lg shadow-lg md:h-14 md:w-44 md:text-lg hover:shadow hover:bg-[#FFC927] hover:text-black"
            onClick={handleNextStep}
          >
            Suivant 2
          </button>
        )}
        {/* Button validate at the third step */}
        {currentStep === 2 && (
          <button
            type="button"
            className="bg-[#003DA5] text-white m-3 py-1 px-4 rounded-lg shadow-lg md:h-14 md:w-44 md:text-lg hover:shadow hover:bg-[#FFC927] hover:text-black"
            onClick={handlePreviousStep}
          >
            Précédent
          </button>
        )}
        {currentStep === 2 && (
          <button
            type="button"
            className="bg-[#003DA5] text-white m-3 py-1 px-4 rounded-lg shadow-lg md:h-14 md:w-44 md:text-lg hover:shadow hover:bg-[#FFC927] hover:text-black"
            onClick={handleNextStep}
          >
            Valider
          </button>
        )}{" "}
      </CategoryContextProvider>
    </>
  );
}

export default TutorialCreation;

import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import StepperCreation from "@components/StepperCreation";
import PreviousButton from "../components/PreviousButton";
/* Mandatory Informations components is for the first step */
import MandatoryInformations from "../components/MandatoryInformations";
import TutorialValidator from "../components/TutorialValidator";

function TutorialCreation() {
  /* Set to get the value of all stepperCreation content  */
  const [allStepsContent, setAllStepsContent] = useState([]);
  /* I set the mandatoryInformations here to pass it as a parameters for the steppercreation */
  const [mandatoryInformations, setMandatoryInformations] = useState({
    title: "",
    category_id: "",
    short_description: "",
    introduction_text: "",
  });

  /* I want to add the new value in the current value when I handAllStepsContent */
  const handleAllStepsContent = (mandatoryInfos, steps) => {
    setAllStepsContent({
      ...mandatoryInfos,
      steps,
    });
  };

  /* State to set up the current step to switch between components */
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
          setCurrentStep={setCurrentStep}
          mandatoryInformations={mandatoryInformations}
          setMandatoryInformations={setMandatoryInformations}
        />
      ),
    },
    {
      position: 2,
      component: (
        <StepperCreation
          handleAllStepsContent={handleAllStepsContent}
          setCurrentStep={setCurrentStep}
          currentStep={currentStep}
          handleNextStep={handleNextStep}
          handlePreviousStep={handlePreviousStep}
          mandatoryInformations={mandatoryInformations}
        />
      ),
    },
    {
      position: 3,
      component: (
        <TutorialValidator
          mandatoryInformations={mandatoryInformations}
          handlePreviousStep={handlePreviousStep}
          handleAllStepsContent={handleAllStepsContent}
          currentStep={currentStep}
          handleNextStep={handleNextStep}
          allStepsContent={allStepsContent}
        />
      ),
    },
  ];

  /* State to check step's status - we fill all the arr with initial value at false */
  /* eslint no-use-before-define: ["error", { "variables": false }] */
  const [stepsCompleted, setStepsCompleted] = useState(
    Array(stepperCreation.length).fill("")
  );

  return (
    <>
      <section className="m-6 flex flex-col items-center">
        {/* This button will link to the Dashboard */}
        <PreviousButton />

        <h1 className="flex my-3 justify-center items-center font-bold text-xl md:text-3xl  text-main-blue rounded-xl w-2/3 h-10 text-center md:w-1/4 md:h-10 md:text-center">
          Création de tutoriel
        </h1>
        <div className="stepper-header flex flex-row items-center justify-center ">
          {stepperCreation?.map((step, index) => (
            <div key={index}>
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
            </div>
          ))}
        </div>

        {/* Content of the stepper */}
        <div className="stepper-content m-0">
          {stepperCreation[currentStep].component}
        </div>
      </section>
      {/* Button Next to second step */}
    </>
  );
}

export default TutorialCreation;

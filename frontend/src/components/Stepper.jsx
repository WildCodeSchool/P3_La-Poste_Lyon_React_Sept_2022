import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { useNavigate } from "react-router-dom";

export default function Stepper(filteredSteppers) {
  /* eslint-disable react/destructuring-assignment */
  const steps = filteredSteppers?.filteredSteppers;

  const navigate = useNavigate();

  /* State to check step's status - we fill all the arr with initial value at false */
  const [stepsCompleted, setStepsCompleted] = useState(
    Array(steps.length).fill("")
  );

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

  /* onClick event on stepper's label  */
  const handleStepClick = (index) => {
    setCurrentStep(index);
    setStepsCompleted((prevStepsCompleted) => {
      return prevStepsCompleted.map((completed, i) =>
        i === index ? true : completed
      );
    });
  };

  return (
    <div className="stepper m-6">
      <div className="stepper-header flex flex-row items-center justify-center">
        {steps?.map((step, index) => (
          <>
            <div className="inline-block h-1  w-5 md:w-20 border-t-4 border-dark-500 " />

            {/* The stepper button will take the stepper label and get a ternary condition to change his look :
             Not start  / In progress / Finished */}
            <button
              type="button"
              key={step.positionStep}
              className={`relative rounded-full h-10 w-10 ${
                index === currentStep
                  ? "bg-[#003DA5] text-white"
                  : stepsCompleted[index]
                  ? "bg-[#FFC927] text-dark"
                  : "bg-gray-100 text-dark"
              }`}
              onClick={() => handleStepClick(index)}
            >
              {index === currentStep ? (
                `${step.positionStep}`
              ) : stepsCompleted[index] ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="-7 0 24 27"
                  strokeWidth="2"
                  stroke="#003DA5"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              ) : (
                `${step.positionStep}`
              )}
            </button>
            <div className="inline-block h-1 w-5 md:w-20 border-t-4 border-dark-500" />
          </>
        ))}
      </div>

      {/* Content of the stepper */}
      <div className="stepper-content">
        <ReactQuill
          value={steps[currentStep]?.content}
          readOnly
          theme="bubble"
        />
      </div>

      {/*  /* The previous button  -  (current > lentgh 0 ) /  The next button -  (current < length -1) / The validate button (current  = length -1) */}
      <div className="stepper-footer flex justify-center">
        {currentStep > 0 && (
          <button
            type="button"
            className="bg-[#003DA5] text-white m-3 py-1 px-4 rounded-lg shadow-lg md:h-14 md:w-44 md:text-lg hover:shadow hover:bg-[#FFC927] hover:text-black"
            onClick={() => setCurrentStep(currentStep - 1)}
          >
            Précédent
          </button>
        )}
        {currentStep < steps.length - 1 && (
          <button
            type="button"
            className="bg-[#003DA5] text-white m-3 py-1 px-4 rounded-lg shadow-lg md:h-14 md:w-44 md:text-lg hover:shadow hover:bg-[#FFC927] hover:text-black"
            onClick={handleNextStep}
          >
            Suivant
          </button>
        )}

        {currentStep === steps.length - 1 && (
          <button
            type="button"
            className="bg-[#003DA5] text-white m-3 py-1 px-4 rounded-lg shadow-lg md:h-14 md:w-44 md:text-lg hover:shadow hover:bg-[#FFC927] hover:text-black"
            onClick={() => navigate(-1)}
            /* We will need to create an onClick event which send the complete status of the tutorial to the backend. Maybe later we can link this button to the quizz */
          >
            Valider
          </button>
        )}
      </div>
    </div>
  );
}

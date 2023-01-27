import RegisterFirstStep from "@components/RegisterFirstStep";
import RegisterFourthStep from "@components/RegisterFourthStep";
import RegisterSecondStep from "@components/RegisterSecondStep";
import RegisterThirdStep from "@components/RegisterThirdStep";
import completeStep from "@assets/items/step-complete.svg";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PreviousButton from "@components/PreviousButton";

const { VITE_BACKEND_URL } = import.meta.env;

function RegisterPage() {
  const navigate = useNavigate();

  /* registerInformations will save all the data of the user  */
  const [registerInformations, setRegisterInformations] = React.useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    phone: "",
  });

  /* the register informations will be submit to the back  */
  const submitRegisterInformations = (e) => {
    /* if one of the value of the object registerInformations is null, return a message */
    if (
      registerInformations.email === "" ||
      registerInformations.password === "" ||
      registerInformations.firstname === "" ||
      registerInformations.lastname === "" ||
      registerInformations.phone === ""
    )
      return;

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({ ...registerInformations });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
      redirect: "follow",
    };

    e.preventDefault();

    fetch(`${VITE_BACKEND_URL}/api/users/register`, requestOptions)
      .then((response) => response.text())
      .catch(console.error);

    navigate("/authentification");
  };

  /* STEPPERS */
  /* STEPPERS */
  /* State to set up the current step */
  const [currentStep, setCurrentStep] = useState(0);

  /* onClick event of buttons - set the next step and trigger the value of step'statuts */
  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
    /* eslint no-use-before-define: ["error", { "variables": false }] */ setStepsCompleted(
      (prevStepsCompleted) => {
        return prevStepsCompleted.map((completed, i) =>
          i === currentStep ? true : completed
        );
      }
    );
  };

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };
  /* onClick event on stepper's label  */
  const handleStepClick = (index) => {
    setCurrentStep(index);
    /* eslint no-use-before-define: ["error", { "variables": false }] */
    setStepsCompleted((prevStepsCompleted) => {
      return prevStepsCompleted.map((completed, i) =>
        i === index ? true : completed
      );
    });
  };

  const steps = [
    {
      position: 1,
      component: (
        <RegisterFirstStep
          handleNextStep={handleNextStep}
          currentStep={currentStep}
          setRegisterInformations={setRegisterInformations}
          registerInformations={registerInformations}
        />
      ),
    },
    {
      position: 2,
      component: (
        <RegisterSecondStep
          handleNextStep={handleNextStep}
          currentStep={currentStep}
          handlePreviousStep={handlePreviousStep}
          setRegisterInformations={setRegisterInformations}
          registerInformations={registerInformations}
        />
      ),
    },
    {
      position: 3,
      component: (
        <RegisterThirdStep
          handlePreviousStep={handlePreviousStep}
          handleNextStep={handleNextStep}
          currentStep={currentStep}
          setRegisterInformations={setRegisterInformations}
          registerInformations={registerInformations}
        />
      ),
    },
    {
      position: 4,
      component: (
        <RegisterFourthStep
          setRegisterInformations={setRegisterInformations}
          submitRegisterInformations={submitRegisterInformations}
          registerInformations={registerInformations}
        />
      ),
    },
  ];

  /* /* State to check step's status - we fill all the arr with initial value  and make it async */
  const [stepsCompleted, setStepsCompleted] = useState(
    Array(steps.length).fill("")
  );

  useEffect(() => {
    setStepsCompleted(Array(steps.length).fill("")); // This will always use latest value of count
  }, []);

  /* STEPPERS */
  /* STEPPERS */

  return (
    <>
      <PreviousButton />
      <h1 className="flex my-6 justify-center items-center font-bold text-2xl text-main-blue rounded-xl h-10 text-center md:h-10 md:text-center pt-3">
        Création de votre compte utilisateur
      </h1>
      <div className="stepper-header md:gap-0 flex flex-row items-center justify-center">
        {steps?.map((step, index) => (
          <div key={index} className="flex items-center my-6">
            <div
              key={step.positionStep}
              className=" md:inline-block h-1  w-3 md:w-20 border-t-4 border-dark-500 "
            />

            {/* The stepper button will take the stepper label and get a ternary condition to change his look :
         Not start  / In progress / Finished */}
            <button
              type="button"
              key={index}
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
                `${step.position}`
              ) : stepsCompleted[index] ? (
                <img src={completeStep} alt="Complete step" className="w-6 " />
              ) : (
                `${step.position}`
              )}
            </button>

            <div className="md:inline-block h-1 w-3 md:w-20 border-t-4 border-dark-500" />
          </div>
        ))}
      </div>
      {steps[currentStep].component}
      <div className="stepper-content">{/* {component} */}</div>
      {/*  /* The previous button  -  (current > lentgh 0 ) /  The next button -  (current < length -1) / The validate button (current  = length -1) */}
    </>
  );
}

export default RegisterPage;

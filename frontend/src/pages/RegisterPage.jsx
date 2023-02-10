import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import RegisterFirstStep from "../components/RegisterFirstStep";
import RegisterFourthStep from "../components/RegisterFourthStep";
import RegisterSecondStep from "../components/RegisterSecondStep";
import RegisterThirdStep from "../components/RegisterThirdStep";
import completeStep from "../assets/items/step-complete.svg";
import PreviousButton from "../components/PreviousButton";
import Footer from "../components/Footer";

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

  const notifySuccess = (firstname) => {
    toast(`Félicitations votre compte est créé ${firstname}!`, {
      icon: "🎉",
    });
  };

  const notifyError = () => {
    toast(
      "Les informations transmises ne vous permettent pas de créer un compte, merci de vérifier vos informations",
      {
        icon: "🚫",
      }
    );
  };

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

    fetch(`${VITE_BACKEND_URL}/api/users/register`, requestOptions).then(
      (response) => {
        if (response.status !== 201) {
          notifyError();
        } else {
          notifySuccess(registerInformations.firstname);
          setTimeout(() => {
            navigate("/authentification");
          }, 2500);
        }
      }
    );
  };

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
          handlePreviousStep={handlePreviousStep}
          currentStep={currentStep}
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

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder
        toastOptions={{ duration: 2000 }}
      />

      <PreviousButton />
      <h1 className="flex my-6 justify-center items-center font-bold text-2xl lg:text-3xl text-main-blue rounded-xl h-10 text-center lg:h-10 lg:text-center pt-3">
        Création de compte
      </h1>
      <div className=" lg:gap-0 flex flex-row items-center justify-center w-full">
        {steps?.map((step, index) => (
          <div key={index} className="flex items-center my-6">
            <div
              key={step.position}
              className=" lg:inline-block h-1  w-3 lg:w-20 border-t-4 border-dark-500 "
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
            >
              {index === currentStep ? (
                `${step.position}`
              ) : stepsCompleted[index] ? (
                <img src={completeStep} alt="Complete step" className="w-6 " />
              ) : (
                `${step.position}`
              )}
            </button>

            <div className="lg:inline-block h-1 w-3 lg:w-20 border-t-4 border-dark-500" />
          </div>
        ))}
      </div>

      <div className="flex justify-center w-full">
        {steps[currentStep].component}
      </div>
      <Footer />
      {/*  /* The previous button  -  (current > lentgh 0 ) /  The next button -  (current < length -1) / The validate button (current  = length -1) */}
    </>
  );
}

export default RegisterPage;

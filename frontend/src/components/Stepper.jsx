import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";

export default function Stepper() {
  const steps = [
    {
      label: "1",
      content: `<p><span style="font-size: 26px; color: rgb(0, 61, 165);"><b>Étape 1   - 💻 Appareils de connexion </b>  </span></p><p><br></p><p>Assurez-vous de disposer d'un appareil compatible avec internet, comme un <strong>ordinateur</strong>, une <strong>tablette</strong> ou un <strong>smartphone</strong>.</p><p>Vous aurez également besoin d'un modem ou d'un routeur qui sera connecté à votre appareil et à votre ligne téléphonique ou à votre connexion haut débit (par exemple, une connexion fibre optique).</p><p>Si vous ne disposez pas de ces équipements, vous devrez les acheter ou les louer auprès de votre fournisseur de services internet.</p>`,
    },
    {
      label: "2",
      content: `<span style="font-size: 26px; color: rgb(0, 61, 165);">🌎 </span><strong style="font-size: 26px; color: rgb(0, 61, 165);">Étape 2 - Se connecter</strong><p><br></p><p>Connectez votre appareil à votre modem ou à votre routeur en utilisant un câble <strong>Ethernet</strong> ou en utilisant le <strong>wifi</strong>.</p><p>Si vous utilisez le wifi, assurez-vous que votre appareil est configuré pour se connecter au réseau wifi de votre modem ou de votre routeur.</p>`,
    },
    {
      label: "3",
      content: `<strong style="font-size: 26px; color: rgb(0, 61, 165);">✅ Étape 3 - Vérifier sa connexion</strong><p><br></p><p>Ouvrez votre navigateur internet (<em>par exemple, Google Chrome, Mozilla Firefox ou Safari</em>) et entrez l'adresse d'un site web dans la barre d'adresse.</p><p>Si vous parvenez à accéder au site web, cela signifie que vous êtes connecté à internet ! <strong style="color: rgb(255, 201, 39);">Félicitations</strong> !</p><p><br></p>Si vous rencontrez des problèmes de connexion, assurez-vous que votre modem ou votre routeur est allumé et que les câbles sont correctement branchés. Vous devriez également vérifier que vous avez bien souscrit à un abonnement internet auprès de votre fournisseur de services internet.`,
    },
    {
      label: "4",
      content: `<p><strong style="color: rgb(0, 61, 165);">🛠️ Étape 4 - Configuration </strong></p><p><br></p><p>Si vous ne parvenez toujours pas à vous connecter à internet, vous devrez peut-être configurer votre connexion. Pour ce faire, ouvrez les paramètres de votre appareil et accédez à la section "Connexion à internet" ou "Réseau".</p><p><br></p><p>Vous devriez y trouver des options pour configurer votre connexion wifi ou Ethernet. Suivez les instructions à l'écran pour configurer votre connexion. Si vous rencontrez toujours des problèmes, vous devriez contacter votre fournisseur de services internet pour obtenir de l'aide.</p><p><br></p><p><span style="color: rgb(0, 61, 165);">Pour aller plus loin, découvrez des vidéos en ligne ....</span></p><p><img src="data:image/png;base64,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"></p><p><a href="https://www.youtube.com/watch?v=9UMvyfT4V_Y&amp;ab_channel=Lesicsfran%C3%A7ais" rel="noopener noreferrer" target="_blank" style="color: rgb(0, 61, 165);"><u>Comment fonctionne internet</u></a></p><p><a href="https://www.youtube.com/watch?v=yOahxSBuJbE&amp;ab_channel=TutoPatrick-Informatique" rel="noopener noreferrer" target="_blank" style="color: rgb(0, 61, 165);"><u>Connecter son ordinateur Windows</u></a></p><a href="https://www.youtube.com/watch?v=mo3I1zLSpqw&amp;ab_channel=ConsoMag" rel="noopener noreferrer" target="_blank" style="color: rgb(0, 61, 165); font-size: 18px;"><u>Tester sa connexion internet</u></a>`,
    },
  ];

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
              key={step.label}
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
                `${step.label}`
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
                `${step.label}`
              )}
            </button>
            <div className="inline-block h-1 w-5 md:w-20 border-t-4 border-dark-500" />
          </>
        ))}
      </div>

      {/* Content of the stepper */}
      <div className="stepper-content">
        <ReactQuill
          value={steps[currentStep].content}
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
            /* We will need to create an onClick event which send the complete status of the tutorial to the backend. Maybe later we can link this button to the quizz */
          >
            Valider
          </button>
        )}
      </div>
    </div>
  );
}

import React, { useState } from "react";
import celebration from "../assets/connexionPage/registerPage/undraw_celebrating_rtuv.svg";

function QuizTuto2() {
  const questions = [
    {
      question:
        "Quel est l'un des avantages de l'utilisation du numérique dans la vie courante ?",
      options: [
        { text: "Permet de communiquer avec vos proches", correct: true },
        { text: "Permet de voler de l'argent en ligne", correct: false },
        { text: "Permet de voyager dans le temps", correct: false },
        { text: "Permet de se téléporter", correct: false },
      ],
    },
    {
      question:
        "Comment utilise-t-on le numérique pour accéder à des informations sur n'importe quel sujet ?",
      options: [
        { text: "En utilisant un miroir magique", correct: false },
        {
          text: "En utilisant un moteur de recherche comme Google",
          correct: true,
        },
        { text: "En demandant à un ami", correct: false },
        { text: "En utilisant un livre de sorts", correct: false },
      ],
    },
    {
      question:
        "Quel est un moyen d'utiliser le numérique pour gérer son quotidien ?",
      options: [
        {
          text: "En utilisant un calendrier pour planifier ses rendez-vous",
          correct: true,
        },
        {
          text: "En utilisant des applications de messagerie comme WhatsApp",
          correct: false,
        },
        {
          text: "En utilisant des applications de paiement mobile comme Google Pay",
          correct: false,
        },
        {
          text: "En utilisant des applications de suivi de santé pour suivre son activité physique et son alimentation",
          correct: true,
        },
      ],
    },
    {
      question:
        "Quel est un moyen d'utiliser le numérique pour accéder à des informations sur n'importe quel sujet ?",
      options: [
        {
          text: "En utilisant un moteur de recherche comme Google",
          correct: true,
        },
        {
          text: "En utilisant des applications de messagerie comme WhatsApp",
          correct: false,
        },
        {
          text: "En utilisant des applications de paiement mobile comme Google Pay",
          correct: false,
        },
        {
          text: "En utilisant des applications de suivi de santé pour suivre son activité physique et son alimentation",
          correct: false,
        },
      ],
    },
    {
      question:
        "Quel est un moyen d'utiliser le numérique pour acheter des produits et des services en ligne ?",
      options: [
        {
          text: "En utilisant un moteur de recherche comme Google",
          correct: false,
        },
        {
          text: "En utilisant des sites de vente en ligne comme Amazon",
          correct: true,
        },
        {
          text: "En utilisant des applications de paiement mobile comme Google Pay",
          correct: true,
        },
        {
          text: "En utilisant des applications de suivi de santé pour suivre son activité physique et son alimentation",
          correct: false,
        },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [quizEnd, setQuizEnd] = useState(false);
  const [answered, setAnswered] = useState(false);

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
    setAnswered(false);
  };

  const handleNext = (answer) => {
    setShowAnswer(false);
    setDisabled(false);

    if (answer.correct) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 === questions.length) {
      setQuizEnd(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowAnswer(false);
    setDisabled(false);
    setQuizEnd(false);
  };

  if (quizEnd) {
    return (
      <div>
        <h2 className="bg-white text-3xl font-bold mx-auto w-full mt-4 rounded-lg flex py-4 justify-center">
          Vous avez terminé le quiz !
        </h2>
        <p className="text-center mt-12 text-semibold text-xl">
          Votre score : {score}/{questions.length}
        </p>
        <img src={celebration} alt="youpi" className="w-1/5 h-1/5 mx-auto" />

        <button
          className=" flex items-center bg-gray-900 mx-auto  rounded-lg p-4 font-bold text-white animate-pulse hover:bg-main-blue  my-8"
          type="button"
          onClick={handleReset}
        >
          Recommencer
        </button>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];

  return (
    <div className="w-3/4 h-1/2 items-center justify-center flex flex-col mx-auto bg-white rounded-lg shadow-lg p-6 my-4">
      <h1 className="text-3xl animate-pulse">Quiz</h1>
      <img
        src="src/assets/tutorial-category-img/currentlife.svg"
        alt="seconnecter"
        className="w-1/4 h-1/4"
      />

      <p className="bg-white font-bold mx-auto w-1/2 mt-4 rounded-lg flex py-4 justify-center">
        {currentQ.question}
      </p>
      <div className="flex-col mx-auto justify-center items-center">
        {currentQ.options.map((option, index) => (
          <button
            className=" flex md:ml-56 rounded-lg p-4 font-bold text-white  md:mr-96 bg-main-yellow hover:bg-main-blue my-4 md:w-1/3 w-full"
            type="button"
            key={index}
            disabled={disabled}
            onClick={() => {
              setShowAnswer(true);
              setDisabled(true);
              handleNext(option);
            }}
          >
            {option.text}
          </button>
        ))}
      </div>
      {showAnswer && (
        <p>
          {currentQ.options.find((option) => option.correct).text} était la
          réponse correcte.
        </p>
      )}
      {answered ? (
        <button
          className=" flex items-center bg-gray-900 md:mx-auto  rounded-lg p-4 font-bold text-white animate-pulse hover:bg-main-blue  my-4"
          type="button"
          onClick={handleNextQuestion}
        >
          Question suivante
        </button>
      ) : null}
    </div>
  );
}

export default QuizTuto2;

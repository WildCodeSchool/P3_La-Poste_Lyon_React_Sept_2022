import React, { useState } from "react";
import celebration from "../assets/connexionPage/registerPage/winner.svg";

function QuizTuto1() {
  const questions = [
    {
      question: "Quel équipement est nécessaire pour se connecter à internet ?",
      options: [
        { text: "Un ordinateur portable", correct: false },
        { text: "Une carte SIM", correct: false },
        { text: "Un modem ou un routeur", correct: true },
        { text: "Un téléviseur", correct: false },
      ],
    },

    {
      question:
        "Comment se connecter à internet à partir d'un appareil compatible ?",
      options: [
        { text: "En utilisant un câble HDMI", correct: false },
        { text: "En utilisant un câble Ethernet", correct: true },
        { text: "En utilisant un câble USB", correct: false },
        { text: "En utilisant le Bluetooth", correct: false },
      ],
    },

    {
      question: "Comment vérifier si vous êtes connecté à internet ?",
      options: [
        { text: "En allumant le modem ou le routeur", correct: false },
        {
          text: "En ouvrant un navigateur internet et en entrant l'adresse d'un site web",
          correct: true,
        },
        {
          text: "En appelant votre fournisseur de services internet",
          correct: false,
        },
        {
          text: "En branchant le câble Ethernet à l'ordinateur",
          correct: false,
        },
      ],
    },

    {
      question:
        "Quels sont les désagréments de se connecter à un hotspot wifi public ?",
      options: [
        { text: "La connexion est gratuite", correct: false },
        { text: "Le temps de connexion est illimité", correct: false },
        { text: "La connexion sans fil est rapide", correct: false },
        {
          text: "La connexion est souvent lente et peut poser des problèmes pour l'échange de fichiers lourds, il y a des coupures et les réseaux sont rarement sécurisés.",
          correct: true,
        },
      ],
    },

    {
      question:
        "Comment se connecter aux différents services publics via France Connect ?",
      options: [
        { text: "En téléchargeant l'application adéquate", correct: true },
        { text: "En se rendant sur le site internet dédié", correct: true },
        { text: "En utilisant un compte Facebook", correct: false },
        {
          text: "En utilisant un numéro de téléphone portable",
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
      <h1 className="text-3xl animate-pulse">Quiz "Se connecter" : </h1>
      <img
        src="src/assets/tutorial-category-img/connected.svg"
        alt="seconnecter"
        className="md:w-1/4 md:h-1/4"
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

export default QuizTuto1;

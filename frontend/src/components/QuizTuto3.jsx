import React, { useState } from "react";
import celebration from "../assets/connexionPage/registerPage/winner.svg";

function QuizTuto3() {
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
      question: "Comment allumer son ordinateur ?",
      options: [
        { text: "En appuyant sur le bouton d'alimentation", correct: true },
        { text: "En utilisant la souris", correct: false },
        { text: "En appuyant sur le bouton d'éjection", correct: false },
        { text: "En utilisant le pad", correct: false },
      ],
    },
    {
      question:
        "Quel est un moyen d'utiliser le numérique pour gérer son quotidien ?",
      options: [
        { text: "En utilisant un ordinateur", correct: true },
        { text: "En utilisant un téléphone portable", correct: true },
        { text: "En utilisant une calculatrice", correct: false },
        { text: "En utilisant un téléviseur", correct: false },
      ],
    },
    {
      question:
        "Quel est l'endroit où l'ordinateur stocke les données en cours d'utilisation pour que le CPU puisse y accéder rapidement ?",
      options: [
        { text: "Unité centrale de traitement (CPU)", correct: false },
        { text: "Mémoire vive (RAM)", correct: true },
        { text: "Stockage", correct: false },
        { text: "Carte graphique", correct: false },
      ],
    },
    {
      question:
        "Quel est l'endroit où l'ordinateur stocke les données à long terme, comme les programmes et les fichiers ?",
      options: [
        { text: "Unité centrale de traitement (CPU)", correct: false },
        { text: "Mémoire vive (RAM)", correct: false },
        { text: "Stockage", correct: true },
        { text: "Carte graphique", correct: false },
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
      <h1 className="text-3xl animate-pulse">Quiz "Utiliser un ordinateur":</h1>
      <img
        src="src/assets/tutorial-category-img/desktop.svg"
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

export default QuizTuto3;

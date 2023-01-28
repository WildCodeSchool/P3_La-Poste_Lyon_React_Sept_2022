import React, { useState } from "react";
import celebration from "../assets/connexionPage/registerPage/winner.svg";

function QuizTuto4() {
  const questions = [
    {
      question: "Qu'est-ce qu'une démarche numérique ?",
      options: [
        { text: "C'est une danse moderne", correct: false },
        {
          text: "C'est un processus administratif effectué en ligne",
          correct: true,
        },
        { text: "C'est une marque de chaussures", correct: false },
        { text: "C'est un programme de cuisine", correct: false },
      ],
    },
    {
      question:
        "Où peut-on trouver des informations détaillées sur les démarches numériques ?",
      options: [
        { text: "Sur un site web de mode", correct: false },
        { text: "Sur un site web de cuisine", correct: false },
        {
          text: "Sur des sites web gouvernementaux et non gouvernementaux",
          correct: true,
        },
        { text: "Sur un site web de sport", correct: false },
      ],
    },
    {
      question:
        "Quel est l'avantage de l'utilisation d'outils en ligne pour les démarches numériques ?",
      options: [
        { text: "C'est plus amusant", correct: false },
        { text: "C'est plus rapide", correct: true },
        { text: "C'est plus facile", correct: true },
        { text: "C'est plus coloré", correct: false },
      ],
    },
    {
      question:
        "A qui peut-on demander de l'aide pour compléter les démarches numériques ?",
      options: [
        { text: "A sa mère", correct: false },
        { text: "A un psychologue", correct: false },
        {
          text: "A des centres d'assistance numérique, des associations de consommateurs et des organisations de défense des droits numériques",
          correct: true,
        },
        { text: "A un acteur de cinéma", correct: false },
      ],
    },
    {
      question:
        "A quoi sert l'utilisation d'internet pour les personnes âgées ?",
      options: [
        { text: "A rien, c'est inutile", correct: false },
        {
          text: "A communiquer avec ses proches, s'informer, se divertir, se faciliter la vie et accéder aux soins",
          correct: true,
        },
        { text: "A jouer aux jeux vidéos", correct: false },
        { text: "A écouter de la musique", correct: false },
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

export default QuizTuto4;

import React, { useState } from "react";
import celebration from "../assets/connexionPage/registerPage/undraw_celebrating_rtuv.svg";

function Quiz() {
  const [categories] = useState([
    {
      id: 1,
      name: "Se connecter",
      icon: "src/assets/tutorial-category-img/connected.svg",
      position: 1,
      tutoriels: "Comment accéder à un wifi public",
    },
    {
      id: 2,
      name: "Vie courante",
      icon: "src/assets/tutorial-category-img/currentlife.svg",
      position: 2,
    },
    {
      id: 3,
      name: "Utiliser un ordinateur",
      icon: "src/assets/tutorial-category-img/desktop.svg",
      position: 3,
    },
    {
      id: 4,
      name: "Se faire aider",
      icon: "src/assets/tutorial-category-img/getHelped.svg",
      position: 4,
    },
    {
      id: 5,
      name: "Aller plus loin",
      icon: "src/assets/tutorial-category-img/going.svg",
      position: 5,
    },
    {
      id: 6,
      name: "Mails",
      icon: "src/assets/tutorial-category-img/mails.svg",
      position: 6,
    },
    {
      id: 7,
      name: "Médias",
      icon: "src/assets/tutorial-category-img/media.svg",
      position: 7,
    },
    {
      id: 8,
      name: "Messages",
      icon: "src/assets/tutorial-category-img/message.svg",
      position: 8,
    },
    {
      id: 9,
      name: "Se déplacer",
      icon: "src/assets/tutorial-category-img/navigate.svg",
      position: 9,
    },
    {
      id: 10,
      name: "Naviguer sur internet",
      icon: "src/assets/tutorial-category-img/navigateinternet.svg",
      position: 10,
    },
    {
      id: 11,
      name: "Sécurité",
      icon: "src/assets/tutorial-category-img/security.svg",
      position: 11,
    },
    {
      id: 12,
      name: "Utiliser son téléphone",
      icon: "src/assets/tutorial-category-img/usephone.svg",
      position: 12,
    },
  ]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setAnswered(true);
  };

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
    setAnswered(false);
  };

  return (
    <div className="w-3/4 h-1/2 items-center justify-center flex flex-col mx-auto bg-white rounded-lg shadow-lg p-6 my-4">
      <h1 className="text-3xl animate-pulse">Quiz</h1>
      {currentQuestion < categories.length ? (
        <div>
          <h2 className="bg-white font-bold mx-auto w-1/2 mt-4 rounded-lg flex py-4 justify-center">
            Catégorie : {categories[currentQuestion].name}
          </h2>
          <img
            className="w-1/4 h-1/4 flex mx-auto"
            src={categories[currentQuestion].icon}
            alt={categories[currentQuestion].name}
          />
          <p className="text-center font-bold mt-12">
            Qu'est ce que cette catégorie inclut ?{" "}
          </p>
          <div className="flex  items-center justify-center mt-8 mx-auto ">
            <div className="flex-col  w-full md:w-full h-full md:h-full md:ml-48">
              <button
                type="button"
                className=" rounded-lg p-4 font-bold text-white  md:mr-96 bg-main-yellow hover:bg-main-blue my-4 md:w-1/2"
                onClick={() => handleAnswer(true)}
                disabled={answered}
              >
                Tutoriels pour se connecter à internet{" "}
              </button>
              <button
                type="button"
                className=" rounded-lg p-4 font-bold text-white  md:mr-96 bg-main-yellow hover:bg-main-blue my-4 md:w-1/2"
                onClick={() => handleAnswer(false)}
                disabled={answered}
              >
                Tutoriels sur la vie courante
              </button>
            </div>
            <div className="flex-col  w-full md:w-full h-1/2 mx-auto">
              <button
                type="button"
                className=" rounded-lg p-4 font-bold text-white md:mr-96 bg-main-yellow hover:bg-main-blue   my-4 md:w-1/2"
                onClick={() => handleAnswer(false)}
                disabled={answered}
              >
                Tutoriels sur l'utilisation d'un ordinateur
              </button>
              <button
                type="button"
                className=" rounded-lg p-4 font-bold text-white md:mr-96 bg-main-yellow hover:bg-main-blue  my-4 md:w-1/2"
                onClick={() => handleAnswer(false)}
                disabled={answered}
              >
                Tutorials sur trouver de l'aide{" "}
              </button>
            </div>
          </div>

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
      ) : (
        <div>
          <h2 className="bg-white text-3xl font-bold mx-auto w-full mt-4 rounded-lg flex py-4 justify-center">
            Vous avez terminé le quiz !
          </h2>
          <img src={celebration} alt="youpi" className="w-full h-full" />
          <p className="text-center mt-12 text-semibold text-xl">
            Votre score : {score}/{categories.length}
          </p>
        </div>
      )}
    </div>
  );
}

export default Quiz;

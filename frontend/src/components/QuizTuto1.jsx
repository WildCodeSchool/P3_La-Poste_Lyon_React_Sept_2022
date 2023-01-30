import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import celebration from "../assets/connexionPage/registerPage/winner.svg";
import { useCurrentUserContext } from "../contexts/userContext";
import jeux from "../assets/navBar/navBarUser/jeux.png";

const { VITE_BACKEND_URL } = import.meta.env;

function QuizTuto1() {
  const { token } = useCurrentUserContext();
  const { id } = useParams(); // pour récupérer l'id dans l'URL

  /* Get quizData */
  const [quizData, setQuizData] = useState([]);
  console.warn(`quizData`, quizData.id, quizData.response);

  useEffect(() => {
    const getQuizData = () => {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      fetch(`${VITE_BACKEND_URL}/api/quiz/${id}`, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          console.warn(`data`, data);
          setQuizData(data);
        })
        .catch((error) => {
          console.warn("Error:", error);
        });
    };
    getQuizData();
  }, []);
  console.warn(quizData.icon);

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

    if (currentQuestion + 1 === quizData.length) {
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
          Votre score : {score}/{quizData.length}
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

  // const currentQ = questions[currentQuestion];

  return (
    <div className="w-3/4 h-1/2 items-center justify-center flex flex-col mx-auto bg-white rounded-lg shadow-lg p-6 my-4">
      {quizData?.title && (
        <div>
          <h1 className="text-3xl animate-pulse">{quizData.title}</h1>
          <img src={jeux} alt={quizData.title} className="w-full h-full " />
        </div>
      )}
      {quizData.questions && quizData.questions.length > 0 ? (
        <>
          <p className="bg-white font-bold mx-auto w-1/2 mt-4 rounded-lg flex py-4 justify-center">
            {currentQuestion + 1}.{" "}
            {quizData.questions[currentQuestion].question}
          </p>
          {quizData.questions[currentQuestion].responses.map(
            (response, responseIndex) => (
              <button
                type="button"
                key={response.id}
                className={`ml-4 text-base cursor-pointer flex md:ml-56 rounded-lg p-4 font-bold text-white  md:mr-96 bg-main-yellow hover:bg-main-blue my-4 md:w-1/3 w-full ${
                  answered && response.isCorrect ? "font-bold" : ""
                }`}
                onClick={() => {
                  setAnswered(true);
                  setShowAnswer(true);
                  setDisabled(true);
                  // eslint-disable-next-line no-unused-expressions
                  response.isCorrect
                    ? handleNext(response)
                    : handleNext(response);
                }}
              >
                {responseIndex + 1}. {response.content}
                {showAnswer && (
                  <span
                    className={`ml-4 ${
                      response.isCorrect ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {response.isCorrect ? "Correct" : "Incorrect"}
                  </span>
                )}
              </button>
            )
          )}
          {showAnswer && !quizEnd && (
            <button
              className="flex items-center bg-main-blue mx-auto rounded-lg p-4 font-bold text-white mt-8 hover:bg-gray-900"
              type="button"
              onClick={handleNextQuestion}
              disabled={disabled}
            >
              Question suivante
            </button>
          )}
        </>
      ) : (
        <p>Aucune question disponible</p>
      )}
      {quizEnd && (
        <div>
          <h2 className="bg-white text-3xl font-bold mx-auto w-full mt-4 rounded-lg flex py-4 justify-center">
            Vous avez terminé le quiz !
          </h2>
          <p className="text-center mt-12 text-semibold text-xl">
            Votre score : {score}/{quizData.length}
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
      )}
    </div>
  );
}

export default QuizTuto1;

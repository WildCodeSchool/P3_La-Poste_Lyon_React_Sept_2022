import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import celebration from "../assets/connexionPage/registerPage/winner.svg";
import { useCurrentUserContext } from "../contexts/userContext";
import jeux from "../assets/navBar/navBarUser/jeux.png";
import PreviousButton from "./PreviousButton";
import BannerProfile from "./BannerProfile";

const { VITE_BACKEND_URL } = import.meta.env;

function QuizTuto1() {
  const notifyProblem = () => toast("Chargement...");
  const navigate = useNavigate();

  const { token } = useCurrentUserContext();
  const { id } = useParams(); // pour récupérer l'id dans l'URL

  /* Get quizData */
  const [quizData, setQuizData] = useState([]);

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
          setQuizData(data);
        })
        .catch((err) => notifyProblem(err));
    };
    getQuizData();
  }, []);

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

    if (currentQuestion + 1 === 5) {
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
        <Toaster position="top-center" reverseOrder />

        <BannerProfile />
        <PreviousButton />

        <h2 className="bg-white text-3xl font-bold mx-auto w-full mt-12 rounded-lg flex py-4 justify-center">
          Vous avez terminé le quiz !
        </h2>
        <p className="text-center mt-12 font-bold text-xl">
          Votre score : {score}/5
        </p>
        <img
          src={celebration}
          alt="youpi"
          className="w-full h-full lg:w-1/12 lg:h-1/4 mx-auto"
        />
        <div className="flex justify-center">
          <button
            className=" flex items-center bg-main-blue mx-4  rounded-lg p-4 font-bold text-white hover:bg-main-yellow  my-8"
            type="button"
            onClick={handleReset}
          >
            Recommencer
          </button>
          <button
            className=" flex items-center bg-main-blue mx-4 rounded-lg p-4 font-bold text-white hover:bg-main-yellow  my-8"
            type="button"
            onClick={() => navigate(-1)}
          >
            Retour à mes quiz
          </button>
        </div>
      </div>
    );
  }

  // const currentQ = questions[currentQuestion];

  return (
    <div>
      <BannerProfile />
      <PreviousButton />
      <div className="w-full lg:w-1/2 h-full items-center justify-center flex flex-col mx-auto bg-white rounded-lg lg:shadow-lg p-6 my-4 ">
        {quizData?.title && (
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl">{quizData.title}</h1>
            <img
              src={jeux}
              alt={quizData.title}
              className="w-full h-full lg:w-7/12 lg:h-7/12 "
            />
          </div>
        )}
        {quizData.questions && quizData.questions.length > 0 ? (
          <>
            <p className="bg-white font-bold mx-auto  text-center lg:w-11/12 mt-4 rounded-lg flex py-4 justify-center">
              {currentQuestion + 1}.{" "}
              {quizData.questions[currentQuestion]?.question}
            </p>
            <ul className="lg:grid lg:grid-cols-2 lg:grid-rows-2  justify-items-center mx-auto">
              {quizData?.questions[currentQuestion]?.responses?.map(
                (response, responseIndex) => (
                  <button
                    type="button"
                    key={response.id}
                    className={` lg:box ml-4 text-base cursor-pointer  rounded-lg p-4 font-bold text-white flex justify-center items-center w-full   bg-main-yellow hover:bg-main-blue my-4 lg:w-3/4 ${
                      answered && response.isCorrect ? "font-bold" : ""
                    }`}
                    onClick={() => {
                      setAnswered(true);
                      setShowAnswer(true);
                      setDisabled(true);
                      // eslint-disable-next-line no-unused-expressions
                      response.isCorrect
                        ? (handleNext(response), setScore(score + 1))
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
            </ul>
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
            <BannerProfile />

            <h2 className="bg-white text-3xl font-bold mx-auto w-full mt-4 rounded-lg flex flex-col py-4 justify-center">
              Vous avez terminé le quiz !
            </h2>
            <p className="text-center mt-12 text-semibold text-xl">
              Votre score : {score}/{quizData.length}
            </p>
            <img
              src={celebration}
              alt="youpi"
              className="w-1/5 h-1/5 mx-auto"
            />

            <button
              className=" flex items-center bg-gray-900 mx-auto  rounded-lg p-4 font-bold text-white hover:bg-main-blue  my-8"
              type="button"
              onClick={handleReset}
            >
              Recommencer
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuizTuto1;

import React, { useState, useEffect } from "react";
import { toast, Toaster } from "react-hot-toast";
/* import QuizTuto1 from "../components/QuizTuto1";

import QuizTuto2 from "../components/QuizTuto2";
import QuizTuto3 from "../components/QuizTuto3"; */
import { Link } from "react-router-dom";
import AccessButton from "../components/AccessButton";
import BannerProfile from "../components/BannerProfile";
import { useCurrentUserContext } from "../contexts/userContext";

const { VITE_BACKEND_URL } = import.meta.env;

function Games() {
  const notifyProblem = () => toast("Chargement...");

  const { token } = useCurrentUserContext();

  /* Get quizList */
  const [quizList, setQuizList] = useState([]);

  const getQuizList = () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    fetch(`${VITE_BACKEND_URL}/api/quiz`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setQuizList(data);
      })
      .catch((err) => notifyProblem(err));
  };

  useEffect(() => {
    getQuizList();
  }, []);

  return (
    <div className="">
      <Toaster position="top-center" reverseOrder />
      <BannerProfile />
      <div className="mt-2 flex justify-center">
        <h1 className="m-3 flex justify-center items-center font-bold text-3xl text-main-blue rounded-xl w-2/3 h-10 text-center md:w-1/4 md:h-10 md:text-center">
          Mes Quiz
        </h1>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2  overflow-hidden py-[1vh] mx-[12vw]">
        {/* <li> elements are contained in <Link> to redirect the user to the corresponding page */}

        {quizList.length > 0 &&
          quizList.map((quiz) => (
            <li
              key={quiz.id}
              className="bg-white box  md:m-6 border shadow-xl rounded-xl text-center h-65 md:box "
            >
              <h2 className="text-xl md:text-2xl text-main-black  font-bold py-4 bg-white  rounded-tl-lg rounded-tr-lg h-17 flex justify-center items-center">
                {quiz.title}
              </h2>
              <hr />
              <div className="flex justify-center my-5">
                <img className="h-20" src={quiz.icon} alt={quiz.title} />
              </div>
              <Link to={`/quiz/${quiz.id}`}>
                <AccessButton />
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Games;

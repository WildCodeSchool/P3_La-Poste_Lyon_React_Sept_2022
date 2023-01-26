import React from "react";
/* import QuizTuto1 from "../components/QuizTuto1";

import QuizTuto2 from "../components/QuizTuto2";
import QuizTuto3 from "../components/QuizTuto3"; */
import { Link } from "react-router-dom";
import AccessButton from "../components/AccessButton";
import BannerProfile from "../components/BannerProfile";

function Games() {
  return (
    <div className="">
      <BannerProfile />
      <div className="mt-2 flex justify-center">
        <h1 className="m-3 flex justify-center items-center font-bold text-3xl text-main-blue rounded-xl w-2/3 h-10 text-center md:w-1/4 md:h-10 md:text-center">
          Mes Quiz
        </h1>
      </div>
      <ul className="grid   overflow-hidden grid-cols-1 grid-rows-4 gap-5 md:grid md:overflow-hidden md:grid-cols-2 md:grid-rows-2 md:gap-5 py-[1vh] mx-[12vw]">
        {/* <li> elements are contained in <Link> to redirect the user to the corresponding page */}
        <li className="bg-white box row-start-1 row-span-1 col-start-1 col-span-1 my-3 md:m-6 border shadow-xl rounded-xl text-center h-65 md:box md:row-start-1 md:row-span-1 md:col-start-1 md:col-span-1">
          <h2 className="text-xl md:text-2xl text-main-black  font-bold py-4 bg-white  rounded-tl-lg rounded-tr-lg h-17 flex justify-center items-center">
            Se connecter
          </h2>
          <hr />
          <div className="flex justify-center my-5">
            <img
              className="h-20"
              src="src/assets/tutorial-category-img/connected.svg"
              alt="historique"
            />
          </div>
          <Link to="/quiz1">
            <AccessButton />
          </Link>
        </li>
        {/* Should send the user on the page of all the tutorials he already did */}
        <li className="bg-white box row-start-2 row-span-1 col-start-1 col-span-1 my-3 md:m-6 border shadow-xl rounded-lg text-center h-65 md:box md:row-start-2 md:row-span-1 md:col-start-1 md:col-span-1">
          <h2 className="text-xl md:text-2xl text-main-black  font-bold py-4 bg-white  rounded-tl-lg rounded-tr-lg h-17 flex justify-center items-center">
            Vie courante{" "}
          </h2>
          <hr />
          <div className="flex justify-center my-5">
            <img
              className="h-20"
              src="src/assets/tutorial-category-img/currentlife.svg"
              alt="mestutos"
            />
          </div>
          <Link to="/quiz2">
            <AccessButton />
          </Link>
        </li>
        {/* Should send the user on the page of HIS tutorials that he already began and not all the tutorials */}
        <li className="bg-white box row-start-3 row-span-1 col-start-1 col-span-2 my-3 md:m-6 border shadow-xl rounded-lg text-center h-65 md:box md:row-start-1 md:row-span-1 md:col-start-2 md:col-span-2">
          <h2 className="text-xl md:text-2xl text-main-black  font-bold py-4 bg-white  rounded-tl-lg rounded-tr-lg h-17 flex justify-center items-center">
            Utiliser un ordinateur
          </h2>
          <hr />
          <div className="flex flex-col justify-center h-max">
            <div className="flex justify-center my-5">
              <img
                className="h-20"
                src="src/assets/tutorial-category-img/desktop.svg"
                alt="mestutos"
              />
            </div>
            <Link to="/quiz3" className="">
              <AccessButton />
            </Link>
          </div>
        </li>
        {/* Should send the user on the badges page */}
      </ul>
    </div>
  );
}

export default Games;

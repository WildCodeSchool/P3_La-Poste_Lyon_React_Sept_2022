import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PreviousButton from "@components/PreviousButton";
import BannerProfile from "@components/BannerProfile";
import { useCurrentUserContext } from "../contexts/userContext";
import { CategoryContext } from "../contexts/CategoryContext";

function Historic() {
  const { currentUser, token } = useCurrentUserContext();
  const { categories } = useContext(CategoryContext);

  const navigate = useNavigate();
  /* set Finished tutorials */
  const [finishedTutorials, setFinishedTutorials] = useState([]);

  /* Fetch the finished tutorials by userID */
  const fetchFinishedTutorials = () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    fetch(
      `http://localhost:5000/api/historical/finished/${currentUser.id}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        setFinishedTutorials(data);
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  useEffect(() => {
    fetchFinishedTutorials();
  }, []);

  return (
    <div className="">
      <BannerProfile />
      <PreviousButton />
      <h1 className="flex my-6 justify-center items-center font-bold text-[26px] text-main-blue rounded-xl h-10 text-center md:h-10 md:text-center pt-3">
        Liste des tutoriels réalisés
      </h1>

      <ul className=" flex flex-col justify-center items-center ">
        {finishedTutorials.map((tutorial) => (
          <li className="mx-10 md:mx-96 md:text-center mb-10 my-3 md:m-6 border shadow-xl rounded-lg text-center flex flex-col md:flex-row justify-between items-center md:w-2/5">
            <img
              src={
                categories?.find(
                  (category) => category?.id === tutorial?.category_id
                )?.icon
              }
              alt="tutorial cateogry"
              className="h-20 w-20 hidden md:block md:p-2"
            />
            <p className="p-2">{tutorial.title}</p>
            <div className="hidden md:block border-r-2 border-gray-100 h-20 w-1" />

            <p className="font-semibold">
              {" "}
              {
                categories?.find(
                  (category) => category?.id === tutorial?.category_id
                )?.name
              }
            </p>
            <button
              onClick={() => navigate(`/api/tutos/${tutorial.id}`)}
              type="button"
              className="bg-gradient-to-r from-main-yellow to-second-yellow text-white font-semibold m-3 py-1 px-4 rounded-lg shadow md:h-10 md:w-20 md:text-lg hover:shadow  hover:bg-gradient-to-r hover:from-blue-900 hover:to-main-blue hover:text-white"
            >
              Aller
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Historic;

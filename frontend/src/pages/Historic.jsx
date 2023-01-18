import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AccessButton from "../components/AccessButton";
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
      <h1 className="text-2xl text-center mt-10 mb-20">
        Liste des tutoriels réalisés
      </h1>
      <ul className="md:justify-center md:items-center ">
        {finishedTutorials.map((tutorial) => (
          <li className="mx-10 md:mx-96 md:text-center mb-10 my-3 md:m-6 border shadow-xl rounded-lg text-center flex justify-between items-center md:w-2/5">
            <p className="ml-6">{tutorial.title}</p>
            <img
              src={
                categories?.find(
                  (category) => category?.id === tutorial?.category_id
                )?.icon
              }
              alt="tutorial cateogry"
              className="h-20 w-20"
            />
            <p>
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
              className="bg-gradient-to-r from-main-yellow to-second-yellow text-white font-semibold m-3 py-1 px-4 rounded-lg shadow md:h-10 md:w-44 md:text-lg hover:shadow  hover:bg-gradient-to-r hover:from-blue-900 hover:to-main-blue hover:text-white"
            >
              Accéder
            </button>
          </li>
        ))}

        <li className="mx-10 md:mx-96 md:text-center mb-10 my-3 md:m-6 border shadow-xl rounded-lg text-center flex justify-between items-center md:w-2/5">
          <p className="ml-6">La Wifi</p>
          <AccessButton />
        </li>
      </ul>
    </div>
  );
}

export default Historic;

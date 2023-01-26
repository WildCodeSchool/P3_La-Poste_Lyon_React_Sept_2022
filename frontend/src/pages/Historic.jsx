import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import PreviousButton from "../components/PreviousButton";
import BannerProfile from "../components/BannerProfile";
import { useCurrentUserContext } from "../contexts/userContext";
import { CategoryContext } from "../contexts/CategoryContext";
import { RewardsContext } from "../contexts/RewardsContext";
import zeroTuto from "../assets/items/zeroTuto.svg";

const { VITE_BACKEND_URL } = import.meta.env;

function Historic() {
  const { currentUser, token } = useCurrentUserContext();
  const { categories } = useContext(CategoryContext);
  const { rewards, setRewards } = useContext(RewardsContext);

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
      `${VITE_BACKEND_URL}/api/historical/finished/${currentUser.id}`,
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

  const checkRewardTuto = rewards?.some((reward) => reward.label === "Tuto");

  const notifyBadge = () =>
    toast.success("Vous remportez un badge ! Bel investissement ! ");

  const getRewardTuto = async () => {
    if (
      checkRewardTuto ===
      false /* && finishedTutorials.length > 5 async problem ? */
    ) {
      fetch(`${VITE_BACKEND_URL}/api/gainReward`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          user_id: currentUser.id,
          badge_id: 7,
        }),
      })
        .then((response) => response.text())
        .then((data) => {
          setRewards([...rewards, data]);
          notifyBadge();
        })
        .catch((error) => console.error("error", error));
    }
  };

  useEffect(() => {
    getRewardTuto();
  }, []);

  /* Pagination */
  /* Get the current Page and max tutorials to define pages */
  const [currentPage, setCurrentPage] = useState(1);
  const tutorialsPerPage = 5;

  /* Calculate the first and last index  for slice */
  const indexOfLastTutorial = currentPage * tutorialsPerPage;
  const indexOfFirstTutorial = indexOfLastTutorial - tutorialsPerPage;

  /* HandlePage with the currentPage number */
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  /* Generate a page by the length */
  const pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil(finishedTutorials.length / tutorialsPerPage);
    i += 1
  ) {
    pageNumbers.push(i);
  }

  return (
    <div className="">
      <Toaster position="top-center" reverseOrder />
      <BannerProfile />
      <PreviousButton />
      <h1 className="flex my-6 justify-center items-center font-bold text-[26px] text-main-blue rounded-xl h-10 text-center md:h-10 md:text-center pt-3">
        Liste des tutoriels réalisés
      </h1>

      <ul className=" flex flex-col justify-center items-center ">
        {finishedTutorials.length === 0 && (
          <>
            <p className="text-center text-xl  p-6 m-6 font-semibold">
              Vous n'avez pas encore réalisé de tutoriels
            </p>
            <img
              src={zeroTuto}
              alt="Aucun tutoriel réalisé"
              className="h-96 w-96"
            />
          </>
        )}
        {finishedTutorials
          .slice(indexOfFirstTutorial, indexOfLastTutorial)
          .map((tutorial, index) => (
            <li
              key={index}
              className="mx-10 md:mx-96 md:text-center mb-10 my-3 md:m-6 border shadow-xl rounded-lg text-center flex flex-col md:flex-row justify-between items-center min-w-[90%]  md:w-2/5"
            >
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
        {/* Pagination */}
        <div className="flex gap-3 mt-3 mb-6">
          {pageNumbers.map((number) => (
            <button
              type="button"
              className={` text-xl text-white w-8 h-8  rounded-lg ${
                number === currentPage ? "bg-main-blue" : "bg-gray-300"
              } `}
              key={number}
              onClick={() => handlePageChange(number)}
            >
              {number}
            </button>
          ))}
        </div>
      </ul>
    </div>
  );
}

export default Historic;

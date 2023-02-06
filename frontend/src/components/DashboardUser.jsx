import React, { useEffect, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import CurrentUserContext from "../contexts/userContext";
import { RewardsContext } from "../contexts/RewardsContext";

import AccessButton from "./AccessButton";
import Historique from "../assets/navBar/navBarUser/Historique.png";
import Mestutos from "../assets/navBar/navBarUser/Mestutos.svg";
import badge1 from "../assets/Rewards/1.svg";
import BannerProfile from "./BannerProfile";
import usercourse from "../assets/navBar/navBarUser/parcours.png";
import grid from "../assets/items/grid.svg";
import unique from "../assets/items/unique.svg";

function DashboardUser() {
  const navigate = useNavigate();

  const { VITE_BACKEND_URL } = import.meta.env;

  const { currentUser, token } = useContext(CurrentUserContext);
  const { rewards, setRewards } = useContext(RewardsContext);

  const checkRewardWelcome = rewards?.some(
    (reward) => reward.label === "Welcome"
  );

  const notifyBadge = () =>
    toast.success(
      "Bienvenue sur la plateforme ! Voici un badge bien mérité ! "
    );

  const getRewardWelcome = async () => {
    if (checkRewardWelcome === false) {
      fetch(`${VITE_BACKEND_URL}/api/gainReward`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          user_id: currentUser.id,
          badge_id: 6,
        }),
      })
        .then((response) => response.text())
        .then((data) => {
          notifyBadge();
          setRewards([...rewards, data]);
        })
        .catch(navigate("*"));
    }
  };

  useEffect(() => {
    getRewardWelcome();
  }, []);

  /* Handle Mobile View */
  const [mobileView, setMobileView] = useState(false);
  const handleMobileView = () => {
    setMobileView(!mobileView);
  };

  return (
    <div>
      <Toaster position="top-center" reverseOrder />
      <BannerProfile />

      <div className="mt-2 flex justify-center">
        <h1 className="m-3 flex justify-center items-center font-bold text-xl md:text-3xl text-main-blue rounded-xl w-2/3 h-10 text-center md:w-1/4 md:h-10 md:text-center">
          Mon tableau de bord
        </h1>
      </div>
      <div className="w-full  flex justify-end">
        <button type="button" onClick={handleMobileView} className="md:hidden">
          <img
            src={mobileView ? grid : unique}
            alt="grid view"
            className="w-8 h-8"
          />
        </button>
      </div>
      <ul
        className={`grid  py-[1vh] md:mx-[12vw] mx-3 overflow-hidden md:gap-5 ${
          mobileView ? "grid-cols-1 grid-rows-4" : " grid-cols-2 grid-rows-2 "
        } grid-cols-1 grid-rows-4 gap-2 md:grid-cols-2 md:grid-rows-2  `}
      >
        {/* <li> elements are contained in <Link> to redirect the user to the corresponding page */}
        <li
          className="bg-white box row-start-1 row-span-1 col-start-1 col-span-1 my-3 md:m-6 border 
        shadow-lg md:shadow-xl rounded-xl text-center h-65 md:box md:row-start-1 md:row-span-1 md:col-start-1 md:col-span-1"
        >
          <h2
            className={`h-17 ${
              mobileView ? "text-xl h-17" : "text-lg h-14"
            } md:text-2xl text-main-black  font-bold py-4 bg-white  rounded-tl-lg rounded-tr-lg  flex justify-center items-center`}
          >
            Mes tutoriels
          </h2>
          <hr />
          <div className="flex justify-center my-5">
            <img
              className={`md:h-24 ${mobileView ? "h-20" : "h-16 w-18"}`}
              src={Mestutos}
              alt="historique"
            />
          </div>
          <Link to="/categories">
            <AccessButton />
          </Link>
        </li>
        {/* Should send the user on the page of all the tutorials he already did */}
        <li className="bg-white box row-start-2 row-span-1 col-start-1 col-span-1 my-3 md:m-6 border shadow-lg md:shadow-xl rounded-lg text-center h-65 md:box md:row-start-2 md:row-span-1 md:col-start-1 md:col-span-1">
          <h2
            className={`h-17 ${
              mobileView ? "text-xl h-17" : "text-lg h-14"
            } md:text-2xl text-main-black  font-bold py-4 bg-white  rounded-tl-lg rounded-tr-lg flex justify-center items-center`}
          >
            Mon historique{" "}
          </h2>
          <hr />
          <div className="flex justify-center my-5">
            <img
              className={`md:h-24 ${mobileView ? "h-20" : "h-16 w-18"}`}
              src={Historique}
              alt="mestutos"
            />
          </div>
          <Link to="/history">
            <AccessButton />
          </Link>
        </li>
        {/* Should send the user on the page of HIS tutorials that he already began and not all the tutorials */}
        <li
          className={`bg-white box h-65 ${
            mobileView
              ? "h-65 row-start-3 row-span-1 col-start-1 col-span-2"
              : " h-fit row-start-1 row-span-1 col-start-2 col-span-2"
          }  my-3 md:m-6 border shadow-lg md:shadow-xlrounded-lg text-center  md:box md:row-start-1 md:row-span-1 md:col-start-2 md:col-span-2`}
        >
          <h2
            className={`h-17 ${
              mobileView ? "text-xl h-17 " : "text-lg h-14"
            } md:text-2xl text-main-black  font-bold py-4 bg-white  rounded-tl-lg rounded-tr-lg  flex justify-center items-center`}
          >
            Mon parcours utilisateur
          </h2>
          <hr />
          <div className="flex flex-col justify-center h-max">
            <div className="flex justify-center my-5">
              <img
                className={`md:h-24 ${mobileView ? "h-20" : "h-16 w-18"}`}
                src={usercourse}
                alt="mestutos"
              />
            </div>
            <Link to="/course" className="">
              <AccessButton />
            </Link>
          </div>
        </li>
        {/* Should send the user on the badges page */}
        <li
          className={` h-65 ${
            mobileView
              ? " h-65 row-start-4 row-span-1 col-start-1 col-span-2"
              : "h-fit row-start-2 row-span-1 col-start-2 col-span-2"
          } bg-white box  my-3 md:m-6 border shadow-lg md:shadow-xl rounded-lg text-center  md:box md:row-start-2 md:row-span-1 md:col-start-2 md:col-span-2`}
        >
          <h2
            className={` h-17 ${
              mobileView ? "text-xl h-17" : "text-lg h-14"
            } md:text-2xl text-main-black  font-bold py-4 bg-white  rounded-tl-lg rounded-tr-lg h-17 flex justify-center items-center`}
          >
            Badges obtenus
          </h2>
          <hr />
          <div className="flex flex-wrap justify-around my-5">
            <img
              className={`md:h-24 ${mobileView ? "h-20" : "h-16 w-18"}`}
              src={badge1}
              alt="badge1"
            />
          </div>
          <Link to="/reward" className="">
            <AccessButton />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default DashboardUser;

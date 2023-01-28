import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import CurrentUserContext from "../contexts/userContext";
import { RewardsContext } from "../contexts/RewardsContext";

import AccessButton from "./AccessButton";
import Historique from "../assets/navBar/navBarUser/Historique.png";
import Mestutos from "../assets/navBar/navBarUser/Mestutos.svg";
import badge1 from "../assets/Rewards/1.svg";
import BannerProfile from "./BannerProfile";
import usercourse from "../assets/navBar/navBarUser/parcours.png";

function DashboardUser() {
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
        .catch((error) => console.error("error", error));
    }
  };

  useEffect(() => {
    getRewardWelcome();
  }, []);

  return (
    <div className="">
      <Toaster position="top-center" reverseOrder />
      <BannerProfile />
      <div className="mt-2 flex justify-center">
        <h1 className="m-3 flex justify-center items-center font-bold text-xl md:text-3xl text-main-blue rounded-xl w-2/3 h-10 text-center md:w-1/4 md:h-10 md:text-center">
          Mon tableau de bord
        </h1>
      </div>
      <ul className="grid   overflow-hidden grid-cols-1 grid-rows-4 gap-5 md:grid md:overflow-hidden md:grid-cols-2 md:grid-rows-2 md:gap-5 py-[1vh] mx-[12vw]">
        {/* <li> elements are contained in <Link> to redirect the user to the corresponding page */}
        <li className="bg-white box row-start-1 row-span-1 col-start-1 col-span-1 my-3 md:m-6 border shadow-xl rounded-xl text-center h-65 md:box md:row-start-1 md:row-span-1 md:col-start-1 md:col-span-1">
          <h2 className="text-xl md:text-2xl text-main-black  font-bold py-4 bg-white  rounded-tl-lg rounded-tr-lg h-17 flex justify-center items-center">
            Mes tutoriels
          </h2>
          <hr />
          <div className="flex justify-center my-5">
            <img className="h-20" src={Mestutos} alt="historique" />
          </div>
          <Link to="/categories">
            <AccessButton />
          </Link>
        </li>
        {/* Should send the user on the page of all the tutorials he already did */}
        <li className="bg-white box row-start-2 row-span-1 col-start-1 col-span-1 my-3 md:m-6 border shadow-xl rounded-lg text-center h-65 md:box md:row-start-2 md:row-span-1 md:col-start-1 md:col-span-1">
          <h2 className="text-xl md:text-2xl text-main-black  font-bold py-4 bg-white  rounded-tl-lg rounded-tr-lg h-17 flex justify-center items-center">
            Mon historique{" "}
          </h2>
          <hr />
          <div className="flex justify-center my-5">
            <img className="h-20" src={Historique} alt="mestutos" />
          </div>
          <Link to="/history">
            <AccessButton />
          </Link>
        </li>
        {/* Should send the user on the page of HIS tutorials that he already began and not all the tutorials */}
        <li className="bg-white box row-start-3 row-span-1 col-start-1 col-span-2 my-3 md:m-6 border shadow-xl rounded-lg text-center h-65 md:box md:row-start-1 md:row-span-1 md:col-start-2 md:col-span-2">
          <h2 className="text-xl md:text-2xl text-main-black  font-bold py-4 bg-white  rounded-tl-lg rounded-tr-lg h-17 flex justify-center items-center">
            Mon parcours utilisateur
          </h2>
          <hr />
          <div className="flex flex-col justify-center h-max">
            <div className="flex justify-center my-5">
              <img className="h-20" src={usercourse} alt="mestutos" />
            </div>
            <Link to="/course" className="">
              <AccessButton />
            </Link>
          </div>
        </li>
        {/* Should send the user on the badges page */}
        <li className="bg-white box row-start-4 row-span-1 col-start-1 col-span-2 my-3 md:m-6 border shadow-xl rounded-lg text-center h-65 md:box md:row-start-2 md:row-span-1 md:col-start-2 md:col-span-2">
          <h2 className="text-xl md:text-2xl text-main-black  font-bold py-4 bg-white  rounded-tl-lg rounded-tr-lg h-17 flex justify-center items-center">
            Badges obtenus
          </h2>
          <hr />
          <div className="flex flex-wrap justify-around my-5">
            <img className="h-20" src={badge1} alt="badge1" />
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

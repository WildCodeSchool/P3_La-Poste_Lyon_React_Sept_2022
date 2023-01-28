import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import { TutorialStatusContext } from "../contexts/TutorialStatusContext";
import { RewardsContext } from "../contexts/RewardsContext";
import { useCurrentUserContext } from "../contexts/userContext";
import odd from "../assets/userCourse/Etape1.svg";
import even from "../assets/userCourse/Etape2.svg";

import userCourse1 from "../assets/userCourse/WellDone.svg";
import userCourse2 from "../assets/userCourse/OnlineWishes.svg";
import userCourse3 from "../assets/userCourse/HighFive.svg";
import userCourse4 from "../assets/userCourse/Blooming.svg";
import userCourse5 from "../assets/userCourse/completed.svg";
import userCourse6 from "../assets/userCourse/Awards.svg";
import BannerProfile from "../components/BannerProfile";
import PreviousButton from "../components/PreviousButton";

function UserCourse() {
  const { VITE_BACKEND_URL } = import.meta.env;
  const { currentUser, token } = useCurrentUserContext();

  const tutos = [
    { asset: odd, id: 2 },
    { asset: even, id: 3 },
    { asset: odd, id: 4 },
    { asset: even, id: 5 },
    { asset: odd, id: 6 },
    { asset: even, id: 11 },
    { asset: odd, id: 13 },
    { asset: even, id: 20 },
    { asset: odd, id: 35 },
  ];

  const images = [
    { image: userCourse1, name: userCourse1 },
    { image: userCourse2, name: userCourse2 },
    { image: userCourse3, name: userCourse3 },
    { image: userCourse4, name: userCourse4 },
    { image: userCourse5, name: userCourse5 },
    { image: userCourse6, name: userCourse6 },
  ];

  const { tutorialStatus, getTutorialStatus } = useContext(
    TutorialStatusContext
  );

  /* When loading the component, we will put in the context the status of the tutorials. */
  useEffect(() => {
    getTutorialStatus();
  }, []);

  /* In tutorialStatus, I will search for tuto status based on their id (tutorialStatus is an array).
    I want to find all the tutorials whose status corresponds to "finished".  */
  const findTutorialStatus = (id) =>
    tutorialStatus?.find((status) => status?.tuto_id === id)?.status ===
    "finished";

  const randomObject = () => images[Math.floor(Math.random() * images.length)];

  /* Get the badge */
  const { rewards, setRewards } = useContext(RewardsContext);

  const checkRewardAdventure = rewards?.some(
    (reward) => reward.label === "Adventure"
  );

  const notifyBadge = () =>
    toast.success(
      "Le chemin ne fait que commencer ! mais vous méritez bien ce badge ! "
    );

  const getRewardAdventure = async () => {
    if (checkRewardAdventure === false) {
      fetch(`${VITE_BACKEND_URL}/api/gainReward`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          user_id: currentUser.id,
          badge_id: 9,
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
    getRewardAdventure();
  }, []);

  return (
    <div>
      <Toaster position="top-center" reverseOrder />
      <BannerProfile />

      <PreviousButton />
      <div className="mt-7 mb-7 flex justify-center">
        <h1 className="m-3 flex justify-center items-center font-bold text-xl md:text-3xl  text-main-blue rounded-xl w-2/3 h-10 text-center md:w-1/4 md:h-10 md:text-center">
          Parcours utilisateur
        </h1>
      </div>
      {tutos.map((el, index) => (
        <div key={index}>
          {index === 0 || findTutorialStatus(tutos[index - 1].id) ? (
            <div>
              <div className="ml-14 md:ml-48 flex justify-center mb-8 mt-5">
                <NavLink to={`/api/tutos/${el.id}`}>
                  <span>
                    <img
                      /* index is the current usercourse index. Each time he maps elements, he looks at whether the modulo2 = 1 index (therefore odd) if yes, he positions the source of the image to that defined on odd.  */
                      src={index % 2 === 1 ? odd : even}
                      alt={`Step${el.id}`}
                      className="cursor-pointer transition-transform duration-200 transform hover:scale-110 md:h-96"
                    />
                  </span>
                </NavLink>
              </div>
              <div
                key={index}
                className={`flex justify-center ${
                  index % 2 === 1 ? "ml-56 md:ml-96 md:pl-20" : ""
                }`}
              >
                <img
                  src={randomObject().image}
                  alt={randomObject().name}
                  className="h-28 md:h-72 mr-16"
                />
              </div>
            </div>
          ) : (
            <div className="grayscale">
              <div className="ml-14 md:ml-48 flex justify-center mb-8 mt-5">
                <span>
                  <img
                    src={index % 2 === 1 ? odd : even}
                    alt={`Step${el.id}`}
                    className="md:h-96"
                  />
                </span>
              </div>
              <div
                key={index}
                className={
                  index % 2 === 1
                    ? "flex justify-center ml-56 md:ml-96 md:pl-20"
                    : "flex justify-center"
                }
              >
                <img
                  src={randomObject().image}
                  alt={randomObject().name}
                  className="h-28 md:h-72 mr-16"
                />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default UserCourse;

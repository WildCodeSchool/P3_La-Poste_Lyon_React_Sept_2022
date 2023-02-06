import React, { useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
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
import userCourse7 from "../assets/userCourse/appreciation.svg";
import userCourse8 from "../assets/userCourse/bicycle.svg";
import userCourse9 from "../assets/userCourse/celebration.svg";
import userCourse10 from "../assets/userCourse/completing.svg";
import userCourse11 from "../assets/userCourse/country.svg";
import userCourse12 from "../assets/userCourse/creativity.svg";
import userCourse13 from "../assets/userCourse/current_location.svg";
import userCourse14 from "../assets/userCourse/desert.svg";
import userCourse15 from "../assets/userCourse/destinations.svg";
import userCourse16 from "../assets/userCourse/engineering_team.svg";
import userCourse17 from "../assets/userCourse/exams.svg";
import userCourse18 from "../assets/userCourse/exciting_news.svg";
import userCourse19 from "../assets/userCourse/exploring.svg";
import userCourse20 from "../assets/userCourse/geniuses.svg";
import userCourse21 from "../assets/userCourse/happy_feeling.svg";
import userCourse22 from "../assets/userCourse/happy_news.svg";
import userCourse23 from "../assets/userCourse/ideas.svg";
import userCourse24 from "../assets/userCourse/joyride.svg";
import userCourse25 from "../assets/userCourse/launching.svg";
import userCourse26 from "../assets/userCourse/location_search.svg";
import userCourse27 from "../assets/userCourse/lost_online.svg";
import userCourse28 from "../assets/userCourse/make_it.svg";
import userCourse29 from "../assets/userCourse/messaging_fun.svg";
import userCourse30 from "../assets/userCourse/messenger.svg";
import userCourse31 from "../assets/userCourse/mindfulness.svg";
import userCourse32 from "../assets/userCourse/partying.svg";
import userCourse33 from "../assets/userCourse/positive_attitude.svg";
import userCourse34 from "../assets/userCourse/powerful.svg";
import userCourse35 from "../assets/userCourse/reading_time.svg";
import userCourse36 from "../assets/userCourse/summer.svg";
import userCourse37 from "../assets/userCourse/thoughts.svg";
import userCourse38 from "../assets/userCourse/travelers.svg";
import userCourse39 from "../assets/userCourse/winners.svg";
import userCourse40 from "../assets/userCourse/winter_walk.svg";
import userCourse41 from "../assets/userCourse/woman.svg";
import userCourse42 from "../assets/userCourse/yoga.svg";
import BannerProfile from "../components/BannerProfile";
import PreviousButton from "../components/PreviousButton";

function UserCourse() {
  const navigate = useNavigate();

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
    { image: userCourse7, name: userCourse7 },
    { image: userCourse8, name: userCourse8 },
    { image: userCourse9, name: userCourse9 },
    { image: userCourse10, name: userCourse10 },
    { image: userCourse11, name: userCourse11 },
    { image: userCourse12, name: userCourse12 },
    { image: userCourse13, name: userCourse13 },
    { image: userCourse14, name: userCourse14 },
    { image: userCourse15, name: userCourse15 },
    { image: userCourse16, name: userCourse16 },
    { image: userCourse17, name: userCourse17 },
    { image: userCourse18, name: userCourse18 },
    { image: userCourse19, name: userCourse19 },
    { image: userCourse20, name: userCourse20 },
    { image: userCourse21, name: userCourse21 },
    { image: userCourse22, name: userCourse22 },
    { image: userCourse23, name: userCourse23 },
    { image: userCourse24, name: userCourse24 },
    { image: userCourse25, name: userCourse25 },
    { image: userCourse26, name: userCourse26 },
    { image: userCourse27, name: userCourse27 },
    { image: userCourse28, name: userCourse28 },
    { image: userCourse29, name: userCourse29 },
    { image: userCourse30, name: userCourse30 },
    { image: userCourse31, name: userCourse31 },
    { image: userCourse32, name: userCourse32 },
    { image: userCourse33, name: userCourse33 },
    { image: userCourse34, name: userCourse34 },
    { image: userCourse35, name: userCourse35 },
    { image: userCourse36, name: userCourse36 },
    { image: userCourse37, name: userCourse37 },
    { image: userCourse38, name: userCourse38 },
    { image: userCourse39, name: userCourse39 },
    { image: userCourse40, name: userCourse40 },
    { image: userCourse41, name: userCourse41 },
    { image: userCourse42, name: userCourse42 },
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
        .catch(navigate("*"));
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
      <div className="flex flex-col items-center justify-center">
        <div className="md:border-1 md:shadow-xl md:w-3/5">
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
                          className="cursor-pointer transition-transform duration-200 transform hover:scale-110 md:h-56"
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
                      className="h-28 md:h-40 mr-16"
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
                        className="md:h-56"
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
                      className="h-28 md:h-40 mr-16"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserCourse;

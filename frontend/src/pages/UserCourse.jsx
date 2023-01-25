import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { TutorialStatusContext } from "../contexts/TutorialStatusContext";
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
  const data = [
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

  useEffect(() => {
    getTutorialStatus();
  }, []);

  /* In tutorialStatus, I will search for tuto status based on their id (tutorialStatus is an array).
    I want to find all the tutorials whose status corresponds to "finished".  */

  const findTutorialStatus = (id) =>
    tutorialStatus?.find((status) => status?.tuto_id === id)?.status ===
    "finished";

  const randomObject = images[Math.floor(Math.random() * images.length)];

  return (
    <div>
      <BannerProfile />
      <PreviousButton />
      <div className="mt-7 mb-7 flex justify-center">
        <h1 className=" m-3 flex justify-center items-center font-bold text-3xl text-main-blue rounded-xl w-2/3 h-10 text-center md:w-1/4 md:h-10 md:text-center">
          Parcours utilisateur
        </h1>
      </div>
      {data.map((el, index) => (
        <div key={index}>
          {findTutorialStatus(el.id) ? (
            <div>
              <div className="ml-14 md:ml-48 flex justify-center mb-8 mt-5">
                <NavLink to={`/api/tutos/${el.id}`}>
                  <span>
                    <img
                      /* index is the current usercourse index. Each time he maps elements, he looks at whether the modulo2 = 1 index (therefore odd) if yes, he positions the source of the image to that defined on odd.  */
                      src={index % 2 === 1 ? odd : even}
                      alt={`Step${el.id}`}
                    />
                  </span>
                </NavLink>
              </div>
              {images.slice(0, 1).map((el, index) => (
                <div
                  key={index}
                  className={
                    index % 2 === 1
                      ? "flex justify-center"
                      : "flex justify-center"
                  }
                >
                  <img
                    src={randomObject.image}
                    alt={randomObject.name}
                    className="h-28"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div>
              <div className="ml-14 md:ml-48 flex justify-center grayscale mb-8 mt-5">
                <span>
                  <img
                    src={index % 2 === 1 ? odd : even}
                    alt={`Step${el.id}`}
                  />
                </span>
              </div>
              <div className="flex justify-center grayscale">
                <img
                  src={randomObject.image}
                  alt={randomObject.name}
                  className="h-28"
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

import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { TutorialStatusContext } from "../contexts/TutorialStatusContext";
import step1 from "../assets/userCourse/Etape1.svg";
import step2 from "../assets/userCourse/Etape2.svg";
import step4 from "../assets/userCourse/Etape4.svg";
import step5 from "../assets/userCourse/Etape5.svg";
import step6 from "../assets/userCourse/Etape6.svg";
import step7 from "../assets/userCourse/Etape7.svg";
import step9 from "../assets/userCourse/Etape9.svg";
import wellDone from "../assets/userCourse/WellDone.svg";
import onlineWishes from "../assets/userCourse/OnlineWishes.svg";
import highFive from "../assets/userCourse/HighFive.svg";
import blooming from "../assets/userCourse/Blooming.svg";
import completed from "../assets/userCourse/completed.svg";
import awards from "../assets/userCourse/Awards.svg";
import BannerProfile from "../components/BannerProfile";
import PreviousButton from "../components/PreviousButton";

// const data = [
//   { asset: step1, id: 2 },
//   { asset: step2, id: 3 },
// ];

function UserCourse() {
  const { tutorialStatus, getTutorialStatus } = useContext(
    TutorialStatusContext
  );

  useEffect(() => {
    getTutorialStatus();
  }, []);

  const findTutorialStatus = (id) =>
    tutorialStatus?.find((status) => status?.tuto_id === id)?.status ===
    "finished";

  /* In tutorialStatus, I will search for tuto status based on their id (tutorialStatus is an array).
I want to find all the tutorials whose status corresponds to "finished".  */

  const tuto2 = 2;
  const tuto3 = 3;
  const tuto4 = 4;
  const tuto5 = 5;
  const tuto6 = 6;
  const tuto11 = 11;
  const tuto13 = 13;
  const tuto20 = 20;
  const tuto35 = 35;

  return (
    /* {data.map(el => 
        <div>
          <div className="ml-14 md:ml-48 grayscale flex justify-center mb-8 mt-5">
            <img className="h-28 md:h-64" src={wellDone} alt="welldone" />
          </div>
          {findTutorialStatus(el.id) ? (
            <div className="flex justify-center">
              <NavLink to={`/api/tutos/${el.id}`}>
                <span>
                  <img src={el.asset} alt={`Step${el.id}`} />
                </span>
              </NavLink>
            </div>
          ) : (
            <div className="flex justify-center grayscale">
              <span>
                <img src={el.asset} alt="Step2" />
              </span>
            </div>
          )}
        </div>)} */
    <div>
      <BannerProfile />
      <PreviousButton />
      <div className="mt-7 mb-7 flex justify-center">
        <h1 className=" m-3 flex justify-center items-center font-bold text-3xl text-main-blue rounded-xl w-2/3 h-10 text-center md:w-1/4 md:h-10 md:text-center">
          Parcours utilisateur
        </h1>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-center">
          <NavLink to={`/api/tutos/${tuto2}`}>
            <span>
              <img src={step1} alt="Step1" />
            </span>
          </NavLink>
        </div>
        <div>
          <div className="ml-14 md:ml-48 grayscale flex justify-center mb-8 mt-5">
            <img className="h-28 md:h-64" src={wellDone} alt="welldone" />
          </div>
          {findTutorialStatus(2) ? (
            <div className="flex justify-center">
              <NavLink to={`/api/tutos/${tuto3}`}>
                <span>
                  <img src={step2} alt="Step2" />
                </span>
              </NavLink>
            </div>
          ) : (
            <div className="flex justify-center grayscale">
              <span>
                <img src={step2} alt="Step2" />
              </span>
            </div>
          )}
        </div>
        <div className="flex justify-center mr-10 mb-5 md:mr-36 grayscale">
          <img className="h-28 md:h-64" src={onlineWishes} alt="onlineWishes" />
        </div>
        {findTutorialStatus(3) ? (
          <div className="flex justify-center">
            <NavLink to={`/api/tutos/${tuto4}`}>
              <span>
                <img src={step4} alt="Step3" />
              </span>
            </NavLink>
          </div>
        ) : (
          <div className="flex justify-center grayscale">
            <span>
              <img src={step4} alt="Step3" />
            </span>
          </div>
        )}
        {findTutorialStatus(4) ? (
          <div className="flex justify-center grayscale">
            <NavLink to={`/api/tutos/${tuto5}`}>
              <span>
                <img src={step4} alt="Step4" className="rotate-45" />
              </span>
            </NavLink>
          </div>
        ) : (
          <div className="flex justify-center grayscale">
            <span>
              <img src={step4} alt="Step4" className="rotate-45" />
            </span>
          </div>
        )}
        <div className="ml-16 md:flex md:justify-center md:mr-80 grayscale">
          <img className="h-28 md:h-64" src={blooming} alt="blooming" />
        </div>
        {findTutorialStatus(5) ? (
          <div className="flex justify-center grayscale">
            <NavLink to={`/api/tutos/${tuto6}`}>
              <span>
                <img src={step4} alt="Step5" className="mt-5" />
              </span>
            </NavLink>
          </div>
        ) : (
          <div className="flex justify-center grayscale">
            <span>
              <img src={step4} alt="Step5" className="mt-5" />
            </span>
          </div>
        )}
        <div className="flex justify-end md:justify-center mr-10 md:ml-72 grayscale">
          <img
            className="h-28 md:h-64 justify-end my-5"
            src={completed}
            alt="welldone"
          />
        </div>
        {findTutorialStatus(6) ? (
          <div className="flex justify-center grayscale">
            <NavLink to={`/api/tutos/${tuto11}`}>
              <span>
                <img src={step5} alt="Step6" />
              </span>
            </NavLink>
          </div>
        ) : (
          <div className="flex justify-center grayscale">
            <span>
              <img src={step5} alt="Step6" />
            </span>
          </div>
        )}
        {findTutorialStatus(11) ? (
          <div className="flex justify-center grayscale">
            <NavLink to={`/api/tutos/${tuto13}`}>
              <span>
                <img src={step6} alt="Step7" />
              </span>
            </NavLink>
          </div>
        ) : (
          <div className="flex justify-center grayscale">
            <span>
              <img src={step6} alt="Step7" />
            </span>
          </div>
        )}
        <div className="flex justify-end md:justify-center mr-10 md:ml-80 grayscale">
          <img
            className="h-28 md:h-64 justify-end mb-8"
            src={highFive}
            alt="highFive"
          />
        </div>
        {findTutorialStatus(13) ? (
          <div className="flex justify-center grayscale">
            <NavLink to={`/api/tutos/${tuto20}`}>
              <span>
                <img src={step7} alt="Step8" />
              </span>
            </NavLink>
          </div>
        ) : (
          <div className="flex justify-center grayscale">
            <span>
              <img src={step7} alt="Step8" />
            </span>
          </div>
        )}
        {findTutorialStatus(20) ? (
          <div className="flex justify-center grayscale">
            <NavLink to={`/api/tutos/${tuto35}`}>
              <span>
                <img className="mr-32" src={step9} alt="Step9" />
              </span>
            </NavLink>
          </div>
        ) : (
          <div className="flex justify-center grayscale">
            <span>
              <img className="mr-32" src={step9} alt="Step9" />
            </span>
          </div>
        )}
        <div className="ml-4 md:flex md:justify-center md:mr-80 mb-6 grayscale">
          <span>
            <img className="h-28 md:h-64" src={awards} alt="awards" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default UserCourse;

import React from "react";
import NavigationBar from "../components/NavigationBar";
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

function UserCourse() {
  return (
    <div>
      <NavigationBar />
      <div className="mt-7 mb-7 flex justify-center">
        <h1 className="flex justify-center items-center text-bold text-xl text-white rounded-3xl shadow-lg bg-[#003DA5] w-2/3 h-10 md:text-2xl text-center md:w-1/4 md:h-14 md:text-center">
          Parcours utilisateur
        </h1>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-center">
          <span>
            <img src={step1} alt="Step1" />
          </span>
        </div>
        <div>
          <div className="ml-14 md:ml-48 grayscale flex justify-center mb-8">
            <img className="h-28 md:h-64" src={wellDone} alt="welldone" />
          </div>
          <div className="flex justify-center grayscale">
            <span>
              <img src={step2} alt="Step2" />
            </span>
          </div>
        </div>
        <div className="flex justify-center mr-10 mb-5 md:mr-36 grayscale">
          <img className="h-28 md:h-64" src={onlineWishes} alt="onlineWishes" />
        </div>
        <div className="flex justify-center grayscale">
          <span>
            <img src={step4} alt="Step3" />
          </span>
        </div>
        <div className="flex justify-center grayscale">
          <span>
            <img src={step4} alt="Step4" className="rotate-45" />
          </span>
        </div>
        <div className="ml-16 md:ml-96 grayscale">
          <span>
            <img className="h-28 md:h-64" src={blooming} alt="blooming" />
          </span>
        </div>
        <div className="flex justify-center grayscale">
          <span>
            <img src={step4} alt="Step5" className="mt-5" />
          </span>
        </div>
        <div className="flex justify-end mr-10 md:mr-60 grayscale">
          <span>
            <img
              className="h-28 md:h-64 justify-end my-5"
              src={completed}
              alt="welldone"
            />
          </span>
        </div>
        <div className="flex justify-center grayscale">
          <span>
            <img src={step5} alt="Step6" />
          </span>
        </div>
        <div className="flex justify-center grayscale">
          <span>
            <img src={step6} alt="Step7" />
          </span>
        </div>
        <div className="flex justify-end mr-10 md:mr-36 grayscale">
          <span>
            <img
              className="h-28 md:h-64 justify-end mb-8"
              src={highFive}
              alt="highFive"
            />
          </span>
        </div>
        <div className="flex justify-center grayscale">
          <span>
            <img src={step7} alt="Step8" />
          </span>
        </div>
        <div className="flex justify-center grayscale">
          <span>
            <img className="mr-32" src={step9} alt="Step9" />
          </span>
        </div>
        <div className="ml-4 md:ml-28 mb-6 grayscale">
          <span>
            <img className="h-28 md:h-64" src={awards} alt="awards" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default UserCourse;

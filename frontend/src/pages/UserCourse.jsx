import React from "react";
import NavigationBar from "../components/NavigationBar";
import step1 from "../assets/userCourse/Etape.svg";
import step2 from "../assets/userCourse/Chemin.svg";
import wellDone from "../assets/userCourse/WellDone.svg";

function UserCourse() {
  return (
    <div>
      <NavigationBar />
      UserCourse
      <div>
        <div>
          <span>
            <img src={step1} alt="Step1" />
          </span>
        </div>
        <div>
          <span>
            <img className="h-16" src={wellDone} alt="welldone" />
          </span>
        </div>
        <div>
          <span>
            <img src={step2} alt="Way1" />
          </span>
        </div>
        <div>
          <span>
            <img src={step1} alt="Step2" />
          </span>
        </div>
        <div>
          <span>
            <img src={step2} alt="badge1" />
          </span>
        </div>
        <div>
          <span>
            <img src={step1} alt="Step3" />
          </span>
        </div>
        <div>
          <span>
            <img src={step2} alt="badge1" />
          </span>
        </div>
        <div>
          <span>
            <img src={step1} alt="Step4" />
          </span>
        </div>
        <div>
          <span>
            <img src={step2} alt="badge1" />
          </span>
        </div>
        <div>
          <span>
            <img src={step1} alt="Step5" />
          </span>
        </div>
        <div>
          <span>
            <img src={step2} alt="badge1" />
          </span>
        </div>
        <div>
          <span>
            <img src={step1} alt="Step6" />
          </span>
        </div>
        <div>
          <span>
            <img src={step2} alt="badge1" />
          </span>
        </div>
        <div>
          <span>
            <img src={step1} alt="Step7" />
          </span>
        </div>
        <div>
          <span>
            <img src={step2} alt="badge1" />
          </span>
        </div>
        <div>
          <span>
            <img src={step1} alt="Step8" />
          </span>
        </div>
        <div>
          <span>
            <img src={step2} alt="badge1" />
          </span>
        </div>
        <div>
          <span>
            <img src={step1} alt="Step9" />
          </span>
        </div>
        <div>
          <span>
            <img src={step2} alt="badge1" />
          </span>
        </div>
        <div>
          <span>
            <img src={step1} alt="Step10" />
          </span>
        </div>
        <div>
          <span>
            <img src={step2} alt="badge1" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default UserCourse;

import React from "react";
import NavigationBar from "../components/NavigationBar";
import badge1 from "../assets/badge1.png";

function UserCourse() {
  return (
    <div>
      <NavigationBar />
      UserCourse
      <div>
        <div>
          <span>
            <img src={badge1} alt="badge1" />
          </span>
        </div>
        <div>
          <span>
            <img src={badge1} alt="badge1" />
          </span>
        </div>
        <div>
          <span>
            <img src={badge1} alt="badge1" />
          </span>
        </div>
        <div>
          <span>
            <img src={badge1} alt="badge1" />
          </span>
        </div>
        <div>
          <span>
            <img src={badge1} alt="badge1" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default UserCourse;

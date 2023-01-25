import React, { useState } from "react";
import BannerProfile from "../components/BannerProfile";
import badgeConnect from "../assets/Rewards/1.svg";
import badgeSecu from "../assets/Rewards/2.svg";
import badgeHelp from "../assets/Rewards/3.svg";
import badgeMedia from "../assets/Rewards/4.svg";
import badgeMessage from "../assets/Rewards/5.svg";
import badgeWelcome from "../assets/Rewards/6.svg";
import badgeTutos from "../assets/Rewards/7.svg";
import badgeGame from "../assets/Rewards/8.svg";
import badgeAdventure from "../assets/Rewards/9.svg";
import badgeWay from "../assets/Rewards/10.svg";
import badgeProfil from "../assets/Rewards/11.svg";
import badgeHorizon from "../assets/Rewards/12.svg";

function Reward() {
  const [hover, setHover] = useState(false);

  return (
    <div>
      <BannerProfile />
      <div className="flex justify-center mt-10">
        <div className="grid overflow-hidden grid-cols-3 grid-rows-4 gap-5">
          <img
            className="flex justify-center"
            src={badgeConnect}
            alt="badge1"
          />

          <div
            className="relative"
            onMouseEnter={() => {
              setHover(true);
            }}
            onMouseLeave={() => {
              setHover(false);
            }}
          >
            <img
              src={badgeSecu}
              alt="badge2"
              className=" hover:scale-110 duration-200 hover:grayscale "
            />
            {hover ? (
              <div className="bg-second-yellow  text-white rounded-xl absolute h-12 flex items-center top-16   p-1 duration-200 text-center">
                Obtenu le : 01.01.2001
              </div>
            ) : (
              ""
            )}
          </div>

          <img src={badgeHelp} alt="badge3" />
          <img src={badgeMedia} alt="badge4" />
          <img src={badgeMessage} alt="badge5" />
          <img src={badgeWelcome} alt="badge6" />
          <img src={badgeTutos} alt="badge7" />
          <img src={badgeGame} alt="badge8" />
          <img src={badgeAdventure} alt="badge9" />
          <img src={badgeWay} alt="badge10" />
          <img src={badgeProfil} alt="badge11" />
          <img src={badgeHorizon} alt="badge12" />
        </div>
      </div>
    </div>
  );
}

export default Reward;

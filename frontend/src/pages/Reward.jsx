import React from "react";
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
          <img src={badgeSecu} alt="badge2" />
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

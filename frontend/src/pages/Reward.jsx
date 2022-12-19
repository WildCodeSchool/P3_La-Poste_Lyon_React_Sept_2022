import React from "react";
import NavigationBar from "../components/NavigationBar";
import BannerProfile from "../components/BannerProfile";
import badgeConnect from "../assets/Rewards/1.png";
import badgeSecu from "../assets/Rewards/2.png";
import badgeHelp from "../assets/Rewards/3.png";
import badgeMedia from "../assets/Rewards/4.png";
import badgeMessage from "../assets/Rewards/5.png";
import badgeWelcome from "../assets/Rewards/6.png";
import badgeTutos from "../assets/Rewards/7.png";
import badgeGame from "../assets/Rewards/8.png";
import badgeAdventure from "../assets/Rewards/9.png";
import badgeWay from "../assets/Rewards/10.png";
import badgeProfil from "../assets/Rewards/11.png";
import badgeHorizon from "../assets/Rewards/12.png";

function Reward() {
  return (
    <div>
      <NavigationBar />
      <BannerProfile />
      <div className="flex justify-center">
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

import PreviousButton from "@components/PreviousButton";
import React, { useContext, useEffect } from "react";
import BannerProfile from "../components/BannerProfile";
import { RewardsContext } from "../contexts/RewardsContext";

function Reward() {
  const { rewards, getRewards } = useContext(RewardsContext);

  useEffect(() => {
    getRewards();
  }, []);

  return (
    <div>
      <BannerProfile />
      <PreviousButton />
      <div className="flex flex-col justify-center mt-10">
        <h1 className="m-2 text-3xl font-bold text-main-blue text-center">
          Mes récompenses
        </h1>
        <div className="grid overflow-hidden  grid-cols-3 md:grid-cols-4  grid-rows-4 md:grid-rows-3 gap-10 m-6 p-6 justify-items-center">
          {rewards?.map((reward) => (
            <div key={reward.id} className="relative">
              <img
                src={reward.picture}
                alt={reward.label}
                className=" hover:scale-110 duration-200 hover:grayscale "
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Reward;

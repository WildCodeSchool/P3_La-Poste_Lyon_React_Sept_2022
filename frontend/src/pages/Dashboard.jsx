import React from "react";
import NavigationBar from "../components/NavigationBar";
import DashboardUser from "../components/DashboardUser";

function Dashboard() {
  return (
    <div>
      <NavigationBar />
      <div className="mt-4 flex justify-center">
        <h1 className="flex justify-center items-center text-bold text-xl text-white rounded-3xl shadow-lg bg-[#003DA5] w-2/3 h-10 md:text-2xl text-center md:w-1/4 md:h-14 md:text-center">
          Mon tableau de bord
        </h1>
      </div>
      <DashboardUser />
    </div>
  );
}

export default Dashboard;

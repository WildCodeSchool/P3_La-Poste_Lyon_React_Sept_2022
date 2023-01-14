import React, { useContext } from "react";
import DashboardUser from "../components/DashboardUser";
import DashboardAdmin from "../components/DashboardAdmin";
import CurrentUserContext from "../contexts/userContext";

function Dashboard() {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <div>
      {currentUser && currentUser.admin === 0 && <DashboardUser />}
      {currentUser && currentUser.admin === 1 && <DashboardAdmin />}
    </div>
  );
}

export default Dashboard;

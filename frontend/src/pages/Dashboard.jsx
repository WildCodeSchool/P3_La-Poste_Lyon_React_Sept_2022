import React, { useContext } from "react";
import DashboardUser from "../components/DashboardUser";
import DashboardAdmin from "../components/DashboardAdmin";
import CurrentUserContext from "../contexts/userContext";

function Dashboard({ adminView }) {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <>
      {currentUser && currentUser.admin === 0 && <DashboardUser />}
      {currentUser && currentUser.admin === 1 && (
        /* eslint-disable react/jsx-no-useless-fragment */
        <>{adminView ? <DashboardUser /> : <DashboardAdmin />}</>
      )}
    </>
  );
}

export default Dashboard;

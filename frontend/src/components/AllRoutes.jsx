import React from "react";
import { Routes, Route } from "react-router-dom";
import TutorialsManagement from "../pages/TutorialsManagement";
import Error from "../pages/Error";
import TutorialCreation from "../pages/TutorialCreation";
import SearchUsers from "../pages/SearchUsers";
import Settings from "../pages/Settings";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import TutorialCategory from "../pages/TutorialCategory";
import TutorialList from "../pages/TutorialList";
import Tutorial from "../pages/Tutorial";
import Reward from "../pages/Reward";
import Historic from "../pages/Historic";
import UserCourse from "../pages/UserCourse";
import RegisterPage from "../pages/RegisterPage";
import AuthentificationPage from "../pages/AuthentificationPage";
import ForgottenPassword from "../pages/ForgottenPassword";
import ResetPassword from "../pages/ResetPassword";
import ForgottenEmail from "../pages/ForgottenEmail";
import CurrentUserContext from "../contexts/userContext";
import Help from "../pages/Help";

function AllRoutes({ adminView, handleAdminView }) {
  const { currentUser } = React.useContext(CurrentUserContext);

  return (
    <Routes>
      {/* Without connexion */}
      <Route path="/" element={<Home />} />
      <Route path="/authentification" element={<AuthentificationPage />} />
      <Route path="/forgotten-password" element={<ForgottenPassword />} />
      <Route path="/resetpassword/:passwordToken" element={<ResetPassword />} />
      <Route path="/forgotten-email" element={<ForgottenEmail />} />
      <Route path="/registerPage" element={<RegisterPage />} />

      {currentUser && (
        <>
          {/* User connexion */}
          <Route
            path="/dashboard"
            element={
              <Dashboard
                handleAdminView={handleAdminView}
                adminView={adminView}
              />
            }
          />
          <Route path="/reward" element={<Reward />} />
          <Route path="/course" element={<UserCourse />} />
          <Route path="/api/tutos/:id" element={<Tutorial />} />
          <Route path="/categories" element={<TutorialCategory />} />
          <Route path="/categories/:id/tutorials" element={<TutorialList />} />
          <Route path="/history" element={<Historic />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/aide" element={<Help />} />
        </>
      )}
      {/* Admin */}
      {currentUser && currentUser.admin === 1 && (
        <>
          <Route path="/creation" element={<TutorialCreation />} />
          <Route path="/users" element={<SearchUsers />} />
          <Route
            path="/tutorials-management"
            element={<TutorialsManagement />}
          />
        </>
      )}
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default AllRoutes;

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
import QuizTuto1 from "./QuizTuto1";
import QuizTuto2 from "./QuizTuto2";
import QuizTuto3 from "./QuizTuto3";
import QuizTuto4 from "./QuizTuto4";

import Games from "../pages/Games";

function AllRoutes({ adminView, handleAdminView }) {
  const { currentUser } = React.useContext(CurrentUserContext);

  return (
    <Routes>
      {/* Without connexion */}
      <Route path="/quiz1" element={<QuizTuto1 />} />
      <Route path="/quiz2" element={<QuizTuto2 />} />
      <Route path="/quiz3" element={<QuizTuto3 />} />
      <Route path="/quiz4" element={<QuizTuto4 />} />

      <Route path="/" element={<Home />} />
      <Route path="/authentification" element={<AuthentificationPage />} />
      <Route path="/forgotten-password" element={<ForgottenPassword />} />

      <Route path="/forgotten-email" element={<ForgottenEmail />} />
      <Route path="/registerPage" element={<RegisterPage />} />

      {currentUser.passwordToken && (
        <Route
          path="/resetpassword/:passwordToken"
          element={<ResetPassword />}
        />
      )}

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
          <Route path="/games" element={<Games />} />
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

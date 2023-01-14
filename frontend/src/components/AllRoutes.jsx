import React from "react";
import { Routes, Route } from "react-router-dom";
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
import ForgottenEmail from "../pages/ForgottenEmail";
import CurrentUserContext from "../contexts/userContext";

function AllRoutes() {
  const { currentUser } = React.useContext(CurrentUserContext);

  return (
    <Routes>
      {/* Without connexion */}
      <Route path="/" element={<Home />} />
      <Route path="/authentification" element={<AuthentificationPage />} />
      <Route path="/forgotten-password" element={<ForgottenPassword />} />
      <Route path="/forgotten-email" element={<ForgottenEmail />} />
      <Route path="/registerPage" element={<RegisterPage />} />

      {currentUser && currentUser.admin === 0 && (
        <>
          {/* User connexion */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/reward" element={<Reward />} />
          <Route path="/course" element={<UserCourse />} />
          <Route path="/categories/tutorials/:id" element={<Tutorial />} />
          <Route path="/categories" element={<TutorialCategory />} />
          <Route path="/categories/:id/tutorials" element={<TutorialList />} />
          <Route path="/history" element={<Historic />} />
          <Route path="/settings" element={<Settings />} />
        </>
      )}
      {currentUser && currentUser.admin === 1 && (
        <>
          {/* Admin connexion */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/creation" element={<TutorialCreation />} />
          <Route path="/users" element={<SearchUsers />} />
        </>
      )}
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default AllRoutes;

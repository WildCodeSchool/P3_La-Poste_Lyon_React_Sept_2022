import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

function AllRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/reward" element={<Reward />} />
        <Route path="/authentification" element={<AuthentificationPage />} />
        {/* // <Route path="/games" element={<Games />} /> */}
        <Route path="/course" element={<UserCourse />} />
        <Route path="/categories/tutos/:id" element={<Tutorial />} />
        <Route path="/categories" element={<TutorialCategory />} />
        <Route path="/categories/:id/tutorials" element={<TutorialList />} />
        <Route path="/history" element={<Historic />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/creation" element={<TutorialCreation />} />
        <Route path="/registerPage" element={<RegisterPage />} />
        <Route path="/users" element={<SearchUsers />} />
      </Routes>
    </Router>
  );
}

export default AllRoutes;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Settings from "../pages/Settings";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import TutorialCategory from "../pages/TutorialCategory";
import TutorialList from "../pages/TutorialList";
import Reward from "../pages/Reward";
import Historic from "../pages/Historic";
import RegisterPage from "../pages/RegisterPage";
import UserCourse from "../pages/UserCourse";
import AuthentificationPage from "../pages/AuthentificationPage";
function AllRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<Dashboard />} />
        <Route path="/categories" element={<TutorialCategory />} />
        <Route path="/recompenses" element={<Reward />} />
        {/* <Route path="/jeux" element={<Games />} /> */}
        <Route path="/parcours" element={<UserCourse />} />
        <Route path="/categories" element={<TutorialCategory />} />
        <Route path="/categories/:id/tutorials" element={<TutorialList />} />
        <Route path="/historique" element={<Historic />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/registered" element={<RegisterPage />} />
        <Route
          path="/authentificationpage"
          element={<AuthentificationPage />}
        />
      </Routes>
    </Router>
  );
}

export default AllRoutes;

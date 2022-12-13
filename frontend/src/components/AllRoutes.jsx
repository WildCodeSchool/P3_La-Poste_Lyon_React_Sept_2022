import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import TutorialCategory from "../pages/TutorialCategory";
import TutorialList from "../pages/TutorialList";

function AllRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<Dashboard />} />
        <Route path="/categories" element={<TutorialCategory />} />
        <Route path="/tutoriels" element={<TutorialList />} />
        <Route path="/jeux" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default AllRoutes;

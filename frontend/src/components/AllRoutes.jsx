import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import TutorialCategory from "@pages/TutorialCategory";
import TutorialList from "@pages/TutorialList";

function AllRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<TutorialCategory />} />
        <Route path="/categories/:id/tutorials" element={<TutorialList />} />
      </Routes>
    </Router>
  );
}

export default AllRoutes;

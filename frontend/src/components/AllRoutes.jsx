import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import RegisterPage from "../pages/RegisterPage";

function AllRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/registerPage" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default AllRoutes;

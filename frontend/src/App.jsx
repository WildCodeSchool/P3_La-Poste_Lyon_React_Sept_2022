import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { CurrentUserProvider } from "./contexts/userContext";
import AllRoutes from "./components/AllRoutes";
import NavigationBar from "./components/NavigationBar";
import { CategoryContextProvider } from "./contexts/CategoryContext";
import "./App.css";
import "./index.css";

function App() {
  const [adminView, setAdminView] = useState(false);
  const handleAdminView = () => {
    setAdminView(!adminView);
  };

  return (
    <CurrentUserProvider>
      <CategoryContextProvider>
        <Router>
          <NavigationBar
            handleAdminView={handleAdminView}
            adminView={adminView}
          />
          <AllRoutes handleAdminView={handleAdminView} adminView={adminView} />
        </Router>
      </CategoryContextProvider>
    </CurrentUserProvider>
  );
}

export default App;

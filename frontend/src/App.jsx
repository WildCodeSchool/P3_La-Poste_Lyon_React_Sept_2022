import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { CurrentUserProvider } from "./contexts/userContext";
import { CategoryContextProvider } from "./contexts/CategoryContext";
import AllRoutes from "./components/AllRoutes";
import NavigationBar from "./components/NavigationBar";
import { TutorialsContextProvider } from "./contexts/TutorialsContext";
import "./App.css";
import "./index.css";
import { TutorialStatusContextProvider } from "./contexts/TutorialStatusContext";

function App() {
  const [adminView, setAdminView] = useState(false);
  const handleAdminView = () => {
    setAdminView(!adminView);
  };

  return (
    <Router>
      <CurrentUserProvider>
        <CategoryContextProvider>
          <TutorialsContextProvider>
            <TutorialStatusContextProvider>
              <NavigationBar
                handleAdminView={handleAdminView}
                adminView={adminView}
              />
              <AllRoutes
                handleAdminView={handleAdminView}
                adminView={adminView}
              />{" "}
            </TutorialStatusContextProvider>
          </TutorialsContextProvider>
        </CategoryContextProvider>
      </CurrentUserProvider>
    </Router>
  );
}

export default App;

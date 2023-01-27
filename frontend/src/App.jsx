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
import { RewardsContextProvider } from "./contexts/RewardsContext";

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
              <RewardsContextProvider>
                <NavigationBar
                  handleAdminView={handleAdminView}
                  adminView={adminView}
                />
                <AllRoutes
                  handleAdminView={handleAdminView}
                  adminView={adminView}
                />{" "}
              </RewardsContextProvider>
            </TutorialStatusContextProvider>
          </TutorialsContextProvider>
        </CategoryContextProvider>
      </CurrentUserProvider>
    </Router>
  );
}

export default App;

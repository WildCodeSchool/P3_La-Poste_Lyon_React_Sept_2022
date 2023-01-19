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
    <CurrentUserProvider>
      <CategoryContextProvider>
        <TutorialsContextProvider>
          <TutorialStatusContextProvider>
            <Router>
              <NavigationBar
                handleAdminView={handleAdminView}
                adminView={adminView}
              />
              <AllRoutes
                handleAdminView={handleAdminView}
                adminView={adminView}
              />
            </Router>{" "}
          </TutorialStatusContextProvider>
        </TutorialsContextProvider>
      </CategoryContextProvider>
    </CurrentUserProvider>
  );
}

export default App;

import { BrowserRouter as Router } from "react-router-dom";
import { CurrentUserProvider } from "./contexts/userContext";
import AllRoutes from "./components/AllRoutes";
import NavigationBar from "./components/NavigationBar";
import "./App.css";
import "./index.css";

function App() {
  return (
    <CurrentUserProvider>
      <Router>
        <NavigationBar />
        <AllRoutes />
      </Router>
    </CurrentUserProvider>
  );
}

export default App;

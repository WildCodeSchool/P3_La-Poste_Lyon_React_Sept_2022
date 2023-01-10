import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from "./components/AllRoutes";
import NavigationBar from "./components/NavigationBar";
import "./App.css";
import "./index.css";

function App() {
  return (
    <Router>
      <NavigationBar />
      <AllRoutes />
    </Router>
  );
}

export default App;

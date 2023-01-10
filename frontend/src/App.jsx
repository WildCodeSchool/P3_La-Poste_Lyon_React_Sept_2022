import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from "./components/AllRoutes";
import NavigationBar from "./components/NavigationBar";
import "./App.css";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="">
        <NavigationBar />
      </div>
      <AllRoutes />
    </Router>
  );
}

export default App;

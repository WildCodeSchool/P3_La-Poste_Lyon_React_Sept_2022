import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from "./components/AllRoutes";
import "./App.css";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="App" />
      <AllRoutes />
    </Router>
  );
}

export default App;

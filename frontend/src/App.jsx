import AllRoutes from "./components/AllRoutes";
import "./App.css";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App" />
      <AllRoutes />
    </Router>
  );
}

export default App;

import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from "./components/AllRoutes";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import "./App.css";
import "./index.css";

function App() {
  return (
    <Router>
      <NavigationBar />
      <AllRoutes />
      <Footer />
    </Router>
  );
}

export default App;

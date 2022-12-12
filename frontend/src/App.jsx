import "./App.css";
import "./index.css";
import AllRoutes from "./components/AllRoutes";
import Home from "./pages/Home";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <AllRoutes>
      <NavigationBar />
      <Home />
    </AllRoutes>
  );
}

export default App;

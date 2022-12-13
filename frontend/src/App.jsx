import "./App.css";
import "./index.css";
import AllRoutes from "./components/AllRoutes";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <AllRoutes>
      <NavigationBar />
    </AllRoutes>
  );
}

export default App;

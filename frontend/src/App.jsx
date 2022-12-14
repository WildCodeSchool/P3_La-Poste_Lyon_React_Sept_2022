import AllRoutes from "./components/AllRoutes";
import Footer from "./components/Footer";
import "./App.css";
import "./index.css";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <AllRoutes>
      <NavigationBar />
      <Footer />
    </AllRoutes>
  );
}

export default App;

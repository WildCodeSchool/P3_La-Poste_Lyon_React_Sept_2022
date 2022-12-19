import AllRoutes from "./components/AllRoutes";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import "./App.css";
import "./index.css";

function App() {
  return (
    <AllRoutes>
      <NavigationBar />
      <div>
        <Footer />
      </div>
    </AllRoutes>
  );
}

export default App;

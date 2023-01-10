import { CurrentUserProvider } from "./contexts/userContext";
import AllRoutes from "./components/AllRoutes";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import "./App.css";
import "./index.css";

function App() {
  return (
    <CurrentUserProvider>
      <AllRoutes>
        <NavigationBar />
        <div>
          <Footer />
        </div>
      </AllRoutes>
    </CurrentUserProvider>
  );
}

export default App;

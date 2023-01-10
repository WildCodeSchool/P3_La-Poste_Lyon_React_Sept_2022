import { CurrentUserProvider } from "./contexts/userContext";
import AllRoutes from "./components/AllRoutes";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import { CategoryContextProvider } from "./contexts/CategoryContext";
import "./App.css";
import "./index.css";

function App() {
  return (
    <CurrentUserProvider>
      <CategoryContextProvider>
        <AllRoutes>
          <NavigationBar />
          <div>
            <Footer />
          </div>
        </AllRoutes>
      </CategoryContextProvider>
    </CurrentUserProvider>
  );
}

export default App;

import AllRoutes from "./components/AllRoutes";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import { CategoryContextProvider } from "./contexts/CategoryContext";
import "./App.css";
import "./index.css";

function App() {
  return (
    <CategoryContextProvider>
      <AllRoutes>
        <NavigationBar />
        <div>
          <Footer />
        </div>
      </AllRoutes>
    </CategoryContextProvider>
  );
}

export default App;

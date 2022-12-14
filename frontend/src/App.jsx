import "./App.css";
import "./index.css";
import RegisterFirstStep from "./components/RegisterFirstStep";
import RegisterSecondStep from "./components/RegisterSecondStep";
import RegisterThirdStep from "./components/RegisterThirdStep";
import RegisterFourthStep from "./components/RegisterFourthStep";

function App() {
  return (
    <>
      <RegisterFirstStep />
      <RegisterSecondStep />
      <RegisterThirdStep />
      <RegisterFourthStep />
    </>
  );
}

export default App;

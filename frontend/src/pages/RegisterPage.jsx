// import React, { useRef } from "react";
import React, { useRef } from "react";
import RegisterFirstStep from "../components/RegisterFirstStep";
import RegisterSecondStep from "../components/RegisterSecondStep";
import RegisterThirdStep from "../components/RegisterThirdStep";
import RegisterFourthStep from "../components/RegisterFourthStep";

function RegisterPage() {
  const ref = useRef(null);

  const handleSecondStep = () => {
    ref.current?.scrollIntoView({ scroll: "smooth" });
  };
  return (
    <>
      <div>
        {" "}
        <RegisterFirstStep handleSecondStep={handleSecondStep} />
      </div>
      <div>
        {" "}
        <RegisterSecondStep />
      </div>
      <div>
        {" "}
        <RegisterThirdStep />
      </div>
      <div>
        {" "}
        <RegisterFourthStep />
      </div>
    </>
  );
}

export default RegisterPage;

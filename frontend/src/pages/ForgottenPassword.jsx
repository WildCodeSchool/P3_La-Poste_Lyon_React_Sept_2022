import React from "react";
import PreviousButton from "../components/PreviousButton";
import forgotpass from "../assets/forgotpass.svg";

function ForgottenPassword() {
  return (
    <div>
      <PreviousButton />
      <div className=" flex flex-col items-center justify-center ml-20 mr-20 md:mb-4">
        <img
          src={forgotpass}
          className="  w-21 h-31 mr-50  mb-8 "
          alt="forgotpass"
        />
      </div>
      ForgottenPassword
    </div>
  );
}

export default ForgottenPassword;

import PreviousButton from "@components/PreviousButton";
import React from "react";
import forgotemail from "../assets/email.svg";

function ForgottenEmail() {
  return (
    <div>
      <PreviousButton />
      <div className=" flex flex-col items-center justify-center ml-20 mr-20 md:mb-4">
        <img
          src={forgotemail}
          className="  w-21 h-31 mr-50  mb-8 "
          alt="forgotpass"
        />
      </div>
      ForgottenEmail
    </div>
  );
}

export default ForgottenEmail;

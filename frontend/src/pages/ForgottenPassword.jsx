import React from "react";
import locker from "../assets/lockerlogo.png";
import PreviousButton from "../components/PreviousButton";
import forgotpass from "../assets/forgotpass.svg";

function ForgottenPassword() {
  return (
    <div>
      <PreviousButton />
      <div className="flex justify-center">
        <img
          src={forgotpass}
          className="mt-12 w-21 h-31 mr-50 mb-8 "
          alt="forgotpass"
        />
      </div>
      <h1 className="text-center">Modifier son mot de passe</h1>
      <div className="flex flex-col items-center justify-center ml-20 mr-20 md:mb-4">
        <label htmlFor="password" name="password">
          <img src={locker} alt="locker" className="w-14 h-14 mr-3" />{" "}
        </label>

        <input
          type="password"
          required
          id="password"
          name="password"
          placeholder="Choisissez un nouveau mot de passe"
          className="bg-gray-200  text-gray-600 py-2 px-4  w-full rounded-2xl  "
        />
        <input
          type="password"
          required
          id="password"
          name="password"
          placeholder="Confirmer votre nouveau mot de passe"
          className="bg-gray-200  text-gray-600 py-2 px-4  w-full rounded-2xl  "
        />
      </div>
    </div>
  );
}

export default ForgottenPassword;

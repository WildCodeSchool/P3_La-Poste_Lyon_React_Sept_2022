import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PreviousButton from "../components/PreviousButton";
import granny from "../assets/granny1.svg";
import locker from "../assets/lockerlogo.png";
import forgotpass from "../assets/forgotpass.svg";

function ForgottenPassword() {
  /* Import useNavigate to move after the login  */
  const navigate = useNavigate();

  /* set password */
  const [password, setPassword] = useState("");

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    /* It's an object that will be sent in the body of request */
    const body = JSON.stringify({
      password,
    });

    /* function push user and token in the localstorage */
    fetch("http://localhost:5000/api/resetpassword/:passwordToken", {
      method: "POST",
      redirect: "follow",
      body,
      headers: myHeaders,
    })
      .then(() => {
        navigate("/authentification");
      })
      .catch((error) => console.warn(error));
  };

  return (
    <>
      <PreviousButton />
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col items-center justify-center  "
      >
        {" "}
        <h1 className=" items-center content-center justify-center text-3xl mb-10 mt-10">
          Modifier votre mot de passe
        </h1>
        <div className=" flex-col w-1/2 justify-center mb-8 ">
          {/* label and input */}
          <div className="flex">
            <label htmlFor="email" name="email">
              <img src={locker} alt="locker" className="w-14 h-14 mr-3" />
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={handleChangePassword}
              id="password"
              name="password"
              placeholder="Entrez votre nouveau mot de passe"
              className="bg-gray-200  text-gray-600 py-2 px-4  w-full rounded-2xl  "
            />
          </div>
        </div>
        <div className="flex-col  mt-8 justify-center w-1/2">
          <div className="flex">
            <label htmlFor="password" name="password">
              <img src={locker} alt="locker" className="w-14 h-14 mr-3" />{" "}
            </label>

            <input
              type="password"
              required
              value={password}
              onChange={handleChangePassword}
              id="password"
              name="password"
              placeholder="Confirmer votre nouveau mot de passe"
              className="bg-gray-200  text-gray-600 py-2 px-4  w-full rounded-2xl  "
            />
          </div>{" "}
        </div>
        <div className=" flex flex-col items-center justify-center ml-20 mr-20 md:mb-4">
          <img
            src={granny}
            className=" max-w-sm w-64 h-64 md:hidden mb-8"
            alt="granny"
          />
          <img
            src={forgotpass}
            className="hidden w-21 h-31 mr-50 mt-12 md:block mb-8 md:mb-9"
            alt="forgotpass"
          />
        </div>
        <button
          type="submit"
          className="bg-[#003DA5] text-white m-1 py-1 px-4 rounded-lg shadow-lg md:h-14 md:w-44 md:text-lg hover:shadow hover:bg-[#FFC927] hover:text-black mb-28"
        >
          Sauvegarder
        </button>
      </form>
    </>
  );
}

export default ForgottenPassword;

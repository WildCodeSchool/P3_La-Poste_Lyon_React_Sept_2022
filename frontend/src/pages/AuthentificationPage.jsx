import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCurrentUserContext } from "../contexts/userContext";
import granny from "../assets/granny1.svg";
import arobase from "../assets/arobaselogo.png";
import locker from "../assets/lockerlogo.png";
import forgotpass from "../assets/forgotpass.svg";

function AuthentificationPage() {
  /* Get the context of the user (user informations + token) */
  const { setCurrentUser, setToken } = useCurrentUserContext();

  /* Import useNavigate to move after the login  */
  const navigate = useNavigate();

  /* set email and password */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  /* submit mail and password, post to back and get the result 
  if ok -> navigate to dashboard
  */
  const handleSubmit = (e) => {
    e.preventDefault();

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({ email, password });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };

    if (email && password) {
      fetch("http://localhost:5000/api/login", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          setCurrentUser(result.user);
          setToken(result.token);
          navigate("/dashboard");
        })
        .catch(console.error);
    }
    /* "Entrez vos in formations de connexion" */
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" flex flex-col items-center justify-center  "
    >
      <h1 className=" items-center content-center justify-center text-3xl mb-10 mt-10">
        CONNECTEZ-VOUS
      </h1>

      <div className=" flex md:w-3/5 justify-center ">
        <label htmlFor="email" name="email">
          <img src={arobase} alt="arobase" className="w-14 h-14 ml-1" />
        </label>
        <input
          type="email"
          pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
          placeholder="Entrez votre addresse email"
          required
          value={email}
          onChange={handleChangeEmail}
          id="email"
          name="email"
          className="bg-gray-200  text-gray-600   py-2 px-4 border rounded-2xl   md:w-3/5 "
        />
      </div>
      <p className="italic text-gray-400 underline mb-4 ml-28 md:ml-80 text-xs md:text-sm md:mb-16">
        adresse e-mail oubliée?
      </p>

      <div className="flex  justify-center md:w-3/5">
        <label htmlFor="password" name="password">
          <img src={locker} alt="locker" className="w-14 h-14 ml-1" />{" "}
        </label>
        <input
          type="password"
          required
          value={password}
          onChange={handleChangePassword}
          id="password"
          name="password"
          placeholder="Entrez votre mot de passe"
          className="bg-gray-200  text-gray-600   py-2 px-4 border  rounded-2xl md:w-3/5 "
        />
      </div>
      <p className="italic text-gray-400 underline mb-4 ml-28 md:ml-80 text-xs md:text-sm md:mb-16">
        mot de passe oublié ?
      </p>

      <div className=" flex flex-col items-center justify-center ml-20 mr-20 md:mb-4">
        <img
          src={granny}
          className=" max-w-sm w-64 h-64 md:hidden mb-8"
          alt="granny"
        />
        <img
          src={forgotpass}
          className=" hidden w-21 h-31 mr-50 md:block mb-8 md:mb-9"
          alt="forgotpass"
        />
      </div>

      <button
        type="submit"
        className="bg-[#003DA5] text-white m-1 py-1 px-4 rounded-lg shadow-lg md:h-14 md:w-44 md:text-lg hover:shadow hover:bg-[#FFC927] hover:text-black mb-28"
      >
        Connexion
      </button>
    </form>
  );
}

export default AuthentificationPage;

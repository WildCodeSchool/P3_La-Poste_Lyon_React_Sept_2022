import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PreviousButton from "../components/PreviousButton";
import { useCurrentUserContext } from "../contexts/userContext";
import granny from "../assets/granny1.svg";
import arobase from "../assets/arobaselogo.png";
import forgotpass from "../assets/forgotpass.svg";

function ForgottenPassword() {
  /* Get the context of the user (user informations + token) */
  const { user } = useCurrentUserContext();

  /* Import useNavigate to move after the login  */
  const navigate = useNavigate();

  /* set email and password */
  const [email, setEmail] = useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    /* It's an object that will be sent in the body of request */
    const body = JSON.stringify({
      email,
    });

    /* When the user enter his email adress, we will first verify if the adress exist in our database. Then, we will send an email in this adress if it exist or render nothing if it's not. */
    fetch("http://localhost:5000/api/forgottenpassword", {
      method: "POST",
      redirect: "follow",
      body,
      headers: myHeaders,
    })
      /* result is an email. I compare it to email of all users. If it exist, we execute the fetch. */
      .then((result) => {
        if (result === user.email) {
          navigate("/");
        }
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
        <h1 className=" items-center content-center justify-center text-center text-3xl mb-10 mt-10">
          Mot de passe oublié ?
          <span className="block text-sm text-center">
            <p>Entrez votre adresse mail de connexion</p>
          </span>
        </h1>
        <div className=" flex-col w-1/2 justify-center mb-8 ">
          <div className="flex">
            <label htmlFor="email" name="email">
              <img src={arobase} alt="arobase" className="w-14 h-14 mr-3" />
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
              className="bg-gray-200 w-full text-gray-600   py-2 px-4 border rounded-2xl "
            />
          </div>
        </div>
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
        {/* onClick : send email to the adress mail entered. */}
        <button
          type="submit"
          className="bg-[#003DA5] text-white m-1 py-1 px-4 rounded-lg shadow-lg md:h-14 md:w-44 md:text-lg hover:shadow hover:bg-[#FFC927] hover:text-black mb-28"
        >
          Envoyer
        </button>
      </form>
    </>
  );
}

export default ForgottenPassword;

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import PreviousButton from "../components/PreviousButton";
import { useCurrentUserContext } from "../contexts/userContext";
import granny from "../assets/connexionPage/granny1.svg";
import arobase from "../assets/connexionPage/email-logo-connexion.png";
import locker from "../assets/connexionPage/lockerlogo.png";
import forgotpass from "../assets/connexionPage/img-user-connexion.svg";

function AuthentificationPage() {
  /* Toast */

  const notifyError = () => {
    toast("Vos informations de connexion sont incorrectes", {
      icon: "🚫",
    });
  };

  const notifySuccess = (firstname) => {
    toast(`Bonjour ${firstname}!`, {
      icon: "👋",
    });
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    /* It's an object that will be sent in the body of request */
    const body = JSON.stringify({
      email,
      password,
    });

    /* function push user and token in the localstorage */
    fetch("http://localhost:5000/api/login", {
      method: "POST",
      redirect: "follow",
      body,
      headers: myHeaders,
    })
      /* then I get the response to json. If response == 401 console log error else .then result
       */
      .then((response) => {
        if (response.status !== 401) {
          /* eslint consistent-return: off */ return response.json();
        }
        notifyError();
        setPassword("");
      })
      .then((result) => {
        if (result.token) {
          setCurrentUser(result.user);
          setToken(result.token);
          notifySuccess(result.user.firstname);
          setTimeout(() => {
            navigate("/dashboard");
          }, 1500);
        } else {
          notifyError();
        }
      })
      .catch((error) => console.warn(error));
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder /> <PreviousButton />
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col items-center justify-center"
      >
        {" "}
        <h1 className=" items-center content-center justify-center text-3xl mb-10 mt-10">
          CONNECTEZ-VOUS
          <span className="block text-sm text-center underline text-gray-500 hover:text-black">
            <Link to="/registerPage"> ou créez un compte</Link>
          </span>
        </h1>
        <div className=" flex-col w-5/6 md:w-1/2 justify-center mb-2">
          {/* label and input */}
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
              className="bg-gray-200 md:w-full text-gray-600 py-2 px-4 border rounded-2xl w-screen"
            />
          </div>
          {/* mail */}

          <p className="italic text-gray-400 underline text-right text-sm md:text-lg">
            <Link to="/forgotten-email" className="hover:text-black">
              {" "}
              adresse e-mail oubliée?
            </Link>
          </p>
        </div>
        <div className=" flex-col w-5/6 md:w-1/2 justify-center mb-8 ">
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
              placeholder="Entrez votre mot de passe"
              className="bg-gray-200 md:w-full text-gray-600 py-2 px-4 border rounded-2xl w-screen"
            />
          </div>{" "}
          <p className="italic text-gray-400 underline text-right text-sm md:text-lg">
            <Link to="/forgotten-password" className="hover:text-black">
              {" "}
              mot de passe oublié ?{" "}
            </Link>
          </p>
        </div>
        <div className="flex flex-col items-center justify-center ml-20 mr-20 md:mb-4">
          <img
            src={granny}
            className="max-w-sm w-40 h-40 md:hidden mb-8"
            alt="granny"
          />
          <img
            src={forgotpass}
            className="hidden w-21 h-31 mr-50 md:block mb-8 md:mb-9 md:mt-4"
            alt="forgotpass"
          />
        </div>
        <button
          type="submit"
          className="bg-[#FFC927] text-white m-1 py-1 px-4 rounded-lg shadow-lg md:h-14 md:w-44 md:text-lg hover:shadow hover:bg-[#003DA5] mb-28"
        >
          Connexion
        </button>
      </form>
    </>
  );
}

export default AuthentificationPage;

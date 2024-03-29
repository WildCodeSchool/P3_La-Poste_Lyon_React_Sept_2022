import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import PreviousButton from "../components/PreviousButton";
import { useCurrentUserContext } from "../contexts/userContext";
import granny from "../assets/connexionPage/granny1.svg";
import arobase from "../assets/connexionPage/email-logo-connexion.png";
import locker from "../assets/connexionPage/lockerlogo.png";
import forgotpass from "../assets/connexionPage/img-user-connexion.svg";

const { VITE_BACKEND_URL } = import.meta.env;

function AuthentificationPage() {
  const notifyProblem = () => toast("Chargement...");
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
    fetch(`${VITE_BACKEND_URL}/api/login`, {
      method: "POST",
      redirect: "follow",
      body,
      headers: myHeaders,
    })
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
          setTimeout(() => {
            navigate("/dashboard");
            notifySuccess(result.user.firstname);
          }, 300);
        } else {
          notifyError();
        }
      })
      .catch((err) => notifyProblem(err));
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
        <div className=" flex-col w-5/6 lg:w-1/2 justify-center mb-2">
          {/* label and input */}
          <div className="flex">
            <label htmlFor="email" name="email">
              <img src={arobase} alt="arobase" className="w-14 h-14 mr-3" />
            </label>
            <input
              type="email"
              pattern="(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm"
              required
              title='Veuillez entrer une adresse mail valide. Exemple: "exemple@mail.fr'
              minLength={6}
              maxLength={320}
              placeholder="Entrez votre addresse email"
              value={email}
              onChange={handleChangeEmail}
              id="email"
              name="email"
              className="bg-gray-200 lg:w-full text-gray-600 py-2 px-4 border rounded-2xl w-screen"
            />
          </div>
          {/* mail */}

          <p className="italic text-gray-400 underline text-right text-sm lg:text-lg">
            <Link to="/forgotten-email" className="hover:text-black">
              {" "}
              adresse e-mail oubliée?
            </Link>
          </p>
        </div>
        <div className=" flex-col w-5/6 lg:w-1/2 justify-center mb-8 ">
          <div className="flex">
            <label htmlFor="password" name="password">
              <img src={locker} alt="locker" className="w-14 h-14 mr-3" />{" "}
            </label>

            <input
              type="password"
              required
              value={password}
              onChange={handleChangePassword}
              minLength="8"
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&-])[A-Za-z\d@$!%*-?&]{8,}$"
              title="Votre mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial"
              id="password"
              name="password"
              placeholder="Entrez votre mot de passe"
              className="bg-gray-200 lg:w-full text-gray-600 py-2 px-4 border rounded-2xl w-screen"
            />
          </div>{" "}
          <p className="italic text-gray-400 underline text-right text-sm lg:text-lg">
            <Link to="/forgotten-password" className="hover:text-black">
              {" "}
              mot de passe oublié ?{" "}
            </Link>
          </p>
        </div>
        <div className="flex flex-col items-center justify-center ml-20 mr-20 lg:mb-4">
          <img
            src={granny}
            className="max-w-sm w-40 h-40 lg:hidden mb-8"
            alt="granny"
          />
          <img
            src={forgotpass}
            className="hidden w-21 h-31 mr-50 lg:block mb-8 lg:mb-9 lg:mt-4"
            alt="forgotpass"
          />
        </div>
        <button
          type="submit"
          className="bg-main-yellow text-white m-1 py-1 px-4 rounded-lg shadow-lg lg:h-14 lg:w-44 lg:text-lg hover:shadow hover:bg-main-blue mb-28"
        >
          Connexion
        </button>
      </form>
    </>
  );
}

export default AuthentificationPage;

import React, { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import PreviousButton from "../components/PreviousButton";
import granny from "../assets/connexionPage/granny1.svg";
import locker from "../assets/connexionPage/lockerlogo.png";
import forgotpass from "../assets/connexionPage/img-user-connexion.svg";

function ResetPassword() {
  const notifyProblem = () => toast("Chargement...");

  const navigate = useNavigate();

  const { VITE_BACKEND_URL } = import.meta.env;

  /* Toast */

  const invalidToken = () => {
    toast("Vous n'êtes pas autorisés à renouveler votre mot de passe", {
      icon: "🚫",
    });
  };
  const problemReleved = () => {
    toast("Les deux mots de passe doivent être identiques !", {
      icon: "🚫",
    });
  };

  /* I recup passwordToken from the URL */
  const { passwordToken } = useParams();

  const checkValidToken = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    /* It's an object that will be sent in the body of request */
    const body = JSON.stringify({
      passwordToken,
    });
    fetch(`${VITE_BACKEND_URL}/api/passwordReset`, {
      method: "POST",
      redirect: "follow",
      body,
      headers: myHeaders,
    })
      .then((response) => {
        if (response.status !== 200) {
          invalidToken();
          navigate("/");
        }
      })
      .catch((err) => notifyProblem(err));
  };
  useEffect(() => {
    checkValidToken();
  }, []);

  /* set password */
  const [password, setPassword] = useState("");
  const [passwordVerification, setPasswordVerification] = useState("");

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const verifyPassword = (e) => {
    setPasswordVerification(e.target.value);
  };

  /* When I submit, I verify first if the two password are the same. If no, I don't accept to change the password, if yes, the fetch can be launched. */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwordVerification !== password) problemReleved();
    else {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      /* It's an object that will be sent in the body of request */
      const body = JSON.stringify({
        password,
        passwordToken,
      });

      /* function push user and token in the localstorage */
      fetch(`${VITE_BACKEND_URL}/api/resetpassword`, {
        method: "POST",
        redirect: "follow",
        body,
        headers: myHeaders,
      })
        .then(() => {
          navigate("/authentification");
        })
        .catch((err) => notifyProblem(err));
    }
  };

  return (
    <>
      <div>
        <Toaster position="top-center" reverseOrder />
      </div>{" "}
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
              value={passwordVerification}
              onChange={verifyPassword}
              id="passwordCheck"
              name="passwordCheck"
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

export default ResetPassword;

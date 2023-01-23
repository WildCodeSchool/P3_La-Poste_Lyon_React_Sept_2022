import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import PreviousButton from "../components/PreviousButton";
import forgotemail from "../assets/email.svg";
import arobase from "../assets/arobaselogo.png";

const { VITE_BACKEND_URL } = import.meta.env;

function ForgottenEmail() {
  /* Toast */

  const notifySuccess = () => {
    toast("Un email a été envoyé sur votre boîte mail.", {
      icon: "📩",
    });
  };

  /* set email */
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

    /* When the user enter his email adress, we will begin all the middleware of the route /forgottenpassword */
    fetch(`${VITE_BACKEND_URL}/api/forgottenemail`, {
      method: "POST",
      redirect: "follow",
      body,
      headers: myHeaders,
    })
      .then(() => {
        notifySuccess();
      })
      .catch((error) => console.warn(error));
  };

  return (
    <>
      <div>
        <Toaster position="top-center" reverseOrder />
      </div>{" "}
      <PreviousButton />
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        {" "}
        <h1 className="items-center content-center justify-center text-center text-3xl mb-16 mt-24 md:mt-16">
          Adresse email oubliée ?
          <span className="block text-sm text-center mt-4">
            <p>Entrez une adresse mail vous appartenant</p>
          </span>
        </h1>
        <div className=" flex-col w-80 md:w-2/4 justify-center mb-12">
          <div className="flex">
            <label htmlFor="email" name="email">
              <img src={arobase} alt="arobase" className="w-14 h-14 mr-3" />
            </label>
            <input
              type="email"
              pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
              placeholder="Entrez une addresse email"
              required
              value={email}
              onChange={handleChangeEmail}
              id="email"
              name="email"
              className="bg-gray-200 w-full text-gray-600   py-2 px-4 border rounded-2xl"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center ml-20 mr-20 mb-2 md:mb-12 md:mt-8">
          <img
            src={forgotemail}
            className="w-72 h-72 mr-50 md:block mb-8 md:mb-9"
            alt="forgotpass"
          />
        </div>
        {/* onClick : send email to the adress mail entered. */}
        <button
          type="submit"
          className="bg-[#FFC928] m-1 py-1 px-4 rounded-lg shadow-lg md:h-14 md:w-44 md:text-lg hover:shadow hover:bg-[#003DA5] hover:text-white mb-28"
        >
          Envoyer
        </button>
      </form>
    </>
  );
}

export default ForgottenEmail;

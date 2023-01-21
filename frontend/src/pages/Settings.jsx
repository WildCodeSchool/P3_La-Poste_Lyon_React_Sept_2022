import React, { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import uploadIcon from "../assets/uploadIcon.svg";
import PreviousButton from "../components/PreviousButton";
import { useCurrentUserContext } from "../contexts/userContext";
import SettingsParameters from "./SettingsParameters";

function Settings() {
  /* Toast notifications */
  const notifySuccess = () => {
    toast("Image bien téléchargée !", {
      icon: "🥳",
    });
  };

  const notifyError = () => {
    toast("Erreur dans le téléchargement de l'image...", {
      icon: "⛔",
    });
  };

  const { currentUser, setCurrentUser, token } = useCurrentUserContext();

  const avatarRef = useRef(null);
  const navigate = useNavigate();

  const [userValues, setUserValues] = useState({
    firstname: currentUser.firstname,
    lastname: currentUser.lastname,
    phone: currentUser.phone,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUserValues({
      ...userValues,
      [name]: value,
    });
  };

  const handleOnClickValue = (e) => {
    const { name } = e.target;
    setUserValues({
      ...userValues,
      [name]: "",
    });
  };

  // Fetch updated avatar
  const handleSubmitAvatar = (e) => {
    e.preventDefault();
    if (avatarRef.current.files[0]) {
      const myHeader = new Headers();
      myHeader.append("Authorization", `Bearer ${token}`);

      const formData = new FormData();
      formData.append("profilePicture", avatarRef.current.files[0]);
      const requestOptions = {
        method: "PUT",
        headers: myHeader,
        body: formData,
      };

      fetch(`http://localhost:5000/api/avatars`, requestOptions)
        .then((response) => response.json())
        .then((results) => {
          setCurrentUser({ ...currentUser, profilePicture: results.avatar });
          notifySuccess();
        })
        .catch((error) => {
          console.error(error);
          notifyError();
        });
    }
  };

  // Submit usersInformations
  const submitSettingModify = (e) => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");

    const userraw = JSON.stringify({
      firstname: userValues.firstname,
      lastname: userValues.lastname,
      phone: userValues.phone,
      currentUser_id: currentUser.id,
    });

    const requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: userraw,
      redirect: "follow",
    };

    e.preventDefault();
    toast
      .promise(
        fetch(
          `http://localhost:5000/api/users/${currentUser.id}`,
          requestOptions
        ),
        {
          loading: "En cours de modification ...",
          success: `Votre profil est mis à jour  ${userValues.firstname} 😁 `,
          error: "Attention aux erreurs ! ",
        }
      )
      // toaster management
      .then((response) => {
        response.text();
        if (response.status === 204) {
          setTimeout(() => {
            navigate("/dashboard");
          }, 2000);
        }
      })

      // user realtime update
      .then(
        setCurrentUser({
          ...currentUser,
          firstname: userValues.firstname,
          lastname: userValues.lastname,
          phone: userValues.phone,
        })
      );
  };

  return (
    <div className=" relative flex flex-col my-6">
      <Toaster position="top-center" reverseOrder />
      <div className="pb-10">
        <Link to="/dashboard">
          <PreviousButton />
        </Link>
      </div>
      <Toaster position="top-center" reverseOrder={false} />

      <div className="mt-4  relative md:h-48 h-32 bg-main-yellow flex justify-center flex-col z-1">
        <div className="flex absolute bottom-[-5vh] inset-x-0 justify-center items-center">
          <img
            src={
              currentUser?.profilePicture !== null
                ? `http://localhost:5000/api/avatars/${currentUser?.profilePicture}`
                : `https://api.multiavatar.com/${currentUser.firstname}.svg`
            }
            alt="userImage"
            className="object-fit  w-36 h-36 md:w-48  md:h-48  border-black border-x border-y shadow-lg rounded-full "
          />
          <div className="mt-32">
            <label htmlFor="image-upload">
              <img
                src={uploadIcon}
                alt="Upload Icon"
                className="absolute w-7 h-7 cursor-pointer"
              />
            </label>

            <input
              ref={avatarRef}
              type="file"
              id="image-upload"
              accept="image/*"
              onChange={handleSubmitAvatar}
              className="hidden"
            />
          </div>
        </div>
      </div>

      <form onSubmit={submitSettingModify} className="md:p-8 py-8 md:mx-8">
        <ul className="p-8  md:mx-[10vw] ">
          <h1 className="flex  justify-left items-center font-bold text-xl md:text-2xl text-main-blue my-3 h-10 text-center md:h-14 md:text-center ">
            Modifier mes informations
          </h1>

          <SettingsParameters
            text="Prénom"
            textValue="firstname"
            userVal={userValues.firstname}
            handleOnClickValue={handleOnClickValue}
            handleInputChange={handleInputChange}
          />

          <SettingsParameters
            text="Nom"
            textValue="lastname"
            userVal={userValues.lastname}
            handleOnClickValue={handleOnClickValue}
            handleInputChange={handleInputChange}
          />

          <SettingsParameters
            text="Tél."
            textValue="phone"
            userVal={userValues.phone}
            handleOnClickValue={handleOnClickValue}
            handleInputChange={handleInputChange}
          />
        </ul>
        <div className="w-full flex justify-center items-center relative">
          <button
            type="submit"
            className="bg-gradient-to-r from-main-yellow to-second-yellow text-white font-semibold m-3 py-1 px-4 rounded-lg shadow md:h-10 md:w-44 md:text-lg hover:shadow  hover:bg-gradient-to-r hover:from-blue-900 hover:to-main-blue hover:text-white"
          >
            Valider
          </button>
        </div>
      </form>
    </div>
  );
}

export default Settings;

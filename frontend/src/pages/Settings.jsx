import React, { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import uploadIcon from "../assets/uploadIcon.svg";
import PreviousButton from "../components/PreviousButton";
import { useCurrentUserContext } from "../contexts/userContext";

function Settings() {
  /* Toast */
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

  const notifyForget = () => {
    toast(
      "Vous n'auriez pas oublié un truc ? Le fichier à uploader, par exemple ?.",
      {
        icon: "🤭",
      }
    );
  };

  const { currentUser, setCurrentUser, token } = useCurrentUserContext();

  const avatarRef = useRef(null);

  const navigate = useNavigate();

  // const [profilePicture, setProfilePicture] = useState("");

  // All states
  const [firstname, setFirstname] = useState(currentUser.firstname);
  const [lastname, setLastname] = useState(currentUser.lastname);
  const [phone, setPhone] = useState(currentUser.phone);

  const notifyErrorProfile = () =>
    toast.error("Une erreur est survenue, veuillez vérifier vos informations");

  // All state handle functions
  const handleChangeFirstname = (e) => {
    setFirstname(e.target.value);
  };
  const handleChangeLastname = (e) => {
    setLastname(e.target.value);
  };
  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleClickFirstName = () => {
    // 👇️ clear input value
    setFirstname("");
  };

  const handleClickLastName = () => {
    // 👇️ clear input value
    setLastname("");
  };

  const handleClickPhone = () => {
    // 👇️ clear input value
    setPhone("");
  };

  // Méthode pour fetch l'avatar uploadé

  const handleSubmitAvatar = (e) => {
    e.preventDefault();
    if (avatarRef.current.files[0]) {
      // recupération des articles.
      const myHeader = new Headers();
      myHeader.append("Authorization", `Bearer ${token}`);

      const formData = new FormData();
      formData.append("profilePicture", avatarRef.current.files[0]);
      const requestOptions = {
        method: "PUT",
        headers: myHeader,
        body: formData,
      };
      // on appelle le back
      fetch(`http://localhost:5000/api/avatars`, requestOptions)
        .then((response) => response.json())
        .then((results) => {
          // maj avatar

          setCurrentUser({ ...currentUser, profilePicture: results.avatar });
          notifySuccess();
        })
        .catch((error) => {
          console.error(error);
          notifyError();
        });
    } else {
      notifyForget();
    }
  };

  // Put function
  const submitSettingModify = (e) => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");

    const userraw = JSON.stringify({
      firstname,
      lastname,
      phone,
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
          loading: "En cours",
          success: "Profil mis à jour",
          error: "Attention aux erreurs",
        }
      )
      // toaster management
      .then((response) => {
        response.text();
        if (response.status === 204) {
          setTimeout(() => {
            navigate("/dashboard");
          }, 2000);
        } else {
          notifyErrorProfile();
        }
      })

      // user realtime update
      .then(
        setCurrentUser({
          ...currentUser,
          firstname,
          lastname,
          phone,
        })
      );
  };

  return (
    <div className=" relative flex flex-col justify-center my-6">
      <Toaster position="top-center" reverseOrder />
      <div className="pb-10">
        <Link to="/dashboard">
          <PreviousButton />
        </Link>
      </div>
      <Toaster position="top-center" reverseOrder={false} />

      <div className="mt-4  relative h-48 bg-main-yellow flex justify-center flex-col z-1">
        {/*   <h1 className="flex w-full justify-center items-center font-bold text-2xl md:text-3xl text-main-blue my-3 h-10 text-center md:h-14 md:text-center ">
          Modifier mes informations
        </h1> */}
        <div className="flex absolute bottom-[-4vh] inset-x-0 justify-center items-center">
          <img
            src={
              currentUser?.profilePicture !== null
                ? `http://localhost:5000/api/avatars/${currentUser?.profilePicture}`
                : `https://api.multiavatar.com/${currentUser.firstname}.svg`
            }
            alt="userImage"
            className="object-fit w-48  h-48 border rounded-full "
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

      <form onSubmit={submitSettingModify} className="p-8">
        <ul className="flex-col  p-8 ">
          <h1 className="flex w-full justify-left items-center font-bold text-xl md:text-2xl text-main-blue my-3 h-10 text-center md:h-14 md:text-center ">
            Modifier mes informations
          </h1>
          <li className="my-3 md:m-6  border shadow-xl rounded-lg   bg-main-blue text-white">
            {" "}
            <div className="w-full flex justify-end items-center relative">
              <label
                htmlFor="firstname"
                className="px-3  font-semibold w-32 border-r-gray "
              >
                {" "}
                Prénom{" "}
              </label>
              <input
                value={firstname}
                placeholder={`${currentUser.firstname}`}
                className=" border-gray-400 bg-gray-100 p-4 w-full h-10 text-gray-700"
                onChange={handleChangeFirstname}
                onClick={handleClickFirstName}
                required
                name="firstname"
              />
            </div>
          </li>
          <li className="  my-3 md:m-6 border shadow-xl rounded-lg  bg-main-blue text-white">
            {" "}
            <div className="w-full flex justify-end items-center relative">
              <label
                htmlFor="firstname"
                className="px-3  font-semibold  w-32 border-r-gray "
              >
                {" "}
                Nom{" "}
              </label>
              <input
                value={lastname}
                placeholder={`${currentUser.lastname}`}
                className=" border-gray-400 bg-gray-100  p-4 w-full h-10 text-gray-700"
                onChange={handleChangeLastname}
                onClick={handleClickLastName}
                required
              />
            </div>
          </li>

          <li className="my-3 md:m-6 border shadow-xl rounded-lg  bg-main-blue text-white">
            {" "}
            <div className="w-full flex justify-end items-center relative">
              <label
                htmlFor="firstname"
                className="px-3 w-32 font-semibold border-r-gray "
              >
                {" "}
                Téléphone{" "}
              </label>
              <input
                value={phone}
                placeholder={`${currentUser.phone}`}
                className=" border-gray-400 bg-gray-100  p-4 w-full h-10 text-gray-700"
                onChange={handleChangePhone}
                onClick={handleClickPhone}
                required
              />
            </div>
          </li>
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

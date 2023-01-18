import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import uploadIcon from "../assets/uploadIcon.svg";
import CurrentUserContext from "../contexts/userContext";
import PreviousButton from "../components/PreviousButton";

function Settings() {
  const { currentUser, setCurrentUser, token } = useContext(CurrentUserContext);
  /*   const [defaultImage, setDefaultImage] = useState(profilepic);
   */ const [uploadedImage, setUploadedImage] = useState(null);
  const [image, setImage] = useState(null);
  /*   const [fileName, setFileName] = useState("");
   */
  const navigate = useNavigate();
  const handleImageChange = (event) => {
    setUploadedImage(event.target.files[0]);
    setImage(
      event.target.files[0]
    ); /*  setDefaultImage(event.target.files[0]); */
    /*     setFileName(event.target.files[0].name);
     */
  };

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
    console.warn(userraw);

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
        console.warn(response);
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
    <div className=" flex flex-col justify-center my-6">
      <div className="pb-6">
        <Link to="/dashboard">
          <PreviousButton />
        </Link>
      </div>
      <Toaster position="top-center" reverseOrder={false} />

      <div className="mt-4 flex justify-center flex-col z-1">
        <h1 className="flex w-full justify-center items-center font-bold text-3xl text-main-blue my-3 h-10 text-center md:h-14 md:text-center ">
          Modifier mes informations
        </h1>
        <div className="flex justify-center">
          {!uploadedImage && (
            <img
              src={`https://api.multiavatar.com/${currentUser.firstname}.svg`}
              alt=""
              className="object-fit w-36  h-36 border rounded-full"
            />
          )}
          {uploadedImage && (
            <div>
              <img
                src={URL.createObjectURL(image)}
                className="object-fit border w-36  rounded-full"
                alt="Uploaded"
              />
            </div>
          )}
          <div className="mt-32">
            <label htmlFor="image-upload">
              <img
                src={uploadIcon}
                alt="Upload Icon"
                className="absolute w-7 h-7 cursor-pointer"
              />
            </label>

            <input
              type="file"
              id="image-upload"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </div>
        </div>
      </div>
      <form onSubmit={submitSettingModify} className="p-8">
        <ul className="flex-col  p-8 ">
          <li className="my-3 md:m-6  border shadow-xl rounded-lg text-center">
            {" "}
            <div className="w-full flex justify-end items-center relative">
              <input
                value={firstname}
                placeholder={`${currentUser.firstname}`}
                className=" border-gray-400 bg-gray-100 rounded-bl-lg p-4 w-full h-10 text-gray-700"
                onChange={handleChangeFirstname}
                onClick={handleClickFirstName}
                required
              />
            </div>
          </li>
          <li className="  my-3 md:m-6 border shadow-xl rounded-lg text-center">
            {" "}
            <div className="w-full flex justify-end items-center relative">
              <input
                value={lastname}
                placeholder={`${currentUser.lastname}`}
                className=" border-gray-400 bg-gray-100 rounded-bl-lg  p-4 w-full h-10 text-gray-700"
                onChange={handleChangeLastname}
                onClick={handleClickLastName}
                required
              />
            </div>
          </li>

          <li className="  my-3 md:m-6 border shadow-xl rounded-lg text-center">
            {" "}
            <div className="w-full flex justify-end items-center relative">
              <input
                value={phone}
                placeholder={`${currentUser.phone}`}
                className=" border-gray-400 bg-gray-100 rounded-bl-lg p-4 w-full h-10 text-gray-700"
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

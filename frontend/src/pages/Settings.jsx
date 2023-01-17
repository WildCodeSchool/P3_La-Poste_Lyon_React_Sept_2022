import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import pencil1 from "../assets/pencil1.svg";
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
  const [firstname, setFirstname] = useState(currentUser.firstname);
  const [lastname, setLastname] = useState(currentUser.lastname);
  const [phone, setPhone] = useState(currentUser.phone);

  const notifyErrorProfile = () =>
    toast.error("Une erreur est survenue, veuillez vérifier vos informations");

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

  const submitSettingModify = (e) => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      firstname,
      lastname,
      phone,
      currentUser_id: currentUser.id,
    });
    console.warn(raw);

    const requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
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
          success: "Profil edited",
          error: "Pouet",
        }
      )

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
    <div className="my-6">
      <Link to="/dashboard">
        <PreviousButton />
      </Link>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="mt-4 flex justify-center flex-col z-1">
        <h1 className="flex w-full justify-center items-center text-bold text-xl text-black my-8 h-10 md:text-2xl text-center md:h-14 md:text-center ">
          Modifier mes informations
        </h1>
        <div className="flex justify-center">
          {!uploadedImage && (
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp8HE9nJ03LBSlHivqF46xHQ640tNgo-9nnFrUMANrL3tf4lOHdDeNzjLZurWNUf3oIt8&usqp=CAU"
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
                src="./src/assets/uploadIcon.png"
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
      <form onSubmit={submitSettingModify}>
        <ul className="flex-col mt-12">
          <li className=" mx-10 md:mx-48 mb-16 my-3 md:m-6  border shadow-xl rounded-lg text-center">
            {" "}
            <div className="w-full flex justify-end items-center relative">
              <input
                value={firstname}
                placeholder={`${currentUser.firstname}`}
                className=" border-gray-400 bg-gray-100 rounded-bl-lg p-4 w-full h-10 text-gray-700"
                onChange={handleChangeFirstname}
                onClick={handleClickFirstName}
              />
              <img
                src={pencil1}
                className="absolute mr-2 w-6 h-6"
                alt="Search Icon"
              />{" "}
            </div>
          </li>
          <li className=" mx-10 md:mx-48 mb-16 my-3 md:m-6 border shadow-xl rounded-lg text-center">
            {" "}
            <div className="w-full flex justify-end items-center relative">
              <input
                value={lastname}
                placeholder={`${currentUser.lastname}`}
                className=" border-gray-400 bg-gray-100 rounded-bl-lg  p-4 w-full h-10 text-gray-700"
                onChange={handleChangeLastname}
                onClick={handleClickLastName}
              />
              <img
                src={pencil1}
                className="absolute mr-2 w-6 h-6"
                alt="Search Icon"
              />{" "}
            </div>
          </li>

          <li className=" mx-10 md:mx-48 mb-16 my-3 md:m-6 border shadow-xl rounded-lg text-center">
            {" "}
            <div className="w-full flex justify-end items-center relative">
              <input
                value={phone}
                placeholder={`${currentUser.phone}`}
                className=" border-gray-400 bg-gray-100 rounded-bl-lg p-4 w-full h-10 text-gray-700"
                onChange={handleChangePhone}
                onClick={handleClickPhone}
              />
              <img
                src={pencil1}
                className="absolute mr-2 w-6 h-6"
                alt="Search Icon"
              />{" "}
            </div>
          </li>
        </ul>
        <div className="w-full flex justify-center items-center relative">
          <button
            type="submit"
            className="bg-[#003DA5] text-white m-3 py-1 px-4 rounded-lg shadow-lg md:h-14 md:w-44 md:text-lg hover:shadow hover:bg-[#FFC927] hover:text-black"
          >
            Valider
          </button>
        </div>
      </form>
    </div>
  );
}

export default Settings;

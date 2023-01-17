import { avatar } from "@material-tailwind/react";
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import pencil from "../assets/pencil1.svg";
import upload from "../assets/uploadIcon.svg";
import PreviousButton from "../components/PreviousButton";
import { useCurrentUserContext } from "../contexts/userContext";

// Banner to implement to this page,with a previous icon to add on the banner.

// In this page I render a Unordered List (ul) with an H2 and an Input element with an img logo inside.

// There is also an icon with an Onclick allowing for the user to select and display a profile picture.

function Settings() {
  const avatarRef = useRef(null);
  const { currentUser, setCurrentUser, token } = useCurrentUserContext();
  const [msg, setMsg] = useState("Aucun upload effectué");

  /*   const [defaultImage, setDefaultImage] = useState(profilepic);
   */ const [uploadedImage, setUploadedImage] = useState({ avatar });
  const [, setImage] = useState(null);
  /*   const [fileName, setFileName] = useState("");
   */
  const handleImageChange = (event) => {
    setUploadedImage(event.target.files[0]);
    setImage(
      event.target.files[0]
    ); /*  setDefaultImage(event.target.files[0]); */
    /*     setFileName(event.target.files[0].name);
     */
  };

  // const [profilePicture, setProfilePicture] = useState("");
  const [firstname, setFirstname] = useState("Prénom");
  const [lastname, setLastName] = useState("Nom");
  const [phone, setPhone] = useState("Téléphone");

  // const [setUser] = useState("");

  const [inputcontent] = useState("");

  const handleInput1 = (event) => {
    if (event.key === "Enter") {
      setFirstname(inputcontent);
    }
  };
  const handleInput2 = (event) => {
    if (event.key === "Enter") {
      setLastName(inputcontent);
    }
  };
  const handleInput3 = (event) => {
    if (event.key === "Enter") {
      setPhone(inputcontent);
    }
  };

  // Méthode pour fetch les données des users pour les garder en mémoire (firstname, lastname, phone)

  const handleSubmit = (e) => {
    e.preventDefault();

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({ firstname, lastname, phone });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };

    if (firstname && lastname && phone) {
      fetch("http://localhost:5000/api/user:id", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          setCurrentUser(result.user);
        })
        .catch(console.error);
    }
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
        method: "POST",
        headers: myHeader,
        body: formData,
      };
      // on appelle le back
      fetch(
        `http://localhost:5000/api/avatars/${currentUser.id}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((results) => {
          // maj avatar
          setCurrentUser({ ...currentUser, avatar: results.avatar });
          setMsg("Upload réussi !");
        })
        .catch((error) => {
          console.error(error);
          setMsg("Upload échoué !");
        });
    } else {
      setMsg(
        "Vous auriez pas oublié un truc ? Le fichier à uploader, par exemple ?"
      );
    }
  };

  /* const hSubmit = (evt) => {
    evt.preventDefault();

    const formData = new FormData();
    formData.append("avatar", avatarRef.current.files[0]);

    axios
      .post("http://localhost:5000/api/avatars", formData)
      .then(() => {
        setMsg("Upload réussi !");
      })
      .catch(() => {
        setMsg("Upload échoué !");
      });
  }; */

  return (
    <div className="my-6">
      <Link to="/dashboard">
        <PreviousButton />
      </Link>
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
            <form encType="multipart/image" onSubmit={handleSubmitAvatar}>
              <img
                src={uploadedImage}
                className="object-fit border w-36  rounded-full"
                alt="Uploaded"
              />
              <input type="file" ref={avatarRef} />
              <button type="submit">Envoyer</button>
              <p>{msg}</p>
            </form>
            /* <form enctype="multipart/form-data" onSubmit={hSubmit}>
            <input type="file" name="monfichier" ref={inputRef} />
            <button type="submit">Envoyer</button> */
          )}

          <div className="mt-32">
            <label htmlFor="image-upload" className=" ">
              <img
                src={upload}
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
        <form onSubmit={handleSubmit}>
          <ul className="flex-col mt-12">
            <li className=" mx-10 md:mx-48 mb-16 my-3 md:m-6  border shadow-xl rounded-lg text-center">
              {" "}
              <label className="text-xl text-[#003DA5] p-2 bg-white rounded-tl-lg rounded-tr-lg h-10 flex justify-start items-center">
                {inputcontent === 0 ? "Enfant" : firstname}
              </label>{" "}
              <div className="w-full flex justify-end items-center relative">
                <input
                  type="Prénom"
                  required
                  pattern=".+"
                  placeholder="Prénom"
                  className=" border-gray-400 bg-gray-100 rounded-bl-lg rounded-br-lg p-4 w-full h-10 "
                  onChange={(event) => setFirstname(event.target.value)}
                  onKeyDown={handleInput1}
                />
                <button
                  type="submit"
                  required
                  className="cursor-pointer bg-blu text-white p-2 rounded-full h-10 w-10 flex justify-center items-center "
                >
                  <img src={pencil} className="w-6 h-6" alt="Edit Icon" />
                </button>
              </div>
            </li>
            <li className=" mx-10 md:mx-48 mb-16 my-3 md:m-6 border shadow-xl rounded-lg text-center">
              {" "}
              <label className="text-xl text-[#003DA5] p-2 bg-white rounded-tl-lg rounded-tr-lg h-10 flex justify-start items-center">
                {inputcontent === 0 ? "FindBug" : lastname}
              </label>{" "}
              <div className="w-full flex justify-end items-center relative">
                <input
                  type="Nom"
                  required
                  pattern=".+"
                  placeholder="Nom"
                  className=" border-gray-400 bg-gray-100 rounded-bl-lg rounded-br-lg  p-4 w-full h-10"
                  onChange={(event) => setLastName(event.target.value)}
                  onKeyDown={handleInput2}
                />
                <button
                  type="submit"
                  required
                  className="cursor-pointer bg-blu text-white p-2 rounded-full h-10 w-10 flex justify-center items-center"
                >
                  <img src={pencil} className="w-6 h-6" alt="Edit Icon" />
                </button>
              </div>
            </li>

            <li className=" mx-10 md:mx-48 mb-16 my-3 md:m-6 border shadow-xl rounded-lg text-center">
              {" "}
              <label className="text-xl text-[#003DA5] p-2 bg-white  rounded-tl-lg rounded-tr-lg h-10 flex justify-start items-center ">
                {inputcontent === 0 ? "Téléphone" : phone}
              </label>{" "}
              <div className="w-full flex justify-end items-center relative">
                <input
                  placeholder="06-62-02-02-02"
                  className=" border-gray-400 bg-gray-100 rounded-bl-lg rounded-br-lg p-4 w-full h-10"
                  onChange={(event) => setPhone(event.target.value)}
                  onKeyDown={handleInput3}
                />
                <img
                  src={pencil}
                  className="absolute mr-2 w-6 h-6"
                  alt="Search Icon"
                />{" "}
              </div>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}

export default Settings;

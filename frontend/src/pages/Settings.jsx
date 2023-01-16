import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import pencil from "../assets/pencil1.svg";
import upload from "../assets/uploadIcon.svg";
import PreviousButton from "../components/PreviousButton";

// Banner to implement to this page,with a previous icon to add on the banner.

// In this page I render a Unordered List (ul) with an H2 and an Input element with an img logo inside.

// There is also an icon with an Onclick allowing for the user to select and display a profile picture.

function Settings() {
  /*   const [defaultImage, setDefaultImage] = useState(profilepic);
   */ const [uploadedImage, setUploadedImage] = useState(null);
  const [image, setImage] = useState(null);
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

  const [firstname, setFirstname] = useState(null);
  const [lastname, setLastname] = useState(null);
  const [phone, setPhone] = useState(null);

  return (
    <>
      <NavigationBar />

      <div className="my-6">
        <Link to="/dashboard">
          <PreviousButton />
        </Link>
        <div className="mt-4 flex justify-center flex-col">
          <h1 className="flex w-full justify-center items-center text-bold text-xl text-black my-8 h-10 md:text-2xl text-center md:h-14 md:text-center ">
            Modifier mes informations
          </h1>
          <div className="flex justify-center  ">
            {!uploadedImage && (
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp8HE9nJ03LBSlHivqF46xHQ640tNgo-9nnFrUMANrL3tf4lOHdDeNzjLZurWNUf3oIt8&usqp=CAU"
                alt=""
                className="object-fit w-36  h-36 border rounded-full"
              />
            )}
            {uploadedImage && (
              <div className="">
                <img
                  src={URL.createObjectURL(image)}
                  className="object-fit border w-36  rounded-full"
                  alt="Uploaded"
                />
              </div>
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
        </div>
        <form>
          <ul className="flex-col mt-12">
            <li className=" mx-10 md:mx-48 mb-16 my-3 md:m-6  border shadow-xl rounded-lg text-center">
              {" "}
              <div className="w-full flex justify-end items-center relative">
                <input
                  placeholder={`${firstname}`}
                  className=" border-gray-400 bg-gray-100 rounded-bl-lg rounded-br-lg p-4 w-full h-10"
                  onChange={(e) => setFirstname(e.target.value)}
                />
                <img
                  src={pencil}
                  className="absolute mr-2 w-6 h-6"
                  alt="Search Icon"
                />{" "}
              </div>
            </li>
            <li className=" mx-10 md:mx-48 mb-16 my-3 md:m-6 border shadow-xl rounded-lg text-center">
              {" "}
              <div className="w-full flex justify-end items-center relative">
                <input
                  placeholder={`${lastname}`}
                  className=" border-gray-400 bg-gray-100 rounded-bl-lg rounded-br-lg  p-4 w-full h-10"
                  onChange={(e) => setLastname(e.target.value)}
                />
                <img
                  src={pencil}
                  className="absolute mr-2 w-6 h-6"
                  alt="Search Icon"
                />{" "}
              </div>
            </li>

            <li className=" mx-10 md:mx-48 mb-16 my-3 md:m-6 border shadow-xl rounded-lg text-center">
              {" "}
              <div className="w-full flex justify-end items-center relative">
                <input
                  placeholder={`${phone}`}
                  className=" border-gray-400 bg-gray-100 rounded-bl-lg rounded-br-lg p-4 w-full h-10"
                  onChange={(e) => setPhone(e.target.value)}
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
    </>
  );
}

export default Settings;

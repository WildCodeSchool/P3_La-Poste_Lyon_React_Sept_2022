import React, { useState } from "react";
import { Link } from "react-router-dom";
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

  const [input1, setInput1] = useState("Prénom");
  const [input2, setInput2] = useState("Nom");
  const [input3, setInput3] = useState("Téléphone");

  const [inputcontent, setInputcontent] = useState("");

  const handleInput1 = (event) => {
    if (event.key === "Enter") {
      setInput1(inputcontent);
    }
  };
  const handleInput2 = (event) => {
    if (event.key === "Enter") {
      setInput2(inputcontent);
    }
  };
  const handleInput3 = (event) => {
    if (event.key === "Enter") {
      setInput3(inputcontent);
    }
  };

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
            <label className="text-xl text-[#003DA5] p-2 bg-white rounded-tl-lg rounded-tr-lg h-10 flex justify-start items-center">
              {inputcontent === 0 ? "Enfant" : input1}
            </label>{" "}
            <div className="w-full flex justify-end items-center relative">
              <input
                placeholder="Prénom"
                className=" border-gray-400 bg-gray-100 rounded-bl-lg rounded-br-lg p-4 w-full h-10"
                onChange={(event) => setInputcontent(event.target.value)}
                onKeyDown={handleInput1}
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
            <label className="text-xl text-[#003DA5] p-2 bg-white rounded-tl-lg rounded-tr-lg h-10 flex justify-start items-center">
              {inputcontent === 0 ? "FindBug" : input2}
            </label>{" "}
            <div className="w-full flex justify-end items-center relative">
              <input
                placeholder="Nom"
                className=" border-gray-400 bg-gray-100 rounded-bl-lg rounded-br-lg  p-4 w-full h-10"
                onChange={(event) => setInputcontent(event.target.value)}
                onKeyDown={handleInput2}
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
            <label className="text-xl text-[#003DA5] p-2 bg-white  rounded-tl-lg rounded-tr-lg h-10 flex justify-start items-center ">
              {inputcontent === 0 ? "Téléphone" : input3}
            </label>{" "}
            <div className="w-full flex justify-end items-center relative">
              <input
                placeholder="06-62-02-02-02"
                className=" border-gray-400 bg-gray-100 rounded-bl-lg rounded-br-lg p-4 w-full h-10"
                onChange={(event) => setInputcontent(event.target.value)}
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
  );
}

export default Settings;

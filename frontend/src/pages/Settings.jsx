import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import pencil from "../assets/pencil1.svg";
import check from "../assets/check.svg";
import upload from "../assets/uploadIcon.svg";
import profilepic from "../assets/profilepic.jpg";
import PreviousButton from "../components/PreviousButton";

// Banner to implement to this page,with a previous icon to add on the banner.

// In this page I render a Unordered List (ul) with an H2 and an Input element with an img logo inside.

// There is also an icon with an Onclick allowing for the user to select and display a profile picture.

function Settings() {
  const [defaultImage, setDefaultImage] = useState(profilepic);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("");

  const handleImageChange = (event) => {
    setUploadedImage(event.target.files[0]);
    setImage(event.target.files[0]);
    setFileName(event.target.files[0].name);
    setDefaultImage(event.target.files[0]);
  };

  const [input1, setInput1] = useState("Enfant");
  const [input2, setInput2] = useState("Findbug");
  const [input3, setInput3] = useState("Téléphone");
  const [input4, setInput4] = useState("");

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
  const handleInput4 = (event) => {
    if (event.key === "Enter") {
      setInput4(inputcontent);
    }
  };

  return (
    <div>
      <NavigationBar />
      <Link to="/dashboard">
        <PreviousButton />
      </Link>
      <div className="mt-4 flex justify-center flex-col">
        <h1 className="flex w-full justify-center items-center text-bold text-xl text-black mt-8 h-10 md:text-2xl text-center md:h-14 md:text-center ">
          Modifier mes informations
        </h1>
        <div className="flex justify-center">
          {!uploadedImage && (
            <img
              src={defaultImage}
              alt=""
              className="flex justify-center mt-8 w-36 h-36"
            />
          )}
          {uploadedImage && (
            <div className="w-64 h-64 rounded-full overflow-hidden mx-auto mt-6">
              <img src={URL.createObjectURL(image)} alt="Uploaded" />
            </div>
          )}
        </div>
      </div>
      <form>
        <ul className="flex-col mt-12">
          <li className=" mx-10 md:mx-48 mb-16 my-3 md:m-6 border shadow-xl rounded-lg text-center">
            {" "}
            <label className="text-xl text-white p-2 bg-[#003DA5] rounded-tl-lg rounded-tr-lg h-10 flex justify-start items-center">
              {" "}
              {inputcontent === 0 ? "...aucune image téléchargée" : input4}
              {fileName || "...aucune image téléchargée"}{" "}
            </label>{" "}
            <div className="w-full flex justify-end items-center relative  bg-gray-200 rounded-lg">
              <input
                placeholder="Image téléchargée..."
                className=" mx-5 my-5 border-gray-400 bg-gray-400  p-4 w-full h-10 "
              />
              <div>
                <label
                  htmlFor="image-upload"
                  className="border rounded-full ml-5 p-2 "
                >
                  <img
                    src={upload}
                    alt="Upload Icon"
                    className="absolute mr-2 w-6 h-6"
                  />
                </label>

                <input
                  type="file"
                  id="image-upload"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                  onKeyDown={handleInput4}
                />
              </div>
            </div>
          </li>
          <li className=" mx-10 md:mx-48 mb-16 my-3 md:m-6 border shadow-xl rounded-lg text-center">
            {" "}
            <label className="text-xl text-white p-2 bg-[#003DA5] rounded-tl-lg rounded-tr-lg h-10 flex justify-start items-center">
              {inputcontent === 0 ? "Enfant" : input1}
            </label>{" "}
            <div className="w-full flex justify-end items-center relative">
              <input
                placeholder="Prénom"
                className=" border-gray-400 bg-gray-200 rounded-lg p-4 w-full h-10"
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
            <label className="text-xl text-white p-2 bg-[#003DA5] rounded-tl-lg rounded-tr-lg h-10 flex justify-start items-center">
              {inputcontent === 0 ? "FindBug" : input2}
            </label>{" "}
            <div className="w-full flex justify-end items-center relative">
              <input
                placeholder="Nom"
                className=" border-gray-400 bg-gray-200 rounded-lg p-4 w-full h-10"
                onChange={(event) => setInputcontent(event.target.value)}
                onKeyDown={handleInput2}
              />
              <img
                src={check}
                className="absolute mr-2 w-6 h-6"
                alt="Search Icon"
              />{" "}
            </div>
          </li>

          <li className=" mx-10 md:mx-48 mb-16 my-3 md:m-6 border shadow-xl rounded-lg text-center">
            {" "}
            <label className="text-xl text-white p-2 bg-[#003DA5] rounded-tl-lg rounded-tr-lg h-10 flex justify-start items-center">
              {inputcontent === 0 ? "Téléphone" : input3}
            </label>{" "}
            <div className="w-full flex justify-end items-center relative">
              <input
                placeholder="06-62-02-02-02"
                className=" border-gray-400 bg-gray-200 rounded-lg p-4 w-full h-10"
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

import React, { useState } from "react";
import NavigationBar from "../components/NavigationBar";
import pencil from "../assets/pencil1.png";
import check from "../assets/check.png";
import upload from "../assets/uploadIcon.png";

// Banner to implement to this page,with a previous icon to add on the banner.

// In this page I render a Unordered List (ul) with an H2 and an Input element with an img logo inside.

// There is also an icon with an Onclick allowing for the user to select and display a profile picture.

function Settings() {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };
  return (
    <div>
      <NavigationBar />
      <div>
        {image && (
          <div className="w-64 h-64 rounded-full overflow-hidden mx-auto mt-6">
            <img src={URL.createObjectURL(image)} alt="Uploaded" />
          </div>
        )}
      </div>
      <ul className="flex-col">
        <li className=" mx-10 md:mx-96 mb-16 my-3 md:m-6 border shadow-xl rounded-lg text-center">
          {" "}
          <h2 className="text-xl text-white p-2 bg-[#003DA5] rounded-tl-lg rounded-tr-lg h-10 flex justify-start items-center">
            {" "}
            Enfant{" "}
          </h2>{" "}
          <div className="w-full flex justify-end items-center relative">
            <input
              placeholder="Prénom"
              className=" border-gray-400 bg-gray-200 rounded-lg p-4 w-full h-10"
            />
            <img
              src={pencil}
              className="absolute mr-2 w-6 h-6"
              alt="Search Icon"
            />{" "}
          </div>
        </li>
        <li className=" mx-10 md:mx-96 mb-16 my-3 md:m-6 border shadow-xl rounded-lg text-center">
          {" "}
          <h2 className="text-xl text-white p-2 bg-[#003DA5] rounded-tl-lg rounded-tr-lg h-10 flex justify-start items-center">
            {" "}
            FindBug{" "}
          </h2>{" "}
          <div className="w-full flex justify-end items-center relative">
            <input
              placeholder="Monvrai..."
              className=" border-gray-400 rounded-lg p-4 w-full h-10 bg-gray-200"
            />
            <img
              src={check}
              className="absolute mr-2 w-6 h-6"
              alt="Search Icon"
            />{" "}
          </div>
        </li>
        <li className=" mx-10 md:mx-96 mb-16 my-3 md:m-6 border shadow-xl rounded-lg text-center">
          {" "}
          <h2 className="text-xl text-white p-2 bg-[#003DA5] rounded-tl-lg rounded-tr-lg h-10 flex justify-start items-center">
            {" "}
            Téléphone{" "}
          </h2>{" "}
          <div className="w-full flex justify-end items-center relative">
            <input
              placeholder="06 02 03 04 05 06"
              className=" border-gray-400 rounded-lg p-4 w-full h-10 bg-gray-200"
            />
            <img
              src={pencil}
              className="absolute mr-2 w-6 h-6"
              alt="Search Icon"
            />{" "}
          </div>
        </li>
        <li className=" mx-10 md:mx-96 mb-16 my-3 md:m-6 border shadow-xl rounded-lg text-center">
          {" "}
          <h2 className="text-xl text-white p-2 bg-[#003DA5] rounded-tl-lg rounded-tr-lg h-10 flex justify-start items-center">
            {" "}
            ... aucune image téléchargée{" "}
          </h2>{" "}
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
                <img src={upload} alt="Upload Icon" className="w-6 h-6 mr-2" />
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
        </li>
      </ul>
    </div>
  );
}

export default Settings;

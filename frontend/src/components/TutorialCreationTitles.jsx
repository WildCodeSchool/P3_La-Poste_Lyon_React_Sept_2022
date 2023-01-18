import React from "react";

function TutorialCreationTitles({ linked, someText }) {
  return (
    <label
      htmlFor={linked}
      className="text-lg  md:mt-3 text-main-black font-semibold p-2 bg-white border rounded-tl-lg rounded-tr-lg h-10  w-full   flex justify-start items-center"
    >
      {someText}
    </label>
  );
}

export default TutorialCreationTitles;

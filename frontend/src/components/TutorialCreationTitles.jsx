import React from "react";

function TutorialCreationTitles({ linked, someText }) {
  return (
    <label
      htmlFor={linked}
      className="text-xl  md:mt-6 text-[#003DA5] p-2 bg-white border rounded-tl-lg rounded-tr-lg h-10  w-full   flex justify-start items-center"
    >
      {someText}
    </label>
  );
}

export default TutorialCreationTitles;

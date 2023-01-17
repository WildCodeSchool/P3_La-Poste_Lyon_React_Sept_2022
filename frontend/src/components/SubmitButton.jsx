import React from "react";

function SubmitButton({ stepText }) {
  return (
    <button
      type="submit"
      className="bg-[#003DA5] text-white m-3 py-1 px-4 rounded-lg shadow-lg md:h-14 md:w-44 md:text-lg hover:shadow hover:bg-[#FFC927] hover:text-black"
    >
      {stepText}
    </button>
  );
}

export default SubmitButton;

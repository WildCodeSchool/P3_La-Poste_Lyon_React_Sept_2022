import React from "react";

function SubmitButton({ stepText }) {
  return (
    <button
      type="submit"
      className="bg-gradient-to-r from-main-yellow to-second-yellow text-white font-semibold m-3 py-1 px-4 rounded-lg shadow md:h-10 md:w-44 md:text-lg hover:shadow hover:bg-main-blue hover:bg-gradient-to-r hover:from-blue-900 hover:to-main-blue hover:text-white"
    >
      {stepText}
    </button>
  );
}

export default SubmitButton;

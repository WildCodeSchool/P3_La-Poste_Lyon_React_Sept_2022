import React from "react";
import previousbtn from "../assets/previousbtn.svg";

function PreviousButton() {
  return (
    <button type="button" className=" absolute left-10 w-fit">
      <img src={previousbtn} className="w-8 h-8" alt="previous button" />
    </button>
  );
}

export default PreviousButton;

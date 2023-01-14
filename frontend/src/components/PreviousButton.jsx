import React from "react";
import { useNavigate } from "react-router-dom";
import previousbtn from "../assets/previousbtn.svg";

function PreviousButton() {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate(-1)}
      className=" absolute left-10 w-fit p-3"
    >
      <img src={previousbtn} className="w-8 h-8" alt="previous button" />
    </button>
  );
}

export default PreviousButton;

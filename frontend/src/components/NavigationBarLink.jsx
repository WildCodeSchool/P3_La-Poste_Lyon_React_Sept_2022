import React from "react";
import { useNavigate } from "react-router-dom";

function NavigationBarLink({ imgSrc, text, linkDestination, setOpen, open }) {
  const navigate = useNavigate();

  const navigateTo = (linkDestination) => {
    setOpen(!open);
    navigate(linkDestination);
  };

  return (
    <li className="text-[#333]  text-right pr-3 flex   w-full md:justify-start ">
      <button
        type="button"
        onClick={() => navigateTo(linkDestination)}
        className="flex justify-end items-center"
      >
        <img src={imgSrc} className="h-20 w-20 mx-6" alt={text} />
        <h3>{text}</h3>
      </button>
    </li>
  );
}

export default NavigationBarLink;

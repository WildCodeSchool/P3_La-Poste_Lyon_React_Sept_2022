import React from "react";
import { NavLink } from "react-router-dom";

function NavigationBarLink({ imgSrc, text, linkDestination }) {
  return (
    <li className="text-[#333]  text-right pr-3 flex   w-full md:justify-start ">
      <NavLink to={linkDestination} className="flex justify-end items-center">
        <img src={imgSrc} className="h-20 w-20 mx-6" alt={text} />
        <h3>{text}</h3>
      </NavLink>
    </li>
  );
}

export default NavigationBarLink;

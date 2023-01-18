import React from "react";
import AccessButton from "../components/AccessButton";

// Creation of an ul li list with a tittle and a list of tutorial names and the component AccessButton. (Still missing a previous icon button)

function Historic() {
  return (
    <div className="">
      <h1 className="text-2xl text-center mt-10 mb-20">
        Liste des tutoriels réalisés
      </h1>
      <ul className=" flex flex-col justify-center items-center ">
        <li className="md:text-center border shadow-xl rounded-lg text-center flex justify-between items-center w-3/5 md:w-2/5 mb-3">
          <p className="ml-6">La Wifi</p>
          <AccessButton />
        </li>
        <li className="border shadow-xl rounded-lg text-center flex justify-between items-center w-3/5 md:w-2/5 mb-3">
          <p className="ml-6">La Wifi</p> <AccessButton />
        </li>
        <li className="border shadow-xl rounded-lg text-center flex justify-between items-center w-3/5 md:w-2/5 mb-3">
          <p className="ml-6">La Wifi</p> <AccessButton />
        </li>
        <li className="border shadow-xl rounded-lg text-center flex justify-between items-center w-3/5 md:w-2/5 mb-3">
          <p className="ml-6">La Wifi</p> <AccessButton />
        </li>
      </ul>
    </div>
  );
}

export default Historic;

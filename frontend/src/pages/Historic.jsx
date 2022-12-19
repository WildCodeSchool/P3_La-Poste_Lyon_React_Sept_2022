import React from "react";
import AccessButton from "../components/AccessButton";
import NavigationBar from "../components/NavigationBar";

// Creation of an ul li list with a tittle and a list of tutorial names and the component AccessButton. (Still missing a previous icon button)

function Historic() {
  return (
    <div>
      <NavigationBar />
      <h1 className="text-2xl text-center mt-10 mb-20">
        Liste des tutoriels réalisés
      </h1>
      <ul className="md:justify-center md:items-center ">
        <li className="mx-10 md:mx-96 md:text-center mb-10 my-3 md:m-6 border shadow-xl rounded-lg text-center flex justify-between items-center md:w-2/5">
          <p className="ml-6">La Wifi</p>
          <AccessButton />
        </li>
        <li className="mx-10 md:mx-96 mb-10 my-3 md:m-6 border shadow-xl rounded-lg text-center flex justify-between items-center md:w-2/5 ">
          <p className="ml-6">La Wifi</p> <AccessButton />
        </li>
        <li className="mx-10 md:mx-96 mb-10 my-3 md:m-6 border shadow-xl rounded-lg text-center flex justify-between items-center md:w-2/5">
          <p className="ml-6">La Wifi</p> <AccessButton />
        </li>
        <li className="mx-10 md:mx-96 mb-10 my-3 md:m-6 border shadow-xl rounded-lg text-center flex justify-between items-center md:w-2/5">
          <p className="ml-6">La Wifi</p> <AccessButton />
        </li>
      </ul>
    </div>
  );
}

export default Historic;

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  CategoryContextProvider,
  CategoryContext,
} from "../contexts/CategoryContext";

import PreviousButton from "../components/PreviousButton";
import BannerProfile from "../components/BannerProfile";
import NavigationBar from "../components/NavigationBar";

function TutorialCategory() {
  /* categories are display by the context */

  const { categories } = useContext(CategoryContext);

  return (
    <CategoryContextProvider value={{ categories }}>
      <NavigationBar />
      <BannerProfile />
      <section className="m-6 flex flex-col items-center">
        <Link to="/dashboard">
          {/* This button will link to the Dashboard */}
          <PreviousButton />
        </Link>

        <h1 className="m-6 text-3xl">Catégories de tutoriels</h1>

        {/* I map the categoryList array to display every category */}
        <ul className="vw-3/5 grid grid-cols-1 md:grid-cols-4 place-content-center	">
          {categories?.map((category) => (
            /* We make a Link using the category.id to transmit it to the params. It will be recover on the TutorialList page to fetch the good category tutorial list. */
            <Link key={category.id} to={`/categories/${category.id}/tutorials`}>
              <li className="bg-white flex justify-center border rounded-2xl shadow-lg m-3 p-3 flex-col hover:scale-110 hover:duration-100 hover:bg-[#003da5] hover:text-white">
                <h2 className="text-lg text-center m-1">{category.name}</h2>
                <img
                  src={category.icon}
                  alt={category.categoryName}
                  className="h-24"
                />
                <div className="mt-6 mb-4 w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700">
                  {/* We used ternary to display the good tailwind class.This define the color of the progression bar - 3 states : start, complete, unstart by default */}
                  <div
                    className={`h-4 rounded-full  ${
                      category.progression === "start"
                        ? "bg-[#FFC100] w-1/2"
                        : category.progression === "complete"
                        ? "bg-[#04DDB4] w-100"
                        : "w-100"
                    }`}
                  />
                </div>
              </li>{" "}
            </Link>
          ))}
        </ul>
      </section>
    </CategoryContextProvider>
  );
}

export default TutorialCategory;

import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CategoryContext } from "../contexts/CategoryContext";
import CurrentUserContext from "../contexts/userContext";
import PreviousButton from "../components/PreviousButton";
import BannerProfile from "../components/BannerProfile";

const { VITE_BACKEND_URL } = import.meta.env;

function TutorialCategory() {
  const { categories } = useContext(CategoryContext);
  const { currentUser, token } = useContext(CurrentUserContext);

  const [progressionList, setProgressionList] = useState([]);

  const getProgressionList = () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    fetch(
      `${VITE_BACKEND_URL}/api/progressionTuto/${currentUser.id}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        setProgressionList(data);
      })
      .catch((error) => {
        console.warn("Error:", error);
      });
  };

  useEffect(() => {
    getProgressionList();
  }, []);

  /* I search the progression of each category and return an object with the name and progression */
  const allProgression = progressionList.map((categorie) => {
    const categoryName = categorie.category;
    const categorieResult = (
      (categorie.tuto_completed / categorie.total_tuto) *
      100
    ).toFixed(0);
    return { categoryName, categorieResult };
  });

  /* I want to pre-computed the categoryList */
  const categoryList = categories?.map((category) => {
    /* I get the categoryName */
    const categoryName = category.name;
    /* I search for each progression the corresponding category name */
    const categoryProgression = allProgression.find(
      (progression) => progression.categoryName === categoryName
    );
    /* I get the result as progression value */
    const progression = categoryProgression?.categorieResult;
    return { ...category, progression };
  });

  return (
    categories && (
      <>
        <BannerProfile />
        <section className="m-6 flex flex-col items-center">
          {/* This button will link to the Dashboard */}
          <PreviousButton />

          <h1 className="m-2 text-3xl font-bold text-main-blue text-center">
            Catégories de tutoriels
          </h1>

          {/* I map the categoryList array to display every category */}
          <ul className="vw-3/5 grid grid-cols-1 md:grid-cols-4 place-content-center	">
            {categoryList?.map((category) => (
              /* We make a Link using the category.id to transmit it to the params. It will be recover on the TutorialList page to fetch the good category tutorial list. */
              <Link
                key={category?.id}
                to={`/categories/${category?.id}/tutorials`}
              >
                <li className="bg-white flex justify-center border rounded-2xl shadow-lg m-3 p-3 flex-col hover:scale-110 hover:duration-100 hover:bg-[#003da5] hover:text-white">
                  <h2 className="text-lg text-center m-1">{category?.name}</h2>
                  {category?.icon ? (
                    <img
                      src={category?.icon}
                      alt={category?.categoryName}
                      className="h-24"
                    />
                  ) : (
                    ""
                  )}
                  <div className="mt-6 w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700">
                    {/* We used ternary to display the good tailwind class.This define the color of the progression bar - 3 states : start, complete, unstart by default */}
                    <div
                      className={`h-4 rounded-full  ${
                        category?.progression >= 100
                          ? "bg-[#48db6a]"
                          : category?.progression >= 1 &&
                            category?.progression < 100
                          ? "bg-[#ffcc24]"
                          : "bg-[#e0e0e0]"
                      }`}
                      style={{ width: `${category?.progression}%` }}
                    />
                  </div>
                </li>{" "}
              </Link>
            ))}
          </ul>
        </section>
      </>
    )
  );
}

export default TutorialCategory;

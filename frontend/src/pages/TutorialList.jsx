import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import BannerProfile from "../components/BannerProfile";
import AccessButton from "../components/AccessButton";
import PreviousButton from "../components/PreviousButton";

function TutorialList() {
  /* Using params to recover the tutorial category ID - It will be used to fetch the associate tutorial list */
  const { id } = useParams();

  /* Fetch the categorie with the useParams */
  const [categorie, setCategorie] = useState([]);
  useEffect(() => {
    const fetchCategorie = () => {
      fetch(`http://localhost:5000/categories/${id}`)
        .then((response) => response.json())
        .then((data) => setCategorie(data));
    };
    fetchCategorie();
  }, [id]);

  /* Fetch all the tutorials */
  const [tutorials, setTutorials] = useState([]);
  useEffect(() => {
    const fetchTutorials = () => {
      fetch(`http://localhost:5000/tutos`)
        .then((response) => response.json())
        .then((data) => setTutorials(data));
    };
    fetchTutorials();
  }, []);

  return (
    <>
      <BannerProfile />
      <section className="m-6">
        <PreviousButton />

        <h1 className="m-6 text-3xl  text-center">{categorie.name}</h1>

        {/* We display the tutorials with the filter of the cagtegory selected */}
        <ul className="w-3/5 grid grid-cols-1 md:grid-cols-2  m-auto ">
          {tutorials
            .filter((tutorial) => tutorial.category_id === categorie.id)
            .map((tutorial) => (
              <li
                className=" my-3 md:m-6 border shadow-xl rounded-lg text-center"
                key={tutorial.id}
              >
                <h2 className="text-xl p-2 text-[#003DA5] font-bold  bg-white shadow-md  rounded-tl-lg rounded-tr-lg h-20 flex justify-center items-center">
                  {tutorial.title}
                </h2>
                <p className="p-3 flex justify-center items-center h-24">
                  {tutorial.short_description}
                </p>{" "}
                {/* We will need to match the id  */}
                <Link to={`/categories/tutos/${id}`}>
                  <AccessButton />
                </Link>
                {/* This button in the future will link to the associate tutorial */}
              </li>
            ))}
        </ul>
      </section>
    </>
  );
}

export default TutorialList;

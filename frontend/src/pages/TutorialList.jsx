import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import { CategoryContext } from "../contexts/CategoryContext";
import BannerProfile from "../components/BannerProfile";
import AccessButton from "../components/AccessButton";
import PreviousButton from "../components/PreviousButton";

function TutorialList() {
  /* Using params to recover the tutorial category ID - It will be used to fetch the associate tutorial list */
  const { id } = useParams();

  /* Fetch all the tutorials of the category */
  const [tutorials, setTutorials] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/api/tutos/all`)
      .then((response) => response.json())
      .then((data) => {
        setTutorials(data);
      });
  }, []);

  /* Filtred tutorial by the good category corresponding to the id  */
  const filteredTutorials = tutorials?.filter(
    (tutorial) => tutorial?.category_id === parseInt(id, 10)
  );

  /* get the category name */
  const { categories } = useContext(CategoryContext);
  const categoryName = categories?.find(
    (category) => category?.id === parseInt(id, 10)
  )?.name;

  return (
    <>
      <BannerProfile />
      <section className="m-6">
        <PreviousButton />

        <h1 className="flex   justify-center items-center font-bold text-3xl text-main-blue rounded-xl h-10 text-center md:h-10 md:text-center">
          {categoryName}
        </h1>

        {/* We display the tutorials with the filter of the cagtegory selected */}
        <ul className="w-3/5 grid grid-cols-1 md:grid-cols-2  m-auto ">
          {filteredTutorials?.map((tutorial, index) => (
            <li
              className=" my-3 md:m-6 border shadow-xl rounded-lg text-center"
              /* eslint-disable react/no-array-index-key */
              key={index}
            >
              <h2 className="text-lg   md:text-2xl text-main-black  font-bold py-4 bg-white  rounded-tl-lg rounded-tr-lg h-17 flex justify-center items-center">
                {tutorial.title}
              </h2>
              <hr />
              <p className="p-3 flex justify-center items-center h-24">
                {tutorial.short_description.replace(/(<([^>]+)>)/gi, "")}
              </p>{" "}
              {/* make a button to go to the tutorial */}
              {/* Update status -> started  */}
              <Link to={`/api/tutos/${tutorial.id}`}>
                <AccessButton id={tutorial.id} />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default TutorialList;

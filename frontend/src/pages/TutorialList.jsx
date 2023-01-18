import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import { CategoryContext } from "../contexts/CategoryContext";
import { TutorialsContext } from "../contexts/TutorialsContext";
import CurrentUserContext from "../contexts/userContext";
import BannerProfile from "../components/BannerProfile";
import PreviousButton from "../components/PreviousButton";

function TutorialList() {
  const navigate = useNavigate();

  const { currentUser, token } = useContext(CurrentUserContext);
  /* Using params to recover the tutorial category ID - It will be used to fetch the associate tutorial list */
  const { id } = useParams();

  const { tutorials } = useContext(TutorialsContext);

  /* Filtred tutorial by the good category corresponding to the id  */
  const filteredTutorials = tutorials?.filter(
    (tutorial) => tutorial?.category_id === parseInt(id, 10)
  );

  /* get the category name */
  const { categories } = useContext(CategoryContext);
  const categoryName = categories?.find(
    (category) => category?.id === parseInt(id, 10)
  )?.name;

  const tutorialStarted = (tutorial) => {
    /* Fetch all status dans check it  */

    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      tuto_id: tutorial.id,
      user_id: currentUser.id,
    });

    const requestOptions = {
      method: "POST",
      redirect: "follow",
      headers: myHeaders,
      body,
    };

    fetch("http://localhost:5000/api/tutorialStatusStarted", requestOptions)
      .then((response) => response.text())
      .then((result) => console.warn(result))
      .catch((error) => console.error("error", error));

    navigate(`/api/tutos/${tutorial.id}`);

    /* set tutorials status  to the context */
  };

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
              <button
                type="button"
                onClick={() => tutorialStarted(tutorial)}
                className="bg-gradient-to-r from-main-yellow to-second-yellow text-white font-semibold m-3 py-1 px-4 rounded-lg shadow md:h-10 md:w-44 md:text-lg hover:shadow  hover:bg-gradient-to-r hover:from-blue-900 hover:to-main-blue hover:text-white"
              >
                Accéder
              </button>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default TutorialList;

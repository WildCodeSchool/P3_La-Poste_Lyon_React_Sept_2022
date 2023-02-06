import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import statusFInished from "../assets/tutorials-status/status-finished.svg";
import { CategoryContext } from "../contexts/CategoryContext";
import { TutorialsContext } from "../contexts/TutorialsContext";
import { TutorialStatusContext } from "../contexts/TutorialStatusContext";
import CurrentUserContext from "../contexts/userContext";
import BannerProfile from "../components/BannerProfile";
import PreviousButton from "../components/PreviousButton";
import filterIcon from "../assets/items/filter.svg";

function TutorialList() {
  const navigate = useNavigate();

  const { currentUser, token } = useContext(CurrentUserContext);
  const { setTutorialStatus, getTutorialStatus } = useContext(
    TutorialStatusContext
  );

  useEffect(() => {
    getTutorialStatus();
  }, []);

  const status = [
    { step: "Commencé", tutorialStatus: "started" },
    { step: "Terminé", tutorialStatus: "finished" },
    { step: "À faire", tutorialStatus: "todo" },
  ];
  const { tutorialStatus } = useContext(TutorialStatusContext);

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
    /* Check if the tutorialStatus match with the tutorial id */
    const tutorialStatusStarted = tutorialStatus?.find(
      (status) => status?.tuto_id === tutorial.id
    );

    /* Then check the condition, if started just navigate, if not post the started status */
    if (tutorialStatusStarted) {
      navigate(`/api/tutos/${tutorial.id}`);
    } else {
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
        .then(() => {})
        .catch((error) => console.error("error", error));

      /* update TutorialStatus  */
      setTutorialStatus((previousStatus) => [
        ...previousStatus,
        { tuto_id: tutorial.id, user_id: currentUser.id },
      ]);
      navigate(`/api/tutos/${tutorial.id}`);
    }
  };

  /* Filter for tutorials */
  const [filter, setFilter] = useState("");
  const handleFilter = (e) => setFilter(e.target.value);

  return (
    filteredTutorials && (
      <>
        <BannerProfile />

        <PreviousButton />

        <h1 className="flex justify-center  items-center font-bold text-xl md:text-3xl text-main-blue rounded-xl h-10 text-center md:h-10 md:text-center pt-3">
          {categoryName}
        </h1>

        {/* Filters */}
        <div className="w-full  flex justify-end md:pr-[10%]">
          <label className="flex mr-3 cursor-pointer">
            <img
              src={filterIcon}
              alt="Filtrer ses tutoriels"
              className="w-6 h-6"
            />
            <select onChange={handleFilter} className="cursor-pointer w-3">
              <option value="">Tous</option>
              {status.map((status, index) => (
                <option key={index} value={status.tutorialStatus}>
                  {status.step}
                </option>
              ))}
            </select>
          </label>
        </div>

        {/* We display the tutorials with the filter of the cagtegory selected */}
        <ul className="w-4/5 md:w-2/5 grid grid-cols-1   md:grid-cols-2 m-auto ">
          {/* We will filter with the select value and match with the status values */}
          {filteredTutorials
            .filter((tutorial) => {
              if (filter === "") {
                return tutorial;
              }
              if (filter === "started") {
                return (
                  tutorialStatus?.find(
                    (status) => status?.tuto_id === tutorial.id
                  )?.status === "started"
                );
              }
              if (filter === "finished") {
                return (
                  tutorialStatus?.find(
                    (status) => status?.tuto_id === tutorial.id
                  )?.status === "finished"
                );
              }
              return !tutorialStatus?.find(
                (status) => status?.tuto_id === tutorial.id
              );
            })
            .map((tutorial, index) => (
              <li
                className=" h-72 relative my-3 md:m-6 border shadow-xl rounded-lg text-center"
                key={index}
              >
                {/* Icon when status is finished */}
                {tutorialStatus?.find(
                  (status) => status?.tuto_id === tutorial.id
                )?.status === "finished" && (
                  <div className="absolute top-[-10px] right-[-10px] rounded-full  flex justify-center items-center">
                    <img
                      src={statusFInished}
                      alt="finished"
                      className="h-10 w-10"
                    />
                  </div>
                )}
                <h2 className="text-lg md:text-2xl text-main-black  font-bold py-4 bg-white  rounded-tl-lg rounded-tr-lg h-17 flex justify-center items-center">
                  {tutorial.title}
                </h2>
                <hr />
                <p className="p-3 text-base flex justify-center items-center h-24">
                  {tutorial.short_description.replace(/(<([^>]+)>)/gi, "")}
                </p>{" "}
                {/* make a button to go to the tutorial */}
                {/* Update status -> started  */}
                <button
                  type="button"
                  onClick={() => tutorialStarted(tutorial)}
                  className=" bottom-0 bg-gradient-to-r from-main-yellow to-second-yellow text-white font-semibold m-3 py-1 px-4 rounded-lg shadow md:h-10 md:w-44 md:text-lg hover:shadow  hover:bg-gradient-to-r hover:from-blue-900 hover:to-main-blue hover:text-white"
                >
                  {/* Match tutorialsStatus id with the id of the tutorial */}

                  {tutorialStatus?.find(
                    (status) => status?.tuto_id === tutorial.id
                  )?.status === "finished" && "Revoir"}

                  {tutorialStatus?.find(
                    (status) => status?.tuto_id === tutorial.id
                  )?.status === "started" && "Reprendre"}
                  {/* If default value */}
                  {tutorialStatus?.find(
                    (status) => status?.tuto_id === tutorial.id
                  )?.status === undefined && "Commencer"}
                </button>
              </li>
            ))}
        </ul>
      </>
    )
  );
}

export default TutorialList;

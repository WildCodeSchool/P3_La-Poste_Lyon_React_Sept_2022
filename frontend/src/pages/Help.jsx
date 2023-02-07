import React, { useState, useContext, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import PreviousButton from "../components/PreviousButton";
import { RewardsContext } from "../contexts/RewardsContext";
import CurrentUserContext from "../contexts/userContext";
import TutoSearchbarAide from "../components/TutoSearchbarAide";
import HelpModale from "../components/HelpModale";
import Footer from "../components/Footer";

function Help() {
  const notifyProblem = () => toast("Chargement...");

  const { VITE_BACKEND_URL } = import.meta.env;
  const { currentUser, token } = useContext(CurrentUserContext);
  const { rewards, setRewards } = useContext(RewardsContext);

  const checkRewardHelped = rewards.some((reward) => reward.label === "Helped");

  const notifyBadge = () =>
    toast.success(
      "Vous remportez un badge ! Il n'y a pas de mal à demander de l'aide 😊 !"
    );
  /* Fetch Badge if user didn't have */
  const getRewardHelped = () => {
    if (checkRewardHelped === false) {
      fetch(`${VITE_BACKEND_URL}/api/gainReward`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          user_id: currentUser.id,
          badge_id: 3,
        }),
      })
        .then((response) => response.text())
        .then((data) => {
          setRewards([...rewards, data]);
          notifyBadge();
        })
        .catch((err) => notifyProblem(err));
    }
  };

  useEffect(() => {
    getRewardHelped();
  }, []);

  const [open, setOpen] = useState(false);
  console.warn(open);

  /* Close menu when click outside */
  /* const concernedElement = document.getElementById("click-menu");
    document.addEventListener("mousedown", (event) => {
      if (concernedElement === null) {
        return;
      }
      if (!concernedElement.contains(event.target)) {
        setOpen(false);
      }
    }); */

  return (
    <div className="Help relative flex ">
      <Toaster position="top-center" reverseOrder />
      <PreviousButton />
      <div className="w-full mt-20">
        <div className="mt-7 mb-7 flex flex-col items-center">
          <img
            src="./src/assets/help/undraw_questions_re_1fy7.svg"
            alt="personnages se posant des questions"
            className="hidden md:block lg:block h-60"
          />

          <h1 className="flex justify-center items-center text-bold text-white rounded-xl shadow-lg bg-main-yellow w-2/3 h-10 text-xl md:text-3xl text-center md:w-1/4 md:h-14 md:text-center m-3 md:mb-10">
            Besoin d'aide?
          </h1>
          {open && (
            <div
              className={`w-full absolute top-20 ${open ? "block" : "hiden"}`}
            >
              <HelpModale />
            </div>
          )}
          <div className="mt-7 mb-7 flex flex-col items-center text-lg md:text-xl">
            <p className="text-center mb-3">
              Peut-être que votre solution est déjà disponible parmis nos
              tutoriels :
            </p>
          </div>
          <div className="w-full">
            <TutoSearchbarAide />
          </div>
          <p>Aucun tutoriel ne peux vous aider?</p>
          <button
            className="bg-gradient-to-r from-main-yellow to-second-yellow text-white font-semibold m-3 py-1 px-4 rounded-lg shadow md:h-10 md:w-44 md:text-lg hover:shadow  hover:bg-gradient-to-r hover:from-blue-900 hover:to-main-blue hover:text-white"
            type="button"
            onClick={() => setOpen(!open)}
          >
            {open ? "Fermer" : "Contactez-nous"}
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Help;

import React, { createContext, useState, useEffect, useContext } from "react";
import { toast, Toaster } from "react-hot-toast";
import CurrentUserContext from "./userContext";

const { VITE_BACKEND_URL } = import.meta.env;

const TutorialStatusContext = createContext();
export { TutorialStatusContext };

export function TutorialStatusContextProvider({ children }) {
  const notifyProblem = () =>
    toast(
      "There was a problem fetching the tutos statut. Please try again later."
    );
  /* fetch tutorialStatus by id from localhost */
  const [tutorialStatus, setTutorialStatus] = useState([]);

  const { currentUser } = useContext(CurrentUserContext);

  const getTutorialStatus = () => {
    fetch(`${VITE_BACKEND_URL}/api/tutorialStatus/${currentUser.id}`)
      .then((response) => response.json())
      .then((data) => {
        setTutorialStatus(data);
      })
      .catch((err) => {
        notifyProblem(err);
      });
  };

  useEffect(() => {
    getTutorialStatus();
  }, [tutorialStatus.length]);

  return (
    <TutorialStatusContext.Provider
      value={{ tutorialStatus, setTutorialStatus, getTutorialStatus }}
    >
      <Toaster position="top-center" reverseOrder />
      {children}
    </TutorialStatusContext.Provider>
  );
}

export const useTutorialStatusContext = () => useContext(TutorialStatusContext);

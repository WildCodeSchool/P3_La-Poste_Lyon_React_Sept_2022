import React, { createContext, useState, useEffect, useContext } from "react";
import CurrentUserContext from "./userContext";

const { VITE_BACKEND_URL } = import.meta.env;

const TutorialStatusContext = createContext();
export { TutorialStatusContext };

export function TutorialStatusContextProvider({ children }) {
  /* fetch tutorialStatus by id from localhost */
  const [tutorialStatus, setTutorialStatus] = useState([]);

  const { currentUser } = useContext(CurrentUserContext);

  const getTutorialStatus = () => {
    fetch(`${VITE_BACKEND_URL}/api/tutorialStatus/${currentUser.id}`)
      .then((response) => response.json())
      .then((data) => {
        setTutorialStatus(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    getTutorialStatus();
  }, [tutorialStatus.length]);

  return (
    <TutorialStatusContext.Provider
      value={{ tutorialStatus, setTutorialStatus, getTutorialStatus }}
    >
      {children}
    </TutorialStatusContext.Provider>
  );
}

export const useTutorialStatusContext = () => useContext(TutorialStatusContext);

import React, { createContext, useState, useEffect, useContext } from "react";
import CurrentUserContext from "./userContext";

const TutorialStatusContext = createContext();
export { TutorialStatusContext };

export function TutorialStatusContextProvider({ children }) {
  /* fetch tutorialStatus by id from localhost */
  const [tutorialStatus, setTutorialStatus] = useState([]);

  const { currentUser } = useContext(CurrentUserContext);

  const getTutorialStatus = () => {
    fetch(`http://localhost:5000/api/tutorialStatus/${currentUser.id}`)
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
  }, []);

  return (
    <TutorialStatusContext.Provider
      value={{ tutorialStatus, setTutorialStatus }}
    >
      {children}
    </TutorialStatusContext.Provider>
  );
}

export const useTutorialStatusContext = () => useContext(TutorialStatusContext);

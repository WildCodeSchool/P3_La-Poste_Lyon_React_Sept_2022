import React, { createContext, useState, useEffect, useContext } from "react";
import { toast, Toaster } from "react-hot-toast";

const { VITE_BACKEND_URL } = import.meta.env;

const TutorialsContext = createContext();
export { TutorialsContext };

export function TutorialsContextProvider({ children }) {
  const notifyProblem = () =>
    toast("There was a problem fetching the rewards. Please try again later.");
  /* fetch tutorials from localhost */
  const [tutorials, setTutorials] = useState([]);

  useEffect(() => {
    const getTutorials = () => {
      fetch(`${VITE_BACKEND_URL}/api/tutos/all`)
        .then((response) => response.json())
        .then((data) => {
          setTutorials(data);
        })
        .catch(() => {
          notifyProblem();
        });
    };
    getTutorials();
  }, [tutorials.length]);

  return (
    <TutorialsContext.Provider value={{ tutorials, setTutorials }}>
      <Toaster position="top-center" reverseOrder />
      {children}
    </TutorialsContext.Provider>
  );
}

export const useTutorialsContext = () => useContext(TutorialsContext);

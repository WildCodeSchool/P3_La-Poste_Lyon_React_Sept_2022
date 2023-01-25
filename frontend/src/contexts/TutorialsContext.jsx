import React, { createContext, useState, useEffect } from "react";

const { VITE_BACKEND_URL } = import.meta.env;

const TutorialsContext = createContext();
export { TutorialsContext };

export function TutorialsContextProvider({ children }) {
  /* fetch tutorials from localhost */
  const [tutorials, setTutorials] = useState([]);

  useEffect(() => {
    const getTutorials = () => {
      fetch(`${VITE_BACKEND_URL}/api/tutos/all`)
        .then((response) => response.json())
        .then((data) => {
          setTutorials(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };
    getTutorials();
  }, [tutorials.length]);

  return (
    <TutorialsContext.Provider value={{ tutorials, setTutorials }}>
      {children}
    </TutorialsContext.Provider>
  );
}

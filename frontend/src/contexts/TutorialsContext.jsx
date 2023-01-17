import React, { createContext, useState, useEffect } from "react";

const TutorialsContext = createContext();
export { TutorialsContext };

export function TutorialsContextProvider({ children }) {
  /* fetch tutorials from localhost */
  const [tutorials, setTutorials] = useState([]);

  useEffect(() => {
    const getTutorials = () => {
      fetch("http://localhost:5000/api/tutos/all")
        .then((response) => response.json())
        .then((data) => {
          setTutorials(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };
    getTutorials();
  }, []);

  return (
    <TutorialsContext.Provider value={{ tutorials }}>
      {children}
    </TutorialsContext.Provider>
  );
}

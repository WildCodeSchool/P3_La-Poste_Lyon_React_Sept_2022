import React, { createContext, useState, useEffect } from "react";

const CategoryContext = createContext();
export { CategoryContext };

export function CategoryContextProvider({ children }) {
  /* fetch categories from localhost */
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = () => {
      fetch("http://localhost:5000/categories")
        .then((response) => response.json())
        .then((data) => {
          setCategories(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };
    getCategories();
  }, []);

  return (
    <CategoryContext.Provider value={{ categories }}>
      {children}
    </CategoryContext.Provider>
  );
}

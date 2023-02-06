import React, { createContext, useState, useEffect } from "react";

const { VITE_BACKEND_URL } = import.meta.env;

const CategoryContext = createContext();
export { CategoryContext };

export function CategoryContextProvider({ children }) {
  /* fetch categories from localhost */
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = () => {
      fetch(`${VITE_BACKEND_URL}/api/categories`)
        .then((response) => response.json())
        .then((data) => {
          setCategories(data);
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

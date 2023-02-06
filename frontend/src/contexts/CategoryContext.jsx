import React, { createContext, useState, useEffect } from "react";
import { toast, Toaster } from "react-hot-toast";

const { VITE_BACKEND_URL } = import.meta.env;

const CategoryContext = createContext();
export { CategoryContext };

export function CategoryContextProvider({ children }) {
  const notifyProblem = () =>
    toast(
      "There was a problem fetching the categories. Please try again later."
    );

  /* fetch categories from localhost */
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = () => {
      fetch(`${VITE_BACKEND_URL}/api/categories`)
        .then((response) => response.json())
        .then((data) => {
          setCategories(data);
        })
        .catch(() => {
          notifyProblem();
        });
    };
    getCategories();
  }, []);

  return (
    <CategoryContext.Provider value={{ categories }}>
      <Toaster position="top-center" reverseOrder />

      {children}
    </CategoryContext.Provider>
  );
}

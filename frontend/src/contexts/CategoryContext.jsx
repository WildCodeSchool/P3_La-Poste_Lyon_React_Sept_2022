import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
} from "react";

const CategoryContext = createContext();

export default CategoryContext;

export function CategoryContextProvider({ children }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const response = await fetch("http://localhost:5000/categories");
      const data = await response.json();
      setCategories(data);
      // I want to catch the error
      if (response.status !== 200) {
        throw Error(response.message);
      }
    };
    getCategories();
  }, []);
  /* put the setter in a useMemo to escape the re-render eslint rules // but the rules not seems to care */
  const categoriesList = useMemo(
    () => ({
      categories,
      setCategories,
    }),
    [categories, setCategories]
  );

  return (
    /* eslint-disable-next-line react/jsx-no-constructed-context-values  */
    <CategoryContext.Provider value={{ categoriesList }}>
      {children}
    </CategoryContext.Provider>
  );
}

export const useCategoryContext = () => useContext(CategoryContext);

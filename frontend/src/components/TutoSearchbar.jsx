import React, { useEffect, useState, useContext } from "react";
import { CategoryContext } from "../contexts/CategoryContext";

function TutoSearchbar() {
  /* Fetch all the tutorials */
  const [tutorials, setTutorials] = useState([]);

  const fetchTutorials = () => {
    fetch(`http://localhost:5000/api/tutos/all`)
      .then((response) => response.json())
      .then((data) => setTutorials(data));
  };
  useEffect(() => {
    fetchTutorials();
  }, []);

  /* State the search value, then make it lowercase and normalize accent */
  const [search, setSearch] = useState("");
  const normalizeSearch = search
    ?.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f+.]/g, "");

  /* Filtred tutorials precomputed */
  const filtredTutorials = tutorials?.filter(
    (tutorial) =>
      tutorial.title
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .includes(normalizeSearch) || tutorial.category_name === search
  );
  const { categories } = useContext(CategoryContext);

  return (
    <div>
      <input
        type="text"
        id="tutoriel"
        name="tutoriels"
        placeholder="Recherchez une catégorie de tu"
        className=" border-gray-400 rounded-lg mb-5 p-4 w-4/6 md:w-2/6 h-10  bg-gray-200"
        onChange={(e) => setSearch(e.target.value)}
      />

      <section className="antialiased bg-gray-100 text-gray-600 w-screen px-4">
        <div className="flex flex-col justify-center bg-gray-200 py-3 w-full h-full">
          <div className="w-5/6  mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-main-blue">Tutoriels</h2>
            </header>
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className="table-auto w-full">
                  <tbody className="text-sm divide-y divide-gray-100">
                    {tutorials.length === 0 ? (
                      <div className="mx-0 text-1xl">
                        Aucun tutoriel n'a été trouvé
                      </div>
                    ) : (
                      filtredTutorials?.map((tutorial) => (
                        <tr key={tutorial.id} className="hover:bg-gray-100">
                          <td className="p-2 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="font-medium text-gray-800">
                                {tutorial.title}
                              </div>
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="flex flex-col justify-center ">
                              <img
                                className="rounded-full"
                                src={
                                  categories?.find(
                                    (category) =>
                                      category?.id === tutorial?.category_id
                                  )?.icon
                                }
                                width="40"
                                height="40"
                                alt={tutorial.title}
                              />{" "}
                              {
                                categories?.find(
                                  (category) =>
                                    category?.id === tutorial?.category_id
                                )?.name
                              }
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TutoSearchbar;

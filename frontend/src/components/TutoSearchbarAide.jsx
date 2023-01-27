import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CategoryContext } from "../contexts/CategoryContext";

function TutoSearchbar() {
  /* Fetch all the tutorials */
  const [tutorials, setTutorials] = useState([]);
  const navigate = useNavigate();

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
    <div className="flex flex-col items-center">
      <section className="antialiased w-4/6 text-gray-600 px-4">
        <div className="justify-center py-3 w-full h-full">
          <div className="md:w-2/6 mx-auto">
            <div className="flex justify-center">
              <input
                type="text"
                id="tutoriel"
                name="tutoriels"
                placeholder="Recherchez un tutoriel"
                className="border-2 border-gray-400 rounded-lg mb-5 p-4 w-6/6 md:w-4/6 h-10 text-center"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            {search.length !== 0 ? (
              <div className="flex justify-center">
                <div className="md:w-5/6">
                  <div className="p-3">
                    <div className="overflow-x-auto">
                      <table className="table-auto w-full">
                        <thead className="hidden md:text-xs md:font-semibold md:uppercase md:text-gray-400 md:bg-gray-50">
                          <tr>
                            <th className="p-2 whitespace-nowrap">
                              <div className="font-semibold text-left">
                                Titre
                              </div>
                            </th>
                            <th className="p-2 whitespace-nowrap">
                              <div className="font-semibold text-left">
                                Catégorie
                              </div>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-gray-100">
                          {filtredTutorials.length === 0 ? (
                            <div className="mx-0 text-1xl">
                              Aucun tutoriel n'a été trouvé
                            </div>
                          ) : (
                            filtredTutorials?.slice(0, 4).map((tutorial) => (
                              <tr
                                key={tutorial?.id}
                                onClick={() =>
                                  navigate(`/api/tutos/${tutorial.id}`)
                                }
                                className="hover:bg-gray-200"
                              >
                                <td className="p-2 whitespace-nowrap">
                                  <div className="flex items-center">
                                    <div className="font-medium text-gray-800">
                                      {/* Replace the end of the title */}
                                      {tutorial.title
                                        .split(" ")
                                        .slice(0, 10)
                                        .join(" ")
                                        .replace(/.$/, "...")}
                                    </div>
                                  </div>
                                </td>
                                <td className="hidden md:p-2 md:whitespace-nowrap">
                                  <div className="flex flex-col justify-center ">
                                    <img
                                      className="rounded-full"
                                      src={
                                        categories?.find(
                                          (category) =>
                                            category?.id ===
                                            tutorial?.category_id
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
            ) : null}
          </div>
        </div>
      </section>
    </div>
  );
}

export default TutoSearchbar;

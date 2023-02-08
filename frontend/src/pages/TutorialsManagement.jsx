import React, { useEffect, useState, useContext } from "react";
import { toast, Toaster } from "react-hot-toast";
import CurrentUserContext from "../contexts/userContext";
import { CategoryContext } from "../contexts/CategoryContext";
import BannerProfile from "../components/BannerProfile";
import PreviousButton from "../components/PreviousButton";
import DeleteModaleTutorial from "../components/DeleteModaleTutorial";
import trash from "../assets/items/trash.svg";

const { VITE_BACKEND_URL } = import.meta.env;

function TutorialsManagement() {
  const notify = () => toast.success("Le tutoriel a bien été supprimé");

  /* Token */
  const { token } = useContext(CurrentUserContext);

  /* Fetch all the tutorials */
  const [tutorials, setTutorials] = useState([]);

  const fetchTutorials = () => {
    fetch(`${VITE_BACKEND_URL}/api/tutos/all`)
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
  const filtredTutorials = tutorials?.filter((tutorial) =>
    tutorial.title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .includes(normalizeSearch)
  );

  /* Match the category id to the category name */
  const { categories } = useContext(CategoryContext);

  /* Delete tutorial */
  const [confirmDeleteModale, setConfirmDeleteModale] = useState(false);
  const [id, setId] = useState();

  const handleDeleteTutorial = async () => {
    /* delete all steppers */

    fetch(`${VITE_BACKEND_URL}/api/steppers/tuto_id/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.text())
      .then((data) => {
        if (data.error) {
          toast.error(data.error);
        }
      });

    /* delete the tutorial  */
    fetch(`${VITE_BACKEND_URL}/api/tutos/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.text())
      .then((data) => {
        if (data.error) {
          toast.error(data.error);
        } else {
          setTutorials(tutorials.filter((tutorial) => tutorial.id !== id));
        }
      });

    setConfirmDeleteModale(false);
    await fetchTutorials();
    setTimeout(() => {
      notify();
    }, 500);
  };

  return (
    <section>
      <Toaster />
      <BannerProfile />
      <div className="pb-2">
        <PreviousButton />
      </div>
      <h2 className="m-6 font-bold text-main-blue text-xl md:text-3xl  text-center ">
        {" "}
        Gestion des tutoriels
      </h2>
      <form className="w-full flex flex-col justify-center items-center ">
        <input
          type="search"
          id="tutoriels"
          name="tutoriels"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Recherchez un tutoriel"
          className=" border-gray-400 rounded-lg mb-5 p-4 w-4/6 md:w-2/6 h-10  bg-gray-200"
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
                    <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                      <tr>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-left">Titre</div>
                        </th>
                        <th className="hidden lg:block p-2 whitespace-nowrap">
                          <div className="font-semibold text-left">
                            Catégorie
                          </div>
                        </th>
                        <th className=" p-2 whitespace-nowrap">
                          <div className="font-semibold text-left">
                            Créé le :{" "}
                          </div>
                        </th>

                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-center">
                            Gestion
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-sm divide-y divide-gray-100">
                      {filtredTutorials.length === 0 ? (
                        <tr className="mx-0 text-1xl">
                          <td>Aucun tutoriel n'a été trouvé</td>
                        </tr>
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
                            <td className="hidden lg:block p-2 whitespace-nowrap">
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
                            <td className=" p-2 whitespace-nowrap">
                              <div className="text-left ">
                                {tutorial.creationDate
                                  .slice(0, 10)
                                  .split("-")
                                  .reverse()
                                  .join("/")}
                              </div>
                            </td>

                            <td className="p-2 whitespace-nowrap">
                              <div className="text-lg text-center">
                                {" "}
                                <button
                                  onClick={() => {
                                    setId(tutorial.id);
                                    setConfirmDeleteModale(!false);
                                  }}
                                  type="button"
                                  className=" focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                >
                                  <img src={trash} alt="trash for users" />
                                </button>
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

        <DeleteModaleTutorial
          handleDeleteTutorial={handleDeleteTutorial}
          setConfirmDeleteModale={setConfirmDeleteModale}
          confirmDeleteModale={confirmDeleteModale}
        />
      </form>
    </section>
  );
}

export default TutorialsManagement;

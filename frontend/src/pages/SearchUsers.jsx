import React, { useState, useEffect, useContext } from "react";
import { toast, Toaster } from "react-hot-toast";
import DeleteModaleUser from "../components/DeleteModaleUser";
import CurrentUserContext from "../contexts/userContext";
import BannerProfile from "../components/BannerProfile";
import PreviousButton from "../components/PreviousButton";
import trash from "../assets/items/trash.svg";

const { VITE_BACKEND_URL } = import.meta.env;

function SearchUsers() {
  const notifyProblem = () => toast("Chargement...");

  const notify = () => toast.success("L'utilisateur a bien été supprimé");

  /* Get bearer token from userContext to get permission about delete user */
  const { token } = useContext(CurrentUserContext);

  /* Fetch the users of the application */
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    fetch(`${VITE_BACKEND_URL}/api/users`)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => notifyProblem(err));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  /* We remove admin from the user management */
  const noAdmin = users?.filter((user) => user.admin !== 1);

  /* State the search value, then make it lowercase and normalize accent */
  const [search, setSearch] = useState("");
  const normalizeSearch = search
    ?.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f+.]/g, "");

  /* Filtred user precomputed */
  const filtredUser = noAdmin?.filter(
    (user) =>
      user.firstname
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .includes(normalizeSearch) ||
      user.lastname
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .includes(normalizeSearch)
  );

  /* Delete user */
  const [confirmDeleteModale, setConfirmDeleteModale] = useState(false);
  const [id, setId] = useState();

  const deleteStatus = () => {
    fetch(`${VITE_BACKEND_URL}/api/deleteStatus/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  };
  const deleteReward = () => {
    fetch(`${VITE_BACKEND_URL}/api/deleteReward/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  };

  const deleteUser = () => {
    fetch(`${VITE_BACKEND_URL}/api/users/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    setConfirmDeleteModale(!confirmDeleteModale);
    setUsers(users.filter((user) => user.id !== id));
    setTimeout(() => {
      notify();
    }, 500);
  };

  const handleDeleteUser = async () => {
    deleteStatus();
    deleteReward();
    deleteUser();
  };

  return (
    <section>
      <Toaster />
      <BannerProfile />

      <PreviousButton />

      <h1 className="m-6 p-3 text-3xl font-bold text-main-blue text-center">
        Gestion des utilisateurs
      </h1>
      <form className="w-full flex flex-col justify-center items-center ">
        <input
          type="text"
          id="users"
          name="users"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Recherchez un utilisateur"
          className=" border-gray-400 rounded-lg mb-5 p-4 w-4/6 md:w-2/6 h-10  bg-gray-200"
        />

        <section className="antialiased bg-gray-100 text-gray-600 w-screen px-4">
          <div className="flex flex-col justify-center bg-gray-200 py-3 w-full h-full">
            <div className="w-5/6  mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
              <header className="px-5 py-4 border-b border-gray-100">
                <h2 className="m-6 font-bold text-main-blue text-3xl text-center md:text-3xl">
                  Utilisateurs
                </h2>
              </header>
              <div className="p-3">
                <div className="overflow-x-auto">
                  <table className="table-auto w-full">
                    <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                      <tr>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-left">
                            Nom - Prénom
                          </div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-left">Email</div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-left">
                            Téléphone
                          </div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-left">Niveau</div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-center">
                            Gestion
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-sm divide-y divide-gray-100">
                      {filtredUser.length === 0 ? (
                        <div className="mx-0 text-1xl">
                          Aucun utilisateur n'a été trouvé
                        </div>
                      ) : (
                        filtredUser?.map((user) => (
                          <tr key={user.id} className="hover:bg-gray-100">
                            <td className="p-2 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                  <img
                                    className="rounded-full"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp8HE9nJ03LBSlHivqF46xHQ640tNgo-9nnFrUMANrL3tf4lOHdDeNzjLZurWNUf3oIt8&usqp=CAU"
                                    width="40"
                                    height="40"
                                    alt={user.firstname}
                                  />
                                </div>
                                <div className="font-medium text-gray-800">
                                  {user.lastname} {user.firstname}
                                </div>
                              </div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              <div className="text-left">{user.email}</div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              <div className="text-left ">{user.phone}</div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              <div className="mx-5">{user.level}</div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              <div className="text-lg text-center">
                                {" "}
                                <button
                                  onClick={() => {
                                    setId(user.id);
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

        <DeleteModaleUser
          fetchUsers={fetchUsers}
          handleDeleteUser={handleDeleteUser}
          setConfirmDeleteModale={setConfirmDeleteModale}
          confirmDeleteModale={confirmDeleteModale}
        />
      </form>
    </section>
  );
}

export default SearchUsers;

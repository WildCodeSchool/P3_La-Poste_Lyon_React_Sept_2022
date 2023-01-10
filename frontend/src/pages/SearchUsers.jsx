import React, { useState } from "react";
import BannerProfile from "../components/BannerProfile";
import PreviousButton from "../components/PreviousButton";

function SearchUsers() {
  const users = [
    {
      firstname: "Chloé",
      lastname: "Bidau",
      mail: "jesuischloe@gmail.com",
      phoneNumber: "0601020304",
    },
    {
      firstname: "Morgan",
      lastname: "Mezaache",
      mail: "jesuismorgan@gmail.com",
      phoneNumber: "0602030405",
    },
    {
      firstname: "Arnaud",
      lastname: "Champetier",
      mail: "jesuisarnaud@gmail.com",
      phoneNumber: "0603040506",
    },
    {
      firstname: "Quentin",
      lastname: "Ferrari",
      mail: "jesuisquentin@gmail.com",
      phoneNumber: "0604050607",
    },
    {
      firstname: "Marion",
      lastname: "Lalonde",
      mail: "jesuismarion@gmail.com",
      phoneNumber: "0607080910",
    },
  ];

  /* State the search value, then make it lowercase and normalize accent */
  const [search, setSearch] = useState("");
  const normalizeSearch = search
    ?.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f+.]/g, "");

  /* Filtred user precomputed */
  const filtredUser = users?.filter(
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

  /* State to display more informations */
  const [showDetails, setShowDetails] = useState(false);
  const [SelectedUser, setSelectedUser] = useState("");

  const handleSelectedUser = (index) => {
    setSelectedUser(index);
    setShowDetails(!showDetails);
  };

  /* Delete user */

  const handleUser = () => {
    /*  alert("Supprimé !"); */
  };

  return (
    <section>
      <BannerProfile />
      <PreviousButton />
      <h2 className="m-6 text-xl text-center md:text-3xl">
        {" "}
        Gestion des utilisateurs{" "}
      </h2>
      <form className="w-full flex flex-col justify-center items-center ">
        <input
          type="text"
          id="users"
          name="users"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Recherchez un utilisateur"
          className=" border-gray-400 rounded mb-5 p-4 w-4/6 md:w-2/6 h-10  bg-gray-200"
        />

        <ul className="p-0 m-0">
          {filtredUser.length === 0 ? (
            <li className="mx-0 text-1xl">Aucun utilisateur n'a été trouvé</li>
          ) : (
            filtredUser?.map((user, index) => (
              <li className=" mx-0 p-6  rounded shadow-lg items-center relative grid grid-cols-2 gap-4 w-full m-2 border">
                <div className="text-1xl w-78 md:w-96">
                  {user.firstname} {user.lastname}{" "}
                  <button
                    type="button"
                    className=""
                    onClick={() => handleSelectedUser(index)}
                  >
                    {showDetails ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 19 19"
                        strokeWidth="1.5"
                        stroke="#003DA5"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 12h-15"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 19 19"
                        strokeWidth="1.5"
                        stroke="#003DA5"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v12m6-6H6"
                        />
                      </svg>
                    )}
                  </button>
                </div>

                <button
                  type="button"
                  className="w-20 absolute right-0 "
                  onClick={handleUser}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="red"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>

                <div
                  className={
                    SelectedUser === index && showDetails
                      ? " relative w-full col-start-1 col-end-3 grid items-center justify-center"
                      : "hidden"
                  }
                >
                  <ul className="">
                    <li className="text-1xl font-bold ">Prénom : </li>
                    {user.firstname}{" "}
                    <li className="font-bold text-1xl">Nom : </li>{" "}
                    {user.lastname}{" "}
                    <li className="font-bold text-1xl">E-mail : </li>{" "}
                    {user.mail}{" "}
                    <li className="font-bold  text-1xl">Téléphone : </li>{" "}
                    {user.phoneNumber}
                  </ul>
                </div>
              </li>
            ))
          )}
        </ul>
      </form>
    </section>
  );
}

export default SearchUsers;

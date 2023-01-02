import React, { useState } from "react";
import { Link } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import NavigationBar from "../components/NavigationBar";
import PreviousButton from "../components/PreviousButton";

function TutorialCreation() {
  /* Using array before include DB */
  const categoryList = [
    {
      id: "1",
      categoryName: "Se connecter",

      progression: "complete",
      tutoriels: [
        { title: "Qu'est-ce que la wifi" },
        { title: "Le réseau" },
        { title: "Paramétrer votre connexion" },
        { title: "Les réseaux publics" },
        { title: "Les réseaux privés" },
      ],
    },
    {
      id: "2",
      categoryName: "Vie courante",

      progression: "unstart",
      tutoriels: [
        { title: "Qu'est-ce que la wifi" },
        { title: "Le réseau" },
        { title: "Paramétrer votre connexion" },
        { title: "Les réseaux publics" },
        { title: "Les réseaux privés" },
      ],
    },
    {
      id: "3",
      categoryName: "Utiliser un ordinateur",

      progression: "start",
      tutoriels: [
        { title: "Qu'est-ce que la wifi" },
        { title: "Le réseau" },
        { title: "Paramétrer votre connexion" },
        { title: "Les réseaux publics" },
        { title: "Les réseaux privés" },
      ],
    },
    {
      id: "4",
      categoryName: "Se faire aider",

      progression: "complete",
      tutoriels: [
        { title: "Qu'est-ce que la wifi" },
        { title: "Le réseau" },
        { title: "Paramétrer votre connexion" },
        { title: "Les réseaux publics" },
        { title: "Les réseaux privés" },
      ],
    },
    {
      id: "5",
      categoryName: "Aller plus loin",

      progression: "start",
      tutoriels: [
        { title: "Qu'est-ce que la wifi" },
        { title: "Le réseau" },
        { title: "Paramétrer votre connexion" },
        { title: "Les réseaux publics" },
        { title: "Les réseaux privés" },
      ],
    },
    {
      id: "6",
      categoryName: "Mails",

      progression: "unstart",
      tutoriels: [
        { title: "Qu'est-ce que la wifi" },
        { title: "Le réseau" },
        { title: "Paramétrer votre connexion" },
        { title: "Les réseaux publics" },
        { title: "Les réseaux privés" },
      ],
    },
    {
      id: "7",
      categoryName: "Medias",

      progression: "start",
      tutoriels: [
        { title: "Qu'est-ce que la wifi" },
        { title: "Le réseau" },
        { title: "Paramétrer votre connexion" },
        { title: "Les réseaux publics" },
        { title: "Les réseaux privés" },
      ],
    },
    {
      id: "8",
      categoryName: "Messages",

      progression: "start",
      tutoriels: [
        { title: "Qu'est-ce que la wifi" },
        { title: "Le réseau" },
        { title: "Paramétrer votre connexion" },
        { title: "Les réseaux publics" },
        { title: "Les réseaux privés" },
      ],
    },
    {
      id: "9",
      categoryName: "Se déplacer",

      progression: "unstart",
      tutoriels: [
        { title: "Qu'est-ce que la wifi" },
        { title: "Le réseau" },
        { title: "Paramétrer votre connexion" },
        { title: "Les réseaux publics" },
        { title: "Les réseaux privés" },
      ],
    },
    {
      id: "10",
      categoryName: "Naviguer sur internet",
      progression: "unstart",
      tutoriels: [
        { title: "Qu'est-ce que la wifi" },
        { title: "Le réseau" },
        { title: "Paramétrer votre connexion" },
        { title: "Les réseaux publics" },
        { title: "Les réseaux privés" },
      ],
    },
    {
      id: "11",
      categoryName: "Sécurité",
      progression: "complete",
      tutoriels: [
        { title: "Qu'est-ce que la wifi" },
        { title: "Le réseau" },
        { title: "Paramétrer votre connexion" },
        { title: "Les réseaux publics" },
        { title: "Les réseaux privés" },
      ],
    },
    {
      id: "12",
      categoryName: "Utiliser son téléphone",
      progression: "start",
      tutoriels: [
        { title: "Qu'est-ce que la wifi" },
        { title: "Le réseau" },
        { title: "Paramétrer votre connexion" },
        { title: "Les réseaux publics" },
        { title: "Les réseaux privés" },
      ],
    },
  ];

  const SubmitForm = () => {
    /*  
    We will display it with the DB 
    console.log(confirmTitle, selected, value); */
  };

  /* Make change about the title */
  const [title, setTitle] = useState("Titre du tutoriel");
  const [confirmTitle, setConfirmTitle] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setTitle(title);
  };
  const handleConfirmTitle = () => {
    setConfirmTitle(title);
  };

  /* Select  -- display selected with db -- category  and set it */
  const [/* selected */ setSelected] = useState("");
  const handleSelectChange = (event) => {
    setSelected(event.target.value);
  };

  /* Rich editor text value */
  const [value, setValue] = useState("");
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      [{ align: [] }],
      ["bold", "underline", "italic"],
      [{ color: [] }, { background: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
    ],
  };

  /* Show editor text value in modal */
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <NavigationBar />
      <section
        className="m-6 flex flex-col items-center"
        onSubmit={handleSubmit}
      >
        <Link to="/">
          {/* This button will link to the Dashboard */}
          <PreviousButton />
        </Link>
        <h1 className="m-6 text-xl md:text-3xl">Création de tutoriel</h1>

        {/* Tutorial title creation */}

        <form className=" mb-6 md:w-3/5 w-full  flex-col justify-end items-center relative">
          {" "}
          <label
            htmlFor="title"
            className=" mt-6 text-xl  text-[#003DA5] p-2 bg-white  border rounded-tl-lg rounded-tr-lg h-10  w-full flex justify-start items-center"
          >
            {confirmTitle === "" ? "Titre du tutoriel" : confirmTitle}
          </label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Insérez un titre"
            className=" border-gray-400  mb-5 p-4 w-full h-10 rounded-bl-lg rounded-br-lg bg-gray-200"
          />
          <button
            className=" p-2 absolute right-5"
            type="submit"
            onClick={handleConfirmTitle}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
              />
            </svg>
          </button>
          <label
            htmlFor="tutorial-category"
            className="text-xl mt-6 text-[#003DA5] p-2 bg-white border rounded-tl-lg rounded-tr-lg h-10  w-full   flex justify-start items-center"
          >
            Catégorie du tutoriel
          </label>
          <select
            id="tutorial-category"
            className="w-full h-10 bg-gray-200 rounded-bl-lg rounded-br-lg px-3 mb-6"
            onChange={handleSelectChange}
          >
            <option selected>Choisissez une catégorie</option>
            {/* map every category to make a list of options */}
            {categoryList?.map((category) => (
              <option value={category.categoryName}>
                {category.categoryName}
              </option>
            ))}
          </select>
          {/* Tutorial category creation */}
          <article className=" mt-6 w-full " style={{ height: "45vh" }}>
            <ReactQuill
              theme="snow"
              value={value}
              onChange={setValue}
              modules={modules}
              style={{ height: "30vh" }}
            />
          </article>
          <article className="flex justify-between">
            {/* Show button */}
            <button
              type="button"
              className="bg-[#003DA5] hover:shadow hover:bg-[#FFC927] hover:text-black  text-white m-1 py-1 px-1 rounded-lg shadow-lg h-10 w-36 md:text-lg"
              data-modal-toggle="extralarge-modal"
              onClick={() => setShowModal(true)}
            >
              Aperçu
            </button>

            {/* Validate button -> This button need to send to the DB all selected values */}
            <Link to="/profil">
              <button
                type="button"
                onClick={SubmitForm}
                className="bg-[#003DA5] hover:shadow hover:bg-[#FFC927] hover:text-black text-white  m-1 py-1 px-1 rounded-lg shadow-lg h-10 w-36 md:text-lg"
              >
                Valider
              </button>
            </Link>
          </article>
        </form>

        {/* Modal for the preview button */}

        {showModal ? (
          <>
            <div className="h-full justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto  h-screen my-6 mx-auto max-w-3xl">
                {/* content */}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/* header */}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <div className="flex w-full justify-between">
                      {" "}
                      <h3 className="text-3xl font-semibold">Aperçu</h3>
                      <button type="button" onClick={() => setShowModal(false)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.8}
                          stroke="currentColor"
                          className="w-8 h-8"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                    <button
                      type="button"
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none hover:shadow hover:bg-[#FFC927] hover:text-black"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/* body */}
                  <div className="relative  p-6 flex-auto">
                    <ReactQuill value={value} readOnly theme="bubble" />
                  </div>
                  {/* footer */}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-[#003DA5] background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150  hover:text-[#FFC927]"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black" />
          </>
        ) : null}
      </section>
    </>
  );
}

export default TutorialCreation;

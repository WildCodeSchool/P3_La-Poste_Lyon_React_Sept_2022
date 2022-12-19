import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactQuill from "react-quill";
import PreviousButton from "../components/PreviousButton";
import "react-quill/dist/quill.snow.css";

function TutorialCreation() {
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

  return (
    <section className="m-6 flex flex-col items-center" onSubmit={handleSubmit}>
      <Link to="/">
        {/* This button will link to the Dashboard */}
        <PreviousButton />
      </Link>
      <h1 className="m-6 text-xl md:text-3xl">Création de tutoriels</h1>

      <h2 className="text-xl text-white p-2 bg-[#003DA5] rounded-tl-lg rounded-tr-lg h-10  w-3/5 flex justify-start items-center">
        {confirmTitle === "" ? "Titre du tutoriel" : confirmTitle}
      </h2>

      <form className="w-3/5 flex justify-end items-center relative">
        {" "}
        <input
          type="text"
          id="title"
          name="title"
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Insérez un titre"
          className=" border-gray-400  p-4 w-full h-10 bg-gray-200"
        />
        <button
          className="h-10  bg-gray-200 p-2"
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
      </form>

      <article> Catégories du tutoriels</article>
      <article>
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          modules={modules}
        />
      </article>
      <article>
        Aperçu :
        <ReactQuill value={value} readOnly theme="bubble" />
      </article>
    </section>
  );
}

export default TutorialCreation;

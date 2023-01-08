import React, { useState, useContext } from "react";
import ReactQuill, { Quill } from "react-quill";
import { CategoryContext } from "../contexts/CategoryContext";

export default function MandatoryInformations({
  handleAllStepsContent,
  currentStep,
  setCurrentStep,
  mandatoryInformations,
  setMandatoryInformations,
}) {
  /* I want to import categories from the context useCategoryContext and display the list of category */
  const { categories } = useContext(CategoryContext);

  /* Quill import, size and modules */
  const Size = Quill.import("attributors/style/size");
  Size.whitelist = ["18px", "20px", "22px", "24px", "26px", "28px"];
  Quill.register(Size, true);
  const modules = {
    toolbar: [
      [
        {
          size: ["18px", "20px", "22px", "24px", "26px", "28px"],
        },
      ],

      [{ font: [] }],
      [{ align: [] }],
      ["bold", "underline", "italic"],
      [
        {
          color: [
            "#003DA5",
            "#FFC927",
            "#04DDB4",
            "#374151",
            "#F6402F",
            "black",
            "white",
          ],
        },
        { background: [] },
      ],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
    ],
  };

  /* TITLE */
  /* Make change about the title, we use the async function to get all the state */
  const [title, setTitle] = useState("Titre du tutoriel");
  const handleTitleChange = async function handleTitleonChange(event) {
    setTitle(event.target.value);
    setMandatoryInformations({
      ...mandatoryInformations,
      title: event.target.value,
    });
  };

  /* CATEGORY */
  const [selected, setSelected] = useState([]);
  const handleSelectChange = (event) => {
    setSelected(event.target.value);
    setMandatoryInformations({
      ...mandatoryInformations,
      category: event.target.value,
    });
  };

  /* SHORT DESCRIPTION */
  const [shortDescription, setShortDescription] = useState("");
  const handleShortDescriptionChange = (value) => {
    setShortDescription(value);
    setMandatoryInformations({
      ...mandatoryInformations,
      shortDescription: value,
    });
  };

  /* INTRODUCTION  */
  const [introductionText, setIntroductionText] = useState("");
  const handleIntroductionText = (value) => {
    setIntroductionText(value);
    setMandatoryInformations({
      ...mandatoryInformations,
      introduction_text: value,
    });
  };

  /* Submit all the content of mandatory information to the main state */
  const handleMandatoryInformations =
    async function handleMandatoryInformationsSubmit(event) {
      event.preventDefault();
      setMandatoryInformations({
        ...mandatoryInformations,
        title,
        shortDescription,
      });

      /* handleAllStepsContent is the main component state that will take values of all steps */
      handleAllStepsContent({
        ...mandatoryInformations,
      });
      /* Go to nextStep */
      setCurrentStep(currentStep + 1);
    };

  return (
    <div className="relative m-0 p-0 ">
      <form
        onSubmit={handleMandatoryInformations}
        className=" my-6 p-6 border  w-full rounded-xl shadow-xl flex-col justify-end items-center relative"
      >
        <label
          htmlFor="title"
          className=" mt-6 text-xl  text-[#003DA5] p-2 bg-white  border rounded-tl-lg rounded-tr-lg h-10  w-full flex justify-start items-center"
        >
          {title === "" ? "Titre du tutoriel" : title}
        </label>
        <input
          type="text"
          id="title"
          name="title"
          required
          onChange={handleTitleChange}
          placeholder="Insérez un titre"
          className=" border-gray-400  mb-5 p-4 w-full h-10 rounded-bl-lg rounded-br-lg bg-gray-200"
        />
        <button className=" p-2 absolute right-5" type="button">
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
          className="text-xl mt-6 text-[#003DA5] p-2 bg-white border rounded-tl-lg rounded-tr-lg h-10  w-full   flex justify-start items-center "
        >
          Catégorie du tutoriel
        </label>
        <select
          name="tutorial-category"
          id="tutorial-category"
          className="w-full h-10 bg-gray-200 rounded-bl-lg rounded-br-lg px-3 mb-6 "
          onChange={handleSelectChange}
          required
        >
          <option value="">Choisissez une catégorie</option>
          {/* map every category to make a list of options */}
          {categories?.map((category) => (
            <option
              key={category.id}
              value={category.name}
              className={`${selected ? "text-[#003DA5]" : ""}}`}
            >
              {category.name}
            </option>
          ))}
        </select>
        {/* Short Description */}
        <h3 className="text-xl mt-6 text-[#003DA5] p-2 bg-white border rounded-tl-lg rounded-tr-lg h-10  w-full   flex justify-start items-center">
          Description du tutoriel
        </h3>
        <article className=" relative w-full z-40" style={{ height: "15vh" }}>
          <ReactQuill
            htmlFor="short-description"
            className="absolute z-40"
            theme="snow"
            value={shortDescription}
            onChange={handleShortDescriptionChange}
            modules={modules}
            style={{ height: "10vh" }}
          />
          <input
            value={shortDescription}
            onChange={handleShortDescriptionChange}
            required
            className="absolute top-0 z-0 text-transparent  p-6 h-full w-full"
          />
        </article>{" "}
        {/* Introduction Text  */}
        <h3 className="text-xl  md:mt-6 text-[#003DA5] p-2 bg-white border rounded-tl-lg rounded-tr-lg h-10  w-full   flex justify-start items-center">
          Texte d'introduction du tutoriel
        </h3>
        <article className=" w-full relative " style={{ height: "15vh" }}>
          <ReactQuill
            htmlFor="short-description"
            className=""
            theme="snow"
            value={introductionText}
            onChange={handleIntroductionText}
            modules={modules}
            style={{ height: "10vh" }}
          />
          <input
            value={introductionText}
            onChange={handleIntroductionText}
            required
            className="absolute top-0 z-[-10] text-transparent  p-6 h-full w-full"
          />
        </article>
        <section className=" m-2 flex justify-center">
          {currentStep === 0 && (
            <button
              type="submit"
              className="bg-[#003DA5] text-white m-3 py-1 px-4 rounded-lg shadow-lg md:h-14 md:w-44 md:text-lg hover:shadow hover:bg-[#FFC927] hover:text-black"
            >
              Suivant
            </button>
          )}
        </section>
      </form>
    </div>
  );
}

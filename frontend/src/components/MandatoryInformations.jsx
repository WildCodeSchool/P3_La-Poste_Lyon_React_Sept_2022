import React, { useState, useContext } from "react";
import ReactQuill from "react-quill";
import quillConfig from "../config/quillConfig";
import { CategoryContext } from "../contexts/CategoryContext";
import TutorialCreationTitles from "./TutorialCreationTitles";
import TutorialCreationQuillArea from "./TutorialCreationQuillArea";

export default function MandatoryInformations({
  handleAllStepsContent,
  currentStep,
  setCurrentStep,
  mandatoryInformations,
  setMandatoryInformations,
}) {
  /* I want to import categories from the context useCategoryContext and display the list of category */
  const { categories } = useContext(CategoryContext);

  /* Title */
  const [title, setTitle] = useState("Titre du tutoriel");
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    setMandatoryInformations({
      ...mandatoryInformations,
      title: event.target.value,
    });
  };

  /* Category */
  const [selected, setSelected] = useState([]);
  const handleCategoryChange = (event) => {
    setSelected(event.target.value);
    setMandatoryInformations({
      ...mandatoryInformations,
      category_id: event.target.value,
    });
  };

  /* SHORT DESCRIPTION */
  const [shortDescription, setShortDescription] = useState("");
  const handleShortDescriptionChange = (value) => {
    setShortDescription(value);
    setMandatoryInformations({
      ...mandatoryInformations,
      short_description: value,
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
    <div className="relative w-full m-0 p-0 ">
      <form
        onSubmit={handleMandatoryInformations}
        className=" my-6 p-6 border  w-full rounded-xl shadow-xl flex-col justify-end items-center relative"
      >
        {/* Title */}
        <TutorialCreationTitles
          someText={title === "" ? "Titre du tutoriel" : title}
          linked="title"
        />
        <div className="flex  relative">
          <input
            type="text"
            id="title"
            name="title"
            minLength={6}
            maxLength={120}
            required
            pattern="^[a-zA-Z0-9áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ?;, -]+$"
            title="(6-50 caractères) Sont autorisés les lettres et caractères spéciaux : ? ; - "
            onChange={handleTitleChange}
            placeholder="Insérez un titre (6-120 caractères max)"
            className=" border-gray-400  mb-5 p-4 w-full h-10 rounded-bl-lg rounded-br-lg bg-gray-200"
          />
        </div>
        {/* Category */}
        <TutorialCreationTitles
          someText="Catégorie du tutoriel"
          linked="tutorial-category"
        />
        <select
          name="tutorial-category"
          id="tutorial-category"
          className="w-full h-10 bg-gray-200 rounded-bl-lg rounded-br-lg px-3 mb-6 "
          onChange={handleCategoryChange}
          required
        >
          <option value="">Choisissez une catégorie</option>
          {/* map every category to make a list of options */}
          {categories?.map((category) => (
            <option
              key={category.id}
              value={category.id}
              className={`${selected ? "text-[#003DA5]" : ""}}`}
            >
              {category.name}
            </option>
          ))}
        </select>

        {/* Short Description */}
        <TutorialCreationTitles
          someText="Description du tutoriel"
          linked="tutorial-category"
        />
        <TutorialCreationQuillArea
          value={shortDescription}
          onChangeValue={handleShortDescriptionChange}
          lenghtmax="200"
          lenghtmin="20"
          placeholder="Insérez un texte de description - (20 caractères minimum)"
          style={{ height: "10vh", width: "41vw", minWidth: "100%" }}
        />

        {/* Introduction Text  */}
        <div className="lg:hidden h-20" />
        <TutorialCreationTitles
          someText=" Texte d'introduction du tutoriel"
          linked="tutorial-category"
        />

        {/* Problem with z-index cannot use component */}
        <article
          className=" lg:w-full   lg:relative "
          style={{ height: "15vh" }}
        >
          <ReactQuill
            htmlFor="short-description"
            className="w-[80vw] md:w-[41vw]"
            theme="snow"
            maxLength="200"
            minLength="20"
            placeholder="Insérez un texte d'introduction - (20 caractères minimum)"
            value={introductionText}
            onChange={handleIntroductionText}
            modules={quillConfig.modules}
            formats={quillConfig.formats}
            style={{ height: "10vh" }}
          />
          <input
            value={introductionText}
            onChange={handleIntroductionText}
            maxLength="200"
            minLength="20"
            required
            className="lg:absolute lg:top-0 z-[-10] text-transparent  lg:p-6 lg:h-full lg:w-full"
          />
        </article>
        <div className="lg:hidden h-20" />
        <section className=" m-2 flex justify-center">
          {currentStep === 0 && (
            <button
              type="submit"
              className={` ${
                introductionText.length > 50 && shortDescription.length > 50
                  ? "bg-gradient-to-r hover:bg-main-blue hover:bg-gradient-to-r hover:from-blue-900 hover:to-main-blue from-main-yellow to-second-yellow hover:text-white "
                  : "pointer-events-none  bg-gradient-to-r bg-gray-500"
              }  text-white font-semibold m-3 py-1 px-4 rounded-lg shadow md:h-10 md:w-44 md:text-lg hover:shadow `}
            >
              Suivant
            </button>
          )}
        </section>
      </form>
    </div>
  );
}

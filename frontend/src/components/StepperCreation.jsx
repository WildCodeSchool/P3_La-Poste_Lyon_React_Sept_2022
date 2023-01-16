import React, { useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import TutorialCreationTitles from "./TutorialCreationTitles";
import addstep from "../assets/addstep.svg";
import removestep from "../assets/removestep.svg";

export default function StepperCreation({
  handleAllStepsContent,
  currentStep,
  setCurrentStep,
  handlePreviousStep,
  mandatoryInformations,
}) {
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

  /* State for the inputs array */
  const [inputs, setInputs] = useState([{ content: "", position: "" }]);

  /* State for the data of all inputs */
  const [data, setData] = useState([]);

  /* Add a new input */
  const handleAddInput = () => {
    setInputs([...inputs, { content: "", position: "" }]);
  };

  /* It will take the last index and remove it with splice. The value will be spliced or poped if the data is already submit */
  const handleRemoveInput = (index) => {
    const newInputs = [...inputs];
    newInputs.splice(index, 1);
    setInputs(newInputs);
    /* remove last data */
    const newData = [...data];
    newData.splice(index, 1);
    newData.pop();
    setData(newData);
  };

  /* Take the index to update the good input, make a new array that take all inputs value and add the new input content value */
  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index].content = value;
    setInputs(newInputs);

    /* It will update the content individually with the index */
    const newData = [...data];
    newData[index] = { ...newData[index], content: value };
    setData(newData);
  };

  /* Get the position change and make the value as a number type */
  const handlePositionChange = (index, event) => {
    const newInputs = [...inputs];
    newInputs[index].position = Number(event.target.value);
    setInputs(newInputs);

    const newData = [...data];
    newData[index] = {
      ...newData[index],
      position: Number(event.target.value),
    };
    setData(newData);
  };

  /* Submit the entire steps array */
  const handleSubmit = (event) => {
    event.preventDefault();
    setData([...data, { ...data }]);

    /* I want to add all the data in handleAllStepsContent */
    handleAllStepsContent(mandatoryInformations, data);

    /* Go to nextStep */
    setCurrentStep(currentStep + 1);
  };

  return (
    <div className="relative m-0 p-0 ">
      <form
        onSubmit={handleSubmit}
        className="my-6 p-6  border w-[45vw] rounded-xl shadow-xl flex-col justify-end items-center relative"
      >
        {inputs.map((input, index) => (
          /* eslint-disable-next-line react/no-array-index-key */
          <div key={index} className="flex flex-col  my-3 h-64 w-full">
            {/* Position  */}
            <section className="flex   w-36">
              <label
                className="text-xl font-medium  text-[#003DA5] p-2"
                htmlFor={`position-${index}`}
              >
                Étape n°
              </label>
              <input
                className="h-full  text-center text-[#003DA5] text-lg"
                type="number"
                min="1"
                max="10"
                placeholder="0"
                id={`position-${input.position}`}
                required
                name="position"
                value={input.position}
                onChange={(event) => handlePositionChange(index, event)}
              />
            </section>

            {/* Content */}
            <section className="flex flex-col   w-full ">
              <TutorialCreationTitles someText="Contenu de l'étape" />

              <article
                className=" relative w-full z-40"
                style={{ height: "15vh" }}
              >
                <ReactQuill
                  htmlFor="short-description"
                  className="absolute  w-full"
                  theme="snow"
                  value={input.content}
                  onChange={(event) => handleInputChange(index, event)}
                  modules={modules}
                  style={{ height: "110px" }}
                />
                <input
                  id={`content-${index}`}
                  required
                  name="content"
                  className=" text-transparent absolute w-full h-40 z-[-10] "
                  value={input.content}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </article>
            </section>
          </div>
        ))}

        <section className="flex w-full  justify-end">
          {/* Adding Input Button */}
          <button type="button" onClick={handleAddInput}>
            <img
              src={addstep}
              alt="add step"
              className="w-8 h-8 transition ease-in-out delay-100  hover:scale-110 duration-300"
            />
          </button>

          {/* Remove Input Button */}
          <button type="button" onClick={handleRemoveInput}>
            <img
              src={removestep}
              alt="remove step"
              className="w-8 h-8 transition ease-in-out delay-100  hover:scale-110 duration-300"
            />
          </button>
        </section>
        {/* Submit and Previous Button */}
        {currentStep === 1 && (
          <section className="flex justify-center">
            <button
              type="button"
              className="bg-[#003DA5] text-white m-3 py-1 px-4 rounded-lg shadow-lg md:h-14 md:w-44 md:text-lg hover:shadow hover:bg-[#FFC927] hover:text-black"
              onClick={handlePreviousStep}
            >
              Précédent
            </button>
            <button
              type="submit"
              className="bg-[#003DA5] text-white m-3 py-1 px-4 rounded-lg shadow-lg md:h-14 md:w-44 md:text-lg hover:shadow hover:bg-[#FFC927] hover:text-black"
            >
              Suivant
            </button>
          </section>
        )}
      </form>
    </div>
  );
}
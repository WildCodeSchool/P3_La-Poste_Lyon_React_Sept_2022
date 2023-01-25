import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import Stepper from "../components/Stepper";
import BannerProfile from "../components/BannerProfile";
import PreviousButton from "../components/PreviousButton";

function Tutorial() {
  const { id } = useParams();

  const { VITE_BACKEND_URL } = import.meta.env;

  const [tutorial, setTutorial] = useState([]);
  useEffect(() => {
    const fetchTutorial = () => {
      fetch(`${VITE_BACKEND_URL}/api/tutos/${id}`)
        .then((response) => response.json())
        .then((data) => setTutorial(data))
        .catch((error) => {
          console.error("Error:", error);
        });
    };
    fetchTutorial();
  }, [id]);

  /* Fetch the stepper and compare it to the id of the tutorial */
  const [steppers, setSteppers] = useState([]);
  useEffect(() => {
    const fetchSteppers = () => {
      fetch(`${VITE_BACKEND_URL}/api/steppers/${id}`)
        .then((response) => response.json())
        .then((data) => setSteppers(data))
        .catch((error) => {
          console.error("Error:", error);
        });
    };
    fetchSteppers();
  }, []);

  return (
    <>
      <BannerProfile />
      <div className="p-6 md:p-2">
        {/* This button will link to the Dashboard */}
        <PreviousButton />
      </div>
      <section className="md:m-[10vh] m-1 flex flex-col bg-white shadow-lg  border rounded-lg">
        {/* Tutoriel Name */}
        <h1
          key={tutorial.id}
          className="my-6 text-2xl md:text-3xl text-[#003DA5] text-center "
        >
          {tutorial?.title}
        </h1>

        {/* Introduction Text */}
        <div>
          <ReactQuill
            value={tutorial?.introduction_text}
            readOnly
            theme="bubble"
          />
        </div>
        {/* Stepper */}
        <Stepper steppers={steppers} />
      </section>
    </>
  );
}

export default Tutorial;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import Stepper from "../components/Stepper";
import BannerProfile from "../components/BannerProfile";
import PreviousButton from "../components/PreviousButton";

function Tutorial() {
  const { id } = useParams();

  const [tutorial, setTutorial] = useState([]);
  useEffect(() => {
    const fetchTutorial = () => {
      fetch(`http://localhost:5000/api/tutos/${id}`)
        .then((response) => response.json())
        .then((data) => setTutorial(data));
    };
    fetchTutorial();
  }, [id]);

  return (
    <>
      <BannerProfile />
      <div className="p-6 md:p-2">
        {/* This button will link to the Dashboard */}
        <PreviousButton />
      </div>
      <section className="md:m-[10vh] m-1 flex flex-col bg-white shadow-lg  border rounded-lg">
        {/* Tutoriel Name */}
        <h1 className="my-6 text-2xl md:text-3xl text-[#003DA5] text-center ">
          {tutorial.title}
        </h1>

        {/* Introduction Text */}
        <div>
          <ReactQuill
            value={tutorial.introduction_text}
            readOnly
            theme="bubble"
          />
        </div>
        {/* Stepper */}
        <Stepper />
      </section>
    </>
  );
}

export default Tutorial;

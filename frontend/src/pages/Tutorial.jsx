import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import Stepper from "../components/Stepper";
import BannerProfile from "../components/BannerProfile";
import PreviousButton from "../components/PreviousButton";
import { useCurrentUserContext } from "../contexts/userContext";

const { VITE_BACKEND_URL } = import.meta.env;

function Tutorial() {
  const notifyProblem = () => toast("Chargement...");

  const { id } = useParams();
  const { token } = useCurrentUserContext();

  const [tutorial, setTutorial] = useState([]);
  useEffect(() => {
    const fetchTutorial = () => {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      fetch(`${VITE_BACKEND_URL}/api/tutos/${id}`, requestOptions)
        .then((response) => response.json())
        .then((data) => setTutorial(data))
        .catch((err) => notifyProblem(err));
    };
    fetchTutorial();
  }, [id]);

  /* Fetch the stepper and compare it to the id of the tutorial */
  const [steppers, setSteppers] = useState([]);
  useEffect(() => {
    const fetchSteppers = () => {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      fetch(`${VITE_BACKEND_URL}/api/steppers/${id}`, requestOptions)
        .then((response) => response.json())
        .then((data) => setSteppers(data))
        .catch((err) => notifyProblem(err));
    };
    fetchSteppers();
  }, []);

  return (
    <>
      <Toaster position="top-center" reverseOrder />

      <BannerProfile />

      {/* This button will link to the Dashboard */}
      <PreviousButton />

      <section className="lg:m-[10vh] py-6 flex flex-col bg-white shadow-lg  border rounded-lg">
        {/* Tutoriel Name */}
        <h1
          key={tutorial?.id}
          className="my-6 text-2xl lg:text-3xl text-[#003DA5] text-center "
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

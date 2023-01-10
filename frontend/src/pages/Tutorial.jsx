import React from "react";
import { Link } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import Stepper from "../components/Stepper";
import BannerProfile from "../components/BannerProfile";
import PreviousButton from "../components/PreviousButton";

function Tutorial() {
  const tutoriel = [
    {
      title: "Les étapes de la connexion",
      introductionText: `<p>Vous trouverez dans ce tutoriel les étapes nécessaires de la connexion à internet.</p><p>Il s’agit ici d’un tutoriel très général qui vous donnera une vue d’ensemble des étapes à réaliser.</p><p><br></p><p><u style="color: rgb(0, 61, 165);">Les pré-requis :</u></p><ul><li>Un appareil compatible (smartphone, tablette, ordinateur etc.)</li><li>Un modem, ou routeur d’accès à internet (fourni par votre fournisseur d’accès)</li></ul><p><br></p>`,
      steps: ["step1", "step2"],
    },
  ];

  return (
    <>
      <BannerProfile />
      <div className="p-6 md:p-2">
        <Link to="/categories">
          {/* This button will link to the Dashboard */}
          <PreviousButton />
        </Link>
      </div>
      <section className="md:m-[10vh] m-1 flex flex-col bg-white shadow-lg  border rounded-lg">
        {/* Tutoriel Name */}
        <h1 className="my-6 text-2xl md:text-3xl text-[#003DA5] text-center ">
          {tutoriel[0].title}
        </h1>

        {/* Introduction Text */}
        <div>
          <ReactQuill
            value={tutoriel[0].introductionText}
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

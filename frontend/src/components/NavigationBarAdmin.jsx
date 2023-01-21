import React from "react";

import NavigationBarLink from "./NavigationBarLink";
import profil from "../assets/profil.png";

import tutoManagement from "../assets/navBar/navbarAdmin/TutoManagement.svg";
import tutoCreation from "../assets/navBar/navbarAdmin/TutoCreation.svg";
import usersManagement from "../assets/navBar/navbarAdmin/usersManagement.svg";

function NavigationBarAdmin({ open, setOpen }) {
  return (
    <>
      <NavigationBarLink
        imgSrc={profil}
        text="Tableau de bord"
        linkDestination="/dashboard"
        setOpen={setOpen}
        open={open}
      />

      {/* Tutos creation  */}
      <NavigationBarLink
        imgSrc={tutoCreation}
        text="Créer un tutoriel"
        linkDestination="/creation"
        setOpen={setOpen}
        open={open}
      />
      {/* Tutos management */}
      <NavigationBarLink
        imgSrc={tutoManagement}
        text="Gérer les tutoriels"
        linkDestination="/tutorials-management"
        setOpen={setOpen}
        open={open}
      />

      {/* Users management  */}
      <NavigationBarLink
        imgSrc={usersManagement}
        text="Gérer les utilisateurs"
        linkDestination="/users"
        setOpen={setOpen}
        open={open}
      />
    </>
  );
}

export default NavigationBarAdmin;

import React from "react";

import NavigationBarLink from "./NavigationBarLink";
import profil from "../assets/profil.png";

import tutoManagement from "../assets/navbarAdmin/TutoManagement.svg";
import tutoCreation from "../assets/navbarAdmin/TutoCreation.svg";
import usersManagement from "../assets/navbarAdmin/usersManagement.svg";

function NavigationBarAdmin() {
  return (
    <>
      <NavigationBarLink
        imgSrc={profil}
        text="Tableau de bord"
        linkDestination="/dashboard"
      />

      {/* Tutos creation  */}
      <NavigationBarLink
        imgSrc={tutoCreation}
        text="Créer un tutoriel"
        linkDestination="/creation"
      />
      {/* Tutos management */}
      <NavigationBarLink
        imgSrc={tutoManagement}
        text="Gérer les tutoriels"
        linkDestination="/tutos"
      />

      {/* Users management  */}
      <NavigationBarLink
        imgSrc={usersManagement}
        text="Gérer les utilisateurs"
        linkDestination="/users"
      />
    </>
  );
}

export default NavigationBarAdmin;

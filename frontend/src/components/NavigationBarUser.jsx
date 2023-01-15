import React from "react";
import NavigationBarLink from "./NavigationBarLink";

import profil from "../assets/profil.png";
import categories from "../assets/categories.svg";
import jeux from "../assets/jeux.png";
import recompenses from "../assets/recompenses.png";
import parcours from "../assets/parcours.png";
import historic from "../assets/Historique.png";

function NavigationBarUser() {
  return (
    <>
      {/* Profil  */}

      <NavigationBarLink
        imgSrc={profil}
        text="Mon Espace"
        linkDestination="/dashboard"
      />

      {/* Categories */}
      <NavigationBarLink
        imgSrc={categories}
        text="Catégories de tutoriels"
        linkDestination="/categories"
      />

      {/* Games  */}
      <NavigationBarLink
        imgSrc={jeux}
        text="Mes jeux"
        linkDestination="/games"
      />

      {/* Journey  */}
      <NavigationBarLink
        imgSrc={parcours}
        text="Mon Parcours"
        linkDestination="/course"
      />

      {/* Rewards */}
      <NavigationBarLink
        imgSrc={recompenses}
        text="Mes récompenses"
        linkDestination="/reward"
      />

      {/* Historic */}
      <NavigationBarLink
        imgSrc={historic}
        text="Mon historique"
        linkDestination="/history"
      />
    </>
  );
}

export default NavigationBarUser;

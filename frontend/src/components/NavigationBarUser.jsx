import React from "react";
import NavigationBarLink from "./NavigationBarLink";

import profil from "../assets/profil.png";
import categories from "../assets/categories.svg";
import jeux from "../assets/jeux.png";
import recompenses from "../assets/recompenses.png";
import parcours from "../assets/parcours.png";
import historic from "../assets/Historique.png";

function NavigationBarUser({ setOpen, open }) {
  return (
    <>
      {/* Profil  */}

      <NavigationBarLink
        imgSrc={profil}
        text="Mon Espace"
        linkDestination="/dashboard"
        setOpen={setOpen}
        open={open}
      />

      {/* Categories */}
      <NavigationBarLink
        imgSrc={categories}
        text="Catégories de tutoriels"
        linkDestination="/categories"
        setOpen={setOpen}
        open={open}
      />

      {/* Games  */}
      <NavigationBarLink
        imgSrc={jeux}
        text="Mes jeux"
        linkDestination="/games"
        setOpen={setOpen}
        open={open}
      />

      {/* Journey  */}
      <NavigationBarLink
        imgSrc={parcours}
        text="Mon Parcours"
        linkDestination="/course"
        setOpen={setOpen}
        open={open}
      />

      {/* Rewards */}
      <NavigationBarLink
        imgSrc={recompenses}
        text="Mes récompenses"
        linkDestination="/reward"
        setOpen={setOpen}
        open={open}
      />

      {/* Historic */}
      <NavigationBarLink
        imgSrc={historic}
        text="Mon historique"
        linkDestination="/history"
        setOpen={setOpen}
        open={open}
      />
    </>
  );
}

export default NavigationBarUser;

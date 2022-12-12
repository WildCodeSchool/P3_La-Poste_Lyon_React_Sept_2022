/* eslint-disable */
/* disable for nested ternary expression */
import React from "react";
/* import Link from "react-router-dom";
 */ import connected from "../assets/tutorial-category-img/connected.svg";
import currentlife from "../assets/tutorial-category-img/currentlife.svg";
import desktop from "../assets/tutorial-category-img/desktop.svg";
import getHelped from "../assets/tutorial-category-img/getHelped.svg";
import going from "../assets/tutorial-category-img/going.svg";
import mail from "../assets/tutorial-category-img/mail.svg";
import media from "../assets/tutorial-category-img/media.svg";
import message from "../assets/tutorial-category-img/message.svg";
import navigate from "../assets/tutorial-category-img/navigate.svg";
import navigateinternet from "../assets/tutorial-category-img/navigateinternet.svg";
import security from "../assets/tutorial-category-img/security.svg";
import usephone from "../assets/tutorial-category-img/usephone.svg";

function TutorialCategory() {
  const categoryList = [
    {
      categoryName: "Se connecter",
      imgUrl: connected,
      progression: "complete",
      tutoriels: [
        { title: "Qu'est-ce que la wifi" },
        { title: "Le réseau" },
        { title: "Paramétrer votre connexion" },
        { title: "Les réseaux publics" },
        { title: "Les réseaux privés" },
      ],
    },
    {
      categoryName: "Vie courante",
      imgUrl: currentlife,
      progression: "unstart",
      tutoriels: [
        { title: "Qu'est-ce que la wifi" },
        { title: "Le réseau" },
        { title: "Paramétrer votre connexion" },
        { title: "Les réseaux publics" },
        { title: "Les réseaux privés" },
      ],
    },
    {
      categoryName: "Utiliser un ordinateur",
      imgUrl: desktop,
      progression: "start",
      tutoriels: [
        { title: "Qu'est-ce que la wifi" },
        { title: "Le réseau" },
        { title: "Paramétrer votre connexion" },
        { title: "Les réseaux publics" },
        { title: "Les réseaux privés" },
      ],
    },
    {
      categoryName: "Se faire aider",
      imgUrl: getHelped,
      progression: "complete",
      tutoriels: [
        { title: "Qu'est-ce que la wifi" },
        { title: "Le réseau" },
        { title: "Paramétrer votre connexion" },
        { title: "Les réseaux publics" },
        { title: "Les réseaux privés" },
      ],
    },
    {
      categoryName: "Aller plus loin",
      imgUrl: going,
      progression: "start",
      tutoriels: [
        { title: "Qu'est-ce que la wifi" },
        { title: "Le réseau" },
        { title: "Paramétrer votre connexion" },
        { title: "Les réseaux publics" },
        { title: "Les réseaux privés" },
      ],
    },
    {
      categoryName: "Mails",
      imgUrl: mail,
      progression: "unstart",
      tutoriels: [
        { title: "Qu'est-ce que la wifi" },
        { title: "Le réseau" },
        { title: "Paramétrer votre connexion" },
        { title: "Les réseaux publics" },
        { title: "Les réseaux privés" },
      ],
    },
    {
      categoryName: "Medias",
      imgUrl: media,
      progression: "start",
      tutoriels: [
        { title: "Qu'est-ce que la wifi" },
        { title: "Le réseau" },
        { title: "Paramétrer votre connexion" },
        { title: "Les réseaux publics" },
        { title: "Les réseaux privés" },
      ],
    },
    {
      categoryName: "Messages",
      imgUrl: message,
      progression: "start",
      tutoriels: [
        { title: "Qu'est-ce que la wifi" },
        { title: "Le réseau" },
        { title: "Paramétrer votre connexion" },
        { title: "Les réseaux publics" },
        { title: "Les réseaux privés" },
      ],
    },
    {
      categoryName: "Se déplacer",
      imgUrl: navigate,
      progression: "unstart",
      tutoriels: [
        { title: "Qu'est-ce que la wifi" },
        { title: "Le réseau" },
        { title: "Paramétrer votre connexion" },
        { title: "Les réseaux publics" },
        { title: "Les réseaux privés" },
      ],
    },
    {
      categoryName: "Naviguer sur internet",
      imgUrl: navigateinternet,
      progression: "unstart",
      tutoriels: [
        { title: "Qu'est-ce que la wifi" },
        { title: "Le réseau" },
        { title: "Paramétrer votre connexion" },
        { title: "Les réseaux publics" },
        { title: "Les réseaux privés" },
      ],
    },
    {
      categoryName: "Sécurité",
      imgUrl: security,
      progression: "complete",
      tutoriels: [
        { title: "Qu'est-ce que la wifi" },
        { title: "Le réseau" },
        { title: "Paramétrer votre connexion" },
        { title: "Les réseaux publics" },
        { title: "Les réseaux privés" },
      ],
    },
    {
      categoryName: "Utiliser son téléphone",
      imgUrl: usephone,
      progression: "start",
      tutoriels: [
        { title: "Qu'est-ce que la wifi" },
        { title: "Le réseau" },
        { title: "Paramétrer votre connexion" },
        { title: "Les réseaux publics" },
        { title: "Les réseaux privés" },
      ],
    },
  ];
  return (
    <section className="m-6 flex flex-col items-center">
      <h1 className="m-6 text-xl md:text-3xl">Catégories de tutoriels</h1>
      <ul className="vw-3/5 grid grid-cols-1 md:grid-cols-4 place-content-center	">
        {categoryList?.map((category) => (
          /*             <Link>
           */ <li
            className="bg-white  border rounded-2xl shadow-lg m-3 p-3 flex-col"
            key={category.categoryName}
          >
            <h2 className="text-lg m-1">{category.categoryName}</h2>

            <img
              src={category.imgUrl}
              alt={category.categoryName}
              className="h-24 inline"
            />
            <div className="mt-3 mb-1 w-full h-4 bg-gray-300 rounded-full dark:bg-gray-300 shadow-inner">
              <div
                className={`h-4 bg-grey-500 rounded-full ${
                  category.progression === "start"
                    ? "dark:bg-[#FFC100] w-1/2"
                    : category.progression === "complete"
                    ? "dark:bg-[#04DDB4] w-100"
                    : ""
                }`}
              />
            </div>
          </li>
          /*             </Link>
           */
        ))}
      </ul>
    </section>
  );
}

export default TutorialCategory;

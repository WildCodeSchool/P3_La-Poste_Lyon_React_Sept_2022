/* eslint-disable */
/* disable for nested ternary expression */
import PreviousButton from "@components/PreviousButton";
import React from "react";
import { useParams, Link } from "react-router-dom";

/* CategoryList Img */
import connected from "../assets/tutorial-category-img/connected.svg";
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

function TutorialList() {
  const categoryList = [
    {
      id: "1",
      categoryName: "Se connecter",
      imgUrl: connected,
      progression: "complete",
      description:
        "Vous retrouverez dans cette liste différents tutoriels pour comprendre le système de connexion",
      tutoriels: [
        { id: "1", title: "Qu'est-ce que la wifi" },
        { id: "2", title: "Le réseau" },
        { id: "3", title: "Paramétrer votre connexion" },
        { id: "4", title: "Les réseaux publics" },
        { id: "5", title: "Les réseaux privés" },
      ],
    },
    {
      id: "2",
      categoryName: "Vie courante",
      imgUrl: currentlife,
      progression: "unstart",
      description:
        "Vous retrouverez dans cette liste différents tutoriels pour comprendre le système de connexion",
      tutoriels: [
        { id: "1", title: "Qu'est-ce que la wifi" },
        { id: "2", title: "Le réseau" },
        { id: "3", title: "Paramétrer votre connexion" },
        { id: "4", title: "Les réseaux publics" },
        { id: "5", title: "Les réseaux privés" },
      ],
    },
    {
      id: "3",
      categoryName: "Utiliser un ordinateur",
      imgUrl: desktop,
      progression: "start",
      description:
        "Vous retrouverez dans cette liste différents tutoriels pour comprendre le système de connexion",
      tutoriels: [
        { id: "1", title: "Qu'est-ce que la wifi" },
        { id: "2", title: "Le réseau" },
        { id: "3", title: "Paramétrer votre connexion" },
        { id: "4", title: "Les réseaux publics" },
        { id: "5", title: "Les réseaux privés" },
      ],
    },
    {
      id: "4",
      categoryName: "Se faire aider",
      imgUrl: getHelped,
      progression: "complete",
      description:
        "Vous retrouverez dans cette liste différents tutoriels pour comprendre le système de connexion",
      tutoriels: [
        { id: "1", title: "Qu'est-ce que la wifi" },
        { id: "2", title: "Le réseau" },
        { id: "3", title: "Paramétrer votre connexion" },
        { id: "4", title: "Les réseaux publics" },
        { id: "5", title: "Les réseaux privés" },
      ],
    },
    {
      id: "5",
      categoryName: "Aller plus loin",
      imgUrl: going,
      progression: "start",
      description:
        "Vous retrouverez dans cette liste différents tutoriels pour comprendre le système de connexion",
      tutoriels: [
        { id: "1", title: "Qu'est-ce que la wifi" },
        { id: "2", title: "Le réseau" },
        { id: "3", title: "Paramétrer votre connexion" },
        { id: "4", title: "Les réseaux publics" },
        { id: "5", title: "Les réseaux privés" },
      ],
    },
    {
      id: "6",
      categoryName: "Mails",
      imgUrl: mail,
      progression: "unstart",
      description:
        "Vous retrouverez dans cette liste différents tutoriels pour comprendre le système de connexion",
      tutoriels: [
        { id: "1", title: "Qu'est-ce que la wifi" },
        { id: "2", title: "Le réseau" },
        { id: "3", title: "Paramétrer votre connexion" },
        { id: "4", title: "Les réseaux publics" },
        { id: "5", title: "Les réseaux privés" },
      ],
    },
    {
      id: "7",
      categoryName: "Medias",
      imgUrl: media,
      progression: "start",
      description:
        "Vous retrouverez dans cette liste différents tutoriels pour comprendre le système de connexion",
      tutoriels: [
        { id: "1", title: "Qu'est-ce que la wifi" },
        { id: "2", title: "Le réseau" },
        { id: "3", title: "Paramétrer votre connexion" },
        { id: "4", title: "Les réseaux publics" },
        { id: "5", title: "Les réseaux privés" },
      ],
    },
    {
      id: "8",
      categoryName: "Messages",
      imgUrl: message,
      progression: "start",
      description:
        "Vous retrouverez dans cette liste différents tutoriels pour comprendre le système de connexion",
      tutoriels: [
        { id: "1", title: "Qu'est-ce que la wifi" },
        { id: "2", title: "Le réseau" },
        { id: "3", title: "Paramétrer votre connexion" },
        { id: "4", title: "Les réseaux publics" },
        { id: "5", title: "Les réseaux privés" },
      ],
    },
    {
      id: "9",
      categoryName: "Se déplacer",
      imgUrl: navigate,
      progression: "unstart",
      description:
        "Vous retrouverez dans cette liste différents tutoriels pour comprendre le système de connexion",
      tutoriels: [
        { id: "1", title: "Qu'est-ce que la wifi" },
        { id: "2", title: "Le réseau" },
        { id: "3", title: "Paramétrer votre connexion" },
        { id: "4", title: "Les réseaux publics" },
        { id: "5", title: "Les réseaux privés" },
      ],
    },
    {
      id: "10",
      categoryName: "Naviguer sur internet",
      imgUrl: navigateinternet,
      progression: "unstart",
      description:
        "Vous retrouverez dans cette liste différents tutoriels pour comprendre le système de connexion",
      tutoriels: [
        { id: "1", title: "Qu'est-ce que la wifi" },
        { id: "2", title: "Le réseau" },
        { id: "3", title: "Paramétrer votre connexion" },
        { id: "4", title: "Les réseaux publics" },
        { id: "5", title: "Les réseaux privés" },
      ],
    },
    {
      id: "11",
      categoryName: "Sécurité",
      imgUrl: security,
      progression: "complete",
      description:
        "Vous retrouverez dans cette liste différents tutoriels pour comprendre le système de connexion",
      tutoriels: [
        { id: "1", title: "Qu'est-ce que la wifi" },
        { id: "2", title: "Le réseau" },
        { id: "3", title: "Paramétrer votre connexion" },
        { id: "4", title: "Les réseaux publics" },
        { id: "5", title: "Les réseaux privés" },
      ],
    },
    {
      id: "12",
      categoryName: "Utiliser son téléphone",
      imgUrl: usephone,
      progression: "start",
      description:
        "Vous retrouverez dans cette liste différents tutoriels pour comprendre le système de connexion",
      tutoriels: [
        { id: "1", title: "Qu'est-ce que la wifi" },
        { id: "2", title: "Le réseau" },
        { id: "3", title: "Paramétrer votre connexion" },
        { id: "4", title: "Les réseaux publics" },
        { id: "5", title: "Les réseaux privés" },
      ],
    },
  ];

  const params = useParams();

  console.log(params);

  return (
    <section className="m-6">
      <Link to="/categories" className="m-6">
        <PreviousButton />
      </Link>
      <article className="bg-white w-3/5 p-2 border rounded-2xl shadow-lg  grid overflow-hidden grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-2 m-auto justify-center">
        {/* category name */}
        <h2 className="text-lg text-center p-6">
          {categoryList[0].categoryName}
        </h2>
        <img
          src={categoryList[0].imgUrl}
          alt={categoryList[0].categoryName}
          className="h-24 md:h-28 justify-self-center box"
        />
        <div className="box mt-3 mb-1 justify-self-center w-full md:w-2/3 h-4 bg-gray-300 rounded-full dark:bg-gray-300 shadow-inner">
          <div
            className={`h-4 rounded-full w-1/2 ${
              categoryList[0].progression === "start"
                ? "bg-[#FFC100] w-1/2"
                : categoryList[0].progression === "complete"
                ? "bg-[#04DDB4] w-100"
                : ""
            }`}
          />
        </div>
        <p className="hidden  md:block md:box md:row-start-1 md:row-end-4 md:col-start-2 m-auto p-5">
          {categoryList[0].description}
        </p>
      </article>
      <ul>
        {categoryList[0].tutoriels.map((tutorial) => (
          <li key={tutorial.id}>{tutorial.title}</li>
        ))}
      </ul>
    </section>
  );
}

export default TutorialList;

import React from "react";
import { /* useParams */ Link } from "react-router-dom";
import BannerProfile from "../components/BannerProfile";
import AccessButton from "../components/AccessButton";
import PreviousButton from "../components/PreviousButton";
/* useParams is disable for the moment because we are not fetching */

/* I import category list img but only to display the fake list, it will be deleted when we'll import our DB */
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
  /* Making a fake category list to display category "cards" */
  const categoryList = [
    {
      id: "1",
      categoryName: "Se connecter",
      imgUrl: connected,
      progression: "complete",
      description:
        "Vous retrouverez dans cette liste différents tutoriels pour comprendre le système de connexion",
      tutoriels: [
        {
          id: "1",
          title: "Qu'est-ce que la wifi",
          shortDescription:
            "Vous entendez parler de wifi mais ne savez pas à quoi ça correspond ?",
        },
        {
          id: "2",
          title: "Le réseau",
          shortDescription:
            "Découvrez ce qu'est le réseau à travers ce tutoriel",
        },
        {
          id: "3",
          title: "Paramétrer votre connexion",
          shortDescription:
            "Vous souhaitez vous connectez ? On vous aide à paramétrer !",
        },
        {
          id: "4",
          title: "Les réseaux publics",
          shortDescription: "Un réseau public, qu'est-ce que c'est?",
        },
        {
          id: "5",
          title: "Les réseaux privés",
          shortDescription: "Et les réseaux privés alors ?",
        },
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

  /* Using params to recover the tutorial category ID - It will be used to fetch the associate tutorial list */
  /* For the moment useParams isn't use,  */
  /*   const { id } = useParams();
   */

  return (
    <>
      <BannerProfile />
      <section className="m-6">
        <Link to="/categories" className="m-6">
          <PreviousButton />
        </Link>
        <h1 className="m-6 text-3xl  text-center">
          {categoryList[0].categoryName}
        </h1>

        {/* Here we will map the categoryList array to display every tutorials */}
        <ul className="w-3/5 grid grid-cols-1 md:grid-cols-2  m-auto ">
          {categoryList[0].tutoriels.map((tutorial) => (
            <li
              className=" my-3 md:m-6 border shadow-xl rounded-lg text-center"
              key={tutorial.id}
            >
              <h2 className="text-xl p-2 text-[#003DA5] font-bold  bg-white shadow-md  rounded-tl-lg rounded-tr-lg h-20 flex justify-center items-center">
                {tutorial.title}
              </h2>
              <p className="p-3 flex justify-center items-center h-24">
                {tutorial.shortDescription}
              </p>{" "}
              {/* We will need to match the id  */}
              <Link to={`/categories/tutorials/${categoryList[0].id}`}>
                <AccessButton />
              </Link>
              {/* This button in the future will link to the associate tutorial */}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default TutorialList;

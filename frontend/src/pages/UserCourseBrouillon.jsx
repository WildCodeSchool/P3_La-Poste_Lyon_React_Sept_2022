// import React, { useContext, useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import { TutorialStatusContext } from "../contexts/TutorialStatusContext";
// import BannerProfile from "../components/BannerProfile";
// import PreviousButton from "../components/PreviousButton";

// const tutorialIds = [2, 3, 4, 5, 6, 11, 13, 20, 35];

// const images = {
//   step1: import("../assets/userCourse/Etape1.svg"),
//   step2: import("../assets/userCourse/Etape2.svg"),
//   step4: import("../assets/userCourse/Etape4.svg"),
//   step5: import("../assets/userCourse/Etape5.svg"),
//   step6: import("../assets/userCourse/Etape6.svg"),
//   step7: import("../assets/userCourse/Etape7.svg"),
//   step9: import("../assets/userCourse/Etape9.svg"),
//   wellDone: import("../assets/userCourse/WellDone.svg"),
//   onlineWishes: import("../assets/userCourse/OnlineWishes.svg"),
//   highFive: import("../assets/userCourse/HighFive.svg"),
//   blooming: import("../assets/userCourse/Blooming.svg"),
//   completed: import("../assets/userCourse/completed.svg"),
//   awards: import("../assets/userCourse/Awards.svg"),
// };

// function UserCourse() {
//   const { tutorialStatus, getTutorialStatus } = useContext(TutorialStatusContext);
//   const [tutorials, setTutorials] = useState({});

//   useEffect(() => {
//     getTutorialStatus();
//     // load the images
//     const promises = Object.values(images).map((image) => image.then((mod) => mod.default));
//     Promise.all(promises).then((values) => {
//       setTutorials(
//         tutorialIds.reduce((acc, id, index) => {
//           acc[id] = {
//             src: values[index],
//             status: tutorialStatus?.find((status) => status?.tuto_id === id)?.status === "finished",
//           };
//           return acc;
//         }, {})
//       );
//     });
//   }, []);

//   return (
//     <div>
//       <BannerProfile />
//       <PreviousButton />
//       <div className="mt-7 mb-7 flex justify-center">
//         <h1 className=" m-3 flex justify-center items-center font-bold text-3xl text-main-blue rounded-xl w-2/3 h-10 text-center md:w-1/4 md:h-10 md:text-center">
//           Parcours utilisateur
//         </h1>
//       </div>
//       <div className="flex flex-col">
//         {tutorialIds.map((id) => (
//           <div key={id} className="flex justify-center">
//             {id === 2 && (
//               <div className="ml-

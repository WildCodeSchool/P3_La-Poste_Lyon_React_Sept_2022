import React, { useContext } from "react";
import { Link } from "react-router-dom";
import medaille from "../assets/medaille.png";
import parametres from "../assets/parametres.png";
import CurrentUserContext from "../contexts/userContext";

function BannerProfile() {
  const { currentUser } = useContext(CurrentUserContext);

  let userLevel;

  if (currentUser.level < 4) {
    userLevel = "Débutant";
  } else if (currentUser.level > 5) {
    userLevel = "Intermédiaire";
  }

  return (
    <div className="w-full h-full">
      <div className="flex bg-[#FFC928] w-full justify-between shadow">
        <div className="flex justify-around flex-wrap md:mx-10">
          <div className="flex flex-wrap">
            <div className="rounded-full w-100 h-100 my-5">
              <Link to="/dashboard">
                <img
                  className="border-black rounded-full w-20 h-20 mr-8"
                  src={
                    currentUser?.profilePicture !== ""
                      ? `http://localhost:5000/api/avatars/${currentUser.profilePicture}`
                      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp8HE9nJ03LBSlHivqF46xHQ640tNgo-9nnFrUMANrL3tf4lOHdDeNzjLZurWNUf3oIt8&usqp=CAU"
                  }
                  alt="userImage"
                />
              </Link>
            </div>
          </div>
          <div className="my-5 md:flex md:flex-wrap md:items-center">
            <h2 className="text-2xl">
              {currentUser.firstname} {currentUser.lastname}
            </h2>
            <div className="flex items-center flex-wrap">
              <img className="h-7 mr-3" src={medaille} alt="userImage" />
              <h2 className="text-2xl">
                {currentUser.admin === 1 && "Admin"}
                {currentUser.admin === 0 && userLevel}
              </h2>
            </div>
          </div>
        </div>
        <div className="my-2  justify-end">
          <Link to="/settings">
            <img className="mr-2 h-10" src={parametres} alt="parametres" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BannerProfile;

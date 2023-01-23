import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logout from "../assets/items/logout.svg";
import parametres from "../assets/items/parametres.svg";
import CurrentUserContext from "../contexts/userContext";

function BannerProfile() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  let userLevel;

  if (currentUser.level < 4) {
    userLevel = "Débutant";
  } else if (currentUser.level > 5) {
    userLevel = "Intermédiaire";
  }

  // Log Out remove localStorage and navigate to the main page with a reload
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setCurrentUser({});
    navigate("/");
  };
  return (
    <div className="w-full h-full">
      <div className="flex bg-gradient-to-r from-main-yellow to-second-yellow w-full justify-between shadow">
        <div className="flex justify-around flex-wrap md:mx-10">
          <div className="flex flex-wrap">
            <div className="rounded-full w-100 h-100 my-5">
              <Link to="/settings">
                <img
                  className="border-black border rounded-full w-20 h-20 mr-8"
                  src={
                    currentUser?.profilePicture !== null
                      ? `http://localhost:5000/api/avatars/${currentUser.profilePicture}`
                      : `https://api.multiavatar.com/${currentUser.firstname}.svg`
                  }
                  alt="userImage"
                />
              </Link>
            </div>
          </div>
          <div className="my-5 md:flex md:flex-col  ">
            <h2 className="text-2xl">
              Bonjour <span className=" ">{currentUser.firstname} </span> !
            </h2>
            <div className="flex justify-start items-center flex-wrap">
              <Link to="/settings">
                <img className="mr-2 h-6" src={parametres} alt="parametres" />
              </Link>
              <h2 className="text-md text-[#333] semibold">
                {currentUser.admin === 1 && "Administrateur"}
                {currentUser.admin === 0 && userLevel}
              </h2>
            </div>
          </div>
        </div>
        <button
          type="button"
          onClick={handleLogout}
          className=" m-6 flex  items-center justify-end"
        >
          <img src={logout} alt="Disconnect" className="w-8" />
        </button>
      </div>
    </div>
  );
}

export default BannerProfile;

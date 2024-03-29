import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Switch } from "@material-tailwind/react";
import logo from "../assets/navBar/Logo.png";
import closemenu from "../assets/navBar/closemenu.svg";
import openmenu from "../assets/navBar/menuopen.svg";
import CurrentUserContext from "../contexts/userContext";
import NavigationBarAdmin from "./NavigationBarAdmin";
import NavigationBarUser from "./NavigationBarUser";

function NavigationBar({ adminView, handleAdminView }) {
  const { setCurrentUser, currentUser } = useContext(CurrentUserContext);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  // Log Out remove localStorage and navigate to the main page with a reload
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("rewards");
    setCurrentUser({});
    setOpen(!open);
    navigate("/");
  };

  const wayFromLogo = () => {
    if (currentUser.email) {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  };

  /* Close menu when click outside */
  const concernedElement = document.getElementById("click-menu");
  document.addEventListener("mousedown", (event) => {
    if (concernedElement === null) {
      return;
    }
    if (
      !concernedElement.contains(event.target) &&
      event.target.id !== "menu-burger" &&
      event.target.id !== "menu-burger1" &&
      event.target.id !== "menu-burger2"
    ) {
      setOpen(false);
    }
  });

  return (
    <nav className="navbar">
      <div className="justify-between items-center mx-autol md:items-center shadow flex h-14 relative z-10">
        <button
          type="button"
          onClick={wayFromLogo}
          className="flex items-center"
        >
          <img src={logo} alt="Ligne Bleue" className="h-14 w-14" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white" />
        </button>
        {/* If connected -> enable menu burger */}
        {currentUser.email ? (
          <div className="block">
            {/* Menu burger toggle icon */}
            <button
              id="menu-burger"
              type="button"
              className="p-2 text-black rounded-md outline-none"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <img
                  id="menu-burger1"
                  src={closemenu}
                  className="h-12 w-12"
                  alt="Close menu"
                />
              ) : (
                <img
                  id="menu-burger2"
                  src={openmenu}
                  className="h-12 w-12"
                  alt="Open menu"
                />
              )}
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="relative  z-10">
        <div
          className={` flex-1 justify-self-center md:block md:pb-0 md:mt-0 ${
            open
              ? "h-[95vh] block absolute  shadow-lg top-0 right-0 bg-white w-screen md:w-96 z-0"
              : "hidden"
          }`}
        >
          {/* when click outside */}
          <ul
            id="click-menu"
            className={
              open ? "flex flex-col items-end space-y-2 m-3 text-xl" : "hidden"
            }
          >
            {/* If connected as user enable user links */}
            {currentUser && currentUser.admin === 0 && (
              <NavigationBarUser open={open} setOpen={setOpen} />
            )}
            {/* If connected as admin enable admin links or user links */}
            {currentUser && currentUser.admin === 1 && (
              <>
                <li className="flex justify-center w-full items-center">
                  <Switch
                    checked={adminView}
                    onChange={handleAdminView}
                    id="amber"
                    color="amber"
                  />
                  <h3 className="ml-3"> {adminView && "Utilisateur"}</h3>
                </li>
                {adminView ? (
                  <NavigationBarUser setOpen={setOpen} open={open} />
                ) : (
                  <NavigationBarAdmin
                    setOpen={setOpen}
                    open={open}
                    handleAdminView={handleAdminView}
                    adminView={adminView}
                  />
                )}
              </>
            )}

            <li className="text-right pr-3 flex  w-full justify-center">
              <button
                onClick={() => handleLogout()}
                type="button"
                className="text-xl underline text-[#003DA5]"
              >
                Me déconnecter
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default NavigationBar;

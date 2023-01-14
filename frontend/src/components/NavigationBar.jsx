import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/Logo.png";
import closemenu from "../assets/closemenu.svg";
import openmenu from "../assets/menuopen.svg";

import CurrentUserContext from "../contexts/userContext";

import NavigationBarAdmin from "./NavigationBarAdmin";
import NavigationBarUser from "./NavigationBarUser";

function NavigationBar() {
  const { currentUser } = useContext(CurrentUserContext);
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="justify-between items-center mx-autol md:items-center shadow-lg flex h-20 relative z-10">
        <Link to="/dashboard" className="flex items-center">
          <img src={logo} alt="Ligne Bleue" className="h-14 w-14" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white" />
        </Link>
        {/* If connected -> enable menu burger */}
        {currentUser.email ? (
          <div className="block">
            {/* Menu burger toggle icon */}
            <button
              type="button"
              className="p-2 text-black rounded-md outline-none"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <img src={closemenu} className="h-12 w-12" alt="Open menu " />
              ) : (
                <img src={openmenu} className="h-12 w-12" alt="Close menu" />
              )}
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
      {/* If connected as user enable user links */}
      {currentUser && currentUser.admin === 0 && (
        <NavigationBarUser open={open} />
      )}
      {/* If connected as admin enable admin links */}
      {currentUser && currentUser.admin === 1 && (
        <NavigationBarAdmin open={open} />
      )}
    </nav>
  );
}

export default NavigationBar;

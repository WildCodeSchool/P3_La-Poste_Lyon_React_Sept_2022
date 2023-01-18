import React from "react";
import { Link } from "react-router-dom";
import Error404 from "../assets/Error.svg";

function Error() {
  return (
    <div className="error404">
      <div className="flex justify-center mt-32 md:mt-48 mx-8 md:mb-12">
        <img className="h-80 md:h-96" alt="error404" src={Error404} />
      </div>
      <p className="paragraphe pt-8 underline" style={{ textAlign: "center" }}>
        <Link to="/">
          Error 404 <br />
          Go back to home page
        </Link>
      </p>
    </div>
  );
}

export default Error;

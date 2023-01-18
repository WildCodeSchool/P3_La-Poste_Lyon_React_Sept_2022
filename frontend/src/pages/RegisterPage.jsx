import React from "react";
import { useNavigate } from "react-router-dom";
import RegisterFirstStep from "../components/RegisterFirstStep";

function RegisterPage() {
  const navigate = useNavigate();

  /* registerInformations will save all the data of the user  */
  const [registerInformations, setRegisterInformations] = React.useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    phone: "",
  });

  /* the register informations will be submit to the back  */
  const submitRegisterInformations = (e) => {
    /* if one of the value of the object registerInformations is null, return a message */
    if (
      registerInformations.email === "" ||
      registerInformations.password === "" ||
      registerInformations.firstname === "" ||
      registerInformations.lastname === "" ||
      registerInformations.phone === ""
    )
      return;

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({ ...registerInformations });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
      redirect: "follow",
    };

    e.preventDefault();

    fetch(`http://localhost:5000/api/users/register`, requestOptions)
      .then((response) => response.text())
      .catch(console.error);

    navigate("/authentification");
  };

  return (
    <div>
      <RegisterFirstStep
        registerInformations={registerInformations}
        setRegisterInformations={setRegisterInformations}
        submitRegisterInformations={submitRegisterInformations}
      />
    </div>
  );
}

export default RegisterPage;

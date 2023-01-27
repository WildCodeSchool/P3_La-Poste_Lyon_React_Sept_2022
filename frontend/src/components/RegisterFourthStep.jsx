import React from "react";
import nextBtn from "../assets/items/nextBtn.svg";
import winner from "../assets/connexionPage/registerPage/winner.svg";

function RegisterFourthStep({ submitRegisterInformations }) {
  return (
    <div className="flex justify-center flex-col items-center h-screen w-screen pb-[12%]">
      <div className="p-1 w-11/12   md:w-3/6  rounded-xl  md:py-10 h-[80%] bg-gradient-to-b from-[#003DA5] to-[#023998]">
        <div className="  h-fit ">
          <div className="m-6 flex flex-col items-center justify-center">
            <h1 className="text-white text-3xl">Félicitations !</h1>
          </div>
          <section className="relative flex justify-center mt-4">
            <img
              src={winner}
              alt="Création de compte réussie"
              style={{ width: "450px", height: "350px" }}
            />
          </section>
          <section className="text-center flex flex-col items-center">
            <div className="flex justify-center font-bold pt-10 m-6">
              <h1 className=" text-white font-medium text-lg">
                Votre compte est créé,
                <br />
                il ne reste plus qu'à vous{" "}
                <span id="RegisterFourthStep" className="underline">
                  connecter{" "}
                </span>{" "}
                !
              </h1>
            </div>
            {/* Button to go to the dashboard when account is created */}
            <button
              type="button"
              onClick={submitRegisterInformations}
              className="flex"
            >
              <img src={nextBtn} alt="next button" className="mx-3 w-10 h-10" />
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}

export default RegisterFourthStep;

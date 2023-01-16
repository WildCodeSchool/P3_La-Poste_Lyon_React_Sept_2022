import React from "react";
import nextBtn from "../assets/nextBtn.svg";
import winner from "../assets/winner.svg";

function RegisterFourthStep({ submitRegisterInformations }) {
  return (
    <div className="flex justify-center flex-col items-center h-screen w-screen my-22 py-22">
      <div className=" rounded-xl  md:py-10 h-fit bg-gradient-to-b from-[#003DA5] to-[#023998]">
        <div className="  h-fit ">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-white text-3xl">Félicitations !</h1>
          </div>
          <section className="relative flex justify-center mt-4">
            <img
              src={winner}
              alt="Création de compte réussie"
              style={{ width: "450px", height: "350px" }}
            />
            {/* Animations */}
            {/* Animation 1 */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              width="457.12845"
              height="352.02689"
              viewBox="0 0 297.12845 482.02689"
              xlink="http://www.w3.org/1999/xlink"
              className="absolute top-[-20px] left-3"
            >
              <circle
                className="animate-pulse"
                cx="76"
                cy="211"
                r="5"
                fill="#ff9900"
              />
            </svg>
            {/* Animation 2 */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              width="457.12845"
              height="352.02689"
              viewBox="0 0 297.12845 482.02689"
              xlink="http://www.w3.org/1999/xlink"
              className="absolute top-[-150px] left-20"
            >
              <circle
                className="animate-pulse"
                cx="76"
                cy="211"
                r="5"
                fill="#FF6584"
              />
            </svg>

            {/* Animation 3 */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              width="457.12845"
              height="352.02689"
              viewBox="0 0 297.12845 482.02689"
              xlink="http://www.w3.org/1999/xlink"
              className="absolute top-[-10px] left-[-100px]"
            >
              <circle
                className="animate-pulse"
                cx="76"
                cy="211"
                r="7"
                fill="#FF6584"
              />
            </svg>
            {/* Animation 4 */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              width="457.12845"
              height="352.02689"
              viewBox="0 0 297.12845 482.02689"
              xlink="http://www.w3.org/1999/xlink"
              className="absolute top-[-45px] left-[100px]"
            >
              <circle
                className="animate-pulse"
                cx="76"
                cy="211"
                r="8"
                fill="#ff9900"
              />
            </svg>

            {/* Animation 6 */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              width="457.12845"
              height="352.02689"
              viewBox="0 0 297.12845 482.02689"
              xlink="http://www.w3.org/1999/xlink"
              className="absolute top-[-50px] left-[10px]"
            >
              <circle
                className="animate-pulse"
                cx="76"
                cy="211"
                r="10"
                fill="#FF6584"
              />
            </svg>
            {/* Animation 7 */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              width="457.12845"
              height="352.02689"
              viewBox="0 0 297.12845 482.02689"
              xlink="http://www.w3.org/1999/xlink"
              className="absolute top-[-70px] left-[70px]"
            >
              <circle
                className="animate-pulse"
                cx="76"
                cy="211"
                r="10"
                fill="#FF6584"
              />
            </svg>
          </section>
          <section className="text-center flex flex-col items-center">
            <div className="flex justify-center font-bold pt-10 m-6">
              <h1
                id="RegisterFourthStep"
                className=" text-white font-medium text-lg"
              >
                Votre compte est créé,
                <br />
                il ne reste plus qu'à vous{" "}
                <span className="underline">connecter </span> !
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

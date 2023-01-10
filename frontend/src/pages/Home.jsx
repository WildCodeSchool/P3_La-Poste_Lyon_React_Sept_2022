import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="Home">
      <div className="flex h-100 text-xl md:text-2xl justify-center">
        {/* man div opening */}
        <div className="flex flex-col mt-[20vh] items-center justify-center">
          {/* switching image by hidden property */}
          <img
            className="block sm:hidden "
            src="./src/assets/media/téléphoneprojet.png"
            alt="téléphone"
          />

          <img
            className="hidden sm:block h-auto w-8/12"
            src="./src/assets/media/ordinateurconection.png"
            alt="ordinateur"
          />
          <div className="flex w-5/6 justify-center items-center">
            <button
              type="button"
              className="border-2 border-blue-500/20 bg-[#003DA5] text-white w-5/6 shadow-lg underline underline-offset-4 md:w-2/6 h-24 rounded-lg"
            >
              <Link to="/authentification">
                <h1>Déjà inscrit?</h1>
                <h1>Me connecter</h1>
              </Link>
            </button>
            <button
              type="button"
              className="border-2 text-blue-800 bg-slate-200 drop-shadow shadow-lg underline underline-offset-4 w-5/6 md:w-2/6 h-24 rounded-lg z-0"
            >
              <Link to="/registerPage">
                <h1>Nouvel utilisateur?</h1>
                <h1>Créer un compte</h1>
              </Link>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";

export default function Home() {
  return (
    <div className="Home">
      <NavigationBar />

      <div className="flex min-h-screen text-xl md:text-2xl items-center justify-center">
        {/* man div opening */}
        <div className="flex flex-col items-center justify-center pb-60">
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
              className="border-2 bg-[#003DA5] text-white w-5/6 md:w-2/6 h-24 rounded-lg"
            >
              <h1>Déjà inscrit?</h1>
              <h1>Me connecter</h1>
            </button>
            <button
              type="button"
              className="border-2 text-[#003DA5] shadow-lg underline underline-offset-4 w-5/6 md:w-2/6 h-24 rounded-lg"
            >
              <h1>Nouvel utilsateur?</h1>
              <h1>Créer un compte</h1>
            </button>
          </div>
        </div>
        <h1 className="w-full animate-[wiggle 1s ease-in-out infinite]">
          hello
        </h1>
      </div>
      <Footer />
    </div>
  );
}

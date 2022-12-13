export default function Home() {
  return (
    <div className="Home">
      <div className="flex min-h-screen text-xl lg:text-2xl items-center justify-center">
        <div className="flex flex-col items-center justify-center">
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
              className="border-2 bg-blue-800 text-white w-5/6 lg:w-2/6 h-24 rounded-lg"
            >
              <h1>Déjà inscrit?</h1>
              <h1>Me connecter</h1>
            </button>
            <button
              type="button"
              className="border-2 text-blue-800 bg-slate-200 drop-shadow shadow-lg underline underline-offset-4 w-5/6 lg:w-2/6 h-24 rounded-lg"
            >
              <h1>Nouvel utilsateur?</h1>
              <h1>Créer un compte</h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

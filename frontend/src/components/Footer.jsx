import React from "react";

function Footer() {
  return (
    <div className="flex justify-around fixed bottom-0 w-full h-20 lg:h-28 m-5">
      <div>
        <a
          href="https://www.service-public.fr/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="lg:h-28"
            src="./src/assets/media/service-public 1.png"
            alt="république française service publique"
          />
        </a>
      </div>
      <div>
        <a
          href="https://www.gouvernement.fr/le-secretariat-d-etat-charge-du-numerique"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="lg:h-28"
            src="./src/assets/media/ministerepublic 1.png"
            alt="ministère chargé de la transition numérique et des télécomunication"
          />
        </a>
      </div>
    </div>
  );
}

export default Footer;

import React from "react";

function Footer() {
  return (
    <footer className="bg-white flex justify-around fixed bottom-0 w-full h-20 md:h-28 mt-5 shadow">
      <article>
        <a
          href="https://www.service-public.fr/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="p-3 h-20 md:h-28"
            src="https://www.dila.premier-ministre.gouv.fr/IMG/arton225.png?1666602298"
            alt="république française service publique"
          />
        </a>
      </article>
      <article>
        <a
          href="https://www.gouvernement.fr/le-secretariat-d-etat-charge-du-numerique"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="p-2 h-20 md:h-32"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Logo_du_Secr%C3%A9tariat_d%27%C3%89tat_charg%C3%A9_de_la_Transition_num%C3%A9rique_et_des_Communications_%C3%A9lectroniques.svg/2560px-Logo_du_Secr%C3%A9tariat_d%27%C3%89tat_charg%C3%A9_de_la_Transition_num%C3%A9rique_et_des_Communications_%C3%A9lectroniques.svg.png"
            alt="ministère chargé de la transition numérique et des télécomunication"
          />
        </a>
      </article>
    </footer>
  );
}

export default Footer;

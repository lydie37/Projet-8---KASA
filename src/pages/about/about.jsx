import React from "react";
import Banner from "../../components/banner/banner";
import bannerImage from "../../assets/imageapropos.png";
import "./about.css";
import Collapse from "../../components/collapse/collapse.jsx";

function About() {
  return (
    <div>
      {/* Bannière */}
      <Banner image={bannerImage} title="À propos" className="about-banner" />

      <div className="about-content">
        {/* Collapses avec classe spécifique About */}
        <Collapse title="Fiabilité" className="about-collapse">
          <p>
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        </Collapse>

        <Collapse title="Respect" className="about-collapse">
          <p>
            La bienveillance fait partie des valeurs fondamentales de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </Collapse>

        <Collapse title="Service" className="about-collapse">
          <p>
            La qualité du service est au coeur de notre engagement chez Kasa.
            Nous veillons à ce que chaque interaction, que ce soit avec nos
            hôtes ou nos locataires, soit empreinte de respect et de
            bienveillance.
          </p>
        </Collapse>

        <Collapse title="Sécurité" className="about-collapse">
          <p>
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés.
          </p>
        </Collapse>
      </div>
    </div>
  );
}

export default About;

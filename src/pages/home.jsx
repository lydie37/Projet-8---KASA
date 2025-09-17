import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Banner from "../components/banner/banner";
import Cards from "../components/cards/cards";
import homeImage from "../assets/imagebanner.png";

function Home() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/properties")
      .then((response) => response.json())
      .then((data) => setLogements(data))
      .catch((error) => console.error("Erreur fetch:", error));
  }, []);

  return (
    <div>
      <Banner image={homeImage} title="Chez vous, partout et ailleurs" />

      <div className="cards-container">
        {logements.map((logement) => (
          <Link key={logement.id} to={`/logements/${logement.id}`}>
            <Cards image={logement.cover} title={logement.title} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;

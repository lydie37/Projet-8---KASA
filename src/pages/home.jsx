import React, { useState, useEffect } from "react";
import Banner from "../components/banner";
import Cards from "../components/cards";

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
      <Banner
        image="/images/imagebanner.png"
        title="Chez vous, partout et ailleurs"
      />

      <div className="cards-container">
        {logements.map((logement) => (
          <Cards
            key={logement.id}
            image={logement.cover}
            title={logement.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;

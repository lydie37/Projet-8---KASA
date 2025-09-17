import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Collapse from "../../components/collapse/collapse";
import "./logements.css";

function Logements() {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/properties")
      .then((res) => {
        if (!res.ok)
          throw new Error("Erreur lors de la récupération des logements");
        return res.json();
      })
      .then((data) => {
        const found = data.find((l) => String(l.id) === id);
        if (!found) throw new Error("Logement non trouvé");
        setLogement(found);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="logement-detail">
      <h1>{logement.title ?? "Titre indisponible"}</h1>

      <div className="logement-collapses">
        {/* Collapse Description */}
        <Collapse title="Description" className="logement-collapse">
          <p>{logement.description ?? "Description indisponible"}</p>
        </Collapse>

        {/* Collapse Équipements */}
        <Collapse title="Équipements" className="logement-collapse">
          <p>
            {logement.equipments?.length > 0
              ? logement.equipments.map((eq, i) => (
                  <span key={i}>
                    {eq}
                    <br />
                  </span>
                ))
              : "Aucun équipement disponible"}
          </p>
        </Collapse>
      </div>
    </div>
  );
}

export default Logements;

import { useParams, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Collapse from "../../components/collapse/collapse";
import Slideshow from "../../components/slideshow/slideshow";
import "./logements.css";

function Logements() {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:8080/api/properties/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Erreur lors de la récupération");
        return res.json();
      })
      .then((data) => {
        setLogement(data || null);
        setLoading(false);
      })
      .catch(() => {
        setLogement(null);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Chargement…</p>;

  if (!logement) {
    //redirection 404 si pas de logement
    return <Navigate to="/notfound" replace />;
  }

  return (
    <div className="logement-detail">
      {/* Slider */}
      <Slideshow pictures={logement.pictures} />

      {/* Header */}
      <div className="logement-header">
        <div className="logement-info">
          <h1>{logement.title}</h1>
          <p className="logement-location">{logement.location}</p>
          <div className="logement-tags">
            {logement.tags?.map((tag, i) => (
              <span key={i} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="logement-host-rating">
          <div className="logement-host">
            <p className="host-name">
              {logement.host?.name?.split(" ")[0]}
              <br />
              {logement.host?.name?.split(" ")[1]}
            </p>
            {logement.host?.picture && (
              <img
                className="host-picture"
                src={logement.host.picture}
                alt={logement.host.name}
              />
            )}
          </div>

          {/* Rating */}
          <div className="logement-rating">
            {[1, 2, 3, 4, 5].map((i) => (
              <span
                key={i}
                className={i <= logement.rating ? "star filled" : "star"}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Collapses */}
      <div className="logement-collapses">
        <Collapse title="Description" className="logement-collapse">
          <p>{logement.description ?? "Description indisponible"}</p>
        </Collapse>

        <Collapse title="Équipements" className="logement-collapse">
          {logement.equipments?.length ? (
            <ul>
              {logement.equipments.map((eq, i) => (
                <li key={i}>{eq}</li>
              ))}
            </ul>
          ) : (
            <p>Aucun équipement disponible</p>
          )}
        </Collapse>
      </div>
    </div>
  );
}

export default Logements;

import React from "react";
import { Link } from "react-router-dom";
import "./notfound.css";

const NotFound = () => (
  <div className="notfound-container">
    <h2>404</h2>
    <p>Oups! La page que vous demandez n'existe pas.</p>
    <Link to="/" className="notfound-link">
      Retourner sur la page d'accueil
    </Link>
  </div>
);

export default NotFound;

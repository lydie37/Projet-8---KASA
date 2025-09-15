import React from "react";
import PropTypes from "prop-types";
import "./Cards.css";

function Cards({ image, title }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-img" />
      <h2 className="card-title">{title}</h2>
    </div>
  );
}

// Vérification des props
Cards.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Cards;

import React from "react";
import PropTypes from "prop-types";
import "./cards.css";

function Cards({ image, title }) {
  return (
    <div className="card" style={{ backgroundImage: `url(${image})` }}>
      <h2 className="card-title">{title}</h2>
    </div>
  );
}

Cards.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Cards;

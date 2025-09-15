import React from "react";
import PropTypes from "prop-types";
import "./Banner.css";

function Banner({ image, title }) {
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <h1 className="banner-title">{title}</h1>
    </div>
  );
}

// Vérification des props
Banner.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Banner;

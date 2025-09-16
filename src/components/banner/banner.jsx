import React from "react";
import PropTypes from "prop-types";
import "./banner.css";

function Banner({ image, title, className }) {
  return (
    <div
      className={`banner ${className || ""}`}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <h1 className="banner-title">{title}</h1>
    </div>
  );
}

Banner.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string, // optionnelle
};

export default Banner;

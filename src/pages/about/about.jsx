import React from "react";
import Banner from "../../components/banner/banner";
import bannerImage from "../../assets/imageapropos.png";
import "./about.css";

const About = () => {
  return (
    <div>
      {/* Ajout de la classe spécifique pour About */}
      <Banner image={bannerImage} title="A propos" className="about-banner" />
      <div className="about-content"></div>
    </div>
  );
};

export default About;

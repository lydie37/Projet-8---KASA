import React, { useState, useRef, useEffect } from "react";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import "./collapse.css";

function Collapse({ title, children, className = "" }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  const toggleCollapse = () => setIsOpen(!isOpen);

  // Met à jour la hauteur pour l’animation
  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div className={`collapse ${isOpen ? "open" : ""} ${className}`}>
      <div className="collapse-header" onClick={toggleCollapse}>
        <h3>{title}</h3>
        <ArrowBackIosNewRoundedIcon
          className={`arrow ${isOpen ? "open" : ""}`}
          fontSize="large"
        />
      </div>

      <div
        className="collapse-content-wrapper"
        style={{ maxHeight: `${height}px` }}
      >
        <div className="collapse-content" ref={contentRef}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Collapse;

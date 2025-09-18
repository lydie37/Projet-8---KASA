import { useState } from "react";
import "./slideshow.css";

function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!pictures || pictures.length === 0) return null;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % pictures.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? pictures.length - 1 : prev - 1));
  };

  const showArrows = pictures.length > 1;

  return (
    <div className="slideshow">
      {/* Image */}
      <img
        src={pictures[currentIndex]}
        alt={`Photo ${currentIndex + 1}`}
        className="slideshow-image"
      />

      {/* Flèches SVG */}
      {showArrows && (
        <>
          <button className="arrow prev" onClick={prevSlide}>
            <svg viewBox="0 0 24 24">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <button className="arrow next" onClick={nextSlide}>
            <svg viewBox="0 0 24 24">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </>
      )}

      {/* Compteur / bullet points */}
      {showArrows && (
        <div className="counter">
          {currentIndex + 1}/{pictures.length}
        </div>
      )}
    </div>
  );
}

export default Slideshow;

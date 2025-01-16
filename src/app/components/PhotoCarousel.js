import React from "react";
import "../styles/PhotoCarousel.css";

const PhotoCarousel = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-track">
        <div className="carousel-item item-1"></div>
        <div className="carousel-item item-2"></div>
        <div className="carousel-item item-3"></div>
        <div className="carousel-item item-4"></div>
        <div className="carousel-item item-5"></div>
        {/* Dupliziere die Elemente für nahtlose Endlosschleife */}
        <div className="carousel-item item-1"></div>
        <div className="carousel-item item-2"></div>
        <div className="carousel-item item-3"></div>
        <div className="carousel-item item-4"></div>
        <div className="carousel-item item-5"></div>
      </div>
    </div>
  );
};

export default PhotoCarousel;

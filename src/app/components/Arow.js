"use client"; // Dies markiert die Datei als Client-Komponente

import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import '../styles/Arow.css';

const Arow = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <div onClick={scrollToTop} className="arrow-container">
          <FaArrowUp className="arrow-icon" />
        </div>
      )}
    </div>
  );
};

export default Arow;

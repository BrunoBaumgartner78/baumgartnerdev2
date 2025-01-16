import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import '../styles/Arow.css';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Sichtbarkeit des Buttons steuern
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll-to-Top Funktion
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button className="scroll-to-top" onClick={scrollToTop}>
        <FaArrowUp size={24} />
      </button>
    )
  );
}

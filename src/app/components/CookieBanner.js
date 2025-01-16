// components/CookieBanner.js
import { useState, useEffect } from "react";
import '../styles/CookieBanner.css';

const CookieBanner = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(false);

  // Überprüfen, ob der Nutzer bereits zugestimmt hat
  useEffect(() => {
    if (!localStorage.getItem("cookiesAccepted")) {
      setIsBannerVisible(true);
    }
  }, []);

  // Funktion zum Akzeptieren der Cookies
  const handleAcceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setIsBannerVisible(false);
  };

  if (!isBannerVisible) {
    return null; // Banner anzeigen, wenn sichtbar, sonst null (nicht rendern)
  }

  return (
    <div className="cookie-banner">
      <div className="cookie-banner-content">
        <p>
          Diese Website verwendet Cookies, um sicherzustellen, dass Sie die
          beste Erfahrung auf unserer Website erhalten.{" "}
          <a href="/datenschutz" target="_blank" rel="noopener noreferrer">
            Mehr erfahren
          </a>
        </p>
        <button onClick={handleAcceptCookies} className="accept-cookies-button">
          Akzeptieren
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;

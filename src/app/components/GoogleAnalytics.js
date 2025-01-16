// src/app/components/GoogleAnalytics.js
import { useEffect } from "react";

const GoogleAnalytics = () => {
  useEffect(() => {
    // Warten, bis das Skript geladen ist
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-EEJBFQ67C0";
    script.async = true;
    script.onload = () => {
      // Initialisieren des Google Analytics Tracking Codes
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "G-EEJBFQ67C0");
    };
    document.head.appendChild(script);

    // Aufräumen des Skripts, wenn die Komponente unmountet
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default GoogleAnalytics;

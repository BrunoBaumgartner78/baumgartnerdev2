// Logo.jsx
import React from 'react';
import '../styles/Logo.css'; // Wir werden eine CSS-Datei hinzufügen für Animationen und Styling

const Logo = () => {
  return (
    <div className="logo-container">
      <img 
        src="/assets/logo.webP" 
        alt="Logo" 
        className="logo" 
      />
    </div>
  );
}

export default Logo;

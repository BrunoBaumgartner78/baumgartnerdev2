"use client";
import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import "../styles/ThemeToggle.css";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  return (
    <div
      className={`toggle-button ${darkMode ? "dark" : ""}`}
      onClick={toggleTheme}
    >
      {darkMode ? (
        <FaMoon className="icon moon-icon" />
      ) : (
        <FaSun className="icon sun-icon" />
      )}
    </div>
  );
}


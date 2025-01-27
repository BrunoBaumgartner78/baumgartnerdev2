"use client";
import React from 'react';
import CookieBanner from '../src/app/components/CookieBanner';
import Menu from '@/app/components/Nav';
import ScrollToTopButton from '@/app/components/Arow';
import ThemeToggle from '@/app/components/ThemeToggle';
import PhotoCarousel from '@/app/components/PhotoCarousel';
import '../src/app/globals.css';
import '../src/app/styles/Home.css';
import '../src/app/styles/About-us.css'; // Stelle sicher, dass du eine CSS-Datei für das Styling hast

const WebDevelopmentServices = () => {
  return (
    <div>
      <CookieBanner />
      <Menu />
      <ScrollToTopButton />
      <ThemeToggle />

      <section id="web-development" className="web-development-section">
      <PhotoCarousel/>
        <div className="gradient-line"></div> {/* Querlinie mit Gradient */}
        <div className="flex">
          <div className="web-development-text">
            <h1>Webentwicklung – Maßgeschneiderte Lösungen für Ihre Online-Präsenz</h1>
            <p>
              Willkommen bei Baumgartner Development – Ihrem Partner für professionelle und moderne Webentwicklung. Wir schaffen individuelle Websites und Webanwendungen, die Ihre Vision Wirklichkeit werden lassen.
            </p>

            <h2>Unsere Mission: Perfekte Online-Auftritte für Ihr Unternehmen</h2>
            <p>
              Ob Unternehmenswebsite, E-Commerce-Plattform oder Web-App – wir entwickeln Lösungen, die sowohl technisch als auch optisch überzeugen. Dabei setzen wir auf modernste Technologien und Best Practices.
            </p>
          </div>
          <div className="web-development-image"></div> {/* Platz für ein Bild */}
        </div>
        <div className="gradient-line"></div> {/* Querlinie mit Gradient */}
        <div className="flex2">
          <div className="web-development-advantages">
            <h2>Warum Sie uns wählen sollten</h2>
            <p>Modernste Technologien: Wir nutzen die neuesten Tools und Frameworks der Branche.</p>
            <p>Responsives Design: Unsere Websites sehen auf jedem Gerät perfekt aus.</p>
            <p>Benutzerfreundlichkeit: Wir legen Wert auf intuitive Bedienbarkeit.</p>
            <p>Performance: Schnelle Ladezeiten und optimale Funktionalität sind garantiert.</p>
          </div>
        </div>
        <h2>Unsere Leistungen</h2>
        <ul>
          <li>Individuelle Website-Entwicklung</li>
          <li>E-Commerce-Lösungen</li>
          <li>Webanwendungen und Plattformen</li>
          <li>Optimierung bestehender Websites</li>
          <li>Wartung und Support</li>
        </ul>

        <h2>Warum Baumgartner Development?</h2>
        <div className="gradient-line"></div> {/* Querlinie mit Gradient */}
        <div className="flex">
          <div>
            <p>
              Unser Team steht für Innovation, Qualität und Zuverlässigkeit. Wir arbeiten eng mit Ihnen zusammen, um Ihre Ideen in die digitale Welt zu bringen.
            </p>

            <p>
              Gemeinsam entwickeln wir Ihre Website zu einem leistungsstarken Werkzeug, das Ihre Ziele unterstützt und Ihre Kunden begeistert.
            </p>

            <p>Kontaktieren Sie uns und starten Sie Ihr Webprojekt mit Baumgartner Development.</p>

            <p>Baumgartner Development – Ihr Partner für moderne Webentwicklung.</p>
          </div>
        </div>
        <PhotoCarousel/>
      </section>
    </div>
  );
};

export default WebDevelopmentServices;

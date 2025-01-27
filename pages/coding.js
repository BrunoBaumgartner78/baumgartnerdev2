'use client';
import React from 'react';
import CookieBanner from '../src/app/components/CookieBanner';
import Menu from '@/app/components/Nav';
import ScrollToTopButton from '@/app/components/Arow';
import ThemeToggle from '@/app/components/ThemeToggle';
import PhotoCarousel from '@/app/components/PhotoCarousel';
import '../src/app/globals.css';
import '../src/app/styles/Home.css';
import '../src/app/styles/About-us.css'; // Stelle sicher, dass du eine CSS-Datei für das Styling hast


const CodingServices = () => {
  return (
    <div>
      <CookieBanner />
      <Menu />
      <ScrollToTopButton />
      <ThemeToggle />

      <section id="coding" className="coding-section">
      <PhotoCarousel/>
        <div className="gradient-line"></div> {/* Querlinie mit Gradient */}
        <div className="flex">
          <div className="coding-services-text">
            <h1>Exzellente Coding-Dienstleistungen – Maßgeschneiderte Lösungen</h1>
            <p>
              Willkommen bei Baumgartner Development – Ihrem Partner für innovative und zuverlässige Softwareentwicklung. Wir erstellen maßgeschneiderte Lösungen, die perfekt auf Ihre Bedürfnisse zugeschnitten sind.
            </p>

            <h2>Unsere Mission: Innovative Software für Ihr Unternehmen</h2>
            <p>
              Mit modernsten Technologien und bewährten Methoden schaffen wir Anwendungen, die nicht nur leistungsstark, sondern auch zukunftssicher sind. Von kleinen Projekten bis hin zu komplexen Plattformen – wir haben die Expertise.
            </p>
          </div>
          <div className="coding-services-image"></div> {/* Platz für ein Bild */}
        </div>
        <div className="gradient-line"></div> {/* Querlinie mit Gradient */}
        <div className="flex2">
          <div className="coding-services-advantages">
            <h2>Warum Sie uns wählen sollten</h2>
            <p>Hochqualifiziertes Team: Experten mit umfassendem Wissen in verschiedenen Programmiersprachen.</p>
            <p>Agile Entwicklung: Flexible und transparente Prozesse für schnelle Ergebnisse.</p>
            <p>Benutzerorientiertes Design: Funktionalität trifft auf ansprechendes Design.</p>
            <p>Skalierbare Lösungen: Wir entwickeln Software, die mit Ihrem Unternehmen wächst.</p>
          </div>
        </div>
        <h2>Unsere Leistungen</h2>
        <ul>
          <li>Webentwicklung (Frontend und Backend)</li>
          <li>App-Entwicklung für mobile Geräte</li>
          <li>Optimierung bestehender Software</li>
          <li>Beratung und Schulung für Entwicklungsteams</li>
          <li>Integration moderner Technologien wie KI und Machine Learning</li>
        </ul>

        <h2>Warum Baumgartner Development?</h2>
        <div className="gradient-line"></div> {/* Querlinie mit Gradient */}
        <div className="flex">
          <div>
            <p>
              Wir stehen für Qualität, Innovation und Zuverlässigkeit. Unsere Leidenschaft für Technik treibt uns an, stets die besten Lösungen für unsere Kunden zu finden.
            </p>

            <p>
              Gemeinsam realisieren wir Ihre Ideen und setzen sie in beeindruckende Software um. Lassen Sie uns Ihre Vision Wirklichkeit werden.
            </p>

            <p>Kontaktieren Sie uns und starten Sie Ihr nächstes Projekt mit Baumgartner Development.</p>

            <p>Baumgartner Development – Ihr Partner für exzellentes Coding.</p>
          </div>
        </div>
        <PhotoCarousel/>
      </section>
    </div>
  );
};

export default CodingServices;

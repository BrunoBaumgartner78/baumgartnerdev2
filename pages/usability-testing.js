"use client";
import React from "react";
import CookieBanner from "../src/app/components/CookieBanner";
import Menu from "@/app/components/Nav";
import ScrollToTopButton from "@/app/components/Arow";
import ThemeToggle from "@/app/components/ThemeToggle";
import PhotoCarousel from "@/app/components/PhotoCarousel";
import '../src/app/globals.css';
import '../src/app/styles/Home.css';
import '../src/app/styles/About-us.css'; // Stelle sicher, dass du eine CSS-Datei für das Styling hast

const UsabilityTesting = () => {
  return (
    <div>
      <CookieBanner />
      <Menu />
      <ScrollToTopButton />
      <ThemeToggle />

      <section id="usability-testing" className="usability-testing-section">
      <PhotoCarousel/>
        <div className="gradient-line"></div> {/* Querlinie mit Gradient */}
        <div className="flex">
          <div className="usability-testing-text">
            <h1>Usability Testing – Nutzerzentrierte Optimierung</h1>
            <p>
              Willkommen bei Baumgartner Development – Ihrem Partner für nutzerzentriertes Design. Mit professionellem Usability Testing sorgen wir dafür, dass Ihre Anwendungen intuitiv und effizient nutzbar sind.
            </p>

            <h2>Unsere Mission: Perfekte Nutzererfahrungen</h2>
            <p>
              Usability Testing ist der Schlüssel zu erfolgreichen Produkten. Wir analysieren das Nutzerverhalten und optimieren Ihre Anwendungen gezielt, um maximale Zufriedenheit zu gewährleisten.
            </p>
          </div>
          <div className="usability-testing-image"></div> {/* Platz für ein Bild */}
        </div>
        <div className="gradient-line"></div> {/* Querlinie mit Gradient */}
        <div className="flex2">
          <div className="usability-testing-advantages">
            <h2>Warum Usability Testing?</h2>
            <p>Verbesserte Nutzerfreundlichkeit: Optimierte Bedienung und Navigation.</p>
            <p>Steigerung der Conversion-Rate: Effizientere Nutzerführung führt zu höheren Umsätzen.</p>
            <p>Fehlererkennung: Identifikation und Behebung von Schwachstellen im Design.</p>
            <p>Benutzerzentrierte Ansätze: Fokus auf die Bedürfnisse Ihrer Zielgruppe.</p>
          </div>
        </div>
        <h2>Unsere Leistungen</h2>
        <ul>
          <li>Durchführung von Usability-Tests mit echten Nutzern</li>
          <li>Analyse und Optimierung von Interaktionsdesigns</li>
          <li>Prototyping und Testing iterativer Designs</li>
          <li>Beratung zu Best Practices im Usability Testing</li>
          <li>Erstellung von Berichten mit detaillierten Optimierungsvorschlägen</li>
        </ul>

        <h2>Warum Baumgartner Development?</h2>
        <div className="gradient-line"></div> {/* Querlinie mit Gradient */}
        <div className="flex">
          <div>
            <p>
              Wir setzen auf datengetriebene Ansätze und Nutzerfeedback, um Ihre Produkte zu optimieren. Unser Ziel ist es, Anwendungen zu schaffen, die Ihre Nutzer begeistern.
            </p>

            <p>
              Vertrauen Sie auf unsere Expertise im Bereich Usability Testing und machen Sie Ihre digitalen Produkte unschlagbar benutzerfreundlich.
            </p>

            <p>Kontaktieren Sie uns und starten Sie mit Baumgartner Development durch.</p>

            <p>Baumgartner Development – Ihr Partner für Usability Testing.</p>
          </div>
        </div>
        <PhotoCarousel/>
      </section>
    </div>
  );
};

export default UsabilityTesting;

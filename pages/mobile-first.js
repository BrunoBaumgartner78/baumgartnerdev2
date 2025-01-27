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

const MobileFirstApproach = () => {
  return (
    <div>
      <CookieBanner />
      <Menu />
      <ScrollToTopButton />
      <ThemeToggle />

      <section id="mobile-first" className="mobile-first-section">
      <PhotoCarousel/>
        <div className="gradient-line"></div> {/* Querlinie mit Gradient */}
        <div className="flex">
          <div className="mobile-first-text">
            <h1>Mobile-First-Design – Priorität für mobile Nutzer</h1>
            <p>
              Willkommen bei Baumgartner Development – Ihrem Partner für zukunftsweisendes Mobile-First-Design. Wir gestalten Anwendungen, die auf mobilen Geräten glänzen und zugleich auf allen Plattformen hervorragend funktionieren.
            </p>

            <h2>Unsere Mission: Optimale Nutzererfahrung auf allen Geräten</h2>
            <p>
              Mit einem Mobile-First-Ansatz stellen wir sicher, dass Ihre Anwendung auf kleinen Bildschirmen genauso beeindruckt wie auf größeren. Performance, Design und Funktionalität stehen bei uns im Mittelpunkt.
            </p>
          </div>
          <div className="mobile-first-image"></div> {/* Platz für ein Bild */}
        </div>
        <div className="gradient-line"></div> {/* Querlinie mit Gradient */}
        <div className="flex2">
          <div className="mobile-first-advantages">
            <h2>Warum Mobile-First?</h2>
            <p>Verbesserte Performance: Schnelle Ladezeiten und optimierte Ressourcen.</p>
            <p>Breitere Zielgruppe: Erreichen Sie mobile Nutzer weltweit.</p>
            <p>SEO-Vorteile: Suchmaschinen bevorzugen mobilefreundliche Websites.</p>
            <p>Zukunftssicher: Bereit für die nächste Generation mobiler Geräte.</p>
          </div>
        </div>
        <h2>Unsere Leistungen</h2>
        <ul>
          <li>Design und Entwicklung mobiler Apps</li>
          <li>Optimierung bestehender Anwendungen für Mobilgeräte</li>
          <li>Responsive Webdesign für alle Geräte</li>
          <li>Performance-Analysen und -Verbesserungen</li>
          <li>Beratung und Strategie für Mobile-First-Projekte</li>
        </ul>

        <h2>Warum Baumgartner Development?</h2>
        <div className="gradient-line"></div> {/* Querlinie mit Gradient */}
        <div className="flex">
          <div>
            <p>
              Unser Fokus liegt auf innovativen Lösungen, die speziell für mobile Endgeräte entwickelt werden. Von der Planung bis zur Umsetzung bieten wir Expertise und Engagement.
            </p>

            <p>
              Gemeinsam mit Ihnen entwickeln wir Designs, die begeistern und Ihre Zielgruppe erreichen. Lassen Sie uns Ihre mobile Präsenz stärken.
            </p>

            <p>Kontaktieren Sie uns und starten Sie Ihr nächstes Mobile-First-Projekt mit Baumgartner Development.</p>

            <p>Baumgartner Development – Ihr Partner für Mobile-First-Design.</p>
          </div>
        </div>
        <PhotoCarousel/>
      </section>
    </div>
  );
};

export default MobileFirstApproach;

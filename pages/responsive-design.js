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

const ResponsiveDesign = () => {
  return (
    <div>
      <CookieBanner />
      <Menu />
      <ScrollToTopButton />
      <ThemeToggle />

      <section id="responsive-design" className="responsive-design-section">
      <PhotoCarousel/>
        <div className="gradient-line"></div> {/* Querlinie mit Gradient */}
        <div className="flex">
          <div className="responsive-design-text">
            <h1>Responsive Design – Eine Website, die auf jedem Gerät überzeugt</h1>
            <p>
              Willkommen bei Baumgartner Development – Ihrem Experten für Responsive Design. Wir gestalten Websites, die sich nahtlos an alle Bildschirmgrößen und Geräte anpassen.
            </p>

            <h2>Unsere Mission: Perfekte Darstellung auf jedem Gerät</h2>
            <p>
              Von Smartphones über Tablets bis hin zu Desktop-Computern – unsere Designs sorgen für ein konsistentes Nutzererlebnis und optimale Benutzerfreundlichkeit.
            </p>
          </div>
          <div className="responsive-design-image"></div> {/* Platz für ein Bild */}
        </div>
        <div className="gradient-line"></div> {/* Querlinie mit Gradient */}
        <div className="flex2">
          <div className="responsive-design-advantages">
            <h2>Warum Responsive Design wichtig ist</h2>
            <p>Erhöhte Benutzerfreundlichkeit: Ihre Besucher genießen ein einheitliches Erlebnis auf jedem Gerät.</p>
            <p>Bessere SEO: Suchmaschinen bevorzugen mobilfreundliche Websites.</p>
            <p>Kostenersparnis: Eine Website für alle Plattformen reduziert den Entwicklungsaufwand.</p>
            <p>Zukunftssicherheit: Unsere Designs sind bereit für neue Technologien und Geräte.</p>
          </div>
        </div>
        <h2>Unsere Leistungen</h2>
        <ul>
          <li>Design und Entwicklung responsiver Websites</li>
          <li>Optimierung bestehender Websites für mobile Geräte</li>
          <li>Testing auf verschiedenen Bildschirmgrößen und Geräten</li>
          <li>Beratung zu responsiver Webentwicklung</li>
        </ul>

        <h2>Warum Baumgartner Development?</h2>
        <div className="gradient-line"></div> {/* Querlinie mit Gradient */}
        <div className="flex">
          <div>
            <p>
              Unser Ziel ist es, Websites zu entwickeln, die auf jedem Gerät großartig aussehen und funktionieren. Wir kombinieren innovative Technologien mit durchdachtem Design, um Ihre Anforderungen zu übertreffen.
            </p>

            <p>
              Vertrauen Sie auf unsere Expertise, um Ihre Website benutzerfreundlich und zukunftssicher zu gestalten.
            </p>

            <p>Kontaktieren Sie uns und starten Sie Ihr Projekt für eine responsive Website mit Baumgartner Development.</p>

            <p>Baumgartner Development – Ihr Partner für Responsive Design.</p>
          </div>
        </div>
        <PhotoCarousel/>
      </section>
    </div>
  );
};

export default ResponsiveDesign;

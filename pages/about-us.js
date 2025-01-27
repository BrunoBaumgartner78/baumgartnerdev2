'use client';
import React from 'react';
import CookieBanner from '@/app/components/CookieBanner';
import Menu from '@/app/components/Nav';
import ScrollToTopButton from '@/app/components/Arow';
import ThemeToggle from '@/app/components/ThemeToggle';
import PhotoCarousel from '@/app/components/PhotoCarousel';
import '../src/app/globals.css';
import '../src/app/styles/Home.css';
import '../src/app/styles/About-us.css'; // Stelle sicher, dass du eine CSS-Datei für das Styling hast

const AboutUs = () => {
  

  return (
    <div>
      <CookieBanner/>
      <Menu />
       <ScrollToTopButton />
       <ThemeToggle />
    
    <section id="about" className="about-us-section">
    <PhotoCarousel/>
      <div className="gradient-line"></div> {/* Querlinie mit Gradient */}
      <div className="flex">
        <div className="about-us-text">
          <h1>About Us – Professionelles Webdesign für die Region Bern</h1>
          <p>
            Willkommen bei Baumgartner Development, Ihrem zuverlässigen Partner für modernes und funktionales Webdesign in der Region Bern. Wir sind spezialisiert auf die Gestaltung und Entwicklung von Websites, die nicht nur ästhetisch überzeugen, sondern auch optimal auf die Bedürfnisse Ihres Unternehmens zugeschnitten sind.
          </p>

          <h2>Unsere Mission: Ihr Erfolg im digitalen Raum</h2>
          <p>
            In der heutigen digitalen Welt ist eine professionelle Online-Präsenz unverzichtbar. Unsere Mission ist es, Unternehmen in Bern und Umgebung dabei zu helfen, mit innovativen Webdesigns ihre Zielgruppen zu erreichen und sich von der Konkurrenz abzuheben.
          </p>
        </div>
        <div className="about-us-image"></div> {/* Hier kannst du ein Bild hinzufügen, wenn gewünscht */}
      </div>
      <div className="gradient-line"></div> {/* Querlinie mit Gradient */}
      <div className="flex2">
        <div className="about-us-advantages">
          <h2>Was uns auszeichnet</h2>
          <p>Individuelle Lösungen: Wir hören zu und entwickeln maßgeschneiderte Websites, die genau zu Ihrem Unternehmen passen.</p>
          <p>Modernes Design: Wir setzen auf ansprechende und zeitgemäße Designs, die Ihre Marke im besten Licht präsentieren.</p>
          <p>Benutzerfreundlichkeit: Unsere Websites bieten eine intuitive Navigation und sind sowohl für Desktop- als auch für mobile Geräte optimiert.</p>
          <p>SEO-Optimierung: Jede Website wird so gestaltet, dass sie in Suchmaschinen wie Google besser gefunden wird – speziell für die Region Bern.</p>
        </div>
      </div>
      <h2>Unser Fokus auf Bern</h2>
      <p>
        Als lokales Unternehmen verstehen wir die Bedürfnisse und Besonderheiten der Unternehmen in Bern und Umgebung. Ob Sie eine kleine Firma, ein Start-up oder ein etabliertes Unternehmen sind – wir kennen den regionalen Markt und helfen Ihnen, sich erfolgreich zu positionieren.
      </p>
      <h3>Unsere Leistungen</h3>
      <ul>
        <li>Webdesign und -entwicklung</li>
        <li>Responsive Design für mobile Geräte</li>
        <li>Suchmaschinenoptimierung (SEO)</li>
        <li>Pflege und Wartung Ihrer Website</li>
        <li>Integration moderner Tools und Funktionen</li>
      </ul>

      <h2>Warum Webdesign von uns?</h2>
      <div className="gradient-line"></div> {/* Querlinie mit Gradient */}
      <div className="flex">
        <div>
          <p>
            Unser Team kombiniert Kreativität, technisches Know-how und ein tiefes Verständnis für die Online-Welt, um Websites zu schaffen, die begeistern und Ergebnisse liefern. Kunden in Bern und der ganzen Schweiz vertrauen auf unsere Expertise.
          </p>

          <p>Lassen Sie uns gemeinsam Ihre Vision umsetzen!</p>

          <p>Kontaktieren Sie uns noch heute für ein unverbindliches Beratungsgespräch. Gemeinsam entwickeln wir eine Website, die Ihr Unternehmen in Bern und darüber hinaus erfolgreich präsentiert.</p>

          <p>Baumgartner Development – Ihr Experte für Webdesign in Bern.</p>
        </div>
        <div className="about-us-image"></div> {/* Optional: Bild für diese Sektion */}
      </div>
      <PhotoCarousel/>
    </section>
    </div>
  );
};

export default AboutUs;

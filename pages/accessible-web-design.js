
'use client'
import React from 'react';
import CookieBanner from '../src/app/components/CookieBanner';
import Menu from '@/app/components/Nav';
import ScrollToTopButton from '@/app/components/Arow';
import ThemeToggle from '@/app/components/ThemeToggle';
import PhotoCarousel from '@/app/components/PhotoCarousel';
import '../src/app/globals.css';
import '../src/app/styles/Home.css';
import '../src/app/styles/About-us.css'; // Stelle sicher, dass du eine CSS-Datei für das Styling hast

const AccessibleWebDesign = () => {
  


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
        <div className="accessible-web-design-text">
          <h1>Accessible Web Design – Barrierefreiheit im Web für alle</h1>
          <p>
            Willkommen bei Baumgartner Development – Ihrem Partner für barrierefreies Webdesign. Wir setzen uns dafür ein, dass Ihre Website für alle zugänglich ist, unabhängig von körperlichen Einschränkungen oder technischen Gegebenheiten.
          </p>

          <h2>Unsere Mission: Inklusion durch barrierefreies Design</h2>
          <p>
            Barrierefreiheit im Web ist nicht nur ein Zeichen von Verantwortung, sondern auch ein rechtlicher Standard in vielen Ländern. Wir gestalten Websites, die alle Nutzer einbeziehen – unabhängig von Fähigkeiten, Alter oder technischen Möglichkeiten.
          </p>
        </div>
        <div className="accessible-web-design-image"></div> {/* Platz für ein Bild */}
      </div>
      <div className="gradient-line"></div> {/* Querlinie mit Gradient */}
      <div className="flex2">
        <div className="accessible-web-design-advantages">
          <h2>Was uns auszeichnet</h2>
          <p>Barrierefreie Standards: Wir gestalten Websites gemäß internationalen Richtlinien (WCAG 2.1).</p>
          <p>Benutzerfreundlichkeit: Einfache Navigation und klare Strukturen sorgen für eine optimale Nutzererfahrung.</p>
          <p>Responsives Design: Unsere Websites sind für alle Geräte zugänglich, von Desktop bis Smartphone.</p>
          <p>Testing und Optimierung: Wir führen umfangreiche Tests durch, um sicherzustellen, dass Ihre Website barrierefrei ist.</p>
        </div>
      </div>
      <h2>Warum Barrierefreiheit wichtig ist</h2>
      <p>
        Barrierefreiheit im Web betrifft uns alle. Sie sorgt dafür, dass Menschen mit Behinderungen Zugang zu Informationen und Dienstleistungen haben, die viele von uns als selbstverständlich ansehen.
      </p>
      <h3>Unsere Leistungen</h3>
      <ul>
        <li>Analyse und Optimierung bestehender Websites</li>
        <li>Umsetzung barrierefreier Websites</li>
        <li>Konformität mit WCAG 2.1 und anderen Standards</li>
        <li>Schulung für Teams zu barrierefreiem Design</li>
        <li>Integration von Screenreader-Kompatibilität</li>
      </ul>

      <h2>Warum barrierefreies Webdesign von uns?</h2>
      <div className="gradient-line"></div> {/* Querlinie mit Gradient */}
      <div className="flex">
        <div>
          <p>
            Unser Team hat es sich zur Aufgabe gemacht, Webdesigns zu entwickeln, die für alle zugänglich sind. Wir kombinieren innovative Technologien mit einem tiefen Verständnis für Inklusion, um Websites zu schaffen, die niemanden ausschließen.
          </p>

          <p>
            Gemeinsam machen wir Ihre Website nicht nur barrierefrei, sondern auch zukunftssicher. Barrierefreiheit stärkt Ihre Marke und erhöht Ihre Reichweite.
          </p>

          <p>Kontaktieren Sie uns und lassen Sie uns Ihre Website zugänglich für alle gestalten.</p>

          <p>Baumgartner Development – Ihr Experte für barrierefreies Webdesign.</p>
        </div>
        
      </div>
      <PhotoCarousel/>
    </section>
    </div>
  );
};


export default AccessibleWebDesign;


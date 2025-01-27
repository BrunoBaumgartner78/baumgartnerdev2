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

const Career = () => {
 

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
      <div className="career-section">
  <h2>Karriere bei Baumgartner Development</h2>
  <p>
    Vielen Dank für Ihr Interesse an Baumgartner Development. Aktuell sind keine Stellen zu besetzen, aber wir freuen uns immer über Initiativbewerbungen von talentierten und engagierten Personen.
  </p>
  <p>
    Bitte senden Sie Ihre Bewerbung mit Lebenslauf und einem kurzen Anschreiben an unsere E-Mail-Adresse. Wir werden Ihre Unterlagen sorgfältig prüfen und uns bei Bedarf mit Ihnen in Verbindung setzen.
  </p>
  <p>
    Baumgartner Development – Gemeinsam für eine barrierefreie digitale Zukunft.
  </p>
</div>
</div>
      <PhotoCarousel/>
    </section>
    </div>
  );
};


export default Career;

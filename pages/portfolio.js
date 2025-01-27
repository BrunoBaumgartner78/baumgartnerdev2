import React from 'react';
import CookieBanner from '../src/app/components/CookieBanner';
import Menu from '@/app/components/Nav';
import ScrollToTopButton from '@/app/components/Arow';
import ThemeToggle from '@/app/components/ThemeToggle';
import '../src/app/globals.css';
import '../src/app/styles/Portfolio.css'; // CSS-Datei für das Portfolio-Styling

const Portfolio = () => {
  const portfolioWorks = [
    {
      title: 'Wireframes & Prototypes',
      image: '/assets/apple.webP',
      description: 'Erstellung von interaktiven Wireframes und Prototypen zur Visualisierung von Designideen.'
    },
    {
      title: 'Responsive Design',
      image: '/assets/computer.webP',
      description: 'Entwicklung von Webseiten, die sich nahtlos an verschiedene Bildschirmgrößen anpassen.'
    },
    {
      title: 'UX Strategy',
      image: '/assets/mug.webP',
      description: 'Strategien zur Verbesserung der Nutzererfahrung und Erreichung von Geschäftsziele.'
    },
    {
      title: 'Web Development',
      image: '/assets/computerDesk.webP',
      description: 'Maßgeschneiderte Webanwendungen mit modernster Technologie und bewährten Methoden.'
    },
    {
      title: 'Usability Testing',
      image: '/assets/pen.webP',
      description: 'Testen und Optimieren von Webseiten und Apps für maximale Benutzerfreundlichkeit.'
    },
    {
      title: 'Design Trends',
      image: '/assets/laptop.webP',
      description: 'Bleiben Sie mit den neuesten Design-Trends für Ihre Projekte auf dem Laufenden.'
    },
  ];

  return (
    <div>
      <CookieBanner />
      <Menu />
      <ScrollToTopButton />
      <ThemeToggle />

      <section id="portfolio" className="portfolio-section">
        <h1 className="portfolio-title">Portfolio</h1>
        <div className="portfolio-grid">
          {portfolioWorks.map((work, index) => (
            <div key={index} className="portfolio-item">
              <img src={work.image} alt={work.title} className="portfolio-image" />
              <h2 className="portfolio-item-title">{work.title}</h2>
              <p className="portfolio-item-description">{work.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
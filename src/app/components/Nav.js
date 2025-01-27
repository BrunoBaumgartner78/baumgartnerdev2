'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link'; // Importiere Link von next/link
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'; // Importiere Social Media Icons
import '../styles/Nav.css';

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null); // Statt eines Objekts nur einen einzelnen Wert
  const [shareLinks, setShareLinks] = useState({
    facebook: "",
    twitter: "",
    linkedin: "",
  });

  // Client-seitiger Zugriff auf `window.location.href`
  useEffect(() => {
    const currentUrl = window.location.href;
    setShareLinks({
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`,
      twitter: `https://twitter.com/intent/tweet?url=${currentUrl}`,
      linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${currentUrl}`,
    });
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const toggleSubMenu = (key) => {
    // Wenn das gleiche Submenu nochmal geklickt wird, wird es geschlossen, andernfalls wird das Submenu gewechselt
    setOpenSubMenu((prev) => (prev === key ? null : key));
  };

  return (
    <>
      {/* Dezent fixierter Hamburger-Button */}
      <button className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className="menu-icon"></span>
      </button>

      {/* Menü-Overlay mit Animationen */}
      <div className={`menu-overlay ${isMenuOpen ? 'open' : ''}`}>
        <div className={`orange-container ${isMenuOpen ? 'visible' : ''}`}></div>
        <nav className="menu">
          <ul className="menu-list">
            <li><Link href="/">Home</Link></li>
            <li>
              <button className="submenu-toggle" onClick={() => toggleSubMenu('uiux')}>
                UI/UX
                <span className="arrow">{openSubMenu === 'uiux' ? '▲' : '▼'}</span>
              </button>
              {openSubMenu === 'uiux' && (
                <ul className="submenu">
                  <li><Link href="/ux-strategy">UX-Strategie</Link></li>
                  <li><Link href="/usability-testing">Usability-Testing</Link></li>
                  <li><Link href="/design-thinking">Design Thinking</Link></li>
                  <li><Link href="/wireframes-prototypes">Wireframes & Prototypen</Link></li>
                </ul>
              )}
            </li>
            <li>
              <button className="submenu-toggle" onClick={() => toggleSubMenu('webdesign')}>
                Webdesign
                <span className="arrow">{openSubMenu === 'webdesign' ? '▲' : '▼'}</span>
              </button>
              {openSubMenu === 'webdesign' && (
                <ul className="submenu">
                  <li><Link href="/responsive-design">Responsive Design</Link></li>
                  <li><Link href="/mobile-first">Mobile-First Ansätze</Link></li>
                  <li><Link href="/accessible-web-design">Barrierefreies Webdesign</Link></li>
                  <li><Link href="/design-trends">Design-Trends</Link></li>
                </ul>
              )}
            </li>
            <li><Link href="/coding">Coding</Link></li>
            <li><Link href="/web-development">Webentwicklung</Link></li>
            <li>
              <button className="submenu-toggle" onClick={() => toggleSubMenu('categories')}>
                Weitere Kategorien
                <span className="arrow">{openSubMenu === 'categories' ? '▲' : '▼'}</span>
              </button>
              {openSubMenu === 'categories' && (
                <ul className="submenu">
                  <li><Link href="/portfolio">Portfolio</Link></li>
                  <li><Link href="/blog">Blog</Link></li>
                  <li><Link href="/about-us">About us</Link></li>
                  <li><Link href="/career">Karriere</Link></li>
                </ul>
              )}
            </li>
            <li><Link href="/kontakt">Kontakt</Link></li>
          </ul>
        </nav>

        {/* Social Media Sharing Widget am unteren Rand */}
        <div className="social-sharing">
          <div className="social-icons">
            <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer">
              <FaFacebook size={30} />
            </a>
            <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer">
              <FaTwitter size={30} />
            </a>
            <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

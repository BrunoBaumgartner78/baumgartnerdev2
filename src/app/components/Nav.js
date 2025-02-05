'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import '../styles/Nav.css';

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [shareLinks, setShareLinks] = useState({
    facebook: '',
    twitter: '',
    linkedin: '',
  });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const currentUrl = window.location.href;
    setShareLinks({
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`,
      twitter: `https://twitter.com/intent/tweet?url=${currentUrl}`,
      linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${currentUrl}`,
    });
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubMenu = (key) => {
    setOpenSubMenu((prev) => (prev === key ? null : key));
  };

  return (
    <>
      {isMobile ? (
        <>
          <button className="menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? 'Close' : 'Menü'}
          </button>
          <div className={`menu-overlay ${isMenuOpen ? 'open' : ''}`}>
            <nav className="menu">
              <ul className="menu-list">
                <li><Link href="/">Home</Link></li>
                <li>
                  <button className="webdesign" onClick={() => toggleSubMenu('uiux')}>UI/UX</button>
                  {openSubMenu === 'uiux' && (
                    <ul className="submenu">
                      <li><Link href="/ux-strategy">UX-Strategie</Link></li>
                      <li><Link href="/usability-testing">Usability-Testing</Link></li>
                      <li><Link href="/design-thinking">Design Thinking</Link></li>
                      <li><Link href="/wireframes-prototypes">Wireframes und Prototypen</Link></li>
                    </ul>
                  )}
                </li>
                <li><Link href="/coding">Coding</Link></li>
                <li><Link href="/web-development">Webentwicklung</Link></li>
                <li>
                  <button className="webdesign" onClick={() => toggleSubMenu('webdesign')}>Webdesign</button>
                  {openSubMenu === 'webdesign' && (
                    <ul className="submenu">
                      <li><Link href="/responsive-design">Responsive Design</Link></li>
                      <li><Link href="/mobile-first">Mobile First</Link></li>
                      <li><Link href="/accesible-web-design">Barrierefreiheit</Link></li>
                      <li><Link href="/design-trends">Design Trends</Link></li>
                    </ul>
                  )}
                </li>
                <li>
                  <button className="webdesign" onClick={() => toggleSubMenu('weitere')}>Weitere Kategorien</button>
                  {openSubMenu === 'weitere' && (
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
            </nav>
          </div>
        </>
      ) : (
        <nav className="desktop-menu">
          <ul className="menu-list">
            <li><Link href="/">Home</Link></li>
            <li>
              <button className="submenu-toggle" onClick={() => toggleSubMenu('uiux')}>UI/UX</button>
              {openSubMenu === 'uiux' && (
                <ul className="submenu">
                  <li><Link href="/ux-strategy">UX-Strategie</Link></li>
                  <li><Link href="/usability-testing">Usability-Testing</Link></li>
                  <li><Link href="/design-thinking">Design Thinking</Link></li>
                  <li><Link href="/wireframes-prototypes">Wireframes und Prototypen</Link></li>
                </ul>
              )}
            </li>
            <li>
              <button className="submenu-toggle" onClick={() => toggleSubMenu('webdesign')}>Webdesign</button>
              {openSubMenu === 'webdesign' && (
                <ul className="submenu">
                  <li><Link href="/responsive-design">Responsive Design</Link></li>
                  <li><Link href="/mobile-first">Mobile First</Link></li>
                  <li><Link href="/accesible-web-design">Barrierefreiheit</Link></li>
                  <li><Link href="/design-trends">Design Trends</Link></li>
                </ul>
              )}
            </li>
            <li>
              <button className="submenu-toggle" onClick={() => toggleSubMenu('weitere')}>Weitere Kategorien</button>
              {openSubMenu === 'weitere' && (
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
      )}
    </>
  );
}

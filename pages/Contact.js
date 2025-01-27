'use client';
import React from 'react';
import Link from 'next/link';
import CookieBanner from '../src/app/components/CookieBanner';
import Menu from '@/app/components/Nav';
import ScrollToTopButton from '@/app/components/Arow';
import ThemeToggle from '@/app/components/ThemeToggle';
import PhotoCarousel from '@/app/components/PhotoCarousel';
import Logo from '@/app/components/Logo';
import { FaWhatsapp } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import '../src/app/globals.css';
import '../src/app/styles/Home.css';
import '../src/app/styles/About-us.css'; // Stelle sicher, dass du eine CSS-Datei für das Styling hast

const Contact = () => {
  return (
    <div>
      <CookieBanner />
      <Menu />
      <ScrollToTopButton />
      <ThemeToggle />

<section style={{ height: 'fit-content' }}>
      <PhotoCarousel/>
  <h1>Contact</h1>
  <p>Kontaktiere uns hier:</p>
  <Logo /> 

  <div className="links">
    {/* WhatsApp Link */}
    <a href="https://wa.me/410794630666" target="_blank" style={{ marginRight: '20px' }}>
      <FaWhatsapp style={{ fontSize: '2rem', color: '#25D366', cursor: 'pointer' }} />
    </a>

    {/* E-Mail Link */}
    <a href="mailto:bruno@brainbloom.ch" target="_blank">
      <FaEnvelope style={{ fontSize: '2rem', color: '#0072F6', cursor: 'pointer' }} />
    </a>
  </div>

  {/* Öffnungszeiten */}
  <div className="open">
    <h3>Telefonzeiten:</h3>
    <ul>
      <li>Montag - Freitag: 14:00 - 18:00</li>
      <li>Samstag: 14:00 - 16:00</li>
      <li>Sonntag: Geschlossen</li>
    </ul>
  </div>

  {/* Menülinks aus dem Hauptmenu */}
  <div className="menu-links">
      <ul className='flexUl'>
      <ul className='liste'>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/ux-strategy">UX-Strategie</Link></li>
      <li><Link href="/usability-testing">Usability-Testing</Link></li>
      <li><Link href="/design-thinking">Design Thinking</Link></li>
      </ul>
      <ul className='liste'>
      <li><Link href="/wireframes-prototypes">Wireframes & Prototypen</Link></li>
      <li><Link href="/responsive-design">Responsive Design</Link></li>
      <li><Link href="/mobile-first">Mobile-First Ansätze</Link></li>
      <li><Link href="/accessible-web-design">Barrierefreies Webdesign</Link></li>
      </ul>
      <ul className='liste'>
      <li><Link href="/design-trends">Design-Trends</Link></li>
      <li><Link href="/coding">Coding</Link></li>
      <li><Link href="/web-development">Webentwicklung</Link></li>
      <li><Link href="/portfolio">Portfolio</Link></li>
      </ul>
      <ul className='liste'>
      <li><Link href="/blog">Blog</Link></li>
      <li><Link href="/about-us">About us</Link></li>
      <li><Link href="/career">Karriere</Link></li>
      <li><Link href="/contact">Kontakt</Link></li>
      </ul>
    </ul>
  </div>
</section>

</div>
  );
};

export default Contact;

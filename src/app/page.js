"use client"
import Link from 'next/link';
import Header from "./components/Header";
import Footer from "./components/Footer";
import PhotoCarousel from "./components/PhotoCarousel";
import ThemeToggle from "./components/ThemeToggle";
import ScrollToTopButton from "./components/Arow";
import VideoPreview from "./components/Video";
import LazySection from "./components/lasy";
import Logo from "./components/Logo";
import CookieBanner from "./components/CookieBanner";
import Menu from "./components/Nav";
import { FaWhatsapp } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

import './globals.css';
import './styles/Home.css';
export default function Home() {
 

  return (
    <div>
      <CookieBanner/>
      <Menu />
       <ScrollToTopButton />
       <ThemeToggle />
       <VideoPreview />
      <Header />
      <section id="about" style={{ height: 'fit-content' }}>
      <div className="gradient-line"></div> {/* Querlinie mit Gradient */}
      <div className="flex">
    <div>
        <h1>About Us – Professionelles Webdesign für die Region Bern</h1>
<p>Willkommen bei Baumgartner Development, Ihrem zuverlässigen Partner für modernes und funktionales Webdesign in der Region Bern. Wir sind spezialisiert auf die Gestaltung und Entwicklung von Websites, die nicht nur ästhetisch überzeugen, sondern auch optimal auf die Bedürfnisse Ihres Unternehmens zugeschnitten sind.</p>

<h2>Unsere Mission: Ihr Erfolg im digitalen Raum</h2>
<p>In der heutigen digitalen Welt ist eine professionelle Online-Präsenz unverzichtbar. Unsere Mission ist es, Unternehmen in Bern und Umgebung dabei zu helfen, mit innovativen Webdesigns ihre Zielgruppen zu erreichen und sich von der Konkurrenz abzuheben.</p>
</div>


<div className="about"
    
  />

</div>
<LazySection/>
<div className="gradient-line"></div> {/* Querlinie mit Gradient */}
<div className="flex2">
  <div className="about2"></div>
  <div>
<h2>Was uns auszeichnet</h2>
<p>Individuelle Lösungen: Wir hören zu und entwickeln maßgeschneiderte Websites, die genau zu Ihrem Unternehmen passen.</p>
<p>Modernes Design: Wir setzen auf ansprechende und zeitgemäße Designs, die Ihre Marke im besten Licht präsentieren.</p>
<p>Benutzerfreundlichkeit: Unsere Websites bieten eine intuitive Navigation und sind sowohl für Desktop- als auch für mobile Geräte optimiert.</p>
<p>SEO-Optimierung: Jede Website wird so gestaltet, dass sie in Suchmaschinen wie Google besser gefunden wird – speziell für die Region Bern.</p>
</div>
</div>
<h2>Unser Fokus auf Bern</h2>
<p>Als lokales Unternehmen verstehen wir die Bedürfnisse und Besonderheiten der Unternehmen in Bern und Umgebung. Ob Sie eine kleine Firma, ein Start-up oder ein etabliertes Unternehmen sind – wir kennen den regionalen Markt und helfen Ihnen, sich erfolgreich zu positionieren.</p>
<h3>Unsere Leisungen</h3>

  <ul>
    <li>
Webdesign und -entwicklung
</li><li>
Responsive Design für mobile Geräte
</li><li>
Suchmaschinenoptimierung (SEO)
</li><li>
Pflege und Wartung Ihrer Website
</li><li>
Integration moderner Tools und Funktionen
</li>
</ul>

<h2>Warum Webdesign von uns?</h2>
<div className="gradient-line"></div> {/* Querlinie mit Gradient */}
<div className="flex">
<div>
<p>Unser Team kombiniert Kreativität, technisches Know-how und ein tiefes Verständnis für die Online-Welt, um Websites zu schaffen, die begeistern und Ergebnisse liefern. Kunden in Bern und der ganzen Schweiz vertrauen auf unsere Expertise.</p>

<p>Lassen Sie uns gemeinsam Ihre Vision umsetzen!</p>

<p>Kontaktieren Sie uns noch heute für ein unverbindliches Beratungsgespräch. Gemeinsam entwickeln wir eine Website, die Ihr Unternehmen in Bern und darüber hinaus erfolgreich präsentiert.</p>

<p>Baumgartner Development – Ihr Experte für Webdesign in Bern.</p>
</div>
<div className="about3">
</div>
</div>
      </section>
      
<LazySection/>
     
      <section id="services" style={{ height: 'fit-content'}}>
      <PhotoCarousel/>
        <h1>Unsere Webdesign-Services in der Region Bern</h1>
        <div className="gradient-line"></div> {/* Querlinie mit Gradient */}
        <p>
Wir bieten Ihnen maßgeschneiderte Webdesign-Lösungen in der Region Bern, die Ihre Marke stärken und Ihre Ziele verwirklichen. Als Experten für modernes und funktionales Webdesign wissen wir, wie wichtig ein professioneller Internetauftritt für den Erfolg Ihres Unternehmens ist. </p>

<h2>
Unsere Leistungen im Bereich Webdesign für Bern und Umgebung
</h2>
<p>
1. Individuelles Webdesign
</p>
<p>
Keine Website gleicht der anderen. Wir entwickeln Designs, die Ihre Marke perfekt repräsentieren und gleichzeitig auf die Anforderungen Ihrer Zielgruppe in der Region Bern abgestimmt sind.
</p>
<p>
2. Mobile-Optimierung
</p>
<p>
Ein Großteil der Website-Besucher nutzt heute mobile Endgeräte. Wir stellen sicher, dass Ihre Website auf Smartphones, Tablets und Desktops optimal angezeigt wird.
</p>
<p>
3. Suchmaschinenoptimierung (SEO)
</p>
<p>
Damit Sie in der Region Bern gefunden werden, legen wir großen Wert auf SEO. Mit gezielten Maßnahmen verbessern wir Ihre Sichtbarkeit und sorgen für eine Top-Platzierung in Suchmaschinen.
</p>
<p>
4. Benutzerfreundlichkeit (UX/UI)
</p>
<p>
Wir gestalten Websites, die einfach zu bedienen sind und eine klare Struktur haben. So finden Ihre Besucher schnell, wonach sie suchen.
</p>
<p>
5. Wartung und Support
</p>
<p>
Auch nach dem Launch Ihrer Website stehen wir Ihnen zur Seite. Wir kümmern uns um Updates, Sicherheitsmaßnahmen und weitere Anpassungen.
</p>
<div className="gradient-line"></div> {/* Querlinie mit Gradient */}
<div className="flex">
<div className="services1"></div>
  <div>
<h2>
Vorteile unserer Webdesign-Services in Bern
</h2>
<p>
Lokale Expertise: Wir verstehen die spezifischen Anforderungen und Zielgruppen in der Region Bern.
</p>
<p>
Kreativität: Unsere Designs heben Ihre Marke von der Konkurrenz ab.
</p>
<p>
Technische Präzision: Von der schnellen Ladezeit bis zur Suchmaschinenfreundlichkeit – wir setzen auf Qualität.
</p>
<p>
Persönliche Betreuung: Wir begleiten Sie während des gesamten Projekts und bieten eine transparente Zusammenarbeit.
</p>
</div></div>
<div className="gradient-line"></div> {/* Querlinie mit Gradient */}
<h2>Warum Sie uns wählen sollten</h2>
<div className="flex">
  <div>
<p>

Wir sind Ihr zuverlässiger Partner für professionelles Webdesign in der Region Bern. Ob kleine Unternehmen, Start-ups oder größere Organisationen – wir bieten für jeden Kunden individuelle Lösungen.
</p>
<p>
Webdesign für Bern: Ihre Vorteile auf einen Blick
</p>
<p>
Höhere Sichtbarkeit in der Region Bern durch SEO
</p>
<p>
Professionelles und modernes Design
</p>
<p>
Mobile-first-Ansatz für maximale Erreichbarkeit
</p>
<p>
Langfristiger Support und Beratung
</p>
</div>
<div className="services"></div>
</div>
<div>
<h2>Bereit für eine neue Website?</h2>
</div> <div className="gradient-line"></div> {/* Querlinie mit Gradient */}
<p>
Lassen Sie uns gemeinsam Ihre digitale Präsenz in der Region Bern gestalten. Kontaktieren Sie uns noch heute, um mehr über unsere Webdesign-Services zu erfahren und ein unverbindliches Angebot zu erhalten.
</p>
<p>
Baumgartner Development – Ihr Spezialist für Webdesign in Bern und Umgebung.</p>

      </section>
      
     
      <section id="technologies" style={{ height: 'fit-content' }}>
      <PhotoCarousel/>
      <h1>Technologien für modernes Webdesign – Ihr Partner in der Region Bern</h1>
      <div className="gradient-line"></div> {/* Querlinie mit Gradient */}
      <div className="flex">
        <div>
      <p>
Um Ihnen als Unternehmen in der Region Bern eine moderne, benutzerfreundliche und effektive Website zu bieten, setzen wir auf die neuesten Webdesign-Technologien. Unsere Expertise in Webentwicklung und Responsive Design garantiert Ihnen eine Website, die nicht nur gut aussieht, sondern auch reibungslos funktioniert und Ihre Zielgruppe anspricht.
</p>
<h2>
Unsere Technologien im Webdesign
</h2>

<h3>
1. HTML5 & CSS3
</h3>
<p>
Die Grundlage für jedes Webdesign-Projekt: Mit HTML5 erstellen wir die Struktur Ihrer Website, während CSS3 für modernes Styling sorgt. Das Ergebnis ist eine Website, die visuell überzeugt und technisch auf dem neuesten Stand ist.
</p>
<h3>
2. JavaScript und Frameworks
</h3>
<p>
Für dynamische und interaktive Benutzererfahrungen setzen wir JavaScript sowie Frameworks wie React.js, Vue.js oder Next.js ein. Diese Technologien machen Ihre Website leistungsstark und flexibel.
</p>
<h3>
3. Content-Management-Systeme (CMS)
</h3>
<p>
Wir arbeiten mit führenden CMS-Plattformen wie WordPress, Sanity, oder Strapi, um Ihnen eine einfache Verwaltung Ihrer Inhalte zu ermöglichen. Besonders für Unternehmen in der Region Bern sind diese Systeme ideal, da sie eine schnelle und effektive Pflege der Website erlauben.
</p>
<h3>
4. Responsive Design
</h3>
<p>
Ihre Website wird auf allen Geräten optimal angezeigt – vom Desktop bis zum Smartphone. Wir entwickeln Websites, die dank responsive Design die beste Benutzererfahrung auf jedem Bildschirm bieten.
</p>
<h3>
5. SEO-Tools und Optimierungen
</h3>
<p>
Damit Ihre Website in Suchmaschinen gefunden wird, setzen wir auf Technologien wie Google Lighthouse, Schema Markup und modernste SEO-Strategien. Besonders in der Region Bern sorgen wir dafür, dass Sie regional sichtbar bleiben.
</p>
<h3>
6. Datenbanken und Back-End-Technologien
</h3>
<p>
Für datenintensive Anwendungen verwenden wir MongoDB, MySQL und andere leistungsstarke Datenbanksysteme. Unsere Back-End-Entwicklung basiert auf robusten Frameworks wie Node.js oder Django, um Ihre Website sicher und zuverlässig zu machen.
</p>
<h3>
7. Cloud-Hosting und Skalierbarkeit
</h3>

<p>
Wir hosten Ihre Website auf modernen Plattformen wie AWS, Google Cloud oder Vercel. Dadurch bleibt Ihre Website auch bei hohem Traffic stabil und schnell.
</p>
</div>
<div className="tech"></div></div>

<h3>
Warum moderne Technologien wichtig sind
</h3>
<div className="gradient-line"></div> {/* Querlinie mit Gradient */}
<ul>
  <li>
Schnelle Ladezeiten: Dank optimierter Technologien wird Ihre Website schnell geladen, was die Nutzererfahrung verbessert und Ihre SEO stärkt.
</li><li>
Sicherheit: Mit den neuesten Sicherheitsstandards schützen wir Ihre Website vor Angriffen.
</li><li>
Zukunftssicherheit: Durch den Einsatz aktueller Technologien bleibt Ihre Website über Jahre hinweg auf dem neuesten Stand.
</li><li>
Flexibilität: Ob kleine Anpassungen oder große Erweiterungen – unsere Technologien ermöglichen eine einfache Skalierbarkeit.
</li>
</ul>
<h2>
Ihre Vorteile mit uns als Partner in der Region Bern
</h2>
<div className="gradient-line"></div> {/* Querlinie mit Gradient */}
<p>
Wir sind stolz darauf, Unternehmen in der Region Bern mit fortschrittlichem Webdesign und modernsten Technologien zu unterstützen. Mit uns erhalten Sie nicht nur eine Website, sondern eine digitale Lösung, die perfekt auf Ihre Bedürfnisse zugeschnitten ist.
</p>
<p>
Bereit, Ihre Website auf das nächste Level zu bringen?
</p>
<p>
Kontaktieren Sie uns noch heute und erfahren Sie, wie wir mit unseren Webdesign-Technologien Ihre Online-Präsenz in der Region Bern stärken können.
</p>
<p>
Baumgartner Development – Webdesign in Bern mit modernsten Technologien.</p>
      </section>
      
      
      
 
      <section  style={{ height: 'fit-content' }}>
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
  <div id="contactHome" className="open">
    <h2>Telefonzeiten:</h2>
    <ul>
      <li>Montag - Freitag: 14:00 - 18:00</li>
      <li>Samstag: 14:00 - 16:00</li>
      <li>Sonntag: Geschlossen</li>
    </ul>
  </div>

  {/* Menülinks aus dem Hauptmenu */}
  <div className="menu-links">
      <ul className='flexUl'>
      <ol className='liste'>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/ux-strategy">UX-Strategie</Link></li>
      <li><Link href="/usability-testing">Usability-Testing</Link></li>
      <li><Link href="/design-thinking">Design Thinking</Link></li>
      </ol>
      <ol className='liste'>
      <li><Link href="/wireframes-prototypes">Wireframes & Prototypen</Link></li>
      <li><Link href="/responsive-design">Responsive Design</Link></li>
      <li><Link href="/mobile-first">Mobile-First Ansätze</Link></li>
      <li><Link href="/accessible-web-design">Barrierefreies Webdesign</Link></li>
      </ol>
      <ol className='liste'>
      <li><Link href="/design-trends">Design-Trends</Link></li>
      <li><Link href="/coding">Coding</Link></li>
      <li><Link href="/web-development">Webentwicklung</Link></li>
      <li><Link href="/portfolio">Portfolio</Link></li>
      </ol>
      <ol className='liste'>
      <li><Link href="/blog">Blog</Link></li>
      <li><Link href="/about-us">About us</Link></li>
      <li><Link href="/career">Karriere</Link></li>
      <li><Link href="/kontakt">Kontakt</Link></li>
      </ol>
    </ul>
  </div>
</section>

    <LazySection/>
    <Footer />
    </div>
  );
}

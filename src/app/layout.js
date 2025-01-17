"use client";

import { useEffect } from "react";
import Head from "next/head";
import GoogleAnalytics from "./components/GoogleAnalytics";

export default function RootLayout({ children }) {
  const metadata = {
    title: "Baumgartner Development",
    description: "Webentwicklung und digitale Lösungen von Baumgartner Development.",
    keywords: "Webentwicklung, digitale Lösungen, Baumgartner, Webdesign, JavaScript, Next.js, React.js",
    author: "Bruno Baumgartner",
    image: "https://www.myiq.ch/assets/pen.png",
    url: "https://www.myiq.ch",
  };

  return (
    <html lang="de">
      <Head>
        {/* Meta-Tags für SEO */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />

        {/* Open Graph Meta-Tags für Social Sharing */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta-Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />

        {/* Title */}
        <title>{metadata.title}</title>

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Rajdhani:wght@400;700&display=swap"
          rel="stylesheet"
        />

        {/* Strukturierte Daten (Schema.org-Markup) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Baumgartner Development",
            "url": "https://www.myiq.ch",
            "logo": "https://www.myiq.ch/assets/logo.png",
            "sameAs": [],
          })}
        </script>
      </Head>
      <body>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}

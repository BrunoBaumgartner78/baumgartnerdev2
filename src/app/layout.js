import GoogleAnalytics from "./components/GoogleAnalytics";
import Head from "next/head"; // Für Head-Tags


export const metadata = {
  title: "Baumgartner Webdesign Development Bern",
  description: "Webentwicklung und digitale Lösungen von Baumgartner Development.",
  keywords: "Webentwicklung, digitale Lösungen, Baumgartner, Webdesign, JavaScript, Next.js, React.js, Bern, Region",
  author: "Bruno Baumgartner",
  openGraph: {
    title: "Baumgartner Development",
    description: "Webentwicklung und digitale Lösungen von Baumgartner Development.",
    url: "https://www.myiq.ch",
    images: [
      {
        url: "https://www.myiq.ch/public/assets/pen.png",
        width: 800,
        height: 600,
        alt: "Baumgartner Development Titelbild",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Baumgartner Development",
    description: "Webentwicklung und digitale Lösungen von Baumgartner Development.",
    images: ["https://www.myiq.ch/assets/pen.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <Head>
        {/* Standard Meta-Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <link rel="canonical" href={metadata.openGraph.url} />

        {/* Open Graph Meta-Tags */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height} />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />

        {/* Twitter Meta-Tags */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />

        {/* Favicon */}
        <link rel="icon" href={metadata.icons.icon} sizes="any" />
        <link rel="apple-touch-icon" href={metadata.icons.apple} />
        
        {/* Page Title */}
        <title>{metadata.title}</title>

        {/*Canonial Tag*/}
        <link rel="canonical" href="https://www.myiq.ch" />
      </Head>
      <body>
      
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}

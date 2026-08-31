import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://esp-en-alturas.vercel.app"),
  title: "Especialistas en Alturas SAS — Trabajo Seguro en Altura",
  description:
    "Trabajos en alturas certificados: estructuras metálicas, líneas de vida, fachadas y cubiertas. SG-SST estructurado, personal calificado, desde 2014.",
  keywords: "trabajo en alturas, líneas de vida, estructuras metálicas, fachadas, SG-SST, Colombia, Medellín",
  openGraph: {
    title: "Especialistas en Alturas SAS | Ingeniería de Riesgo",
    description: "Expertos en trabajos seguros de alto riesgo. Personal certificado y cumplimiento de la Resolución 4272/2021.",
    url: "https://esp-en-alturas.vercel.app",
    siteName: "Especialistas en Alturas SAS",
    images: [
      {
        url: "/assets/hero_heights.jpg",
        width: 1200,
        height: 630,
        alt: "Especialistas en Alturas - Trabajo Seguro",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Especialistas en Alturas SAS",
    description: "Expertos en trabajos seguros de alto riesgo.",
    images: ["/assets/hero_heights.jpg"],
  },
};

import CookieBanner from "./components/CookieBanner";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className={`${oswald.variable} ${inter.variable}`}>
        {/* Schema Markup for Local SEO (Google loves this) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Especialistas en Alturas S.A.S.",
              "image": "https://esp-en-alturas.vercel.app/assets/logo-premium.png",
              "@id": "https://esp-en-alturas.vercel.app",
              "url": "https://esp-en-alturas.vercel.app",
              "telephone": "+573053439984",
              "email": "losespecialistasenalturas@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Vda. La Playa Paraje La Mosca, Punto La Esperanza",
                "addressLocality": "Rionegro",
                "addressRegion": "Antioquia",
                "addressCountry": "CO"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 6.1551,
                "longitude": -75.3737
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "07:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://www.facebook.com/losespecialistasenalturas/",
                "https://www.instagram.com/especialistas_en_alturas_sas"
              ]
            }),
          }}
        />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}

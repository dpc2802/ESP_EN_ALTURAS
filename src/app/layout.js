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
  title: "Especialistas en Alturas SAS | Medellín y Oriente Antioqueño",
  description:
    "Expertos en trabajo seguro en alturas en Medellín, Rionegro y el Oriente Antioqueño. Mantenimiento de fachadas, líneas de vida, cubiertas y estructuras metálicas.",
  keywords: "trabajo en alturas medellin, mantenimiento de fachadas rionegro, lineas de vida oriente antioqueño, estructuras metalicas antioquia, empresas de alturas medellin, rionegro",
  openGraph: {
    title: "Especialistas en Alturas SAS | Ingeniería de Riesgo en Antioquia",
    description: "Expertos en trabajos seguros de alto riesgo en Medellín y Oriente Antioqueño. Cumplimiento estricto de la Resolución 4272/2021.",
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
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}

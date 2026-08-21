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
  title: "Especialistas en Alturas SAS — Trabajo Seguro en Altura",
  description:
    "Trabajos en alturas certificados: estructuras metálicas, líneas de vida, fachadas y cubiertas. SG-SST estructurado, personal calificado, desde 2014.",
  keywords: "trabajo en alturas, líneas de vida, estructuras metálicas, fachadas, SG-SST, Colombia",
  openGraph: {
    title: "Especialistas en Alturas SAS",
    description: "Ingeniería de riesgo al más alto nivel. Personal certificado y tolerancia cero a accidentes.",
    images: ["/assets/hero_heights.jpg"],
  },
};

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
      <body className={`${oswald.variable} ${inter.variable}`}>{children}</body>
    </html>
  );
}

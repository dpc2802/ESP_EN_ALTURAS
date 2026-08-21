import Header from "../components/Header";
import Footer from "../components/Footer";
import PortfolioClient from "./PortfolioClient";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import FloatingPhone from "../components/FloatingPhone";
import ScrollToTop from "../components/ScrollToTop";

export const metadata = {
  title: "Portafolio y Casos de Éxito | Especialistas en Alturas",
  description: "Galería de trabajos realizados en fachadas, estructuras metálicas, líneas de vida y mantenimientos industriales en altura.",
};

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main className="portfolio-page" style={{ paddingTop: '100px', background: '#f4f5f7', minHeight: '100vh' }}>
        <div className="wrap" style={{ padding: '60px 20px', textAlign: 'left' }}>
          <h1 style={{ fontSize: '32px', color: 'var(--navy)', fontFamily: 'var(--font-head)', marginBottom: '12px', fontWeight: 800, textTransform: 'uppercase' }}>
            GALERÍA DE <span style={{ color: 'var(--orange)' }}>TRABAJOS</span>
          </h1>
          <p style={{ maxWidth: '800px', margin: '0 0 40px', color: '#666', fontSize: '16px' }}>
            Las fotos de nuestras intervenciones reales, organizadas por categoría.
          </p>

          <PortfolioClient />
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <FloatingPhone />
      <ScrollToTop />
    </>
  );
}

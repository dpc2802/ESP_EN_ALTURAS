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
      <main className="portfolio-page" style={{ paddingTop: '100px', background: '#f8f9fc', minHeight: '100vh' }}>
        <div className="wrap" style={{ padding: '60px 20px', textAlign: 'center' }}>
          <span className="about-tag" style={{ justifyContent: 'center' }}>05. Nuestro Trabajo</span>
          <h1 style={{ fontSize: '40px', color: 'var(--navy)', fontFamily: 'var(--font-head)', marginBottom: '16px' }}>
            Casos de Éxito en Campo
          </h1>
          <p style={{ maxWidth: '600px', margin: '0 auto 40px', color: '#555', fontSize: '18px' }}>
            Explora nuestra galería de intervenciones reales. Haz clic en los botones para filtrar por especialidad.
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

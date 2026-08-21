import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FloatingWhatsApp from "../../components/FloatingWhatsApp";
import InteractiveQuote from "../../components/InteractiveQuote";

export const metadata = {
  title: "Trabajos en Cubiertas e Impermeabilización | Medellín",
  description: "Mantenimiento, reparación e impermeabilización de cubiertas y techos industriales. Expertos en alturas con SG-SST certificado.",
};

export default function TrabajosCubiertas() {
  return (
    <>
      <Header />
      <main>
        <section className="hero" style={{ minHeight: "60vh", background: "var(--blue-950)" }}>
          <div className="hero-mesh" />
          <div className="wrap" style={{ position: "relative", zIndex: 2, paddingTop: "120px", paddingBottom: "80px" }}>
            <span className="section-eyebrow">Reparación e Instalación</span>
            <h1 style={{ color: "var(--white)", fontSize: "clamp(32px, 8vw, 64px)", fontFamily: "var(--font-head)", textTransform: "uppercase", marginBottom: "24px" }}>
              Trabajos en Cubiertas
            </h1>
            <p style={{ color: "var(--white)", fontSize: "18px", opacity: 0.9, maxWidth: "600px", lineHeight: 1.6 }}>
              Solucionamos filtraciones, desgaste y daños en cubiertas industriales, comerciales y residenciales, operando con total seguridad sin interrumpir las operaciones internas.
            </p>
          </div>
        </section>

        <section style={{ padding: "80px 0", background: "var(--white)" }}>
          <div className="wrap">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px" }}>
              <div>
                <h2 style={{ fontFamily: "var(--font-head)", fontSize: "32px", color: "var(--blue-950)", marginBottom: "20px" }}>
                  Mantenimiento preventivo y correctivo
                </h2>
                <p style={{ color: "#444", lineHeight: 1.7, marginBottom: "20px" }}>
                  Un techo en mal estado compromete el interior de las edificaciones y su estructura. Aplicamos los mejores recubrimientos del mercado y reparamos daños estructurales con personal debidamente certificado para transitar en cubiertas frágiles.
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                  <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", color: "#444" }}>
                    <i className="fa-solid fa-water" style={{ color: "var(--orange)", marginTop: "4px" }} />
                    <span><strong>Impermeabilización:</strong> Membranas asfálticas, poliuretanos, y recubrimientos acrílicos.</span>
                  </li>
                  <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", color: "#444" }}>
                    <i className="fa-solid fa-hammer" style={{ color: "var(--orange)", marginTop: "4px" }} />
                    <span><strong>Cambio de Tejas:</strong> Termoacústicas, policarbonato, fibrocemento y zinc.</span>
                  </li>
                  <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", color: "#444" }}>
                    <i className="fa-solid fa-broom" style={{ color: "var(--orange)", marginTop: "4px" }} />
                    <span><strong>Limpieza de Canales:</strong> Desobstrucción de bajantes y reparación de canoas metálicas.</span>
                  </li>
                </ul>
              </div>
              
              <div style={{ background: "var(--blue-950)", padding: "40px", borderRadius: "16px" }}>
                <h3 style={{ color: "var(--white)", fontFamily: "var(--font-head)", marginBottom: "24px" }}>
                  Cotizar Trabajos en Cubiertas
                </h3>
                <InteractiveQuote />
              </div>
            </div>
          </div>
        </section>
      </main>
      <FloatingWhatsApp />
      <Footer />
    </>
  );
}

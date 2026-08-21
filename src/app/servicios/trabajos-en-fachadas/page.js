import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FloatingWhatsApp from "../../components/FloatingWhatsApp";
import ScrollToTop from "../../components/ScrollToTop";
import InteractiveQuote from "../../components/InteractiveQuote";

export const metadata = {
  title: "Trabajos en Fachadas y Lavado en Alturas | Medellín",
  description: "Mantenimiento, pintura, lavado e impermeabilización de fachadas en alturas. Servicio seguro y certificado bajo la Res. 4272/2021.",
};

export default function TrabajosFachadas() {
  return (
    <>
      <Header />
      <main>
        <section className="hero" style={{ minHeight: "60vh", background: "var(--blue-950)" }}>
          <div className="hero-mesh" />
          <div className="wrap" style={{ position: "relative", zIndex: 2, paddingTop: "120px", paddingBottom: "80px" }}>
            <span className="section-eyebrow">Mantenimiento Integral</span>
            <h1 style={{ color: "var(--white)", fontSize: "clamp(32px, 8vw, 64px)", fontFamily: "var(--font-head)", textTransform: "uppercase", marginBottom: "24px" }}>
              Trabajos en Fachadas
            </h1>
            <p style={{ color: "var(--white)", fontSize: "18px", opacity: 0.9, maxWidth: "600px", lineHeight: 1.6 }}>
              Preserva el valor y la estética de tu edificio. Realizamos lavado, pintura, impermeabilización y restauración de todo tipo de fachadas mediante sistemas de acceso por cuerdas.
            </p>
          </div>
        </section>

        <section style={{ padding: "80px 0", background: "var(--white)" }}>
          <div className="wrap">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px" }}>
              <div>
                <h2 style={{ fontFamily: "var(--font-head)", fontSize: "32px", color: "var(--blue-950)", marginBottom: "20px" }}>
                  Intervenciones precisas sin andamios
                </h2>
                <p style={{ color: "#444", lineHeight: 1.7, marginBottom: "20px" }}>
                  Nuestra técnica de acceso por cuerdas permite llegar a cualquier rincón de su fachada sin la necesidad de costosos y molestos andamios que bloquean accesos o dañan la estética temporal de su edificación.
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                  <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", color: "#444" }}>
                    <i className="fa-solid fa-droplet" style={{ color: "var(--orange)", marginTop: "4px" }} />
                    <span><strong>Lavado e Hidro-presión:</strong> Eliminación de hongos, polución y manchas estructurales.</span>
                  </li>
                  <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", color: "#444" }}>
                    <i className="fa-solid fa-fill-drip" style={{ color: "var(--orange)", marginTop: "4px" }} />
                    <span><strong>Pintura Profesional:</strong> Recubrimientos de alta duración y resistencia a la intemperie.</span>
                  </li>
                  <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", color: "#444" }}>
                    <i className="fa-solid fa-layer-group" style={{ color: "var(--orange)", marginTop: "4px" }} />
                    <span><strong>Mantenimiento de Ventanería:</strong> Sellamiento de siliconas, cambio de vidrios y perfilería en rascacielos.</span>
                  </li>
                </ul>
              </div>
              
              <div style={{ background: "var(--blue-950)", padding: "40px", borderRadius: "16px" }}>
                <h3 style={{ color: "var(--white)", fontFamily: "var(--font-head)", marginBottom: "24px" }}>
                  Cotizar Trabajos en Fachadas
                </h3>
                <InteractiveQuote />
              </div>
            </div>
          </div>
        </section>
      </main>
      <FloatingWhatsApp />
      <ScrollToTop />
      <Footer />
    </>
  );
}

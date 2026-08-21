import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FloatingWhatsApp from "../../components/FloatingWhatsApp";
import InteractiveQuote from "../../components/InteractiveQuote";

export const metadata = {
  title: "Estructuras Metálicas y Soldadura en Alturas | Medellín",
  description: "Diseño, montaje y soldadura de estructuras metálicas en alturas. Cumplimiento de Res. 4272/2021. Cotiza tu proyecto en Medellín.",
};

export default function EstructurasMetalicas() {
  return (
    <>
      <Header />
      <main>
        <section className="hero" style={{ minHeight: "60vh", background: "var(--blue-950)" }}>
          <div className="hero-mesh" />
          <div className="wrap" style={{ position: "relative", zIndex: 2, paddingTop: "120px", paddingBottom: "80px" }}>
            <span className="section-eyebrow">Servicio Especializado</span>
            <h1 style={{ color: "var(--white)", fontSize: "clamp(32px, 8vw, 64px)", fontFamily: "var(--font-head)", textTransform: "uppercase", marginBottom: "24px" }}>
              Estructuras Metálicas
            </h1>
            <p style={{ color: "var(--white)", fontSize: "18px", opacity: 0.9, maxWidth: "600px", lineHeight: 1.6 }}>
              Diseño, montaje, refuerzo y mantenimiento de estructuras metálicas en lugares de difícil acceso.
              Utilizamos técnicas de acceso por cuerdas garantizando máxima seguridad y precisión.
            </p>
          </div>
        </section>

        <section style={{ padding: "80px 0", background: "var(--white)" }}>
          <div className="wrap">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px" }}>
              <div>
                <h2 style={{ fontFamily: "var(--font-head)", fontSize: "32px", color: "var(--blue-950)", marginBottom: "20px" }}>
                  ¿Por qué elegirnos para sus Estructuras?
                </h2>
                <p style={{ color: "#444", lineHeight: 1.7, marginBottom: "20px" }}>
                  La soldadura y el montaje estructural en alturas presentan retos únicos que no cualquier contratista puede asumir. En Especialistas en Alturas SAS combinamos el conocimiento técnico de ingeniería estructural con la experticia en maniobras verticales.
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                  <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", color: "#444" }}>
                    <i className="fa-solid fa-check" style={{ color: "var(--orange)", marginTop: "4px" }} />
                    <span>Soldadores calificados y certificados para trabajo seguro en alturas.</span>
                  </li>
                  <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", color: "#444" }}>
                    <i className="fa-solid fa-check" style={{ color: "var(--orange)", marginTop: "4px" }} />
                    <span>Reducción de costos al evitar el uso de andamios y maquinaria pesada en zonas complejas.</span>
                  </li>
                  <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", color: "#444" }}>
                    <i className="fa-solid fa-check" style={{ color: "var(--orange)", marginTop: "4px" }} />
                    <span>Estricto cumplimiento de la Resolución 4272 de 2021.</span>
                  </li>
                </ul>
              </div>
              
              <div style={{ background: "var(--blue-950)", padding: "40px", borderRadius: "16px" }}>
                <h3 style={{ color: "var(--white)", fontFamily: "var(--font-head)", marginBottom: "24px" }}>
                  Cotizar Estructuras Metálicas
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

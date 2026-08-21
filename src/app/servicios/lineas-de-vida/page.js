import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FloatingWhatsApp from "../../components/FloatingWhatsApp";
import InteractiveQuote from "../../components/InteractiveQuote";

export const metadata = {
  title: "Líneas de Vida y Anclajes Certificados | Medellín",
  description: "Diseño, cálculo, suministro e instalación de líneas de vida y puntos de anclaje. Sistemas garantizados y normativos (Res. 4272).",
};

export default function LineasDeVida() {
  return (
    <>
      <Header />
      <main>
        <section className="hero" style={{ minHeight: "60vh", background: "var(--blue-950)" }}>
          <div className="hero-mesh" />
          <div className="wrap" style={{ position: "relative", zIndex: 2, paddingTop: "120px", paddingBottom: "80px" }}>
            <span className="section-eyebrow">Seguridad Industrial Certificada</span>
            <h1 style={{ color: "var(--white)", fontSize: "clamp(32px, 8vw, 64px)", fontFamily: "var(--font-head)", textTransform: "uppercase", marginBottom: "24px" }}>
              Líneas de Vida y Anclajes
            </h1>
            <p style={{ color: "var(--white)", fontSize: "18px", opacity: 0.9, maxWidth: "600px", lineHeight: 1.6 }}>
              Protegemos a tu equipo con sistemas anticaídas diseñados bajo estrictos cálculos de ingeniería y certificados conforme a la normativa colombiana actual.
            </p>
          </div>
        </section>

        <section style={{ padding: "80px 0", background: "var(--white)" }}>
          <div className="wrap">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px" }}>
              <div>
                <h2 style={{ fontFamily: "var(--font-head)", fontSize: "32px", color: "var(--blue-950)", marginBottom: "20px" }}>
                  Diseño e Instalación Normativa
                </h2>
                <p style={{ color: "#444", lineHeight: 1.7, marginBottom: "20px" }}>
                  Un sistema anticaídas no es solo un cable; requiere de memorias de cálculo, evaluación estructural y certificación. Nuestro equipo de ingenieros asegura que tu edificación cumpla al 100% con la Resolución 4272 de 2021.
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                  <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", color: "#444" }}>
                    <i className="fa-solid fa-link" style={{ color: "var(--orange)", marginTop: "4px" }} />
                    <span><strong>Líneas de Vida Horizontales y Verticales:</strong> En cable de acero inoxidable o galvanizado.</span>
                  </li>
                  <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", color: "#444" }}>
                    <i className="fa-solid fa-anchor" style={{ color: "var(--orange)", marginTop: "4px" }} />
                    <span><strong>Puntos de Anclaje Estructurales:</strong> Instalación en concreto, metal o mampostería estructural.</span>
                  </li>
                  <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", color: "#444" }}>
                    <i className="fa-solid fa-file-signature" style={{ color: "var(--orange)", marginTop: "4px" }} />
                    <span><strong>Certificación y Memorias:</strong> Entrega de planos, cálculos y certificación de producto.</span>
                  </li>
                </ul>
              </div>
              
              <div style={{ background: "var(--blue-950)", padding: "40px", borderRadius: "16px" }}>
                <h3 style={{ color: "var(--white)", fontFamily: "var(--font-head)", marginBottom: "24px" }}>
                  Cotizar Sistema Anticaídas
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

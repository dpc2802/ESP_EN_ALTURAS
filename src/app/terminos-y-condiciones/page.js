"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function TerminosYCondiciones() {
  return (
    <>
      <Header />
      <main style={{ background: '#f8f9fa', minHeight: '100vh', paddingBottom: '100px' }}>
        
        {/* Premium Hero Section */}
        <section style={{ position: 'relative', height: '45vh', minHeight: '350px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
            <Image src="/assets/hero_heights.jpg" alt="Términos y Condiciones Background" fill style={{ objectFit: 'cover' }} priority />
          </div>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(11,29,53,0.95), rgba(11,29,53,0.8))', zIndex: 1 }} />
          
          <motion.div 
            initial="hidden" animate="show" variants={fadeUp}
            style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 20px', width: '100%', maxWidth: '800px' }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'rgba(243,107,34,0.2)', padding: '8px 20px', borderRadius: '30px', color: 'var(--orange)', fontWeight: 700, fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px', border: '1px solid rgba(243,107,34,0.3)' }}>
              <i className="fa-solid fa-file-contract"></i> Marco Legal y Operativo
            </div>
            <h1 style={{ color: '#fff', fontSize: 'clamp(32px, 5vw, 56px)', fontFamily: 'var(--font-head)', fontWeight: 900, lineHeight: 1.1, textTransform: 'uppercase', textShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
              Términos y <span style={{ color: 'var(--orange)' }}>Condiciones</span>
            </h1>
          </motion.div>
        </section>

        {/* Content Section */}
        <div style={{ position: 'relative', zIndex: 10, marginTop: '-60px', padding: '0 20px' }}>
          <motion.div 
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
            style={{ maxWidth: '900px', margin: '0 auto', background: '#fff', borderRadius: '24px', padding: 'clamp(30px, 5vw, 60px)', boxShadow: '0 20px 40px rgba(0,0,0,0.08)', border: '1px solid rgba(0,0,0,0.05)' }}
          >
            <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#444', marginBottom: '40px', fontWeight: 500 }}>
              Al contratar los servicios de <strong style={{ color: 'var(--navy)' }}>Especialistas en Alturas S.A.S.</strong>, el cliente acepta los siguientes parámetros de operación. Estos términos están diseñados estrictamente para proteger la vida humana y garantizar la máxima calidad bajo la Resolución 4272 de 2021.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              
              {/* Item 1 */}
              <div style={{ display: 'flex', gap: '20px' }}>
                <div style={{ flexShrink: 0, width: '50px', height: '50px', background: 'rgba(243,107,34,0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--orange)', fontSize: '24px' }}>
                  <i className="fa-solid fa-clipboard-check"></i>
                </div>
                <div>
                  <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--navy)', marginBottom: '15px' }}>1. Visitas Técnicas Obligatorias</h3>
                  <p style={{ color: '#555', lineHeight: '1.7' }}>
                    Por la naturaleza de alto riesgo de nuestros servicios, ninguna cotización es definitiva sin una inspección presencial. Las cotizaciones emitidas tienen una validez de <strong>15 días calendario</strong>. Nos reservamos el derecho de modificar los presupuestos si durante la ejecución se descubren riesgos no declarados o vicios ocultos en la infraestructura del cliente.
                  </p>
                </div>
              </div>

              <hr style={{ border: 'none', borderTop: '1px solid #eee' }} />

              {/* Item 2 */}
              <div style={{ display: 'flex', gap: '20px' }}>
                <div style={{ flexShrink: 0, width: '50px', height: '50px', background: 'rgba(243,107,34,0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--orange)', fontSize: '24px' }}>
                  <i className="fa-solid fa-building-shield"></i>
                </div>
                <div>
                  <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--navy)', marginBottom: '15px' }}>2. Responsabilidad de Accesos y Permisos</h3>
                  <p style={{ color: '#555', lineHeight: '1.7' }}>
                    El cliente asume la responsabilidad total de garantizar el libre acceso a las zonas de trabajo en las fechas acordadas y gestionar los permisos de administración correspondientes (conjuntos cerrados, centros comerciales, etc.). Asimismo, debe proveer un entorno aislado en tierra para evitar accidentes con transeúntes.
                  </p>
                </div>
              </div>

              <hr style={{ border: 'none', borderTop: '1px solid #eee' }} />

              {/* Item 3 */}
              <div style={{ display: 'flex', gap: '20px' }}>
                <div style={{ flexShrink: 0, width: '50px', height: '50px', background: 'rgba(243,107,34,0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--orange)', fontSize: '24px' }}>
                  <i className="fa-solid fa-helmet-safety"></i>
                </div>
                <div>
                  <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--navy)', marginBottom: '15px' }}>3. Autoridad Operativa y SG-SST</h3>
                  <p style={{ color: '#555', lineHeight: '1.7' }}>
                    Nuestro Coordinador de Alturas tiene la autoridad legal y absoluta para <strong>suspender inmediatamente</strong> cualquier maniobra si las condiciones climáticas (lluvia, tormenta eléctrica, vientos fuertes) o del entorno comprometen la vida del personal operativo. La seguridad no es negociable.
                  </p>
                </div>
              </div>

              <hr style={{ border: 'none', borderTop: '1px solid #eee' }} />

              {/* Item 4 */}
              <div style={{ display: 'flex', gap: '20px' }}>
                <div style={{ flexShrink: 0, width: '50px', height: '50px', background: 'rgba(243,107,34,0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--orange)', fontSize: '24px' }}>
                  <i className="fa-solid fa-award"></i>
                </div>
                <div>
                  <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--navy)', marginBottom: '15px' }}>4. Garantías Estructurales</h3>
                  <p style={{ color: '#555', lineHeight: '1.7' }}>
                    Los tiempos de garantía sobre instalaciones (líneas de vida, puntos de anclaje) e impermeabilizaciones serán detallados explícitamente en el acta de entrega. Para que las certificaciones de anclajes mantengan su validez, el cliente está obligado a programar una inspección de recertificación anual obligatoria.
                  </p>
                </div>
              </div>

            </div>

            <div style={{ marginTop: '50px', textAlign: 'center', color: '#999', fontSize: '14px' }}>
              <em>Última actualización: Agosto de 2026</em>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}

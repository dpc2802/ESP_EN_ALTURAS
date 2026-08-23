"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function PoliticaPrivacidad() {
  return (
    <>
      <Header />
      <main style={{ background: '#f8f9fa', minHeight: '100vh', paddingBottom: '100px' }}>
        
        {/* Premium Hero Section */}
        <section style={{ position: 'relative', height: '45vh', minHeight: '350px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
            <Image src="/assets/portfolio/facade_maintenance.jpg" alt="Política de Privacidad Background" fill style={{ objectFit: 'cover' }} priority />
          </div>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(11,29,53,0.95), rgba(11,29,53,0.8))', zIndex: 1 }} />
          
          <motion.div 
            initial="hidden" animate="show" variants={fadeUp}
            style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 20px', width: '100%', maxWidth: '800px' }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'rgba(243,107,34,0.2)', padding: '8px 20px', borderRadius: '30px', color: 'var(--orange)', fontWeight: 700, fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px', border: '1px solid rgba(243,107,34,0.3)' }}>
              <i className="fa-solid fa-shield-halved"></i> Transparencia y Seguridad
            </div>
            <h1 style={{ color: '#fff', fontSize: 'clamp(32px, 5vw, 56px)', fontFamily: 'var(--font-head)', fontWeight: 900, lineHeight: 1.1, textTransform: 'uppercase', textShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
              Política de <span style={{ color: 'var(--orange)' }}>Privacidad</span>
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
              De acuerdo con lo establecido en la Ley Estatutaria 1581 de 2012 y el Decreto 1377 de 2013 en Colombia, 
              <strong style={{ color: 'var(--navy)' }}> Especialistas en Alturas S.A.S.</strong> garantiza la total privacidad y seguridad de los datos personales de nuestros clientes, proveedores y colaboradores.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              
              {/* Item 1 */}
              <div style={{ display: 'flex', gap: '20px' }}>
                <div style={{ flexShrink: 0, width: '50px', height: '50px', background: 'rgba(243,107,34,0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--orange)', fontSize: '24px' }}>
                  <i className="fa-solid fa-database"></i>
                </div>
                <div>
                  <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--navy)', marginBottom: '15px' }}>1. Finalidad de la recolección de datos</h3>
                  <p style={{ color: '#555', lineHeight: '1.7', marginBottom: '15px' }}>
                    Los datos suministrados a través de nuestros canales oficiales (Formulario, WhatsApp, Correo) se utilizarán estrictamente para:
                  </p>
                  <ul style={{ color: '#555', lineHeight: '1.8', paddingLeft: '20px', listStyleType: 'disc' }}>
                    <li>Gestionar de forma ágil cotizaciones, visitas técnicas y servicios.</li>
                    <li>Enviar información técnica o comercial relevante para el éxito de sus obras.</li>
                    <li>Dar estricto cumplimiento a obligaciones contractuales y regulatorias (Res. 4272/2021).</li>
                  </ul>
                </div>
              </div>

              <hr style={{ border: 'none', borderTop: '1px solid #eee' }} />

              {/* Item 2 */}
              <div style={{ display: 'flex', gap: '20px' }}>
                <div style={{ flexShrink: 0, width: '50px', height: '50px', background: 'rgba(243,107,34,0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--orange)', fontSize: '24px' }}>
                  <i className="fa-solid fa-user-lock"></i>
                </div>
                <div>
                  <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--navy)', marginBottom: '15px' }}>2. Derechos del Titular (Habeas Data)</h3>
                  <p style={{ color: '#555', lineHeight: '1.7' }}>
                    Como titular legítimo de la información, usted tiene el derecho absoluto a conocer, actualizar, rectificar y solicitar la eliminación de sus datos personales de nuestras bases de datos seguras en cualquier momento, sin costo alguno.
                  </p>
                </div>
              </div>

              <hr style={{ border: 'none', borderTop: '1px solid #eee' }} />

              {/* Item 3 */}
              <div style={{ display: 'flex', gap: '20px' }}>
                <div style={{ flexShrink: 0, width: '50px', height: '50px', background: 'rgba(243,107,34,0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--orange)', fontSize: '24px' }}>
                  <i className="fa-solid fa-headset"></i>
                </div>
                <div>
                  <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--navy)', marginBottom: '15px' }}>3. Canales de Atención</h3>
                  <p style={{ color: '#555', lineHeight: '1.7', marginBottom: '15px' }}>
                    Para ejercer sus derechos o resolver cualquier duda sobre sus datos, nuestro canal oficial está siempre abierto:
                  </p>
                  <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '12px', borderLeft: '4px solid var(--orange)', color: '#333' }}>
                    <strong>Email:</strong> <a href="mailto:losespecialistasenalturas@gmail.com" style={{ color: 'var(--orange)' }}>losespecialistasenalturas@gmail.com</a><br/>
                    <strong>Teléfono:</strong> 305 343 9984<br/>
                    <strong>Representante Legal:</strong> Hans Gutiérrez Baena
                  </div>
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

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
      <main style={{ backgroundColor: 'var(--navy)', minHeight: '100vh', paddingBottom: '100px', overflowX: 'hidden' }}>
        
        {/* Premium Hero Section */}
        <section style={{ position: 'relative', height: '40vh', minHeight: '350px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
            <Image src="/assets/facade_maintenance.jpg" alt="Política de Privacidad Background" fill style={{ objectFit: 'cover' }} priority />
          </div>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(11,29,53,0.9), var(--navy))', zIndex: 1 }} />
          
          <motion.div 
            initial="hidden" animate="show" variants={fadeUp}
            style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 20px', width: '100%', maxWidth: '800px', marginTop: '50px' }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'rgba(243,107,34,0.1)', padding: '8px 20px', borderRadius: '30px', color: 'var(--orange)', fontWeight: 800, fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px', border: '1px solid rgba(243,107,34,0.3)', boxShadow: '0 0 20px rgba(243,107,34,0.2)' }}>
              <i className="fa-solid fa-shield-halved"></i> Transparencia y Seguridad
            </div>
            <h1 style={{ color: '#fff', fontSize: 'clamp(36px, 6vw, 64px)', fontFamily: 'var(--font-head)', fontWeight: 900, lineHeight: 1.1, textTransform: 'uppercase', textShadow: '0 10px 30px rgba(0,0,0,0.8)' }}>
              Política de <span style={{ color: 'var(--orange)' }}>Privacidad</span>
            </h1>
          </motion.div>
        </section>

        {/* Content Section */}
        <div style={{ position: 'relative', zIndex: 10, marginTop: '-20px', padding: '0 20px' }}>
          <motion.div 
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
            style={{ 
              maxWidth: '900px', margin: '0 auto', 
              background: 'rgba(255, 255, 255, 0.03)', 
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderRadius: '24px', 
              padding: 'clamp(30px, 5vw, 60px)', 
              boxShadow: '0 30px 60px rgba(0,0,0,0.5)', 
              border: '1px solid rgba(255,255,255,0.05)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Glow Effect inside card */}
            <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '40%', height: '40%', background: 'radial-gradient(circle, rgba(243,107,34,0.1) 0%, rgba(0,0,0,0) 70%)', filter: 'blur(40px)', zIndex: 0 }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <p style={{ fontSize: '18px', lineHeight: '1.8', color: 'rgba(255,255,255,0.8)', marginBottom: '40px', fontWeight: 400 }}>
                De acuerdo con lo establecido en la Ley Estatutaria 1581 de 2012 y el Decreto 1377 de 2013 en Colombia, 
                <strong style={{ color: '#fff' }}> Especialistas en Alturas S.A.S.</strong> garantiza la total privacidad y seguridad de los datos personales de nuestros clientes, proveedores y colaboradores.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                
                {/* Item 1 */}
                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                  <div style={{ flexShrink: 0, width: '60px', height: '60px', background: 'rgba(243,107,34,0.1)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--orange)', fontSize: '28px', border: '1px solid rgba(243,107,34,0.2)', boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}>
                    <i className="fa-solid fa-database"></i>
                  </div>
                  <div style={{ flex: '1 1 250px' }}>
                    <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#fff', marginBottom: '15px' }}>1. Finalidad de la recolección</h3>
                    <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.7', marginBottom: '15px' }}>
                      Los datos suministrados a través de nuestros canales oficiales se utilizarán estrictamente para:
                    </p>
                    <ul style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8', paddingLeft: '20px', listStyleType: 'disc' }}>
                      <li>Gestionar de forma ágil cotizaciones, visitas técnicas y servicios.</li>
                      <li>Enviar información técnica o comercial relevante para el éxito de sus obras.</li>
                      <li>Dar estricto cumplimiento a obligaciones contractuales y regulatorias (Res. 4272/2021).</li>
                    </ul>
                  </div>
                </div>

                <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.05)' }} />

                {/* Item 2 */}
                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                  <div style={{ flexShrink: 0, width: '60px', height: '60px', background: 'rgba(243,107,34,0.1)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--orange)', fontSize: '28px', border: '1px solid rgba(243,107,34,0.2)', boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}>
                    <i className="fa-solid fa-user-lock"></i>
                  </div>
                  <div style={{ flex: '1 1 250px' }}>
                    <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#fff', marginBottom: '15px' }}>2. Derechos del Titular</h3>
                    <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.7' }}>
                      Como titular legítimo de la información, usted tiene el derecho absoluto a conocer, actualizar, rectificar y solicitar la eliminación de sus datos personales de nuestras bases de datos en cualquier momento, sin costo alguno.
                    </p>
                  </div>
                </div>

                <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.05)' }} />

                {/* Item 3 */}
                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                  <div style={{ flexShrink: 0, width: '60px', height: '60px', background: 'rgba(243,107,34,0.1)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--orange)', fontSize: '28px', border: '1px solid rgba(243,107,34,0.2)', boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}>
                    <i className="fa-solid fa-headset"></i>
                  </div>
                  <div style={{ flex: '1 1 250px', minWidth: '0' }}> {/* minWidth 0 prevents flex child from expanding beyond parent on long words */}
                    <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#fff', marginBottom: '15px' }}>3. Canales de Atención</h3>
                    <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.7', marginBottom: '15px' }}>
                      Para ejercer sus derechos o resolver cualquier duda sobre sus datos, nuestro canal oficial está siempre abierto:
                    </p>
                    <div style={{ background: 'rgba(0,0,0,0.3)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid var(--orange)', color: '#fff', wordBreak: 'break-all' }}>
                      <strong style={{ color: 'rgba(255,255,255,0.5)' }}>Email:</strong> <a href="mailto:losespecialistasenalturas@gmail.com" style={{ color: 'var(--orange)' }}>losespecialistasenalturas@gmail.com</a><br/>
                      <strong style={{ color: 'rgba(255,255,255,0.5)' }}>Teléfono:</strong> 305 343 9984<br/>
                      <strong style={{ color: 'rgba(255,255,255,0.5)' }}>Representante Legal:</strong> Hans Gutiérrez Baena
                    </div>
                  </div>
                </div>

              </div>

              <div style={{ marginTop: '50px', textAlign: 'center', color: 'rgba(255,255,255,0.3)', fontSize: '14px', letterSpacing: '1px' }}>
                <em>ÚLTIMA ACTUALIZACIÓN: AGOSTO DE 2026</em>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}

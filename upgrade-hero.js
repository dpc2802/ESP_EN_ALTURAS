const fs = require('fs');

let file = 'src/app/page.js';
let text = fs.readFileSync(file, 'utf8');

const regex = /function HeroSection\(\) \{[\s\S]*?(?=\/\*\s*[^\w]*\s*About Section\s*[^\w]*\s*\*\/)/;

const newHero = `function HeroSection() {
  const { scrollY } = useScroll();
  const imgY = useTransform(scrollY, [0, 600], [0, 150]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="hero" id="inicio" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      {/* Fondo Parallax */}
      <motion.div className="hero-image" style={{ y: imgY, position: 'absolute', top: '-10%', left: 0, right: 0, bottom: '-10%', zIndex: 0 }}>
        <Image 
          src="/assets/hero-final.png" 
          alt="Trabajo seguro en alturas" 
          fill 
          priority 
          quality={100}
          style={{ objectFit: "cover", objectPosition: "center 20%" }} 
        />
      </motion.div>

      {/* Overlays / Gradientes Mejorados */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(11,29,53,0.95) 0%, rgba(11,29,53,0.3) 50%, rgba(0,0,0,0) 100%)', zIndex: 1 }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40vh', background: 'linear-gradient(to top, rgba(11,29,53,1) 0%, rgba(11,29,53,0) 100%)', zIndex: 1 }} />

      {/* Orbe de luz (Glow) detrás del texto */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: 'absolute', top: '20%', left: '-10%', width: '50vw', height: '50vw', background: 'radial-gradient(circle, rgba(243,107,34,0.15) 0%, rgba(0,0,0,0) 70%)', filter: 'blur(40px)', zIndex: 1 }}
      />

      <div className="wrap" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <motion.div 
          className="hero-content" 
          style={{ maxWidth: '650px', paddingTop: '100px', paddingBottom: '60px' }}
        >
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
              borderRadius: '30px',
              padding: '10px 20px',
              color: 'var(--orange)',
              fontSize: '13px',
              fontWeight: 800,
              letterSpacing: '2px',
              marginBottom: '32px',
              textTransform: 'uppercase'
            }}
          >
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--orange)', marginRight: '10px', boxShadow: '0 0 10px var(--orange)' }}></div>
            10 AÑOS DE EXPERIENCIA
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ 
              color: '#fff', 
              fontSize: 'clamp(48px, 12vw, 72px)', 
              lineHeight: '0.95', 
              fontFamily: 'var(--font-head)',
              fontWeight: 900,
              marginBottom: '32px',
              textTransform: 'uppercase',
              textShadow: '0 10px 30px rgba(0,0,0,0.5)'
            }}
          >
            EXPERIENCIA,<br />
            <span style={{ color: 'var(--orange)' }}>CALIDAD Y</span><br />
            SEGURIDAD
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'relative',
              marginBottom: '48px',
              paddingLeft: '24px'
            }}
          >
            <div style={{ position: 'absolute', left: 0, top: '4px', bottom: '4px', width: '4px', background: 'var(--orange)', borderRadius: '4px', boxShadow: '0 0 15px rgba(243,107,34,0.5)' }}></div>
            <p style={{
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: 'clamp(16px, 4vw, 18px)',
              lineHeight: '1.7',
              fontWeight: 400,
              margin: 0,
              textShadow: '0 2px 10px rgba(0,0,0,0.5)'
            }}>
              En trabajos de alto riesgo. Garantizamos a nuestros clientes una correcta ejecución minimizando los riesgos a la hora de ejecutar los contratos.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%', maxWidth: '420px' }}
          >
            <a 
              href="https://wa.me/3143588264" 
              target="_blank" 
              rel="noreferrer" 
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--orange)',
                color: '#fff',
                padding: '20px 24px',
                borderRadius: '12px',
                fontWeight: 800,
                fontSize: '15px',
                textDecoration: 'none',
                textTransform: 'uppercase',
                boxShadow: '0 15px 30px rgba(243, 107, 34, 0.3)',
                transition: 'transform 0.3s ease, boxShadow 0.3s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(243, 107, 34, 0.4)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 15px 30px rgba(243, 107, 34, 0.3)'; }}
            >
              <i className="fa-brands fa-whatsapp" style={{ marginRight: '10px', fontSize: '20px' }}></i>
              AGENDAR VISITA
            </a>
            
            <a 
              href="#servicios" 
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                color: '#fff',
                padding: '20px 24px',
                borderRadius: '12px',
                fontWeight: 800,
                fontSize: '15px',
                textDecoration: 'none',
                textTransform: 'uppercase',
                transition: 'background 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'}
            >
              VER SERVICIOS
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Indicador Scroll */}
      <motion.div 
        style={{ position: 'absolute', bottom: '40px', left: '50%', x: '-50%', zIndex: 3, opacity, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '8px' }}>Scroll</span>
        <div style={{ width: '2px', height: '40px', background: 'linear-gradient(to bottom, var(--orange), transparent)' }}></div>
      </motion.div>

    </section>
  );
}
`;

text = text.replace(regex, newHero + "\n\n");
fs.writeFileSync(file, text);

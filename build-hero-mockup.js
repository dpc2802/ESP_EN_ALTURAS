const fs = require('fs');

let file = 'src/app/page.js';
let text = fs.readFileSync(file, 'utf8');

const regex = /function HeroSection\(\) \{[\s\S]*?(?=\/\*\s*[^\w]*\s*About Section\s*[^\w]*\s*\*\/)/;

const newHero = `function HeroSection() {
  const { scrollY } = useScroll();
  const imgY = useTransform(scrollY, [0, 600], [0, 120]);

  return (
    <section className="hero" id="inicio" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <motion.div className="hero-image" style={{ y: imgY, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
        <Image 
          src="/assets/hero-2.jpg" 
          alt="Trabajo seguro en alturas" 
          fill 
          priority 
          style={{ objectFit: "cover", objectPosition: "center" }} 
        />
      </motion.div>
      <div className="hero-mesh" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(11, 29, 53, 0.9) 0%, rgba(11, 29, 53, 0.4) 100%)', zIndex: 1 }} />
      <div className="wrap" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <div className="hero-content" style={{ maxWidth: '600px', paddingTop: '120px', paddingBottom: '80px' }}>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '30px',
              padding: '8px 16px',
              color: '#fff',
              fontSize: '12px',
              fontWeight: 800,
              letterSpacing: '1px',
              marginBottom: '24px'
            }}
          >
            10 AÑOS DE EXPERIENCIA
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            style={{ 
              color: '#fff', 
              fontSize: 'clamp(48px, 10vw, 64px)', 
              lineHeight: '1', 
              fontFamily: 'var(--font-head)',
              fontWeight: 900,
              marginBottom: '32px',
              textTransform: 'uppercase'
            }}
          >
            EXPERIENCIA,<br />CALIDAD Y<br />SEGURIDAD
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.85, duration: 0.7 }}
            style={{
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: '16px',
              lineHeight: '1.6',
              borderLeft: '4px solid var(--orange)',
              paddingLeft: '20px',
              marginBottom: '48px',
              fontWeight: 500
            }}
          >
            En trabajos de alto riesgo. Garantizamos a nuestros clientes una correcta ejecución minimizando los riesgos a la hora de ejecutar los contratos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%', maxWidth: '400px' }}
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
                padding: '18px 24px',
                borderRadius: '8px',
                fontWeight: 800,
                fontSize: '15px',
                textDecoration: 'none',
                textTransform: 'uppercase',
                boxShadow: '0 10px 20px rgba(243, 107, 34, 0.3)'
              }}
            >
              <i className="fa-brands fa-whatsapp" style={{ marginRight: '10px', fontSize: '18px' }}></i>
              AGENDAR VISITA
            </a>
            
            <a 
              href="#servicios" 
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(5px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                color: '#fff',
                padding: '18px 24px',
                borderRadius: '8px',
                fontWeight: 800,
                fontSize: '15px',
                textDecoration: 'none',
                textTransform: 'uppercase'
              }}
            >
              VER SERVICIOS
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
`;

text = text.replace(regex, newHero + "\n\n");
fs.writeFileSync(file, text);

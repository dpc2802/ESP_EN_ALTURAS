const fs = require('fs');

let file = 'src/app/page.js';
let text = fs.readFileSync(file, 'utf8');

const regex = /function HeroSection\(\) \{[\s\S]*?\/\*\s*={12}\s*About Section\s*={12}\s*\*\//;

const originalHero = `function HeroSection() {
  const { scrollY } = useScroll();
  const imgY = useTransform(scrollY, [0, 600], [0, 120]);

  return (
    <section className="hero" id="inicio">
      <motion.div className="hero-image" style={{ y: imgY, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
        <Image 
          src="/assets/hero-movil.png" 
          alt="Trabajo seguro en alturas" 
          fill 
          priority 
          style={{ objectFit: "cover", objectPosition: "30% 20%" }} 
        />
      </motion.div>
      <div className="hero-mesh" />
      <div className="wrap">
        <div className="hero-content">
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="pulse-dot" /> 10 Años de Experiencia
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            Soluciones Especializadas <br />
            <span>en Alturas</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Mantenimiento, limpieza, pintura e instalación de estructuras con total seguridad y cumplimiento normativo.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <a href="https://wa.me/3143588264" target="_blank" rel="noreferrer" className="btn btn-primary">
              <i className="fa-brands fa-whatsapp" style={{ marginRight: '8px' }}></i>
              Cotizar Proyecto
            </a>
            <a href="#servicios" className="btn btn-secondary">
              Nuestros Servicios
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


/* ============ About Section ============ */`;

text = text.replace(regex, originalHero);
fs.writeFileSync(file, text);

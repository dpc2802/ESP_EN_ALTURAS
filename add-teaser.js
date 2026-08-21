const fs = require('fs');
let file = 'src/app/page.js';
let text = fs.readFileSync(file, 'utf8');

const teaser = `
/* ============ Portfolio Teaser ============ */
function PortfolioTeaser() {
  const [ref, inView] = useInView(0.2);
  const router = useRouter();
  
  const teaserPhotos = [
    "/assets/real_facade.jpg",
    "/assets/real_welding.jpg",
    "/assets/real_roof_lifeline.jpg",
    "/assets/real_anchor_testing.jpg",
    "/assets/real_tower_structure.jpg",
    "/assets/facade_maintenance.jpg"
  ];

  return (
    <section className="portfolio-teaser" style={{ padding: '80px 0', background: '#fff' }}>
      <div className="wrap text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <span className="about-tag" style={{ justifyContent: 'center' }}>05. Casos de Éxito</span>
          <h2 style={{ color: 'var(--navy)', fontFamily: 'var(--font-head)', marginBottom: '40px', fontSize: '32px' }}>
            Nuestro Equipo en Acción
          </h2>
        </motion.div>

        <div className="teaser-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '16px',
          marginBottom: '40px'
        }}>
          {teaserPhotos.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: i * 0.1 }}
              style={{
                position: 'relative',
                width: '100%',
                height: '250px',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 8px 20px rgba(0,0,0,0.05)'
              }}
            >
              <Image src={src} alt="Trabajo en alturas" fill style={{ objectFit: 'cover' }} />
            </motion.div>
          ))}
        </div>

        <motion.button
          className="btn-primary"
          onClick={() => router.push('/portafolio')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ padding: '16px 40px', fontSize: '18px', background: 'var(--navy)', color: '#fff' }}
        >
          Ver Galería Completa (40+ Fotos)
        </motion.button>
      </div>
    </section>
  );
}
`;

text = text.replace('/* ── Contact Section ── */', teaser + '\n/* ── Contact Section ── */');
text = text.replace('<ContactSection />', '<PortfolioTeaser />\n        <ContactSection />');

fs.writeFileSync(file, text);

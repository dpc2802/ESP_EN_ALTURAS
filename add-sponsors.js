const fs = require('fs');

let file = 'src/app/page.js';
let text = fs.readFileSync(file, 'utf8');

const newSection = `
function SponsorsSection() {
  const [ref, inView] = useInView(0.1);
  const sponsors = [
    { src: "/assets/clients/escudo.png", alt: "Gobierno de Colombia", width: 100 },
    { src: "/assets/clients/fondo-emprender.png", alt: "Fondo Emprender", width: 180 },
    { src: "/assets/clients/sena.png", alt: "SENA", width: 100 },
    { src: "/assets/clients/alcaldia.png", alt: "Alcaldía de Rionegro", width: 200 },
    { src: "/assets/clients/rionegro.png", alt: "Rionegro Tarea de Todos", width: 160 }
  ];

  return (
    <section style={{ 
      background: 'linear-gradient(to bottom, #f8f9fa, #ffffff)', 
      padding: '70px 0', 
      borderTop: '1px solid rgba(0,0,0,0.05)',
      position: 'relative'
    }}>
      <div className="wrap" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          style={{ width: '100%', textAlign: 'center' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', marginBottom: '40px' }}>
            <div style={{ height: '1px', width: '50px', background: 'linear-gradient(90deg, transparent, var(--navy))' }} />
            <h3 style={{ margin: 0, color: 'var(--navy)', fontSize: '13px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '4px' }}>
              Apoyo Institucional
            </h3>
            <div style={{ height: '1px', width: '50px', background: 'linear-gradient(-90deg, transparent, var(--navy))' }} />
          </div>

          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            alignItems: 'center', 
            gap: 'clamp(30px, 5vw, 60px)',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {sponsors.map((logo, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ 
                  position: 'relative', 
                  width: \`\${logo.width}px\`, 
                  height: '80px',
                  // Navy blue filter: brightness(0) makes it black. invert(1) makes it white.
                  // Since we want navy (palette), we use a CSS filter trick or just use pure grayscale with a mix-blend-mode.
                  // The best way for 'palette' without complex filters on a white background is pure grayscale + opacity.
                  // A very elegant look is grayscale, and on hover it turns orange or full opacity.
                  filter: 'grayscale(100%) contrast(200%) opacity(0.5)',
                  transition: 'all 0.4s ease',
                  cursor: 'default'
                }}
                onMouseEnter={(e) => { 
                  // When hovering, turn it into our palette's Orange by using CSS filters on a black base
                  e.currentTarget.style.filter = 'grayscale(100%) sepia(100%) hue-rotate(345deg) saturate(500%) brightness(100%) opacity(1)';
                }}
                onMouseLeave={(e) => { 
                  e.currentTarget.style.filter = 'grayscale(100%) contrast(200%) opacity(0.5)';
                }}
              >
                <Image src={logo.src} alt={logo.alt} fill style={{ objectFit: 'contain' }} unoptimized />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
`;

// Insert the new function before "export default function Page()"
text = text.replace('export default function Page() {', newSection + '\nexport default function Page() {');

// Insert the component call below <ContactSection />
text = text.replace('<ContactSection />', '<ContactSection />\n          <SponsorsSection />');

fs.writeFileSync(file, text);

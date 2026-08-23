const fs = require('fs');

let file = 'src/app/page.js';
let text = fs.readFileSync(file, 'utf8');

const regex = /function SponsorsSection\(\) \{[\s\S]*?\}\s*export default function Page\(\) \{/;

const newSection = `function SponsorsSection() {
  const [ref, inView] = useInView(0.1);
  const sponsors = [
    { src: "/assets/clients/udea.png", alt: "Universidad de Antioquia", width: 140 },
    { src: "/assets/clients/escudo.png", alt: "Gobierno de Colombia", width: 90 },
    { src: "/assets/clients/fondo-emprender.png", alt: "Fondo Emprender", width: 170 },
    { src: "/assets/clients/sena.png", alt: "SENA", width: 90 },
    { src: "/assets/clients/alcaldia.png", alt: "Alcaldía de Rionegro", width: 180 },
    { src: "/assets/clients/rionegro.png", alt: "Rionegro Tarea de Todos", width: 140 }
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
            gap: 'clamp(30px, 4vw, 50px)',
            maxWidth: '1200px',
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
                  height: '75px',
                  filter: 'grayscale(100%) opacity(0.5)',
                  transition: 'all 0.4s ease',
                  cursor: 'default'
                }}
                onMouseEnter={(e) => { 
                  // Muestra el color original del logo
                  e.currentTarget.style.filter = 'grayscale(0%) opacity(1)';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => { 
                  e.currentTarget.style.filter = 'grayscale(100%) opacity(0.5)';
                  e.currentTarget.style.transform = 'scale(1)';
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

export default function Page() {`;

text = text.replace(regex, newSection);

fs.writeFileSync(file, text);

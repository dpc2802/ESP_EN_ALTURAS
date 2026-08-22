const fs = require('fs');

let file = 'src/app/page.js';
let text = fs.readFileSync(file, 'utf8');

const startIdx = text.indexOf('function TrustedBySection() {');
const endIdx = text.indexOf('function AboutSection() {');
if (startIdx !== -1 && endIdx !== -1) {
  let before = text.substring(0, startIdx);
  let after = text.substring(endIdx);
  
  const newSection = `function TrustedBySection() {
  const logos = [
    { src: "/assets/clients/metro.png", alt: "Metro de Medellín", width: 140 },
    { src: "/assets/clients/viva.png", alt: "Viva de La Ceja", width: 110 },
    { src: "/assets/clients/colanta.png", alt: "Colanta", width: 130 },
    { src: "/assets/clients/jardin.png", alt: "Jardín Botánico", width: 110 }
  ];

  return (
    <section style={{ background: '#0a111a', padding: '35px 0', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="wrap" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '25px', textAlign: 'center' }}>
          Empresas que confían en nosotros
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'clamp(30px, 6vw, 80px)', alignItems: 'center' }}>
          {logos.map((logo, i) => (
            <div key={i} style={{ position: 'relative', width: \`\${logo.width}px\`, height: '70px', opacity: 0.8, transition: 'all 0.3s ease', cursor: 'pointer' }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = 1; e.currentTarget.style.transform = 'scale(1.08)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = 0.8; e.currentTarget.style.transform = 'scale(1)'; }}
            >
              <Image src={logo.src} alt={logo.alt} fill style={{ objectFit: 'contain' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

`;

  text = before + newSection + after;
  fs.writeFileSync(file, text);
  console.log("Success");
} else {
  console.log("Failed to find boundaries");
}

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
    { src: "/assets/clients/metro.png", alt: "Metro de Medellín" },
    { src: "/assets/clients/viva.png", alt: "Viva de La Ceja" },
    { src: "/assets/clients/colanta.png", alt: "Colanta" },
    { src: "/assets/clients/jardin.png", alt: "Jardín Botánico" },
    // Duplicate to create 8 faces of the 3D cylinder
    { src: "/assets/clients/metro.png", alt: "Metro de Medellín" },
    { src: "/assets/clients/viva.png", alt: "Viva de La Ceja" },
    { src: "/assets/clients/colanta.png", alt: "Colanta" },
    { src: "/assets/clients/jardin.png", alt: "Jardín Botánico" }
  ];

  return (
    <section style={{ 
      background: 'var(--navy)', 
      padding: '25px 0 45px 0', 
      position: 'relative', 
      overflow: 'hidden',
      borderTop: '1px solid rgba(243, 107, 34, 0.2)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    }}>
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '20px', textAlign: 'center' }}>
          Respaldados por
        </p>

        {/* 3D Roulette Container */}
        <div style={{ perspective: '800px', width: '200px', height: '80px', position: 'relative' }}>
          <div className="roulette-3d" style={{ width: '100%', height: '100%', position: 'absolute', transformStyle: 'preserve-3d' }}>
            {logos.map((logo, i) => (
              <div key={i} className="roulette-item" style={{
                position: 'absolute',
                width: '180px',
                height: '75px',
                left: '10px',
                top: '2.5px',
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(4px)',
                WebkitBackdropFilter: 'blur(4px)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '15px',
                transform: \`rotateY(\${i * 45}deg) translateZ(220px)\`,
                backfaceVisibility: 'hidden'
              }}>
                <div style={{ position: 'relative', width: '100%', height: '100%', filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.1))' }}>
                  <Image src={logo.src} alt={logo.alt} fill style={{ objectFit: 'contain' }} unoptimized />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: \`
        .roulette-3d {
          animation: spinRoulette 25s infinite linear;
        }
        @keyframes spinRoulette {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(-360deg); }
        }
      \`}} />
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

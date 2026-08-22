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
    { src: "/assets/clients/jardin.png", alt: "Jardín Botánico" }
  ];

  // Seamless infinite loop by duplicating
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section style={{ 
      background: 'var(--navy)', 
      padding: '60px 0', 
      position: 'relative', 
      overflow: 'hidden',
      borderTop: '1px solid rgba(243, 107, 34, 0.2)',
      borderBottom: '1px solid rgba(243, 107, 34, 0.1)',
      boxShadow: '0 -20px 50px rgba(0,0,0,0.5), inset 0 20px 50px rgba(0,0,0,0.5)'
    }}>
      {/* Background glowing orb */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '60%', height: '80px', background: 'var(--orange)', filter: 'blur(100px)', opacity: 0.12, zIndex: 0 }} />

      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '20px', marginBottom: '50px' }}
        >
          <div style={{ height: '2px', width: '50px', background: 'linear-gradient(90deg, transparent, var(--orange))' }} />
          <h3 style={{ margin: 0, color: '#fff', fontSize: '15px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '4px', textShadow: '0 0 15px rgba(255,255,255,0.2)' }}>
            Respaldo de Gigantes
          </h3>
          <div style={{ height: '2px', width: '50px', background: 'linear-gradient(-90deg, transparent, var(--orange))' }} />
        </motion.div>

        {/* Infinite Marquee Track */}
        <div className="marquee-container" style={{ width: '100%', overflow: 'hidden', position: 'relative', padding: '20px 0' }}>
          {/* Fading edges to blend with background */}
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '15vw', background: 'linear-gradient(to right, var(--navy) 10%, transparent 100%)', zIndex: 2, pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '15vw', background: 'linear-gradient(to left, var(--navy) 10%, transparent 100%)', zIndex: 2, pointerEvents: 'none' }} />

          <div className="marquee-track" style={{ display: 'flex', gap: '40px', alignItems: 'center', width: 'max-content' }}>
            {duplicatedLogos.map((logo, i) => (
              <div key={i} className="marquee-logo-card" style={{
                position: 'relative',
                width: '220px',
                height: '110px',
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '25px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                cursor: 'pointer',
                flexShrink: 0
              }}>
                <div style={{ position: 'relative', width: '100%', height: '100%', filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.1))', transition: 'all 0.3s' }} className="logo-img-wrap">
                  <Image src={logo.src} alt={logo.alt} fill style={{ objectFit: 'contain' }} unoptimized />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
      <style dangerouslySetInnerHTML={{ __html: \`
        .marquee-track {
          animation: scrollMarquee 35s linear infinite;
        }
        .marquee-container:hover .marquee-track {
          animation-play-state: paused;
        }
        .marquee-logo-card:hover {
          background: rgba(255,255,255,0.08) !important;
          border-color: rgba(243, 107, 34, 0.5) !important;
          transform: translateY(-8px) scale(1.05);
          box-shadow: 0 15px 40px rgba(243, 107, 34, 0.25) !important;
          z-index: 10;
        }
        .marquee-logo-card:hover .logo-img-wrap {
          filter: drop-shadow(0 0 15px rgba(255,255,255,0.4)) !important;
        }
        @keyframes scrollMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
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

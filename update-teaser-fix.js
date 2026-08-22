const fs = require('fs');

let file = 'src/app/page.js';
let text = fs.readFileSync(file, 'utf8');

const newTeaser = `/* ============ Portfolio Teaser ============ */
function PortfolioTeaser() {
  const [ref, inView] = useInView(0.2);
  const router = useRouter();
  
  const teaserData = [
    { src: "/assets/portfolio/21_descenso_extremo_fachada.jpg", alt: "Descenso de gran altura" },
    { src: "/assets/portfolio/22_soldadura_techo.jpg", alt: "Soldadura en techo" },
    { src: "/assets/portfolio/13_inspeccion_cubierta.png", alt: "Inspección técnica" },
    { src: "/assets/portfolio/14_prueba_extraccion.jpg", alt: "Prueba con Hydrajaws" },
    { src: "/assets/portfolio/19_lavado_fachada_ladrillo.png", alt: "Hidrolavado a presión" }
  ];

  return (
    <section className="portfolio-teaser" style={{ padding: '80px 0', background: '#f4f5f7' }}>
      <div className="wrap">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '40px' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ width: '24px', height: '2px', background: 'var(--orange)' }}></div>
            <span style={{ color: 'var(--orange)', fontWeight: 800, letterSpacing: '1px', fontSize: '13px', textTransform: 'uppercase' }}>
              PANTALLA 1 • MÓVIL
            </span>
          </div>
          <h2 style={{ fontSize: '32px', color: 'var(--navy)', fontFamily: 'var(--font-head)', marginBottom: '16px', lineHeight: '1.2' }}>
            ALGUNOS DE NUESTROS<br />
            <span style={{ color: 'var(--orange)' }}>TRABAJOS</span>
          </h2>
          <p style={{ color: '#666', fontSize: '16px' }}>
            Swipe horizontal — vista previa de 5 fotos dentro de la landing.
          </p>
        </motion.div>

        {/* Swipe Native Carousel */}
        <div 
          className="swipe-carousel" 
          style={{ 
            display: 'flex', 
            overflowX: 'auto', 
            scrollSnapType: 'x mandatory',
            gap: '16px',
            paddingBottom: '24px',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none', // Firefox
            msOverflowStyle: 'none' // IE
          }}
        >
          <style>{\`.swipe-carousel::-webkit-scrollbar { display: none; }\`}</style>
          {teaserData.map((item, i) => {
            const displayIndex = i + 1;
            const badgeNumber = displayIndex < 10 ? \`0\${displayIndex}\` : displayIndex;
            
            return (
              <div
                key={i}
                style={{
                  minWidth: '280px',
                  maxWidth: '300px',
                  height: '400px',
                  scrollSnapAlign: 'start',
                  position: 'relative',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  flexShrink: 0
                }}
              >
                {/* Badge numérico en la esquina */}
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  width: '32px',
                  height: '32px',
                  background: 'var(--navy)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '800',
                  fontSize: '12px',
                  color: '#fff',
                  zIndex: 2,
                  boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
                }}>
                  {badgeNumber}
                </div>

                <Image src={item.src} alt={item.alt} fill style={{ objectFit: 'cover' }} />

                {/* Barra inferior Glassmorphism */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '16px 20px',
                  background: 'rgba(255, 255, 255, 0.75)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  borderTop: '1px solid rgba(255,255,255,0.5)',
                  color: 'var(--navy)',
                  fontSize: '13px',
                  fontWeight: 600,
                  zIndex: 2
                }}>
                  {item.alt}
                </div>
              </div>
            );
          })}
        </div>

        {/* Dots (Simulados visualmente) */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '32px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ddd' }}></div>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ddd' }}></div>
          <div style={{ width: '20px', height: '8px', borderRadius: '8px', background: 'var(--orange)' }}></div>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ddd' }}></div>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ddd' }}></div>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '16px', fontSize: '14px', color: '#666' }}>
          Mostrando <strong>5</strong> de <strong>30</strong> fotos
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button 
            onClick={() => router.push('/portafolio')}
            style={{
              padding: '18px 32px',
              background: 'var(--orange)',
              border: 'none',
              borderRadius: '8px',
              color: '#fff',
              fontWeight: 800,
              fontSize: '15px',
              boxShadow: '0 10px 20px rgba(243, 107, 34, 0.3)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}
          >
            VER GALERÍA COMPLETA <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
        
        <p style={{ textAlign: 'center', fontSize: '12px', color: '#888', marginTop: '24px' }}>
          • Swipe nativo (scroll-snap) en vez de scroll-jacking — mejor rendimiento y UX en móvil
        </p>

      </div>
    </section>
  );
}`;

const regex = /\/\*\s*={12}\s*Portfolio Teaser\s*={12}\s*\*\/[\s\S]*?(?=\/\*\s*[^\w]*\s*Contact Section\s*[^\w]*\s*\*\/)/;
text = text.replace(regex, newTeaser + "\n\n");

fs.writeFileSync(file, text);

const fs = require('fs');

let file = 'src/app/portafolio/PortfolioClient.jsx';
let text = fs.readFileSync(file, 'utf8');

const replacement = `
export default function PortfolioClient() {
  const [filter, setFilter] = useState("todas");
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredData = filter === "todas" 
    ? portfolioData 
    : portfolioData.filter(item => item.cat === filter);

  return (
    <>
      {/* FILTROS TIPO "PILL" CON ANIMACIÓN FLIP */}
      <div 
        className="portfolio-filters" 
        style={{ 
          display: 'flex', 
          flexWrap: 'nowrap', 
          gap: '12px', 
          marginBottom: '24px', 
          overflowX: 'auto', 
          paddingBottom: '12px',
          WebkitOverflowScrolling: 'touch',
          msOverflowStyle: 'none',
          scrollbarWidth: 'none'
        }}
      >
        <style>{\`.portfolio-filters::-webkit-scrollbar { display: none; }\`}</style>
        {[
          { id: "todas", label: \`TODOS (\${portfolioData.length})\` },
          { id: "fachadas", label: "FACHADAS" },
          { id: "cubiertas", label: "CUBIERTAS" },
          { id: "estructuras", label: "ESTRUCTURAS" },
          { id: "lineas", label: "LÍNEAS DE VIDA" }
        ].map((btn) => (
          <button
            key={btn.id}
            onClick={() => setFilter(btn.id)}
            style={{
              position: 'relative',
              padding: '10px 24px',
              borderRadius: '30px',
              border: filter === btn.id ? '1px solid transparent' : '1px solid rgba(11,29,53,0.15)',
              background: 'transparent',
              color: filter === btn.id ? '#fff' : 'var(--navy)',
              fontWeight: 700,
              cursor: 'pointer',
              fontSize: '13px',
              whiteSpace: 'nowrap',
              outline: 'none',
              transition: 'color 0.3s ease'
            }}
          >
            {filter === btn.id && (
              <motion.div
                layoutId="activeFilterPill"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'var(--orange)',
                  borderRadius: '30px',
                  zIndex: -1
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span style={{ position: 'relative', zIndex: 1 }}>{btn.label}</span>
          </button>
        ))}
      </div>

      <div style={{ fontSize: '13px', color: '#666', marginBottom: '24px' }}>
        Mostrando <strong>{filteredData.length}</strong> de <strong>{portfolioData.length}</strong>
      </div>

      <motion.div layout className="masonry-grid">
        <AnimatePresence mode="popLayout">
          {filteredData.map((item, index) => {
            const displayIndex = index + 1;
            const badgeNumber = displayIndex < 10 ? \`0\${displayIndex}\` : displayIndex;

            return (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "50px" }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ 
                  duration: 0.6, 
                  ease: [0.16, 1, 0.3, 1],
                  delay: (index % 6) * 0.1 
                }}
                key={item.id}
                className="masonry-item"
                onClick={() => setSelectedItem(item)}
              >
                <motion.div 
                  whileHover={{ y: -6 }}
                  style={{ 
                    position: 'relative', 
                    width: '100%', 
                    borderRadius: '16px', 
                    overflow: 'hidden', 
                    cursor: 'zoom-in', 
                    boxShadow: '0 10px 20px rgba(0,0,0,0.08)',
                    background: '#fff'
                  }}
                >
                  {/* Badge numérico en la esquina */}
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    width: '32px',
                    height: '32px',
                    background: '#fff',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '800',
                    fontSize: '12px',
                    color: 'var(--navy)',
                    zIndex: 2,
                    boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                  }}>
                    {badgeNumber}
                  </div>

                  <motion.img
                    layoutId={\`portfolio-img-\${item.id}\`}
                    src={item.src}
                    alt={item.alt}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />

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
                </motion.div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Botón Cargar Más */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '60px' }}>
        <button style={{
          padding: '16px 40px',
          background: '#fff',
          border: '1px solid rgba(0,0,0,0.1)',
          borderRadius: '8px',
          color: 'var(--navy)',
          fontWeight: 800,
          fontSize: '14px',
          boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
          cursor: 'pointer'
        }}>
          CARGAR MÁS FOTOS
        </button>
      </div>

      <ImageModal selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
    </>
  );
}
`;

const regex = /export default function PortfolioClient\(\) \{[\s\S]*$/;
text = text.replace(regex, replacement);

fs.writeFileSync(file, text);

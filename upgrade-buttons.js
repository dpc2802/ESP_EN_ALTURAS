const fs = require('fs');

let file = 'src/app/page.js';
let text = fs.readFileSync(file, 'utf8');

const regex = /<motion\.div\s+initial=\{\{ opacity: 0, y: 20 \}\}\s+animate=\{\{ opacity: 1, y: 0 \}\}\s+transition=\{\{ duration: 0\.8, delay: 0\.5, ease: \[0\.16, 1, 0\.3, 1\] \}\}\s+style=\{\{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%', maxWidth: '420px' \}\}\s+>[\s\S]*?VER SERVICIOS\s+<\/a>\s+<\/motion\.div>/;

const newButtons = `
          <style>
            .btn-premium-orange {
              position: relative;
              overflow: hidden;
            }
            .btn-premium-orange::after {
              content: '';
              position: absolute;
              top: 0;
              left: -100%;
              width: 50%;
              height: 100%;
              background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%);
              transform: skewX(-25deg);
              animation: shine 4s infinite;
            }
            .btn-premium-glass {
              position: relative;
              overflow: hidden;
              background: rgba(11, 29, 53, 0.4) !important;
              border: 1px solid rgba(243, 107, 34, 0.3) !important;
            }
            .btn-premium-glass::before {
              content: '';
              position: absolute;
              inset: 0;
              background: linear-gradient(120deg, rgba(243, 107, 34, 0.2), rgba(0,0,0,0) 60%);
              opacity: 0;
              transition: opacity 0.4s ease;
            }
            .btn-premium-glass:hover::before {
              opacity: 1;
            }
            .btn-premium-glass:hover {
              border-color: rgba(243, 107, 34, 0.8) !important;
              box-shadow: 0 0 20px rgba(243, 107, 34, 0.2);
            }
            @keyframes shine {
              0% { left: -100%; }
              20% { left: 200%; }
              100% { left: 200%; }
            }
            .icon-bounce {
              animation: bounceY 2s infinite ease-in-out;
            }
            @keyframes bounceY {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(4px); }
            }
          </style>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%', maxWidth: '420px' }}
          >
            <a 
              href="https://wa.me/3143588264" 
              target="_blank" 
              rel="noreferrer" 
              className="btn-premium-orange"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--orange)',
                color: '#fff',
                padding: '20px 24px',
                borderRadius: '12px',
                fontWeight: 800,
                fontSize: '15px',
                textDecoration: 'none',
                textTransform: 'uppercase',
                boxShadow: '0 15px 30px rgba(243, 107, 34, 0.3)',
                transition: 'transform 0.3s ease, boxShadow 0.3s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(243, 107, 34, 0.5)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 15px 30px rgba(243, 107, 34, 0.3)'; }}
            >
              <i className="fa-brands fa-whatsapp" style={{ marginRight: '10px', fontSize: '20px' }}></i>
              AGENDAR VISITA
            </a>
            
            <a 
              href="#servicios" 
              className="btn-premium-glass"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                color: '#fff',
                padding: '20px 24px',
                borderRadius: '12px',
                fontWeight: 800,
                fontSize: '15px',
                textDecoration: 'none',
                textTransform: 'uppercase',
                transition: 'all 0.4s ease'
              }}
            >
              <span style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center' }}>
                <i className="fa-solid fa-link" style={{ marginRight: '10px', fontSize: '16px', color: 'var(--orange)' }}></i>
                VER SERVICIOS
                <i className="fa-solid fa-arrow-down icon-bounce" style={{ marginLeft: '10px', fontSize: '14px', color: 'var(--orange)' }}></i>
              </span>
            </a>
          </motion.div>`;

text = text.replace(regex, newButtons);
fs.writeFileSync(file, text);

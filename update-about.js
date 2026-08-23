const fs = require('fs');
let text = fs.readFileSync('src/app/page.js', 'utf8');

const target = `              <div style={{
                position: 'relative', paddingLeft: '24px', marginBottom: '32px',
                borderLeft: '4px solid var(--orange)'
              }}>
                <p style={{ fontSize: '18px', fontWeight: 700, color: 'var(--navy)', margin: 0 }}>
                  Somos una empresa enfocada en la ejecución de todo tipo de trabajos en Alturas, creada en el año 2014.
                </p>
              </div>`;

const replacement = `              <div style={{
                position: 'relative', paddingLeft: '24px', marginBottom: '32px',
                borderLeft: '4px solid var(--orange)',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px'
              }}>
                <p style={{ fontSize: '18px', fontWeight: 700, color: 'var(--navy)', margin: 0 }}>
                  Somos una empresa enfocada en la ejecución de todo tipo de trabajos en Alturas, <span style={{ color: 'var(--orange)' }}>creada en el año 2014.</span>
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fa-solid fa-award" style={{ fontSize: '24px', color: 'var(--orange)' }}></i>
                  <p style={{ fontSize: '16px', fontWeight: 800, color: 'var(--navy)', margin: 0, textTransform: 'uppercase', letterSpacing: '1px' }}>
                    12 Años de Experiencia
                  </p>
                </div>
              </div>`;

text = text.replace(target, replacement);

fs.writeFileSync('src/app/page.js', text);

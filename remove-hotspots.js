const fs = require('fs');

let file = 'src/app/page.js';
let text = fs.readFileSync(file, 'utf8');

const regex = /<motion\.div className="about-img-wrap hotspot-container"[\s\S]*?<\/motion\.div>/;

const newDiv = `<motion.div className="about-img-wrap" variants={fadeIn} style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.15)', border: '1px solid rgba(255,255,255,0.8)' }}>
              <img
                src="/assets/nuestra-empresa.jpg"
                alt="Especialistas en Alturas"
                className="about-img"
                style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </motion.div>`;

text = text.replace(regex, newDiv);

fs.writeFileSync(file, text);

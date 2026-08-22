const fs = require('fs');

let file = 'src/app/page.js';
let text = fs.readFileSync(file, 'utf8');

const regex = /<motion\.h1[\s\S]*?<\/motion\.div>\s*<\/div>\s*<\/div>\s*<\/section>/;

const correctContent = `<motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            EXPERIENCIA, CALIDAD Y SEGURIDAD
          </motion.h1>

          <motion.p
            className="hero-desc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.7 }}
          >
            En trabajos de alto riesgo. Garantizamos a nuestros clientes una correcta ejecución minimizando los riesgos a la hora de ejecutar los contratos.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <a href="https://wa.me/3143588264" target="_blank" rel="noreferrer" className="btn btn-primary">
              <i className="fa-brands fa-whatsapp" style={{ marginRight: '8px' }}></i>
              Agendar Visita
            </a>
            <a href="#servicios" className="btn btn-secondary">
              Ver Servicios
            </a>
          </motion.div>
        </div>
      </div>
    </section>`;

text = text.replace(regex, correctContent);
fs.writeFileSync(file, text);

const fs = require('fs');
let text = fs.readFileSync('src/app/page.js', 'utf8');

// 1. Remove 'unoptimized' from Image components
text = text.replace(/ unoptimized \/>/g, ' sizes="(max-width: 768px) 100px, 200px" />');
text = text.replace(/ unoptimized\/>/g, ' sizes="(max-width: 768px) 100px, 200px" />');
text = text.replace(/ unoptimized/g, '');

// 2. Fix the <img> tag in AboutSection
const oldImg = `<motion.div className="about-img-wrap" variants={fadeIn} style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.15)', border: '1px solid rgba(255,255,255,0.8)' }}>
                <img
                  src="/assets/nuestra-empresa.jpg"
                  alt="Especialistas en Alturas"
                  className="about-img"
                  style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </motion.div>`;

const newImg = `<motion.div className="about-img-wrap" variants={fadeIn} style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.15)', border: '1px solid rgba(255,255,255,0.8)', minHeight: '400px' }}>
                <Image
                  src="/assets/nuestra-empresa.jpg"
                  alt="Especialistas en Alturas"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
              </motion.div>`;

text = text.replace(oldImg, newImg);

fs.writeFileSync('src/app/page.js', text);

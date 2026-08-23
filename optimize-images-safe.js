const fs = require('fs');
let text = fs.readFileSync('src/app/page.js', 'utf8');

text = text.replace(/unoptimized/g, 'sizes="(max-width: 768px) 150px, 250px"');

const imgRegex = /<img\s+src="\/assets\/nuestra-empresa\.jpg"[\s\S]*?\/>/;
text = text.replace(imgRegex, `<Image src="/assets/nuestra-empresa.jpg" alt="Especialistas en Alturas" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />`);

const divRegex = /<motion\.div className="about-img-wrap" variants=\{fadeIn\} style=\{\{ /;
text = text.replace(divRegex, `<motion.div className="about-img-wrap" variants={fadeIn} style={{ position: 'relative', minHeight: '450px', `);

fs.writeFileSync('src/app/page.js', text);

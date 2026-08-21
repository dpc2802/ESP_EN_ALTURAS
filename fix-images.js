const fs = require('fs');
let text = fs.readFileSync('src/app/page.js', 'utf8');

text = text.replace(
  /<motion\.img\s+src="\/assets\/real_rope_access\.jpg"\s+alt="Trabajo seguro en alturas"\s+className="hero-image"\s+style=\{\{\s*y:\s*imgY\s*\}\}\s*\/>/,
  '<motion.div className="hero-image" style={{ y: imgY }}><Image src="/assets/real_rope_access.jpg" alt="Trabajo seguro en alturas" fill priority style={{ objectFit: "cover" }} /></motion.div>'
);

text = text.replace(
  /<img\s+src="\/assets\/real_rope_access_team\.jpg"\s+alt="Nuestro Equipo"\s+className="about-img"\s*\/>/,
  '<Image src="/assets/real_rope_access_team.jpg" alt="Nuestro Equipo" className="about-img" width={800} height={600} />'
);

text = text.replace(
  /<img src=\{svc\.image\} alt=\{svc\.title\} className="svc-img-bg" \/>/g,
  '<Image src={svc.image} alt={svc.title} className="svc-img-bg" fill sizes="(max-width: 768px) 100vw, 50vw" />'
);

fs.writeFileSync('src/app/page.js', text);

let h = fs.readFileSync('src/app/components/Header.jsx', 'utf8'); h = h.replace('\
', '\n'); fs.writeFileSync('src/app/components/Header.jsx', h); let f = fs.readFileSync('src/app/components/Footer.jsx', 'utf8'); f = f.replace('\
', '\n'); fs.writeFileSync('src/app/components/Footer.jsx', f);

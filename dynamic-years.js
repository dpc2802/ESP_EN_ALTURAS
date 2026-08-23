const fs = require('fs');
let text = fs.readFileSync('src/app/page.js', 'utf8');

// Replace in HeroSection
text = text.replace(
  /12 AÑOS DE EXPERIENCIA/,
  `{new Date().getFullYear() - 2014} AÑOS DE EXPERIENCIA`
);

// Replace in AboutSection
text = text.replace(
  /12 Años de Experiencia/,
  `{new Date().getFullYear() - 2014} Años de Experiencia`
);

fs.writeFileSync('src/app/page.js', text);

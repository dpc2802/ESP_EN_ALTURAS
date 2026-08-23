const fs = require('fs');
let text = fs.readFileSync('src/app/page.js', 'utf8');

text = text.replace('10 AÑOS DE EXPERIENCIA', '12 AÑOS DE EXPERIENCIA');
// Just in case it's in a different case
text = text.replace('10 Años de Experiencia', '12 Años de Experiencia');
text = text.replace('10 años de experiencia', '12 años de experiencia');

fs.writeFileSync('src/app/page.js', text);

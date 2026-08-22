const fs = require('fs');

let file = 'src/app/page.js';
let text = fs.readFileSync(file, 'utf8');

text = text.replace(
  /Respaldados por/g,
  'Confían en nosotros'
);

fs.writeFileSync(file, text);

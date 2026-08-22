const fs = require('fs');

let file = 'src/app/page.js';
let text = fs.readFileSync(file, 'utf8');

text = text.replace(
  /AGENDAR VISITA/g,
  `AGENDA TU CITA`
);

fs.writeFileSync(file, text);

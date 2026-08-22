const fs = require('fs');

let file = 'src/app/page.js';
let text = fs.readFileSync(file, 'utf8');

text = text.replace(
  /\{ title: "Puntos de anclaje", desc: "Verificación de capacidad de carga" \},/,
  `{ title: "Puntos de anclaje", desc: "Capacidad certificada de 5.000 Libras" },`
);

text = text.replace(
  /\{ title: "Plan de emergencia", desc: "Protocolo de rescate vertical" \},/,
  `{ title: "Plan de emergencia", desc: "Protocolo de rescate en alturas" },`
);

// Optional: also update the bullet point in Services
text = text.replace(
  /"Implementación de puntos de anclaje"/,
  `"Puntos de anclaje (5.000 lb)"`
);

fs.writeFileSync(file, text);

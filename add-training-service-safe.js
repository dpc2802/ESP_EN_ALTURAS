const fs = require('fs');

let file = 'src/app/page.js';
let text = fs.readFileSync(file, 'utf8');

text = text.replace(
  /"Montaje de cubierta"\]\n\s*\}\n\s*\];/,
  `"Montaje de cubierta"]\n      },\n      {\n        num: "06",\n        icon: "fa-chalkboard-user",\n        title: "FORMACIÓN EN ALTURAS",\n        desc: "Espacios de sensibilización y capacitación para el personal, enfocados en riesgos inminentes e identificación de peligros en la empresa.",\n        image: "/assets/real_anchor_testing.jpg",\n        bullets: ["Cursos: Avanzado, Reentrenamiento, Coordinador, Operativo", "Planes de formación", "Ciclos formativos", "Sensibilización de riesgos"]\n      }\n    ];`
);

fs.writeFileSync(file, text);

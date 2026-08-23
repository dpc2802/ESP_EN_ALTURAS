const fs = require('fs');

let file = 'src/app/page.js';
let text = fs.readFileSync(file, 'utf8');

const targetStr = `      },\n    ];`;
const replaceStr = `      },\n      {\n        num: "06",\n        icon: "fa-chalkboard-user",\n        title: "FORMACIÓN EN ALTURAS",\n        desc: "Espacios de sensibilización y capacitación para el personal, enfocados en riesgos inminentes e identificación de peligros en la empresa.",\n        image: "/assets/real_rope_access.jpg",\n        bullets: ["Cursos: Avanzado, Reentrenamiento, Coordinador, Operativo", "Planes de formación", "Ciclos formativos", "Sensibilización de riesgos"]\n      }\n    ];`;

text = text.replace(targetStr, replaceStr);

fs.writeFileSync(file, text);

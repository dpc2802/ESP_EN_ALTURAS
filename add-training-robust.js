const fs = require('fs');

let file = 'src/app/page.js';
let text = fs.readFileSync(file, 'utf8');

text = text.replace(
  /"Montaje de cubierta"\]\r?\n\s*\}\r?\n\s*\];/,
  `"Montaje de cubierta"]
      },
      {
        num: "06",
        icon: "fa-chalkboard-user",
        title: "FORMACIÓN EN ALTURAS",
        desc: "Espacios de sensibilización y capacitación para el personal, enfocados en riesgos inminentes e identificación de peligros en la empresa.",
        image: "/assets/real_rope_access.jpg",
        bullets: ["Cursos: Avanzado, Reentrenamiento, Coordinador, Operativo", "Planes de formación", "Ciclos formativos", "Sensibilización de riesgos"]
      }
    ];`
);

fs.writeFileSync(file, text);

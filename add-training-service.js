const fs = require('fs');

let file = 'src/app/page.js';
let text = fs.readFileSync(file, 'utf8');

const regex = /\{[\s\S]*?num: "05",[\s\S]*?\}\s*\];/;

const newService = `{
        num: "05",
        icon: "fa-trowel-bricks",
        title: "TRABAJOS EN CUBIERTAS",
        desc: "Intervenciones seguras sobre tejados y cubiertas industriales, eliminando riesgos de cada o dao estructural.",
        image: "/assets/real_roof_lifeline.jpg",
        bullets: ["Mantenimiento general", "Filtraciones", "Impermeabilizaciones", "Instalacin de plataformas", "Montaje de cubierta"]
      },
      {
        num: "06",
        icon: "fa-chalkboard-user",
        title: "FORMACIÓN EN ALTURAS",
        desc: "Espacios de sensibilización y capacitación para el personal, enfocados en riesgos inminentes e identificación de peligros en su empresa.",
        image: "/assets/real_anchor_testing.jpg",
        bullets: ["Cursos: Avanzado, Reentrenamiento, Coordinador, Operativo", "Planes de formación", "Ciclos formativos", "Sensibilización de riesgos"]
      }
    ];`;

text = text.replace(regex, newService);

fs.writeFileSync(file, text);

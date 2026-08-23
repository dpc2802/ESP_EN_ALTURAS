const fs = require('fs');

let file = 'src/app/page.js';
let text = fs.readFileSync(file, 'utf8');

text = text.replace(
  /\{ src: "\/assets\/clients\/arquitecturaconcreto\.png", alt: "Arquitectura y Concreto" \}/,
  '{ src: "/assets/clients/arquitecturaconcreto.png", alt: "Arquitectura y Concreto" },\n    { src: "/assets/clients/santamaria.png", alt: "Arrendamientos Santa Maria LTDA" }'
);

fs.writeFileSync(file, text);

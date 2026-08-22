const fs = require('fs');

let file = 'src/app/page.js';
let text = fs.readFileSync(file, 'utf8');

// Replace the teaser array
text = text.replace(
  /const teaserData = \[[\s\S]*?\];/,
  `const teaserData = [
    { src: "/assets/portfolio/21_descenso_extremo_fachada.jpg", alt: "Descenso de gran altura" },
    { src: "/assets/portfolio/22_soldadura_techo.jpg", alt: "Soldadura en techo" },
    { src: "/assets/portfolio/viva_centro_comercial.png", alt: "Lavado Centro Comercial" },
    { src: "/assets/portfolio/facade_painting_building.jpg", alt: "Pintura de Fachadas" },
    { src: "/assets/portfolio/workers_roof_red_shirts.jpg", alt: "Trabajo en Cubiertas" }
  ];`
);

// Remove the text with regex that handles encoding issues
text = text.replace(/<p style=\{\{\s*color: '#666',\s*fontSize: '16px'\s*\}\}>[\s\S]*?Swipe horizontal[\s\S]*?<\/p>/g, '');

fs.writeFileSync(file, text);

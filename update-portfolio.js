const fs = require('fs');

let file = 'src/app/portafolio/PortfolioClient.jsx';
let text = fs.readFileSync(file, 'utf8');

// The new real items
const newItems = `
  { id: 101, src: "/assets/portfolio/1_pintura_fachada.jpg", cat: "fachadas", alt: "Aplicación de pintura primera mano" },
  { id: 102, src: "/assets/portfolio/2_prueba_anclaje.png", cat: "lineas", alt: "Prueba de extracción de anclaje con hidrájaws" },
  { id: 103, src: "/assets/portfolio/3_lavado_fachada.jpg", cat: "fachadas", alt: "Lavado de fachada edificio alto" },
  { id: 104, src: "/assets/portfolio/4_lavado_cubierta.jpg", cat: "cubiertas", alt: "Lavado a presión de techo/cubierta" },
  { id: 105, src: "/assets/portfolio/5_mantenimiento_techo_tijera.jpg", cat: "estructuras", alt: "Mantenimiento estructural con elevador de tijera" },
`;

// Insert them at the top of the array
text = text.replace('const portfolioData = [', 'const portfolioData = [\n' + newItems);

// We need to add "cubiertas" to the filter buttons!
text = text.replace(
  '{ id: "lineas", label: "Líneas de Vida" }', 
  '{ id: "lineas", label: "Líneas de Vida" },\n          { id: "cubiertas", label: "Cubiertas" }'
);

fs.writeFileSync(file, text);

// Now update Teaser in page.js to show these 5 plus one old one
let pageFile = 'src/app/page.js';
let pageText = fs.readFileSync(pageFile, 'utf8');

const newTeaserArray = `
  const teaserPhotos = [
    "/assets/portfolio/1_pintura_fachada.jpg",
    "/assets/portfolio/2_prueba_anclaje.png",
    "/assets/portfolio/3_lavado_fachada.jpg",
    "/assets/portfolio/4_lavado_cubierta.jpg",
    "/assets/portfolio/5_mantenimiento_techo_tijera.jpg",
    "/assets/real_roof_lifeline.jpg"
  ];
`;

pageText = pageText.replace(/const teaserPhotos = \[[\s\S]*?\];/, newTeaserArray.trim());
fs.writeFileSync(pageFile, pageText);

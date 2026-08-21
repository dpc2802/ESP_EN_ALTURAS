const fs = require('fs');

let file = 'src/app/portafolio/PortfolioClient.jsx';
let text = fs.readFileSync(file, 'utf8');

const newItems = `
  { id: 121, src: "/assets/portfolio/21_descenso_extremo_fachada.jpg", cat: "fachadas", alt: "Descenso de gran altura en entorno urbano" },
  { id: 122, src: "/assets/portfolio/22_soldadura_techo.jpg", cat: "estructuras", alt: "Trabajo de soldadura en estructura de techo" },
  { id: 123, src: "/assets/portfolio/23_soldadura_estructura.png", cat: "estructuras", alt: "Soldadura en viga estructural en altura" },
  { id: 124, src: "/assets/portfolio/24_tensor_linea_vida.jpg", cat: "lineas", alt: "Detalle de tensor y absorbedor de energía en línea de vida" },
  { id: 125, src: "/assets/portfolio/25_preparacion_cuerdas_azotea.jpg", cat: "fachadas", alt: "Equipo técnico preparando anclajes en azotea" },
`;

// Insert them at the top of the array
text = text.replace('const portfolioData = [', 'const portfolioData = [\n' + newItems);

fs.writeFileSync(file, text);

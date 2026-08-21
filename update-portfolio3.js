const fs = require('fs');

let file = 'src/app/portafolio/PortfolioClient.jsx';
let text = fs.readFileSync(file, 'utf8');

const newItems = `
  { id: 111, src: "/assets/portfolio/11_instalacion_linea_techo.jpg", cat: "lineas", alt: "Instalación de sistema de línea de vida en techo" },
  { id: 112, src: "/assets/portfolio/12_ajuste_linea_vida.jpg", cat: "lineas", alt: "Ajuste y tensado de línea de vida estructural" },
  { id: 113, src: "/assets/portfolio/13_inspeccion_cubierta.png", cat: "cubiertas", alt: "Inspección técnica de riesgo en cubierta" },
  { id: 114, src: "/assets/portfolio/14_prueba_extraccion.jpg", cat: "lineas", alt: "Verificación de resistencia de anclaje con Hydrajaws" },
  { id: 115, src: "/assets/portfolio/15_montaje_escalera.jpg", cat: "fachadas", alt: "Montaje seguro de escalera de extensión" },
`;

// Insert them at the top of the array
text = text.replace('const portfolioData = [', 'const portfolioData = [\n' + newItems);

fs.writeFileSync(file, text);

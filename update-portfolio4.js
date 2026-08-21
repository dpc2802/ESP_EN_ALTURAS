const fs = require('fs');

let file = 'src/app/portafolio/PortfolioClient.jsx';
let text = fs.readFileSync(file, 'utf8');

const newItems = `
  { id: 116, src: "/assets/portfolio/16_lectura_dinamometro.png", cat: "lineas", alt: "Lectura de tensión en dinamómetro digital" },
  { id: 117, src: "/assets/portfolio/17_lavado_cubierta_doble.jpg", cat: "cubiertas", alt: "Limpieza profunda de cubierta con hidrolavadora" },
  { id: 118, src: "/assets/portfolio/18_descenso_fachada_ladrillo.jpg", cat: "fachadas", alt: "Mantenimiento simultáneo en fachada de ladrillo" },
  { id: 119, src: "/assets/portfolio/19_lavado_fachada_ladrillo.png", cat: "fachadas", alt: "Hidrolavado a presión en edificio de ladrillo" },
  { id: 120, src: "/assets/portfolio/20_trabajador_fachada_ladrillo.png", cat: "fachadas", alt: "Operario especialista en alturas inspeccionando fachada" },
`;

// Insert them at the top of the array
text = text.replace('const portfolioData = [', 'const portfolioData = [\n' + newItems);

fs.writeFileSync(file, text);

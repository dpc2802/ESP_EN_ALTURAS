const fs = require('fs');

let file = 'src/app/portafolio/PortfolioClient.jsx';
let text = fs.readFileSync(file, 'utf8');

const newItems = `
  { id: 106, src: "/assets/portfolio/6_lavado_cubierta.jpg", cat: "cubiertas", alt: "Limpieza a presión en cubierta termoacústica" },
  { id: 107, src: "/assets/portfolio/7_prueba_anclaje_2.jpg", cat: "lineas", alt: "Certificación de anclaje estructural con dinamómetro" },
  { id: 108, src: "/assets/portfolio/8_pintura_escalera.jpg", cat: "fachadas", alt: "Pintura exterior en baja altura con escalera certificada" },
  { id: 109, src: "/assets/portfolio/9_pintura_fachada_cuerdas.jpg", cat: "fachadas", alt: "Aplicación de recubrimiento en muro ciego" },
  { id: 110, src: "/assets/portfolio/10_pintura_fachada_cuerdas_amplio.jpg", cat: "fachadas", alt: "Trabajo simultáneo de pintura en torre residencial" },
`;

// Insert them at the top of the array
text = text.replace('const portfolioData = [', 'const portfolioData = [\n' + newItems);

fs.writeFileSync(file, text);

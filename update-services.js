const fs = require('fs');

let file = 'src/app/page.js';
let text = fs.readFileSync(file, 'utf8');

const regex = /const services = \[\s*\{[\s\S]*?\}\s*\];/;

const newServices = `const services = [
    {
      num: "01",
      icon: "fa-layer-group",
      title: "ESTRUCTURAS METÁLICAS",
      desc: "Diseños ajustados a la medida; creamos y certificamos estructuras en cumplimiento de la Resolución 4272/2021.",
      image: "/assets/real_welding.jpg",
      bullets: ["Campos de entrenamiento", "Escaleras y Barandas", "Plataformas", "Monster Heights"]
    },
    {
      num: "02",
      icon: "fa-building",
      title: "TRABAJOS EN FACHADAS",
      desc: "Ejecución de trabajos en alturas que comprometan el exterior de edificios, bodegas y conjuntos residenciales con personal certificado.",
      image: "/assets/real_facade_washing2.jpg",
      bullets: ["Pintura y Lavado", "Mantenimiento y Adecuaciones", "Reparaciones", "Impermeabilización y Sellos"]
    },
    {
      num: "03",
      icon: "fa-link",
      title: "LÍNEAS DE VIDA Y ANCLAJES",
      desc: "Instalación y certificación de sistemas de protección, ofreciendo cobertura total al riesgo de caída en diversas actividades laborales.",
      image: "/assets/real_lifeline_testing.jpg",
      bullets: ["Líneas de vida horizontales y verticales", "Puntos de anclaje certificados (5.000 lb)"]
    },
    {
      num: "04",
      icon: "fa-screwdriver-wrench",
      title: "TRABAJOS EN ALTURAS",
      desc: "Ejecución experta en instalación y mantenimiento de estructuras suspendidas o de difícil acceso.",
      image: "/assets/real_tower_structure.jpg",
      bullets: ["Mantenimiento", "Reparaciones e Instalaciones", "Limpieza técnica"]
    },
    {
      num: "05",
      icon: "fa-trowel-bricks",
      title: "TRABAJOS EN CUBIERTAS",
      desc: "Operamos todo tipo de techos y cubiertas industriales que requieran intervención especializada y segura.",
      image: "/assets/real_roof_lifeline.jpg",
      bullets: ["Mantenimiento de canoas", "Filtraciones de agua", "Impermeabilizaciones y terminaciones", "Montaje de cubierta", "Instalación de plataformas"]
    },
    {
      num: "06",
      icon: "fa-paint-roller",
      title: "OBRA BLANCA Y ACABADOS",
      desc: "Acabados profesionales en bodegas, casas y apartamentos, incluyendo adecuaciones y mantenimiento general.",
      image: "/assets/portfolio/facade_maintenance.jpg",
      bullets: ["Pintura y Resanes", "Lavado e hidrófugo", "Fugas de agua", "Reparaciones eléctricas básicas", "Reparaciones en general"]
    },
    {
      num: "07",
      icon: "fa-chalkboard-user",
      title: "FORMACIÓN EN ALTURAS",
      desc: "Espacios de sensibilización para el personal con respecto a los riesgos inminentes previamente identificados en la empresa.",
      image: "/assets/real_rope_access.jpg",
      bullets: ["Cursos: Avanzado, Reentrenamiento, Coordinador, Operativo", "Planes de formación", "Ciclos formativos", "Sensibilización de riesgos"]
    }
  ];`;

text = text.replace(regex, newServices);

fs.writeFileSync(file, text);

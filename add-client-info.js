const fs = require('fs');

// UPDATE FOOTER.JSX
let footerFile = 'src/app/components/Footer.jsx';
let footerText = fs.readFileSync(footerFile, 'utf8');

const newFooterContact = `<li>
                <i className="fa-solid fa-map-pin"></i>
                <span>Sedes: Medellín (Calle 53A #47-45) y Rionegro (Vereda La Playa)</span>
              </li>
              <li>
                <i className="fa-solid fa-clock"></i>
                <span>Horario: Lunes a Viernes | 7:30 AM - 4:00 PM</span>
              </li>
              <li>
                <i className="fa-solid fa-route"></i>
                <span>Cobertura: Medellín y Oriente Antioqueño</span>
              </li>
            </ul>`;

footerText = footerText.replace(
  /<\/ul>/, // we replace the first </ul> that closes footer-contact-list? No, footer-links is the first ul. Let's be specific.
  (match) => match // temporary
);
// Let's just use regex safely
footerText = footerText.replace(
  /<li>\s*<i className="fa-solid fa-phone"><\/i>\s*<a href="tel:\+573053439984">305 343 9984<\/a>\s*<\/li>\s*<\/ul>/,
  `<li>
                <i className="fa-solid fa-phone"></i>
                <a href="tel:+573053439984">305 343 9984</a>
              </li>
              ${newFooterContact}`
);
fs.writeFileSync(footerFile, footerText);

// UPDATE PAGE.JS
let pageFile = 'src/app/page.js';
let pageText = fs.readFileSync(pageFile, 'utf8');

// 1. Benefits Section: Garantia 10 años
pageText = pageText.replace(
  /icon: "fa-shield-halved",\s*title: "Garantas",\s*desc: "Respaldo total en todos nuestros servicios, estructuras e instalaciones\."/g,
  `icon: "fa-shield-halved",
        title: "Garantía de 10 Años",
        desc: "En sistemas de anclaje, con recertificación técnica anual garantizada."`
);
pageText = pageText.replace(
  /icon: "fa-shield-halved",\s*title: "Garantías",\s*desc: "Respaldo total en todos nuestros servicios, estructuras e instalaciones\."/g,
  `icon: "fa-shield-halved",
        title: "Garantía de 10 Años",
        desc: "En sistemas de anclaje, con recertificación técnica anual garantizada."`
);

// 2. Contact Section: Add Location, Coverage, Hours
const contactMethodsRegex = /\{ icon: "fa-brands fa-whatsapp", lbl: "Celular \/ WhatsApp", val: "305 343 9984", href: "https:\/\/wa\.me\/573053439984" \},/;
pageText = pageText.replace(contactMethodsRegex, 
  `{ icon: "fa-brands fa-whatsapp", lbl: "Celular / WhatsApp", val: "305 343 9984", href: "https://wa.me/573053439984" },
                  { icon: "fa-solid fa-map-pin", lbl: "Sedes Físicas", val: "Medellín: Cll 53A #47-45 | Rionegro: Vereda La Playa" },
                  { icon: "fa-solid fa-clock", lbl: "Horario de Atención", val: "7:30 AM - 4:00 PM" },
                  { icon: "fa-solid fa-route", lbl: "Cobertura", val: "Medellín y Oriente Antioqueño" },`);

// 3. Companies Marquee (Adding a slick companies text to AboutSection)
const aboutStart = `function AboutSection() {`;
const marqueeComponent = `
function CompaniesMarquee() {
  return (
    <div style={{ background: 'var(--navy)', padding: '24px 0', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center' }}>
      <div style={{ padding: '0 40px', color: 'rgba(255,255,255,0.4)', fontSize: '13px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', flexShrink: 0 }}>Empresas que confían en nosotros:</div>
      <div style={{ display: 'inline-flex', gap: '60px', animation: 'marquee 25s linear infinite', color: '#fff', fontWeight: 700, fontSize: '18px', textTransform: 'uppercase' }}>
        <span>Metro de Medellín</span>
        <span style={{ color: 'var(--orange)' }}>•</span>
        <span>Viva de La Ceja</span>
        <span style={{ color: 'var(--orange)' }}>•</span>
        <span>Colanta</span>
        <span style={{ color: 'var(--orange)' }}>•</span>
        <span>Jardín Botánico</span>
        <span style={{ color: 'var(--orange)' }}>•</span>
        {/* Duplicate for seamless loop */}
        <span>Metro de Medellín</span>
        <span style={{ color: 'var(--orange)' }}>•</span>
        <span>Viva de La Ceja</span>
        <span style={{ color: 'var(--orange)' }}>•</span>
        <span>Colanta</span>
        <span style={{ color: 'var(--orange)' }}>•</span>
        <span>Jardín Botánico</span>
      </div>
      <style dangerouslySetInnerHTML={{ __html: \`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      \`}} />
    </div>
  );
}

`;

if (!pageText.includes('CompaniesMarquee')) {
  pageText = pageText.replace(aboutStart, marqueeComponent + aboutStart);
  // Add it above the About section section tag
  pageText = pageText.replace(
    /<section\s+className="about"\s+id="empresa"/,
    `<CompaniesMarquee />\n    <section \n      className="about" \n      id="empresa"`
  );
}

fs.writeFileSync(pageFile, pageText);

const fs = require('fs');

let file = 'src/app/page.js';
let text = fs.readFileSync(file, 'utf8');

// 1. Quitar 'PANTALLA 1 • MÓVIL' y su contenedor
text = text.replace(/<div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>\s*<div style={{ width: '24px', height: '2px', background: 'var\(--orange\)' }}><\/div>\s*<span style={{ color: 'var\(--orange\)', fontWeight: 800, letterSpacing: '1px', fontSize: '13px', textTransform: 'uppercase' }}>\s*PANTALLA 1 • MÓVIL\s*<\/span>\s*<\/div>/g, '');

// 2. Quitar los puntos de navegación (Dots)
text = text.replace(/{\/\* Dots \(Simulados visualmente\) \*\/}\s*<div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '32px' }}>\s*<div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ddd' }}><\/div>\s*<div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ddd' }}><\/div>\s*<div style={{ width: '20px', height: '8px', borderRadius: '8px', background: 'var\(--orange\)' }}><\/div>\s*<div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ddd' }}><\/div>\s*<div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ddd' }}><\/div>\s*<\/div>/g, '');

// 3. Quitar el texto de pie de página sobre Swipe nativo
text = text.replace(/<p style={{ textAlign: 'center', fontSize: '12px', color: '#888', marginTop: '24px' }}>\s*• Swipe nativo \(scroll-snap\) en vez de scroll-jacking — mejor rendimiento y UX en móvil\s*<\/p>/g, '');

fs.writeFileSync(file, text);

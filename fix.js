const fs = require('fs');

const files = [
  'src/app/page.js',
  'src/app/servicios/estructuras-metalicas/page.js',
  'src/app/servicios/lineas-de-vida/page.js',
  'src/app/servicios/trabajos-en-cubiertas/page.js',
  'src/app/servicios/trabajos-en-fachadas/page.js'
];

files.forEach(f => {
  let text = fs.readFileSync(f, 'utf8');
  text = text.replace(/<FloatingWhatsApp \/>`n\s*<ScrollToTop \/>/g, "<FloatingWhatsApp />\n      <ScrollToTop />");
  text = text.replace(/import FloatingWhatsApp from "(.*?)";`nimport ScrollToTop from "(.*?)";/g, 'import FloatingWhatsApp from "$1";\nimport ScrollToTop from "$2";');
  fs.writeFileSync(f, text);
});

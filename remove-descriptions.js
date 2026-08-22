const fs = require('fs');

const files = [
  'src/app/page.js',
  'src/app/portafolio/PortfolioClient.jsx'
];

const regex = /\{\/\*\s*Barra inferior Glassmorphism\s*\*\/\}\s*<div style=\{\{\s*position: 'absolute',\s*bottom: 0,[\s\S]*?zIndex: 2\s*\}\}>\s*\{item\.alt\}\s*<\/div>/g;

files.forEach(file => {
  if (fs.existsSync(file)) {
    let text = fs.readFileSync(file, 'utf8');
    text = text.replace(regex, '');
    fs.writeFileSync(file, text);
    console.log(`Updated ${file}`);
  }
});

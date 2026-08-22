const fs = require('fs');

const files = [
  'src/app/page.js',
  'src/app/portafolio/page.js',
  'src/app/portafolio/PortfolioClient.jsx'
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let text = fs.readFileSync(file, 'utf8');
    text = text.replace(/>0[0-9]\.\s+/g, '>');
    fs.writeFileSync(file, text);
    console.log(`Updated ${file}`);
  }
});

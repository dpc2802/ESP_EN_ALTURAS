const fs = require('fs');
let file = 'src/app/globals.css';
let text = fs.readFileSync(file, 'utf8');

text = text.replace(
  /\.footer-logo \{ max-width: 200px; \}/g,
  `.footer-logo { max-width: 200px; height: auto; }`
);

fs.writeFileSync(file, text);

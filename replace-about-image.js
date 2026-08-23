const fs = require('fs');

let file = 'src/app/page.js';
let text = fs.readFileSync(file, 'utf8');

text = text.replace(
  /\/assets\/lifeline_safety\.jpg/g,
  '/assets/nuestra-empresa.jpg'
);

fs.writeFileSync(file, text);

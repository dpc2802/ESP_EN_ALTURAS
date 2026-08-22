const fs = require('fs');

let file = 'src/app/components/InteractiveQuote.jsx';
let text = fs.readFileSync(file, 'utf8');

text = text.replace(
  /id: Date\.now\(\)/g,
  `id: Date.now() + Math.random().toString(36).substr(2, 9)`
);

fs.writeFileSync(file, text);

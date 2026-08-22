const fs = require('fs');

let file = 'src/app/components/Footer.jsx';
let text = fs.readFileSync(file, 'utf8');

text = text.replace(
  /<a href="https:\/\/wa\.me\/573053439984" target="_blank" rel="noreferrer">305 343 9984<\/a>/g,
  `<a href="tel:+573053439984">305 343 9984</a>`
);

fs.writeFileSync(file, text);

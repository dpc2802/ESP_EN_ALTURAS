const fs = require('fs');

let file = 'src/app/page.js';
let text = fs.readFileSync(file, 'utf8');

text = text.replace(
  /href="https:\/\/wa\.me\/3143588264"/g,
  `href="https://wa.me/573053439984"`
);

fs.writeFileSync(file, text);

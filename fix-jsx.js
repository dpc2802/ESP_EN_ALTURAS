const fs = require('fs');
let file = 'src/app/components/InteractiveQuote.jsx';
let text = fs.readFileSync(file, 'utf8');

text = text.replace(/\\`/g, '`');
text = text.replace(/\\\$/g, '$');

// Re-write
fs.writeFileSync(file, text);

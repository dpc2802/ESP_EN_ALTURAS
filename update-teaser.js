const fs = require('fs');

let file = 'src/app/page.js';
let text = fs.readFileSync(file, 'utf8');

text = text.replace(/\{\/\*\s*Badge numǸrico en la esquina\s*\*\/\}\s*<div style=\{\{[\s\S]*?zIndex: 2,[\s\S]*?\}\}>\s*\{badgeNumber\}\s*<\/div>/g, '');
text = text.replace(/\{\/\*\s*Badge numérico en la esquina\s*\*\/\}\s*<div style=\{\{[\s\S]*?zIndex: 2,[\s\S]*?\}\}>\s*\{badgeNumber\}\s*<\/div>/g, '');
text = text.replace(/<div style=\{\{\s*position: 'absolute',\s*top: '16px',\s*left: '16px',\s*width: '32px',[\s\S]*?\}\}>\s*\{badgeNumber\}\s*<\/div>/g, '');

fs.writeFileSync(file, text);

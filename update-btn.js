const fs = require('fs');

let file = 'src/app/components/Header.jsx';
let text = fs.readFileSync(file, 'utf8');

// The mobile button
text = text.replace(
  /<Link\s+href="\/#contacto"\s+className="btn-primary"\s+style=\{\{\s*width: "100%",\s*justifyContent: "center"\s*\}\}\s+onClick=\{\(\) => setMenuOpen\(false\)\}\s*>\s*Cotizar Proyecto\s*<\/Link>/,
  `<a 
                  href="https://wa.me/573053439984?text=Hola,%20quisiera%20cotizar%20un%20proyecto" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn-primary"
                  style={{ width: "100%", justifyContent: "center", textDecoration: 'none' }}
                  onClick={() => setMenuOpen(false)}
                >
                  Cotizar Proyecto
                </a>`
);

// The desktop button
text = text.replace(
  /<Link href="\/#contacto" className="btn-nav">Cotizar Proyecto<\/Link>/,
  `<a href="https://wa.me/573053439984?text=Hola,%20quisiera%20cotizar%20un%20proyecto" target="_blank" rel="noreferrer" className="btn-nav" style={{ textDecoration: 'none' }}>Cotizar Proyecto</a>`
);

fs.writeFileSync(file, text);

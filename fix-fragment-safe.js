const fs = require('fs');

let file = 'src/app/page.js';
let text = fs.readFileSync(file, 'utf8');

// Find start and end of AboutSection
const startIdx = text.indexOf('function AboutSection() {');
const endIdx = text.indexOf('function ServicesSection({ onItemClick }) {');

if (startIdx === -1 || endIdx === -1) {
  console.log("Could not find boundaries");
  process.exit(1);
}

let before = text.substring(0, startIdx);
let about = text.substring(startIdx, endIdx);
let after = text.substring(endIdx);

about = about.replace(
  /return \(\s*<CompaniesMarquee \/>\s*<section/,
  `return (\n    <>\n      <CompaniesMarquee />\n      <section`
);

about = about.replace(
  /<\/section>\s*\);\s*\}/,
  `</section>\n    </>\n  );\n}`
);

fs.writeFileSync(file, before + about + after);

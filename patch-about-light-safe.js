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

// 1. Text color of section
about = about.replace(
  /color: '#fff',\s*overflow: 'hidden'/g,
  `color: 'var(--navy)',\n        overflow: 'hidden'`
);

// 2. Dark Overlay -> Light Overlay
about = about.replace(
  /background: 'linear-gradient\(135deg, rgba\(11, 29, 53, 0\.95\) 0%, rgba\(11, 29, 53, 0\.85\) 100%\)'/g,
  `background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.96) 0%, rgba(240, 242, 245, 0.85) 100%)'`
);
about = about.replace(
  /background: 'radial-gradient\(circle, rgba\(243,107,34,0\.15\) 0%, rgba\(0,0,0,0\) 60%\)'/g,
  `background: 'radial-gradient(circle, rgba(243,107,34,0.1) 0%, rgba(255,255,255,0) 60%)'`
);

// 3. Image border/shadow
about = about.replace(
  /boxShadow: '0 30px 60px rgba\(0,0,0,0\.5\)', border: '1px solid rgba\(255,255,255,0\.1\)'/g,
  `boxShadow: '0 30px 60px rgba(0,0,0,0.15)', border: '1px solid rgba(255,255,255,0.8)'`
);

// 4. Hotspot tooltip background
about = about.replace(
  /background: 'rgba\(11,29,53,0\.95\)', backdropFilter: 'blur\(10px\)', border: '1px solid rgba\(255,255,255,0\.2\)'/g,
  `background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 10px 25px rgba(0,0,0,0.1)'`
);

// 5. Tooltip text color
about = about.replace(
  /color: '#ddd'/g,
  `color: '#555'`
);

// 6. Right Side glassmorphism background
about = about.replace(
  /background: 'rgba\(255, 255, 255, 0\.05\)'/g,
  `background: 'rgba(255, 255, 255, 0.65)'`
);
about = about.replace(
  /border: '1px solid rgba\(255, 255, 255, 0\.1\)'/g,
  `border: '1px solid rgba(255, 255, 255, 1)'`
);
about = about.replace(
  /boxShadow: '0 20px 40px rgba\(0,0,0,0\.4\)'/g,
  `boxShadow: '0 20px 40px rgba(0,0,0,0.08)'`
);

// 7. Text colors
about = about.replace(
  /color: '#fff', textTransform: 'uppercase'/g,
  `color: 'var(--navy)', textTransform: 'uppercase'`
);
about = about.replace(
  /color: '#fff', margin: 0, textShadow: '0 2px 10px rgba\(0,0,0,0\.5\)'/g,
  `color: 'var(--navy)', margin: 0`
);
about = about.replace(
  /color: 'rgba\(255,255,255,0\.7\)'/g,
  `color: '#555'`
);
about = about.replace(
  /color: 'rgba\(255,255,255,0\.9\)'/g,
  `color: 'var(--navy)'`
);
about = about.replace(
  /fontWeight: 600/g, 
  `fontWeight: 700`
);

// 8. Pills
about = about.replace(
  /background: 'rgba\(0,0,0,0\.3\)', border: '1px solid rgba\(255,255,255,0\.1\)'/g,
  `background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(0,0,0,0.05)'`
);
about = about.replace(
  /boxShadow: '0 4px 10px rgba\(0,0,0,0\.2\)'/g,
  `boxShadow: '0 4px 10px rgba(0,0,0,0.05)'`
);

fs.writeFileSync(file, before + about + after);
console.log("Success");

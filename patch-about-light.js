const fs = require('fs');

let file = 'src/app/page.js';
let text = fs.readFileSync(file, 'utf8');

// 1. Text color of section
text = text.replace(
  /color: '#fff',\s*overflow: 'hidden'/g,
  `color: 'var(--navy)',\n        overflow: 'hidden'`
);

// 2. Dark Overlay -> Light Overlay
text = text.replace(
  /background: 'linear-gradient\(135deg, rgba\(11, 29, 53, 0\.95\) 0%, rgba\(11, 29, 53, 0\.85\) 100%\)'/g,
  `background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.96) 0%, rgba(240, 242, 245, 0.85) 100%)'`
);
text = text.replace(
  /background: 'radial-gradient\(circle, rgba\(243,107,34,0\.15\) 0%, rgba\(0,0,0,0\) 60%\)'/g,
  `background: 'radial-gradient(circle, rgba(243,107,34,0.1) 0%, rgba(255,255,255,0) 60%)'`
);

// 3. Image border/shadow
text = text.replace(
  /boxShadow: '0 30px 60px rgba\(0,0,0,0\.5\)', border: '1px solid rgba\(255,255,255,0\.1\)'/g,
  `boxShadow: '0 30px 60px rgba(0,0,0,0.15)', border: '1px solid rgba(255,255,255,0.8)'`
);

// 4. Hotspot tooltip background
text = text.replace(
  /background: 'rgba\(11,29,53,0\.95\)', backdropFilter: 'blur\(10px\)', border: '1px solid rgba\(255,255,255,0\.2\)'/g,
  `background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 10px 25px rgba(0,0,0,0.1)'`
);

// 5. Tooltip text color
text = text.replace(
  /color: '#ddd'/g,
  `color: '#555'`
);

// 6. Right Side glassmorphism background
text = text.replace(
  /background: 'rgba\(255, 255, 255, 0\.05\)'/g,
  `background: 'rgba(255, 255, 255, 0.65)'`
);
text = text.replace(
  /border: '1px solid rgba\(255, 255, 255, 0\.1\)'/g,
  `border: '1px solid rgba(255, 255, 255, 1)'`
);
text = text.replace(
  /boxShadow: '0 20px 40px rgba\(0,0,0,0\.4\)'/g,
  `boxShadow: '0 20px 40px rgba(0,0,0,0.08)'`
);

// 7. Text colors
text = text.replace(
  /color: '#fff', textTransform: 'uppercase'/g,
  `color: 'var(--navy)', textTransform: 'uppercase'`
);
text = text.replace(
  /color: '#fff', margin: 0, textShadow: '0 2px 10px rgba\(0,0,0,0\.5\)'/g,
  `color: 'var(--navy)', margin: 0`
);
text = text.replace(
  /color: 'rgba\(255,255,255,0\.7\)'/g,
  `color: '#555'`
);
text = text.replace(
  /color: 'rgba\(255,255,255,0\.9\)'/g,
  `color: 'var(--navy)'`
);
text = text.replace(
  /fontWeight: 600/g, // Only for the regular text weights inside that block, well there are a few. Let's be careful.
  `fontWeight: 700` // 700 is bolder for light backgrounds
);

// 8. Pills
text = text.replace(
  /background: 'rgba\(0,0,0,0\.3\)', border: '1px solid rgba\(255,255,255,0\.1\)'/g,
  `background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(0,0,0,0.05)'`
);
text = text.replace(
  /boxShadow: '0 4px 10px rgba\(0,0,0,0\.2\)'/g,
  `boxShadow: '0 4px 10px rgba(0,0,0,0.05)'`
);

fs.writeFileSync(file, text);

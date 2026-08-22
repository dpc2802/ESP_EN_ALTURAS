const fs = require('fs');

// PATCH GLOBALS.CSS
let cssFile = 'src/app/globals.css';
let css = fs.readFileSync(cssFile, 'utf8');

// Section Background
css = css.replace(
  /\.contact \{\s*padding: 120px 0;\s*position: relative;\s*overflow: hidden;\s*background: var\(--blue-950\);\s*\}/,
  `.contact {
  padding: 120px 0;
  position: relative;
  overflow: hidden;
  background: #f4f6f8;
}`
);

// Radial Gradient
css = css.replace(
  /background: radial-gradient\(circle at 70% 30%, transparent 0%, var\(--blue-950\) 80%\);/,
  `background: radial-gradient(circle at 70% 30%, transparent 0%, rgba(244, 246, 248, 1) 80%);`
);

// Heading
css = css.replace(
  /\.contact h2 \{\s*font-family: var\(--font-head\);\s*font-size: clamp\(32px, 4vw, 52px\);\s*font-weight: 700;\s*text-transform: uppercase;\s*color: var\(--white\);\s*line-height: 1\.1;\s*margin-bottom: 20px;\s*\}/,
  `.contact h2 {
  font-family: var(--font-head);
  font-size: clamp(32px, 4vw, 52px);
  font-weight: 900;
  text-transform: uppercase;
  color: var(--navy);
  line-height: 1.1;
  margin-bottom: 20px;
}`
);

// Lead text
css = css.replace(
  /\.contact-lead \{\s*font-size: 16px;\s*color: rgba\(255,255,255,0\.5\);\s*line-height: 1\.7;\s*margin-bottom: 48px;\s*\}/,
  `.contact-lead {
  font-size: 16px;
  color: #555;
  line-height: 1.7;
  margin-bottom: 48px;
}`
);

// Method Icon
css = css.replace(
  /\.contact-method-icon \{\s*width: 48px; height: 48px;\s*background: rgba\(255,255,255,0\.06\);\s*border: 1px solid rgba\(255,255,255,0\.1\);\s*border-radius: 10px;\s*display: flex; align-items: center; justify-content: center;\s*font-size: 20px;\s*color: var\(--orange\);\s*flex-shrink: 0;\s*\}/,
  `.contact-method-icon {
  width: 48px; height: 48px;
  background: #fff;
  border: 1px solid rgba(0,0,0,0.05);
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  border-radius: 10px;
  display: flex; align-items: center; justify-content: center;
  font-size: 20px;
  color: var(--orange);
  flex-shrink: 0;
}`
);

// Method Label
css = css.replace(
  /\.contact-method-lbl \{\s*font-family: var\(--font-mono\);\s*font-size: 10px;\s*font-weight: 700;\s*color: rgba\(255,255,255,0\.3\);\s*text-transform: uppercase;\s*letter-spacing: 0\.08em;\s*\}/,
  `.contact-method-lbl {
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 700;
  color: rgba(0,0,0,0.4);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}`
);

// Method Val
css = css.replace(
  /\.contact-method-val \{\s*font-family: var\(--font-head\);\s*font-size: 16px;\s*font-weight: 500;\s*color: var\(--white\);\s*word-break: break-word;\s*overflow-wrap: break-word;\s*\}/,
  `.contact-method-val {
  font-family: var(--font-head);
  font-size: 16px;
  font-weight: 700;
  color: var(--navy);
  word-break: break-word;
  overflow-wrap: break-word;
}`
);

// Form Wrap
css = css.replace(
  /\.contact-form-wrap \{\s*background: rgba\(255,255,255,0\.04\);\s*border: 1px solid rgba\(255,255,255,0\.08\);\s*border-radius: 16px;\s*padding: 48px;\s*backdrop-filter: blur\(8px\);\s*\}/,
  `.contact-form-wrap {
  background: #fff;
  border: 1px solid rgba(0,0,0,0.05);
  box-shadow: 0 20px 40px rgba(0,0,0,0.05);
  border-radius: 24px;
  padding: 48px;
}`
);

// Chat Container
css = css.replace(
  /\.chat-container \{\s*display: flex;\s*flex-direction: column;\s*gap: 16px;\s*max-height: 500px;\s*overflow-y: auto;\s*padding: 16px;\s*background: rgba\(11,29,53,0\.5\);\s*border-radius: 16px;\s*border: 1px solid rgba\(255,255,255,0\.1\);\s*scrollbar-width: thin;\s*\}/,
  `.chat-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-height: 500px;
  overflow-y: auto;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 16px;
  border: 1px solid rgba(0,0,0,0.05);
  box-shadow: inset 0 2px 10px rgba(0,0,0,0.02);
  scrollbar-width: thin;
}`
);

// Chat Bot Msg
css = css.replace(
  /\.chat-msg\.bot \{\s*background: rgba\(255,255,255,0\.1\);\s*color: #fff;\s*align-self: flex-start;\s*border-bottom-left-radius: 4px;\s*\}/,
  `.chat-msg.bot {
  background: #fff;
  color: var(--navy);
  align-self: flex-start;
  border-bottom-left-radius: 4px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  border: 1px solid rgba(0,0,0,0.03);
}`
);

// Chat Option Btn
css = css.replace(
  /\.chat-option-btn \{\s*background: rgba\(255,255,255,0\.05\);\s*border: 1px solid rgba\(255,255,255,0\.2\);\s*color: #fff;\s*padding: 10px 16px;\s*border-radius: 20px;\s*cursor: pointer;\s*font-size: 14px;\s*transition: all 0\.2s;\s*display: flex;\s*align-items: center;\s*gap: 8px;\s*\}/,
  `.chat-option-btn {
  background: #fff;
  border: 1px solid rgba(0,0,0,0.1);
  color: var(--navy);
  padding: 10px 16px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.03);
}`
);

fs.writeFileSync(cssFile, css);

// PATCH INTERACTIVEQUOTE.JSX
let jsxFile = 'src/app/components/InteractiveQuote.jsx';
let jsx = fs.readFileSync(jsxFile, 'utf8');

jsx = jsx.replace(
  /<h2 style=\{\{ fontSize: '20px', margin: 0, fontFamily: 'var\(--font-head\)', color: '#fff' \}\}>/,
  `<h2 style={{ fontSize: '20px', margin: 0, fontFamily: 'var(--font-head)', color: 'var(--navy)' }}>`
);
jsx = jsx.replace(
  /color: 'rgba\(255,255,255,0\.5\)'/g,
  `color: '#666'` // Chat typing indicator
);
jsx = jsx.replace(
  /background: 'rgba\(255,255,255,0\.1\)'/g,
  `background: '#ccc'` // Chat typing dot
);

// Form input fixes just in case
jsx = jsx.replace(
  /borderBottom: '1px solid rgba\(255,255,255,0\.1\)'/g,
  `borderBottom: '1px solid rgba(0,0,0,0.05)'`
);

fs.writeFileSync(jsxFile, jsx);

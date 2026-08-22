const fs = require('fs');

let file = 'src/app/portafolio/PortfolioClient.jsx';
let text = fs.readFileSync(file, 'utf8');

// 1. Add visibleCount state
if (!text.includes('visibleCount')) {
  text = text.replace(
    /const \[filter, setFilter\] = useState\("todas"\);/,
    `const [filter, setFilter] = useState("todas");\n  const [visibleCount, setVisibleCount] = useState(8);`
  );
}

// 2. Change onClick={() => setFilter(btn.id)} to reset visibleCount
text = text.replace(
  /onClick=\{\(\) => setFilter\(btn\.id\)\}/g,
  `onClick={() => { setFilter(btn.id); setVisibleCount(8); }}`
);

// 3. Update the text showing "Mostrando X de Y"
text = text.replace(
  /Mostrando <strong>\{filteredData\.length\}<\/strong> de <strong>\{portfolioData\.length\}<\/strong>/g,
  `Mostrando <strong>{Math.min(visibleCount, filteredData.length)}</strong> de <strong>{filteredData.length}</strong>`
);

// 4. Update the map to slice data
text = text.replace(
  /\{filteredData\.map\(\(item, index\) => \{/g,
  `{filteredData.slice(0, visibleCount).map((item, index) => {`
);

// 5. Update the Cargar Más button
const btnRegex = /<div style=\{\{ display: 'flex', justifyContent: 'center', marginTop: '60px' \}\}>\s*<button style=\{\{[\s\S]*?\}\}>\s*CARGAR M\?S FOTOS\s*<\/button>\s*<\/div>/;

const newBtnCode = `{visibleCount < filteredData.length && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '60px' }}>
          <button 
            onClick={() => setVisibleCount(prev => prev + 8)}
            style={{
              padding: '16px 40px',
              background: '#fff',
              border: '1px solid rgba(0,0,0,0.1)',
              borderRadius: '8px',
              color: 'var(--navy)',
              fontWeight: 800,
              fontSize: '14px',
              boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
              cursor: 'pointer'
            }}
          >
            CARGAR MÁS FOTOS
          </button>
        </div>
      )}`;

text = text.replace(btnRegex, newBtnCode);

// Sometimes the encoding is weird on "CARGAR MÁS", let's do a fallback replace if the exact text wasn't matched
if (text.includes("CARGAR M")) {
  text = text.replace(
    /<div style=\{\{ display: 'flex', justifyContent: 'center', marginTop: '60px' \}\}>\s*<button style=\{\{[\s\S]*?\}\}>[\s\S]*?CARGAR M[\s\S]*?S FOTOS[\s\S]*?<\/button>\s*<\/div>/,
    newBtnCode
  );
}

fs.writeFileSync(file, text);

const fs = require('fs');

let file = 'src/app/portafolio/PortfolioClient.jsx';
let text = fs.readFileSync(file, 'utf8');

// 1. Remove the numbers
text = text.replace(/\{\/\*\s*Badge numǸrico en la esquina\s*\*\/\}\s*<div style=\{\{[\s\S]*?zIndex: 2,[\s\S]*?\}\}>\s*\{badgeNumber\}\s*<\/div>/g, '');
text = text.replace(/\{\/\*\s*Badge numérico en la esquina\s*\*\/\}\s*<div style=\{\{[\s\S]*?zIndex: 2,[\s\S]*?\}\}>\s*\{badgeNumber\}\s*<\/div>/g, '');
// Also any generic badgeNumber div
text = text.replace(/<div style=\{\{\s*position: 'absolute',\s*top: '16px',\s*left: '16px',\s*width: '32px',[\s\S]*?\}\}>\s*\{badgeNumber\}\s*<\/div>/g, '');

// 2. Add onNext and onPrev handlers
if (!text.includes('handleNext')) {
  const hooksInjection = `
  const handleNext = () => {
    if (!selectedItem) return;
    const currentIndex = filteredData.findIndex(item => item.id === selectedItem.id);
    if (currentIndex < filteredData.length - 1) {
      setSelectedItem(filteredData[currentIndex + 1]);
    } else {
      setSelectedItem(filteredData[0]); // Wrap around
    }
  };

  const handlePrev = () => {
    if (!selectedItem) return;
    const currentIndex = filteredData.findIndex(item => item.id === selectedItem.id);
    if (currentIndex > 0) {
      setSelectedItem(filteredData[currentIndex - 1]);
    } else {
      setSelectedItem(filteredData[filteredData.length - 1]); // Wrap around
    }
  };
  `;
  text = text.replace(/const filteredData =[\s\S]*?=== filter\);/, function(match) {
    return match + '\n' + hooksInjection;
  });
}

// 3. Update ImageModal usage
text = text.replace(
  /<ImageModal\s+selectedItem=\{selectedItem\}\s+setSelectedItem=\{setSelectedItem\}\s*\/>/,
  `<ImageModal selectedItem={selectedItem} setSelectedItem={setSelectedItem} onNext={handleNext} onPrev={handlePrev} />`
);

fs.writeFileSync(file, text);

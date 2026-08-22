const fs = require('fs');

let file = 'src/app/page.js';
let text = fs.readFileSync(file, 'utf8');

// 1. Rename selectedImage to selectedItem in Page component
text = text.replace(/const \[selectedImage, setSelectedImage\] = useState\(null\);/g, 'const [selectedItem, setSelectedItem] = useState(null);');
text = text.replace(/<ImageModal selectedImage={selectedImage} setSelectedImage={setSelectedImage} \/>/g, '<ImageModal selectedItem={selectedItem} setSelectedItem={setSelectedItem} />');

// 2. Rename onImageClick to onItemClick in ServicesSection usage
text = text.replace(/<ServicesSection onImageClick={setSelectedImage} \/>/g, '<ServicesSection onItemClick={setSelectedItem} />');

// 3. Rename in ServicesSection definition
text = text.replace(/function ServicesSection\(\{ onImageClick \}\) \{/g, 'function ServicesSection({ onItemClick }) {');

// 4. Update the onClick in ServicesSection
text = text.replace(/onClick=\{\(e\) => \{ e\.stopPropagation\(\); onImageClick\(svc\.image\); \}\}/g, 'onClick={(e) => { e.stopPropagation(); onItemClick({ id: svc.num, src: svc.image, alt: svc.title }); }}');

fs.writeFileSync(file, text);

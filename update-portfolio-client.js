const fs = require('fs');

let file = 'src/app/portafolio/PortfolioClient.jsx';
let text = fs.readFileSync(file, 'utf8');

// Replace setSelectedImage to setSelectedItem
text = text.replace(/const \[selectedImage, setSelectedImage\] = useState\(null\);/g, 'const [selectedItem, setSelectedItem] = useState(null);');
text = text.replace(/<ImageModal selectedImage={selectedImage} setSelectedImage={setSelectedImage} \/>/g, '<ImageModal selectedItem={selectedItem} setSelectedItem={setSelectedItem} />');

// Now replace the mapping logic
const oldMap = /\{filteredData\.map\(\(item\) => \([\s\S]*?<\/motion\.div>\n\s*\)\)}/m;

const newMap = `{filteredData.map((item, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "50px" }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ 
                duration: 0.6, 
                ease: [0.16, 1, 0.3, 1],
                delay: (index % 6) * 0.1 
              }}
              key={item.id}
              className="masonry-item"
              onClick={() => setSelectedItem(item)}
            >
              <div style={{ position: 'relative', width: '100%', borderRadius: '16px', overflow: 'hidden', cursor: 'zoom-in', boxShadow: '0 10px 20px rgba(0,0,0,0.08)' }}>
                <motion.img
                  layoutId={\`portfolio-img-\${item.id}\`}
                  src={item.src}
                  alt={item.alt}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                  className="portfolio-img-hover"
                />
              </div>
            </motion.div>
          ))}`;

text = text.replace(oldMap, newMap);
fs.writeFileSync(file, text);

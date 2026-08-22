const fs = require('fs');

let file = 'src/app/components/ImageModal.jsx';
let text = fs.readFileSync(file, 'utf8');

const regex = /export default function ImageModal\(\{ selectedItem, setSelectedItem \}\) \{/;
const replace = `export default function ImageModal({ selectedItem, setSelectedItem, onNext, onPrev }) {
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  const minSwipeDistance = 50

  const onTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    if (isLeftSwipe && onNext) {
      onNext();
    }
    if (isRightSwipe && onPrev) {
      onPrev();
    }
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onNext, onPrev]);`;

text = text.replace(regex, replace);

// Add imports for useState, useEffect if not there
if (!text.includes('useState')) {
  text = text.replace(/import \{ motion, AnimatePresence \} from "framer-motion";/, 'import { motion, AnimatePresence } from "framer-motion";\nimport { useState, useEffect } from "react";');
} else if (!text.includes('useEffect')) {
  text = text.replace(/import \{ useState \} from "react";/g, 'import { useState, useEffect } from "react";');
}

// Add UI arrows and touch events to motion.div container
text = text.replace(
  /<motion\.div\s+initial=\{\{ opacity: 0/,
  `<motion.div\n          onTouchStart={onTouchStart}\n          onTouchMove={onTouchMove}\n          onTouchEnd={onTouchEnd}\n          initial={{ opacity: 0`
);

// Add left and right arrows
text = text.replace(
  /<motion\.img/,
  `{onPrev && (
            <button 
              style={{
                position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)',
                color: '#fff', fontSize: '32px', zIndex: 1001,
                background: 'rgba(255,255,255,0.1)', border: 'none', cursor: 'pointer',
                width: '50px', height: '50px', borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                backdropFilter: 'blur(5px)'
              }}
              onClick={(e) => { e.stopPropagation(); onPrev(); }}
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
          )}

          {onNext && (
            <button 
              style={{
                position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)',
                color: '#fff', fontSize: '32px', zIndex: 1001,
                background: 'rgba(255,255,255,0.1)', border: 'none', cursor: 'pointer',
                width: '50px', height: '50px', borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                backdropFilter: 'blur(5px)'
              }}
              onClick={(e) => { e.stopPropagation(); onNext(); }}
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          )}

          <motion.img`
);

// Prevent closing modal when clicking inside arrows
// Actually they have e.stopPropagation(). But clicking the image itself also closes?
// Wait, the main container has onClick={() => setSelectedItem(null)}
// So the image needs onClick={(e) => e.stopPropagation()}
text = text.replace(
  /<motion\.img\s+layoutId/,
  `<motion.img\n            onClick={(e) => e.stopPropagation()}\n            layoutId`
);

fs.writeFileSync(file, text);

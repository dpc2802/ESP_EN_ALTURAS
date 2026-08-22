"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function ImageModal({ selectedItem, setSelectedItem, onNext, onPrev }) {
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
  }, [onNext, onPrev]);
  return (
    <AnimatePresence>
      {selectedItem && (
        <motion.div
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
          animate={{ opacity: 1, backdropFilter: 'blur(20px)' }}
          exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          onClick={() => setSelectedItem(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 1000,
            background: 'rgba(0,0,0,0.7)', padding: '20px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'zoom-out'
          }}
        >
          <button 
            style={{
              position: 'absolute', top: '24px', right: '32px',
              color: '#fff', fontSize: '32px', zIndex: 1001,
              background: 'none', border: 'none', cursor: 'pointer'
            }}
            onClick={() => setSelectedItem(null)}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
          
          {onPrev && (
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

          <motion.img
            onClick={(e) => e.stopPropagation()}
            layoutId={`portfolio-img-${selectedItem.id}`} // SHARED ELEMENT ID
            src={selectedItem.src}
            alt={selectedItem.alt}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              width: '100%', maxWidth: '1000px', maxHeight: '90vh',
              objectFit: 'contain', borderRadius: '12px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
            }}
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

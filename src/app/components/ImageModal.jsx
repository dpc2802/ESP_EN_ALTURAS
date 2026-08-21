"use client";
import { motion, AnimatePresence } from "framer-motion";

export default function ImageModal({ selectedItem, setSelectedItem }) {
  return (
    <AnimatePresence>
      {selectedItem && (
        <motion.div
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
          
          <motion.img
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

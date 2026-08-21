"use client";
import { motion, AnimatePresence } from "framer-motion";

export default function ImageModal({ selectedImage, setSelectedImage }) {
  if (!selectedImage) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setSelectedImage(null)}
        style={{
          position: 'fixed', inset: 0, zIndex: 1000,
          background: 'rgba(0,0,0,0.9)', padding: '20px',
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
          onClick={() => setSelectedImage(null)}
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
        <motion.img
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          src={selectedImage}
          alt="Galería ampliada"
          style={{
            width: '100%', maxWidth: '1000px', maxHeight: '90vh',
            objectFit: 'contain', borderRadius: '12px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
          }}
          onClick={(e) => e.stopPropagation()}
        />
      </motion.div>
    </AnimatePresence>
  );
}

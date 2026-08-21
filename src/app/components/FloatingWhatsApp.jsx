"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(true), 3000);
    const hideTimer = setTimeout(() => setShowTooltip(false), 8000);
    return () => { clearTimeout(timer); clearTimeout(hideTimer); };
  }, []);

  const phone = "573053439984";
  const message = "Hola! Me gustaría solicitar más información de sus servicios de altura.";

  return (
    <div style={{
      position: 'fixed', bottom: '28px', right: '28px', zIndex: 999,
      display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '16px',
      pointerEvents: 'none'
    }}>
      <AnimatePresence>
        {(isOpen || showTooltip) && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            style={{
              background: '#fff', color: '#111', padding: '16px', borderRadius: '16px',
              boxShadow: '0 15px 40px rgba(0,0,0,0.15)', maxWidth: '280px', pointerEvents: 'auto',
              transformOrigin: 'bottom right'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#25D366' }}></div>
                <span style={{ fontSize: '14px', fontWeight: '700' }}>Especialistas en Alturas</span>
              </div>
              <button 
                onClick={() => { setIsOpen(false); setShowTooltip(false); }}
                style={{ background: 'none', border: 'none', color: '#888', cursor: 'pointer', fontSize: '16px' }}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <p style={{ fontSize: '13px', color: '#444', marginBottom: '16px', lineHeight: '1.5' }}>
              ¡Hola! ¿Necesitas una cotización o asesoría técnica para tu proyecto?
            </p>
            <a 
              href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'block', width: '100%', textAlign: 'center', background: '#25D366', color: '#fff',
                padding: '10px 0', borderRadius: '8px', fontSize: '14px', fontWeight: '600', textDecoration: 'none'
              }}
            >
              Abrir Chat
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        style={{
          width: '60px', height: '60px', background: '#25D366', color: '#fff', borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px',
          boxShadow: '0 8px 24px rgba(37, 211, 102, 0.4)', pointerEvents: 'auto', border: 'none', cursor: 'pointer'
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          if (isOpen || showTooltip) {
            window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
          } else {
            setIsOpen(true);
          }
        }}
      >
        <i className="fa-brands fa-whatsapp"></i>
      </motion.button>
    </div>
  );
}

"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('esp_cookie_consent');
    if (!consent) {
      // Small delay to not overwhelm on initial load
      const timer = setTimeout(() => setShow(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('esp_cookie_consent', 'true');
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{
            position: 'fixed',
            bottom: '20px',
            left: '20px',
            right: '20px',
            maxWidth: '1200px',
            margin: '0 auto',
            background: 'rgba(11, 29, 53, 0.95)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '16px',
            padding: '20px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
            zIndex: 999999,
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
            flexWrap: 'wrap'
          }}
        >
          <div style={{ flex: '1 1 300px', display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
            <i className="fa-solid fa-cookie-bite" style={{ color: 'var(--orange)', fontSize: '24px', marginTop: '4px' }}></i>
            <div>
              <h4 style={{ color: '#fff', fontSize: '16px', fontWeight: 600, marginBottom: '6px', fontFamily: 'var(--font-head)' }}>
                Uso de Cookies
              </h4>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', lineHeight: '1.5', margin: 0 }}>
                Utilizamos cookies para mejorar su experiencia de navegación, analizar el tráfico del sitio y ofrecer contenido personalizado. Al continuar navegando, acepta nuestra política de privacidad y tratamiento de datos.
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '10px', flex: '0 0 auto' }}>
            <button
              onClick={() => setShow(false)}
              style={{
                padding: '10px 20px',
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.2)',
                color: '#fff',
                borderRadius: '8px',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
            >
              Rechazar
            </button>
            <button
              onClick={acceptCookies}
              style={{
                padding: '10px 24px',
                background: 'var(--orange)',
                border: 'none',
                color: '#fff',
                borderRadius: '8px',
                fontSize: '13px',
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(243,107,34,0.3)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(243,107,34,0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(243,107,34,0.3)';
              }}
            >
              Aceptar Cookies
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

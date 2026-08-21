"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{
            position: "fixed",
            bottom: "96px", // Above the WhatsApp button (which is at 28px + ~60px height)
            right: "28px",
            zIndex: 998,
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            background: "rgba(11, 29, 53, 0.8)",
            backdropFilter: "blur(8px)",
            color: "var(--white)",
            border: "1px solid rgba(255,255,255,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "20px",
            cursor: "pointer",
            boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
          }}
          aria-label="Subir al inicio"
        >
          <i className="fa-solid fa-arrow-up" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

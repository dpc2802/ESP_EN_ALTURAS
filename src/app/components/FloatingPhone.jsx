"use client";
import { motion } from "framer-motion";

export default function FloatingPhone() {
  const phone = "573053439984";

  return (
    <div className="floating-phone-wrap">
      <motion.a
        href={`tel:+${phone}`}
        className="floating-phone-btn"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Llamar ahora"
      >
        <i className="fa-solid fa-phone"></i>
      </motion.a>
    </div>
  );
}

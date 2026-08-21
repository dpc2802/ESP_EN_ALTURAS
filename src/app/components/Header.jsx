
"use client";
import Image from "next/image";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 40);
      if (currentScrollY > lastScrollY.current && currentScrollY > 200) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/#empresa", label: "Empresa" },
    { href: "/#servicios", label: "Servicios" },
    { href: "/#beneficios", label: "Beneficios" },
    { href: "/#contacto", label: "Contacto" },
  ];

  return (
    <>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-nav open"
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mobile-nav-mesh" />
            
            <div className="mobile-nav-top">
              <Link href="/">
                <Image src="/assets/logo.png" alt="EA" className="mobile-nav-logo" width={60} height={60} />
              </Link>
              <button className="mobile-nav-close" onClick={() => setMenuOpen(false)}>
                <i className="fa-solid fa-xmark" />
              </button>
            </div>

            <div className="mobile-nav-links">
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link href={l.href} className="mobile-nav-link" onClick={() => setMenuOpen(false)}>
                    <span className="nav-num">0{i + 1}</span>
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="mobile-nav-footer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <div className="mobile-nav-socials">
                <a href="https://wa.me/573053439984" target="_blank" rel="noreferrer"><i className="fa-brands fa-whatsapp"/> 305 343 9984</a>
                <a href="mailto:losespecialistasenalturas@gmail.com"><i className="fa-solid fa-envelope"/> Correo Técnico</a>
              </div>
              <Link
                href="/#contacto"
                className="btn-primary"
                style={{ width: "100%", justifyContent: "center" }}
                onClick={() => setMenuOpen(false)}
              >
                Cotizar Proyecto
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <header className={`header ${scrolled ? "scrolled" : ""} ${hidden ? "hidden" : ""}`}>
        <div className="header-inner">
          <Link href="/" className="brand">
            <img 
              src="/assets/logo.png" 
              alt="Especialistas en Alturas SAS" 
              className="brand-logo" 
            />
          </Link>
          <nav>
            {links.map((l) => (
              <Link key={l.href} href={l.href}>{l.label}</Link>
            ))}
          </nav>
          <Link href="/#contacto" className="btn-nav">Cotizar Proyecto</Link>
          <div
            className={`hamburger${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            <span />
            <span />
            <span />
          </div>
        </div>
      </header>
    </>
  );
}

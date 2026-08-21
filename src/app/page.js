"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import ImageModal from "./components/ImageModal";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

/* ── Reusable animation variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};
const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6 } },
};
const stagger = (delay = 0.1) => ({
  show: { transition: { staggerChildren: delay } },
});

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

/* ── Counter Animation ── */
function CountUp({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView(0.5);
  useEffect(() => {
    if (!inView) return;
    const num = parseInt(target.replace(/\D/g, ""), 10);
    if (!num) { setCount(target); return; }
    let start = 0;
    const duration = 1500;
    const step = Math.ceil(num / (duration / 16));
    const timer = setInterval(() => {
      start = Math.min(start + step, num);
      setCount(start);
      if (start >= num) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);
  return <span ref={ref}>{typeof count === "number" ? count : count}{suffix}</span>;
}

/* ── Header ── */
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 40);
      
      // Hide on scroll down, show on scroll up
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
    { href: "#empresa", label: "Empresa" },
    { href: "#servicios", label: "Servicios" },
    { href: "#beneficios", label: "Beneficios" },
    { href: "#contacto", label: "Contacto" },
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
              <img src="/assets/logo.png" alt="EA" className="mobile-nav-logo" />
              <button className="mobile-nav-close" onClick={() => setMenuOpen(false)}>
                <i className="fa-solid fa-xmark" />
              </button>
            </div>

            <div className="mobile-nav-links">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  className="mobile-nav-link"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="nav-num">0{i + 1}</span>
                  {l.label}
                </motion.a>
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
              <a
                href="#contacto"
                className="btn-primary"
                style={{ width: "100%", justifyContent: "center" }}
                onClick={() => setMenuOpen(false)}
              >
                Cotizar Proyecto
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <header className={`header ${scrolled ? "scrolled" : ""} ${hidden ? "hidden" : ""}`}>
        <div className="header-inner">
          <a href="#inicio" className="brand">
            <img 
              src="/assets/logo.png" 
              alt="Especialistas en Alturas SAS" 
              className="brand-logo" 
            />
          </a>
          <nav>
            {links.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </nav>
          <a href="#contacto" className="btn-nav">Cotizar Proyecto</a>
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

function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return <motion.div className="progress-bar" style={{ width }} />;
}

/* ── Hero Section ── */
function HeroSection() {
  const { scrollY } = useScroll();
  const imgY = useTransform(scrollY, [0, 600], [0, 120]);

  return (
    <section className="hero" id="inicio">
      <motion.img
        src="/assets/real_rope_access.jpg"
        alt="Trabajo seguro en alturas"
        className="hero-image"
        style={{ y: imgY }}
      />
      <div className="hero-mesh" />
      <div className="wrap">
        <div className="hero-content">
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="pulse-dot" /> 10 Años de Experiencia
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            EXPERIENCIA, CALIDAD Y SEGURIDAD
          </motion.h1>

          <motion.p
            className="hero-desc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.7 }}
          >
            En trabajos de alto riesgo. Garantizamos a nuestros clientes una correcta ejecución minimizando los riesgos a la hora de ejecutar los contratos.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <a href="#contacto" className="btn-primary">
              Cotizar Proyecto <i className="fa-solid fa-arrow-right" />
            </a>
            <a href="#servicios" className="btn-secondary">
              Ver Portafolio
            </a>
          </motion.div>

          <motion.div 
            className="hero-stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <div className="hero-stat-chip">
              <div className="chip-icon"><i className="fa-regular fa-calendar-check" /></div>
              <div className="chip-data">
                <span className="num"><CountUp target="2014" /></span>
                <span className="lbl">Año de Creación</span>
              </div>
            </div>
            
            <div className="hero-stat-chip">
              <div className="chip-icon"><i className="fa-solid fa-shield-halved" /></div>
              <div className="chip-data">
                <span className="num"><CountUp target="83" suffix="%" /></span>
                <span className="lbl">Cumplimiento SG-SST</span>
              </div>
            </div>

            <div className="hero-stat-chip">
              <div className="chip-icon"><i className="fa-solid fa-file-signature" /></div>
              <div className="chip-data">
                <span className="num">100%</span>
                <span className="lbl">Personal Certificado</span>
              </div>
            </div>
            
            <div className="hero-stat-chip">
              <div className="chip-icon"><i className="fa-solid fa-layer-group" /></div>
              <div className="chip-data">
                <span className="num"><CountUp target="5" suffix="+" /></span>
                <span className="lbl">Líneas de Servicio</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ── About Section ── */
function AboutSection() {
  const [ref, inView] = useInView();
  const [activeHotspot, setActiveHotspot] = useState(null);

  // Close hotspots when clicking outside
  useEffect(() => {
    const handleClick = (e) => {
      if (!e.target.closest('.hotspot-container')) {
        setActiveHotspot(null);
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const hotspots = [
    {
      id: 1,
      top: "35%", left: "42%",
      title: "Mosquetón Estructural",
      desc: "Seguro automático triple — carga certificada 23kN."
    },
    {
      id: 2,
      top: "22%", left: "20%",
      title: "Línea de Vida",
      desc: "Cable de acero galvanizado 8mm. Instalación Res. 4272/2021."
    },
    {
      id: 3,
      top: "65%", left: "48%",
      title: "Guante Dieléctrico / Anticorte",
      desc: "EPP especializado con agarre de alta fricción para maniobras."
    }
  ];

  return (
    <section className="about dot-bg" id="empresa">
      <div className="wrap">
        <motion.div
          className="about-grid"
          ref={ref}
          variants={stagger(0.15)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <motion.div className="about-img-wrap hotspot-container" variants={fadeIn}>
            <img
              src="/assets/lifeline_safety.jpg"
              alt="Técnico asegurando línea de vida"
              className="about-img"
            />
            
            {/* Interactive Hotspots */}
            {hotspots.map((spot) => (
              <div 
                key={spot.id}
                className={`hotspot ${activeHotspot === spot.id ? 'active' : ''}`}
                style={{ top: spot.top, left: spot.left }}
                onMouseEnter={() => setActiveHotspot(spot.id)}
                onMouseLeave={() => setActiveHotspot(null)}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveHotspot(activeHotspot === spot.id ? null : spot.id);
                }}
              >
                <div className="hotspot-dot">
                  <div className="hotspot-pulse" />
                </div>
                <div className="hotspot-tooltip">
                  <div className="tooltip-title">{spot.title}</div>
                  <div className="tooltip-desc">{spot.desc}</div>
                </div>
              </div>
            ))}

            <div className="about-img-decor" />
          </motion.div>
          
          <motion.div variants={fadeUp}>
            <span className="about-tag">01. Nuestra Empresa</span>
            <h2>Minimizamos los riesgos en cada ejecución.</h2>
            <p className="about-lead">
              Somos una empresa enfocada en la ejecución de todo tipo de trabajos en Alturas, creada en el año 2014.
            </p>
            <p>
              Por medio de nuestro personal altamente calificado y basados en el cumplimiento de un SG-SST estructurado con un énfasis en las actividades de alto Riesgo, garantizamos a nuestros clientes una correcta ejecución de los trabajos en Alturas, minimizando los Riesgos a la hora de ejecutar los contratos.
            </p>
            <p>
              Cuidando el bienestar de todos los involucrados.
            </p>
            <div className="about-certs">
              {["Personal Calificado", "SG-SST Estructurado", "Cumplimiento Normativo"].map((c) => (
                <span className="cert-badge" key={c}>
                  <i className="fa-solid fa-shield-halved" style={{ color: "var(--orange)" }} />
                  {c}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Services Section (Portafolio) ── */
function ServicesSection({ onImageClick }) {
  const [ref, inView] = useInView(0.1);
  const services = [
    {
      num: "01",
      icon: "fa-layer-group",
      title: "ESTRUCTURAS METÁLICAS",
      desc: "Diseños ajustados a la medida; creamos estructuras certificadas en cumplimiento de la Resolución 4272/2021.",
      image: "/assets/real_welding.jpg",
      bullets: ["Campos de entrenamiento", "Escaleras", "Barandas", "Plataformas", "Monster Heights"]
    },
    {
      num: "02",
      icon: "fa-building",
      title: "TRABAJOS EN FACHADAS",
      desc: "Soluciones integrales de mantenimiento e impermeabilización para exteriores y edificios de gran altura.",
      image: "/assets/real_facade_washing2.jpg",
      bullets: ["Pintura", "Mantenimiento", "Reparaciones", "Lavado", "Adecuaciones", "Impermeabilización", "Sellos"]
    },
    {
      num: "03",
      icon: "fa-link",
      title: "LÍNEAS DE VIDA",
      desc: "Sistemas anticaídas certificados para garantizar la seguridad de su personal en cualquier tipo de cubierta o estructura.",
      image: "/assets/real_lifeline_testing.jpg",
      bullets: ["Líneas de vida horizontales", "Líneas de vida verticales", "Implementación de puntos de anclaje"]
    },
    {
      num: "04",
      icon: "fa-screwdriver-wrench",
      title: "TRABAJOS EN ALTURAS",
      desc: "Ejecución experta en instalación y mantenimiento de estructuras suspendidas o de difícil acceso.",
      image: "/assets/real_tower_structure.jpg",
      bullets: ["Mantenimiento", "Reparaciones", "Instalaciones", "Limpieza técnica"]
    },
    {
      num: "05",
      icon: "fa-trowel-bricks",
      title: "TRABAJOS EN CUBIERTAS",
      desc: "Intervenciones seguras sobre tejados y cubiertas industriales, eliminando riesgos de caída o daño estructural.",
      image: "/assets/real_roof_lifeline.jpg",
      bullets: ["Mantenimiento general", "Filtraciones", "Impermeabilizaciones", "Instalación de plataformas", "Montaje de cubierta"]
    },
  ];

  return (
    <section className="services" id="servicios">
      <div className="services-overlay"></div>
      <div className="wrap">
        <motion.div
          className="section-head"
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">02. Portafolio</span>
          <h2 className="section-title">Servicios Especializados en Altura</h2>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={stagger(0.1)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {services.map((svc) => (
            <motion.div className="svc-card-img" key={svc.num} variants={fadeUp}>
              <img src={svc.image} alt={svc.title} className="svc-img-bg" />
              <div className="svc-img-overlay" />
              
              <div className="svc-content">
                <div className="svc-top">
                  <span className="svc-num">{svc.num}</span>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <button 
                      onClick={() => onImageClick(svc.image)}
                      title="Ver imagen"
                      style={{
                        width: '48px', height: '48px', borderRadius: '50%',
                        background: 'rgba(0,0,0,0.5)', color: '#fff', border: 'none',
                        cursor: 'pointer', transition: 'all 0.3s', backdropFilter: 'blur(4px)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.background = 'var(--orange)'}
                      onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.5)'}
                    >
                      <i className="fa-solid fa-expand" />
                    </button>
                    <div className="svc-icon">
                      <i className={`fa-solid ${svc.icon}`} />
                    </div>
                  </div>
                </div>
                <div className="svc-bottom">
                  <h3>{svc.title}</h3>
                  <p>{svc.desc}</p>
                  {svc.bullets && (
                    <ul className="svc-bullets">
                      {svc.bullets.map((b, idx) => (
                        <li key={idx}>
                          <i className="fa-solid fa-check" /> {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ── Benefits Section ── */
function BenefitsSection() {
  const [ref, inView] = useInView(0.1);
  const steps = [
    {
      icon: "fa-certificate",
      title: "Certificación de trabajos y equipos",
      desc: "Cumplimiento estricto normativo y calidad asegurada en cada maniobra.",
    },
    {
      icon: "fa-user-tie",
      title: "Asesoría permanente",
      desc: "Acompañamiento técnico con personal altamente calificado para su proyecto.",
    },
    {
      icon: "fa-clipboard-check",
      title: "Seguimiento a los sistemas",
      desc: "Monitoreo a los sistemas de protección contra caídas instalados.",
    },
    {
      icon: "fa-shield-halved",
      title: "Garantías",
      desc: "Respaldo total en todos nuestros servicios, estructuras e instalaciones.",
    },
    {
      icon: "fa-crosshairs",
      title: "Portafolio enfocado",
      desc: "Servicios orientados netamente y con exclusividad a los trabajos en alturas.",
    },
    {
      icon: "fa-award",
      title: "Experiencia",
      desc: "Trayectoria comprobada y garantía de excelencia en la industria.",
    }
  ];

  return (
    <section className="benefits" id="beneficios">
      <div className="wrap">
        <motion.div
          className="section-head text-center"
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <span className="about-tag">03. Valor Agregado</span>
          <h2>Beneficios para su empresa</h2>
        </motion.div>

        <motion.div
          className="bento-grid"
          variants={stagger(0.1)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {steps.map((s, i) => (
            <motion.div
              className={`bento-card`}
              key={i}
              variants={fadeUp}
              custom={i}
            >
              <div className="bento-icon">
                <i className={`fa-solid ${s.icon || 'fa-check'}`} />
              </div>
              <div className="bento-content">
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ── Risk Analysis Section ── */
function RiskAnalysisSection() {
  const [ref, inView] = useInView(0.2);
  const checks = [
    { title: "Equipos y herramientas", desc: "Inspección de desgaste y fatiga" },
    { title: "Sistemas contra caídas", desc: "Certificación de resistencia 23kN" },
    { title: "Actas de vecindad", desc: "Protección a terceros y entorno" },
    { title: "Protección personal", desc: "Arneses y cascos certificados" },
    { title: "Puntos de anclaje", desc: "Verificación de capacidad de carga" },
    { title: "Plan de emergencia", desc: "Protocolo de rescate vertical" },
    { title: "Puntos de encuentro", desc: "Rutas de evacuación seguras" }
  ];
  return (
    <section className="risk-analysis" id="analisis">
      <div className="risk-bg-parallax" />
      <div className="wrap relative z-10">
        <motion.div
          className="risk-header"
          ref={ref}
          variants={fadeIn}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <div className="warning-tape" />
          <h2>Análisis de Riesgo Estructural</h2>
          <p>
            Visitas técnicas y estudio detallado de seguridad antes de cualquier ejecución. No improvisamos, calculamos.
          </p>
        </motion.div>

        <motion.div
          className="rope-timeline"
          variants={stagger(0.15)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {checks.map((item, i) => (
            <motion.div className="rope-node" key={i} variants={fadeUp}>
              <div className="carabiner-icon">
                <i className="fa-solid fa-link" />
              </div>
              <div className="rope-card">
                <div className="step-num">0{i + 1}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ── Contact Section ── */
function ContactSection() {
  const [ref, inView] = useInView(0.1);
  const [sent, setSent] = useState(false);

  return (
    <section className="contact" id="contacto">
      <div className="wrap">
        <motion.div
          className="contact-grid"
          ref={ref}
          variants={stagger(0.15)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <motion.div className="contact-info" variants={fadeUp}>
            <span className="section-eyebrow">04. Contacto Oficial</span>
            <h2>¿Listo para empezar su proyecto?</h2>
            <p className="contact-lead">
              Comuníquese directamente con nuestra gerencia para recibir asesoría personalizada y cotizaciones a la medida.
            </p>
            <div className="contact-methods">
              {[
                { icon: "fa-solid fa-user-tie", lbl: "Representante Legal", val: "Hans Gutiérrez Baena" },
                { icon: "fa-solid fa-envelope", lbl: "Correo Electrónico", val: "losespecialistasenalturas@gmail.com", href: "mailto:losespecialistasenalturas@gmail.com" },
                { icon: "fa-brands fa-whatsapp", lbl: "Celular / WhatsApp", val: "305 343 9984", href: "https://wa.me/573053439984" },
                { icon: "fa-brands fa-facebook", lbl: "Facebook", val: "@losespecialistasenalturas", href: "https://www.facebook.com/losespecialistasenalturas/" },
                { icon: "fa-brands fa-instagram", lbl: "Instagram", val: "@ESPECIALISTAS_EN_ALTURAS_SAS", href: "https://www.instagram.com/especialistas_en_alturas_sas?utm_source=qr&igsh=anU4cDV3OGZ0dnNz" },
              ].map((m, i) => (
                <motion.div
                  className="contact-method"
                  key={i}
                  variants={fadeUp}
                  custom={i}
                >
                  <div className="contact-method-icon">
                    <i className={m.icon} />
                  </div>
                  <div className="contact-method-text">
                    <div className="contact-method-lbl">{m.lbl}</div>
                    <div className="contact-method-val">
                      {m.href ? <a href={m.href} target="_blank" rel="noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>{m.val}</a> : m.val}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div className="contact-form-wrap" variants={fadeUp}>
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ textAlign: "center", padding: "40px 0" }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    style={{
                      width: 72, height: 72, borderRadius: "50%",
                      background: "var(--orange)", margin: "0 auto 20px",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 32, color: "#fff",
                    }}
                  >
                    <i className="fa-solid fa-check" />
                  </motion.div>
                  <h3 style={{ fontFamily: "var(--font-head)", fontSize: 28, color: "#fff", textTransform: "uppercase", marginBottom: 12 }}>
                    ¡Mensaje Enviado!
                  </h3>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 15 }}>
                    Nos pondremos en contacto muy pronto.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                >
                  {[
                    { label: "Su Nombre o Empresa", type: "text", placeholder: "Ej. Constructora SAS", required: true },
                    { label: "Teléfono / WhatsApp", type: "tel", placeholder: "Número de contacto", required: true },
                  ].map((f, i) => (
                    <div className="form-row" key={i}>
                      <label>{f.label}</label>
                      <input
                        type={f.type}
                        className="form-input"
                        placeholder={f.placeholder}
                        required={f.required}
                      />
                    </div>
                  ))}
                  <div className="form-row">
                    <label>Servicio de Interés</label>
                    <select className="form-input" required defaultValue="">
                      <option value="" disabled>Seleccione una opción...</option>
                      <option value="estructuras">Estructuras Metálicas</option>
                      <option value="fachadas">Trabajos en Fachadas</option>
                      <option value="lineas">Líneas de Vida y Anclajes</option>
                      <option value="cubiertas">Trabajos en Cubiertas</option>
                      <option value="asesoria">Análisis y Asesoría</option>
                    </select>
                  </div>
                  <div className="form-row">
                    <label>Mensaje</label>
                    <textarea
                      className="form-input"
                      rows={4}
                      placeholder="Describa brevemente su necesidad..."
                      style={{ resize: "none" }}
                    />
                  </div>
                  <motion.button
                    type="submit"
                    className="form-submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <i className="fa-solid fa-paper-plane" />
                    Solicitar Información
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Footer ── */
function Footer() {
  return (
    <footer className="footer-pro">
      <div className="footer-overlay"></div>
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-col-brand">
            <div className="footer-brand">
              <img src="/assets/logo.png" alt="Logo Especialistas en Alturas" className="footer-logo" />
            </div>
            <p className="footer-desc">
              Líderes en trabajos seguros de alto riesgo. Garantizamos el estricto cumplimiento de la normativa vigente (Res. 4272 de 2021) en todas nuestras operaciones y diseños estructurales.
            </p>
            <div className="footer-socials">
              <a href="https://wa.me/573053439984" target="_blank" rel="noreferrer"><i className="fa-brands fa-whatsapp"></i></a>
              <a href="https://www.facebook.com/losespecialistasenalturas/" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook"></i></a>
              <a href="https://www.instagram.com/especialistas_en_alturas_sas?utm_source=qr&igsh=anU4cDV3OGZ0dnNz" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
            </div>
          </div>
          
          <div className="footer-col">
            <div className="footer-title">Nuestros Servicios</div>
            <ul className="footer-links">
              <li><a href="#servicios"><i className="fa-solid fa-angle-right"></i> Estructuras Metálicas</a></li>
              <li><a href="#servicios"><i className="fa-solid fa-angle-right"></i> Trabajos en Fachadas</a></li>
              <li><a href="#servicios"><i className="fa-solid fa-angle-right"></i> Líneas de Vida y Anclajes</a></li>
              <li><a href="#servicios"><i className="fa-solid fa-angle-right"></i> Trabajos en Cubiertas</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <div className="footer-title">Contacto Directo</div>
            <ul className="footer-contact-list">
              <li>
                <i className="fa-solid fa-user-tie"></i>
                <span><strong>Hans Gutiérrez Baena</strong><br/>Representante Legal</span>
              </li>
              <li>
                <i className="fa-solid fa-envelope"></i>
                <a href="mailto:losespecialistasenalturas@gmail.com">losespecialistasenalturas@gmail.com</a>
              </li>
              <li>
                <i className="fa-solid fa-phone"></i>
                <a href="https://wa.me/573053439984" target="_blank" rel="noreferrer">305 343 9984</a>
              </li>
              <li>
                <i className="fa-solid fa-location-dot"></i>
                <span>Medellín, Colombia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Especialistas en Alturas S.A.S. Todos los derechos reservados.</p>
          <div className="footer-bottom-links">
            <a href="#">Política de Privacidad</a>
            <span className="separator">|</span>
            <a href="#">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Page() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <ProgressBar />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection onImageClick={setSelectedImage} />
        <BenefitsSection />
        <RiskAnalysisSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ImageModal selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
    </>
  );
}

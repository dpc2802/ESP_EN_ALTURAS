"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import InteractiveQuote from "./components/InteractiveQuote";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import ImageModal from "./components/ImageModal";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import ScrollToTop from "./components/ScrollToTop";
import FloatingPhone from "./components/FloatingPhone";

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
      <motion.div className="hero-image" style={{ y: imgY }}>
        <Image 
          src="/assets/hero-movil.png" 
          alt="Trabajo seguro en alturas" 
          fill 
          priority 
          style={{ objectFit: "cover", objectPosition: "30% 20%" }} 
        />
      </motion.div>
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
  const router = useRouter();
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
            <motion.div 
              className="svc-card-img" 
              key={svc.num} 
              variants={fadeUp}
              onClick={() => {
                if(svc.link && svc.link.startsWith("/#")) {
                  document.querySelector(svc.link.replace("/#", "#"))?.scrollIntoView({ behavior: "smooth" });
                } else if (svc.link) {
                  router.push(svc.link);
                }
              }}
              style={{ cursor: "pointer" }}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  if(svc.link && svc.link.startsWith("/#")) {
                    document.querySelector(svc.link.replace("/#", "#"))?.scrollIntoView({ behavior: "smooth" });
                  } else if (svc.link) {
                    router.push(svc.link);
                  }
                }
              }}
            >
              <Image src={svc.image} alt={svc.title} className="svc-img-bg" fill sizes="(max-width: 768px) 100vw, 50vw" />
              <div className="svc-img-overlay" />
              
              <div className="svc-content">
                <div className="svc-top">
                  <span className="svc-num">{svc.num}</span>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <button 
                      onClick={(e) => { e.stopPropagation(); onImageClick(svc.image); }}
                      title="Ver imagen"
                      style={{
                        width: '48px', height: '48px', borderRadius: '50%',
                        background: 'rgba(0,0,0,0.5)', color: '#fff', border: 'none',
                        cursor: 'pointer', transition: 'all 0.3s', backdropFilter: 'blur(4px)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px',
                        position: 'relative', zIndex: 10
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
                    <ul className="svc-bullets" style={{ marginBottom: "20px" }}>
                      {svc.bullets.map((b, idx) => (
                        <li key={idx}>
                          <i className="fa-solid fa-check" /> {b}
                        </li>
                      ))}
                    </ul>
                  )}
                  {svc.link && (
                    <div className="btn-secondary" style={{ padding: "10px 16px", fontSize: "14px", width: "fit-content", display: "inline-flex", pointerEvents: "none" }}>
                      Ver detalles <i className="fa-solid fa-arrow-right" style={{ marginLeft: "8px" }}/>
                    </div>
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
          className="bento-grid swipe-carousel"
          variants={stagger(0.1)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {steps.map((s, i) => (
            <motion.div
              className={`bento-card swipe-card`}
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


/* ============ FAQ Section ============ */
function FAQSection() {
  const [ref, inView] = useInView(0.2);
  const [openIndex, setOpenIndex] = useState(null);
  
  const faqs = [
    {
      q: "¿Cuentan con certificación para trabajo seguro en alturas?",
      a: "Sí. Todo nuestro personal operativo cuenta con certificado de capacitación nivel avanzado y coordinador de trabajo en alturas según la Resolución 4272 de 2021 del Ministerio de Trabajo."
    },
    {
      q: "¿Qué tipo de garantías y seguros ofrecen?",
      a: "Contamos con Póliza de Responsabilidad Civil Extracontractual (RCE) que ampara daños a terceros, además de mantener al día los aportes a seguridad social y ARL riesgo V de todos nuestros trabajadores."
    },
    {
      q: "¿Cómo calculan el tiempo y costo de un proyecto?",
      a: "Realizamos una visita técnica previa y gratuita para evaluar los puntos de anclaje, los metros cuadrados a intervenir, el nivel de riesgo y la urgencia. Con esto entregamos una propuesta técnico-económica precisa."
    },
    {
      q: "¿Atienden emergencias estructurales 24/7?",
      a: "Sí. Para nuestros clientes corporativos y unidades residenciales con contrato marco, ofrecemos disponibilidad inmediata ante daños estructurales o riesgos inminentes en fachadas y cubiertas."
    }
  ];

  return (
    <section className="faq-section" style={{ padding: '80px 0', background: '#f8f9fc' }}>
      <div className="wrap">
        <motion.div
          className="text-center"
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <span className="about-tag">04. FAQ</span>
          <h2>Preguntas Corporativas Frecuentes</h2>
        </motion.div>

        <div className="faq-list" style={{ maxWidth: '800px', margin: '0 auto' }}>
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={`faq-item ${openIndex === i ? 'open' : ''}`}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              style={{
                background: '#fff',
                marginBottom: '16px',
                borderRadius: '12px',
                padding: '24px',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                border: '1px solid rgba(0,0,0,0.05)',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h4 style={{ margin: 0, fontSize: '18px', color: 'var(--navy)', fontFamily: 'var(--font-inter)', fontWeight: 600 }}>
                  {faq.q}
                </h4>
                <i className={`fa-solid fa-chevron-down`} style={{ 
                  color: 'var(--orange)', 
                  transition: 'transform 0.3s ease',
                  transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0)'
                }}></i>
              </div>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p style={{ marginTop: '16px', color: '#555', lineHeight: 1.6, fontSize: '15px' }}>
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
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
          className="rope-timeline swipe-carousel"
          variants={stagger(0.15)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {checks.map((item, i) => (
            <motion.div className="rope-node swipe-card" key={i} variants={fadeUp}>
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


/* ============ Portfolio Teaser ============ */
function PortfolioTeaser() {
  const [ref, inView] = useInView(0.2);
  const router = useRouter();
  
  const teaserPhotos = [
    "/assets/real_facade.jpg",
    "/assets/real_welding.jpg",
    "/assets/real_roof_lifeline.jpg",
    "/assets/real_anchor_testing.jpg",
    "/assets/real_tower_structure.jpg",
    "/assets/facade_maintenance.jpg"
  ];

  return (
    <section className="portfolio-teaser" style={{ padding: '80px 0', background: '#fff' }}>
      <div className="wrap text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <span className="about-tag" style={{ justifyContent: 'center' }}>05. Casos de Éxito</span>
          <h2 style={{ color: 'var(--navy)', fontFamily: 'var(--font-head)', marginBottom: '40px', fontSize: '32px' }}>
            Nuestro Equipo en Acción
          </h2>
        </motion.div>

        <div className="teaser-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '16px',
          marginBottom: '40px'
        }}>
          {teaserPhotos.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: i * 0.1 }}
              style={{
                position: 'relative',
                width: '100%',
                height: '250px',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 8px 20px rgba(0,0,0,0.05)'
              }}
            >
              <Image src={src} alt="Trabajo en alturas" fill style={{ objectFit: 'cover' }} />
            </motion.div>
          ))}
        </div>

        <motion.button
          className="btn-primary"
          onClick={() => router.push('/portafolio')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ padding: '16px 40px', fontSize: '18px', background: 'var(--navy)', color: '#fff' }}
        >
          Ver Galería Completa (40+ Fotos)
        </motion.button>
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
            <InteractiveQuote />
          </motion.div>
        </motion.div>
      </div>
    </section>
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
        <FAQSection />
        <RiskAnalysisSection />
        <PortfolioTeaser />
        <ContactSection />
      </main>
      <Footer />
      {/* Global Fixed Components */}
      <FloatingWhatsApp />
      <FloatingPhone />
      <ScrollToTop />
      <ImageModal selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
    </>
  );
}

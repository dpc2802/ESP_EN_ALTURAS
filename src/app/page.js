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
  const imgY = useTransform(scrollY, [0, 600], [0, 150]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="hero" id="inicio" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      {/* Fondo Parallax */}
      <motion.div className="hero-image" style={{ y: imgY, position: 'absolute', top: '-10%', left: 0, right: 0, bottom: '-10%', zIndex: 0 }}>
        <Image 
          src="/assets/hero-buildings.jpg" 
          alt="Trabajo seguro en alturas" 
          fill 
          priority 
          quality={100}
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 68%" }} 
        />
      </motion.div>

      {/* Overlay principal — texto legible en móvil */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(11,29,53,0.92) 0%, rgba(11,29,53,0.55) 55%, rgba(11,29,53,0.2) 100%)', zIndex: 1 }} />
      {/* Overlay superior — oscurece el logo de la foto */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '55%', background: 'linear-gradient(to bottom, rgba(11,29,53,0.75) 0%, rgba(11,29,53,0) 100%)', zIndex: 1 }} />
      {/* Overlay inferior — transición suave al siguiente bloque */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40vh', background: 'linear-gradient(to top, rgba(11,29,53,1) 0%, rgba(11,29,53,0) 100%)', zIndex: 1 }} />

      {/* Orbe de luz (Glow) detrás del texto */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: 'absolute', top: '20%', left: '-10%', width: '50vw', height: '50vw', background: 'radial-gradient(circle, rgba(243,107,34,0.15) 0%, rgba(0,0,0,0) 70%)', filter: 'blur(40px)', zIndex: 1 }}
      />

      <div className="wrap" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <motion.div 
          className="hero-content" 
          style={{ maxWidth: '650px', paddingTop: '100px', paddingBottom: '60px' }}
        >
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
              borderRadius: '30px',
              padding: '10px 20px',
              color: 'var(--orange)',
              fontSize: '13px',
              fontWeight: 800,
              letterSpacing: '2px',
              marginBottom: '32px',
              textTransform: 'uppercase'
            }}
          >
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--orange)', marginRight: '10px', boxShadow: '0 0 10px var(--orange)' }}></div>
            {new Date().getFullYear() - 2014} AÑOS DE EXPERIENCIA
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ 
              color: '#fff', 
              fontSize: 'clamp(48px, 12vw, 72px)', 
              lineHeight: '0.95', 
              fontFamily: 'var(--font-head)',
              fontWeight: 900,
              marginBottom: '32px',
              textTransform: 'uppercase',
              textShadow: '0 10px 30px rgba(0,0,0,0.5)'
            }}
          >
            EXPERIENCIA,<br />
            <span style={{ color: '#fff' }}>CALIDAD Y</span><br />
            SEGURIDAD
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'relative',
              marginBottom: '48px',
              paddingLeft: '24px'
            }}
          >
            <div style={{ position: 'absolute', left: 0, top: '4px', bottom: '4px', width: '4px', background: 'var(--orange)', borderRadius: '4px', boxShadow: '0 0 15px rgba(243,107,34,0.5)' }}></div>
            <p style={{
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: 'clamp(16px, 4vw, 18px)',
              lineHeight: '1.7',
              fontWeight: 400,
              margin: 0,
              textShadow: '0 2px 10px rgba(0,0,0,0.5)'
            }}>
              En trabajos de alto riesgo. Garantizamos a nuestros clientes una correcta ejecución minimizando los riesgos a la hora de ejecutar los contratos.
            </p>
          </motion.div>

          
          <style dangerouslySetInnerHTML={{ __html: `
            .btn-premium-orange {
              position: relative;
              overflow: hidden;
            }
            .btn-premium-orange::after {
              content: '';
              position: absolute;
              top: 0;
              left: -100%;
              width: 50%;
              height: 100%;
              background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%);
              transform: skewX(-25deg);
              animation: shine 4s infinite;
            }
            .btn-premium-glass {
              position: relative;
              overflow: hidden;
              background: rgba(11, 29, 53, 0.4) !important;
              border: 1px solid rgba(243, 107, 34, 0.3) !important;
            }
            .btn-premium-glass::before {
              content: '';
              position: absolute;
              inset: 0;
              background: linear-gradient(120deg, rgba(243, 107, 34, 0.2), rgba(0,0,0,0) 60%);
              opacity: 0;
              transition: opacity 0.4s ease;
            }
            .btn-premium-glass:hover::before {
              opacity: 1;
            }
            .btn-premium-glass:hover {
              border-color: rgba(243, 107, 34, 0.8) !important;
              box-shadow: 0 0 20px rgba(243, 107, 34, 0.2);
            }
            @keyframes shine {
              0% { left: -100%; }
              20% { left: 200%; }
              100% { left: 200%; }
            }
            .icon-bounce {
              animation: bounceY 2s infinite ease-in-out;
            }
            @keyframes bounceY {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(4px); }
            }
          ` }} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%', maxWidth: '420px' }}
          >
            <a 
              href="https://wa.me/573053439984" 
              target="_blank" 
              rel="noreferrer" 
              className="btn-premium-orange"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--orange)',
                color: '#fff',
                padding: '20px 24px',
                borderRadius: '12px',
                fontWeight: 800,
                fontSize: '15px',
                textDecoration: 'none',
                textTransform: 'uppercase',
                boxShadow: '0 15px 30px rgba(243, 107, 34, 0.3)',
                transition: 'transform 0.3s ease, boxShadow 0.3s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(243, 107, 34, 0.5)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 15px 30px rgba(243, 107, 34, 0.3)'; }}
            >
              <i className="fa-brands fa-whatsapp" style={{ marginRight: '10px', fontSize: '20px' }}></i>
              AGENDA TU CITA
            </a>
            
            <a 
              href="#servicios" 
              className="btn-premium-glass"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                color: '#fff',
                padding: '20px 24px',
                borderRadius: '12px',
                fontWeight: 800,
                fontSize: '15px',
                textDecoration: 'none',
                textTransform: 'uppercase',
                transition: 'all 0.4s ease'
              }}
            >
              <span style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center' }}>
                <i className="fa-solid fa-link" style={{ marginRight: '10px', fontSize: '16px', color: 'var(--orange)' }}></i>
                VER SERVICIOS
                <i className="fa-solid fa-arrow-down icon-bounce" style={{ marginLeft: '10px', fontSize: '14px', color: 'var(--orange)' }}></i>
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Indicador Scroll */}
      <motion.div 
        style={{ position: 'absolute', bottom: '40px', left: '50%', x: '-50%', zIndex: 3, opacity, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '8px' }}>Scroll</span>
        <div style={{ width: '2px', height: '40px', background: 'linear-gradient(to bottom, var(--orange), transparent)' }}></div>
      </motion.div>

    </section>
  );
}


/* ── About Section ── */

function TrustedBySection() {
  const logos = [
    { src: "/assets/clients/metro.png", alt: "Metro de Medellín" },
    { src: "/assets/clients/viva.png", alt: "Viva de La Ceja" },
    { src: "/assets/clients/colanta.png", alt: "Colanta" },
    { src: "/assets/clients/jardin.png", alt: "Jardín Botánico" },
    { src: "/assets/clients/ascenso.png", alt: "Ascenso" },
    { src: "/assets/clients/exito.png", alt: "Grupo Éxito" },
    { src: "/assets/clients/capital.png", alt: "Constructora Capital" },
    { src: "/assets/clients/corona.png", alt: "Corona" },
    { src: "/assets/clients/sanpietro.png", alt: "Edificio San Pietro" },
    { src: "/assets/clients/conhime.png", alt: "ConHime" },
    { src: "/assets/clients/doblamos.png", alt: "Doblamos S.A." },
    { src: "/assets/clients/agcubiertas.png", alt: "AG Cubiertas" },
    { src: "/assets/clients/habitaforte.png", alt: "Habita Forte" },
    { src: "/assets/clients/arquitecturaconcreto.png", alt: "Arquitectura y Concreto" },
    { src: "/assets/clients/santamaria.png", alt: "Arrendamientos Santa Maria LTDA" },
    { src: "/assets/clients/itagui.png", alt: "Alcaldía de Itagüí" },
    { src: "/assets/clients/rionegro.png", alt: "Alcaldía de Rionegro" },
    { src: "/assets/clients/envigado.png", alt: "Alcaldía de Envigado" },
    { src: "/assets/clients/caldas.png", alt: "Alcaldía de Caldas" }
  ];

  const angle = 360 / logos.length;
  // Calculate Z translation based on the number of logos to form a perfect circle
  const tz = Math.round((200 / 2) / Math.tan(Math.PI / logos.length)) + 10;

  return (
    <section style={{ 
      background: 'var(--navy)', 
      padding: '40px 0 60px 0', 
      position: 'relative', 
      overflow: 'hidden',
      borderTop: '1px solid rgba(243, 107, 34, 0.2)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    }}>
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <p style={{ color: 'var(--orange)', fontSize: '13px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '60px', textAlign: 'center', background: 'rgba(243,107,34,0.1)', padding: '8px 20px', borderRadius: '20px', border: '1px solid rgba(243,107,34,0.3)' }}>
          Grandes Clientes
        </p>

        {/* 3D Roulette Container */}
        <div style={{ perspective: '1200px', width: '200px', height: '80px', position: 'relative' }}>
          <div className="roulette-3d" style={{ width: '100%', height: '100%', position: 'absolute', transformStyle: 'preserve-3d' }}>
            {logos.map((logo, i) => (
              <div key={i} className="roulette-item" style={{
                position: 'absolute',
                width: '180px',
                height: '75px',
                left: '10px',
                top: '2.5px',
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(4px)',
                WebkitBackdropFilter: 'blur(4px)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '15px',
                transform: `rotateY(${i * angle}deg) translateZ(${tz}px)`,
                backfaceVisibility: 'hidden'
              }}>
                <div style={{ position: 'relative', width: '100%', height: '100%', filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.1))' }}>
                  <Image src={logo.src} alt={logo.alt} fill style={{ objectFit: 'contain' }} sizes="(max-width: 768px) 150px, 250px" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        .roulette-3d {
          animation: spinRoulette 45s infinite linear;
        }
        @keyframes spinRoulette {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(-360deg); }
        }
      `}} />
    </section>
  );
}

/* ── Notable Projects Section ── */
function NotableProjectsSection() {
  const [ref, inView] = useInView();
  
  const projects = [
    { client: "Metro Salud", task: "Restauración de fachadas de los METRO SALUD San Juan, Poblado y San Antonio de Prado" },
    { client: "Metro de Medellín", task: "Diseño, fabricación e instalación de Líneas de Vida" },
    { client: "Cámara de Comercio Oriente", task: "Mantenimiento de fachada" },
    { client: "C.C. VIVA la Ceja", task: "Mantenimiento de fachada e instalación de anclajes" },
    { client: "Edificio El Corhal", task: "Escalera, línea de vida y puntos de anclaje" },
    { client: "Soto Verde", task: "Instalación de Puntos de Anclaje y restauración" },
    { client: "Empresa Solla", task: "Líneas de vida y puntos de anclaje certificados" },
    { client: "Vigo Apartamentos", task: "Restauración de fachada e impermeabilización" },
    { client: "Colegios Municipio de Medellín", task: "Mantenimiento de fachadas de 5 colegios" },
    { client: "Verdi Condominios", task: "Mantenimiento de fachada y puntos de anclaje" },
    { client: "Apartamentos El Caney", task: "Mantenimiento de fachada y puntos de anclaje" },
    { client: "Portanova Suites", task: "Mantenimiento de fachada y anclajes" },
    { client: "Luxury PH", task: "Restauración de fachada y anclajes" },
    { client: "Incovel (Mun. Envigado)", task: "Restauración de escenarios polideportivos" },
    { client: "Gaseosas Lux", task: "Mural grafitiado - Arte y cultura" },
    { client: "Luna del Valle / La Bolsa", task: "Instalación de puntos de anclaje" },
    { client: "Hospital Manuel Uribe Ángel", task: "Instalación puntos de anclaje" },
    { client: "Edificio Los Cerezos", task: "Restauración de 2 torres de 23 pisos y parqueaderos" },
    { client: "Torres de San Joaquín", task: "Restauración de fachada" },
    { client: "Azalea del Parque", task: "Restauración de 4 torres de 19 pisos" },
    { client: "Alcaldía de Caldas", task: "Múltiples trabajos de mantenimiento e instalación" },
  ];

  return (
    <section style={{ 
      padding: '80px 0', 
      background: '#f4f5f7', 
      position: 'relative'
    }}>
      <div className="wrap">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '50px' }}
        >
          <h2 style={{ fontSize: '32px', color: 'var(--navy)', fontFamily: 'var(--font-head)', marginBottom: '16px', lineHeight: '1.2' }}>
            ACTIVIDADES EJECUTADAS<br />
            <span style={{ color: 'var(--orange)' }}>CASOS DE ÉXITO</span>
          </h2>
          <p style={{ color: '#666', maxWidth: '600px', margin: '0 auto', fontSize: '16px' }}>
            Un historial de proyectos que respaldan nuestra excelencia técnica y compromiso con la seguridad.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '20px'
        }}>
          {projects.map((proj, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (idx % 8) * 0.05 }}
              style={{
                background: '#fff',
                borderLeft: '4px solid var(--orange)',
                padding: '24px',
                borderRadius: '0 12px 12px 0',
                boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              <h4 style={{ color: 'var(--navy)', fontSize: '15px', fontWeight: 800, marginBottom: '8px' }}>
                {proj.client}
              </h4>
              <p style={{ color: '#666', fontSize: '13px', lineHeight: '1.5', margin: 0 }}>
                {proj.task}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const [ref, inView] = useInView();
  const [activeHotspot, setActiveHotspot] = useState(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (!e.target.closest('.hotspot-container')) setActiveHotspot(null);
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const hotspots = [
    { id: 1, top: "35%", left: "42%", title: "Mosquetón Estructural", desc: "Seguro automático triple — carga certificada 23kN." },
    { id: 2, top: "22%", left: "20%", title: "Línea de Vida", desc: "Cable de acero galvanizado 8mm. Instalación Res. 4272/2021." },
    { id: 3, top: "65%", left: "48%", title: "Guante Dieléctrico", desc: "EPP especializado con agarre de alta fricción." }
  ];

  return (
    <>
      <TrustedBySection />
      <section 
      className="about" 
      id="empresa"
      style={{
        position: 'relative',
        padding: '120px 0',
        background: 'url(/assets/portfolio/workers_roof_red_shirts.jpg) center/cover fixed no-repeat',
        color: 'var(--navy)',
        overflow: 'hidden'
      }}
    >
      {/* Premium Dark Overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.96) 0%, rgba(240, 242, 245, 0.85) 100%)', zIndex: 1 }} />
      <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '60vw', height: '60vw', background: 'radial-gradient(circle, rgba(243,107,34,0.1) 0%, rgba(255,255,255,0) 60%)', filter: 'blur(60px)', zIndex: 1 }} />

      <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          className="about-grid"
          ref={ref}
          variants={stagger(0.15)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {/* Left Side: Image with Hotspots */}
          <motion.div className="about-img-wrap" variants={fadeIn} style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.15)', border: '1px solid rgba(255,255,255,0.8)' }}>
            <Image src="/assets/nuestra-empresa.jpg" alt="Especialistas en Alturas" width={800} height={1200} sizes="(max-width: 768px) 100vw, 50vw" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </motion.div>
          
          {/* Right Side: Premium Glassmorphism Text Card */}
          <motion.div 
            variants={fadeUp}
            style={{
              background: 'rgba(255, 255, 255, 0.65)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid rgba(255, 255, 255, 1)',
              borderRadius: '24px',
              padding: '48px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.08)'
            }}
          >
            <span style={{
              display: 'inline-block', padding: '6px 16px', border: '1px solid var(--orange)', 
              borderRadius: '20px', color: 'var(--orange)', fontSize: '11px', fontWeight: 800, 
              letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '24px',
              boxShadow: '0 0 15px rgba(243,107,34,0.3)',
              background: 'rgba(243,107,34,0.05)'
            }}>
              Nuestra Empresa
            </span>
            
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: '1.1', fontFamily: 'var(--font-head)', fontWeight: 900, marginBottom: '32px', color: 'var(--navy)', textTransform: 'uppercase' }}>
              Minimizamos los <span style={{ color: 'var(--orange)' }}>Riesgos</span> en cada ejecución.
            </h2>
            
            <div style={{
              position: 'relative', paddingLeft: '24px', marginBottom: '32px',
              borderLeft: '4px solid var(--orange)',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              <p style={{ fontSize: '18px', fontWeight: 700, color: 'var(--navy)', margin: 0 }}>
                Somos una empresa enfocada en la ejecución de todo tipo de trabajos en Alturas, <span style={{ color: 'var(--orange)' }}>creada en el año 2014.</span>
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(243,107,34,0.1)', padding: '8px 16px', borderRadius: '8px', width: 'fit-content' }}>
                <i className="fa-solid fa-award" style={{ fontSize: '20px', color: 'var(--orange)' }}></i>
                <p style={{ fontSize: '15px', fontWeight: 800, color: 'var(--navy)', margin: 0, textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {new Date().getFullYear() - 2014} Años de Experiencia
                </p>
              </div>
            </div>
            
            <p style={{ color: '#555', fontSize: '16px', lineHeight: '1.7', marginBottom: '16px' }}>
              Por medio de nuestro personal altamente calificado y basados en el cumplimiento de un SG-SST estructurado con un énfasis en las actividades de alto Riesgo, garantizamos a nuestros clientes una correcta ejecución, minimizando los riesgos a la hora de ejecutar los contratos.
            </p>
            
            <p style={{ color: 'var(--navy)', fontSize: '16px', fontWeight: 700, fontStyle: 'italic', marginBottom: '40px' }}>
              Cuidando el bienestar de todos los involucrados.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {["Personal Calificado", "SG-SST Estructurado", "Cumplimiento Normativo"].map((c) => (
                <span key={c} style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(0,0,0,0.05)',
                  padding: '10px 18px', borderRadius: '50px', fontSize: '13px', fontWeight: 700,
                  color: 'var(--navy)',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
                }}>
                  <i className="fa-solid fa-shield-halved" style={{ color: "var(--orange)" }} />
                  {c}
                </span>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
    </>
  );
}

/* ── Services Section (Portafolio) ── */
function ServicesSection({ onItemClick }) {
  const router = useRouter();
  const [ref, inView] = useInView(0.1);
  const services = [
    {
      num: "01",
      icon: "fa-layer-group",
      title: "ESTRUCTURAS METÁLICAS",
      desc: "Diseños ajustados a la medida; creamos y certificamos estructuras en cumplimiento de la Resolución 4272/2021.",
      image: "/assets/real_welding.jpg",
      bullets: ["Campos de entrenamiento", "Escaleras y Barandas", "Plataformas", "Monster Heights"]
    },
    {
      num: "02",
      icon: "fa-building",
      title: "TRABAJOS EN FACHADAS",
      desc: "Ejecución de trabajos en alturas que comprometan el exterior de edificios, bodegas y conjuntos residenciales con personal certificado.",
      image: "/assets/real_facade_washing2.jpg",
      bullets: ["Pintura y Lavado", "Mantenimiento y Adecuaciones", "Reparaciones", "Impermeabilización y Sellos"]
    },
    {
      num: "03",
      icon: "fa-link",
      title: "LÍNEAS DE VIDA Y ANCLAJES",
      desc: "Instalación y certificación de sistemas de protección, ofreciendo cobertura total al riesgo de caída en diversas actividades laborales.",
      image: "/assets/real_lifeline_testing.jpg",
      bullets: ["Líneas de vida horizontales y verticales", "Puntos de anclaje certificados (5.000 lb)"]
    },
    {
      num: "04",
      icon: "fa-screwdriver-wrench",
      title: "TRABAJOS EN ALTURAS",
      desc: "Ejecución experta en instalación y mantenimiento de estructuras suspendidas o de difícil acceso.",
      image: "/assets/real_tower_structure.jpg",
      bullets: ["Mantenimiento", "Reparaciones e Instalaciones", "Limpieza técnica"]
    },
    {
      num: "05",
      icon: "fa-trowel-bricks",
      title: "TRABAJOS EN CUBIERTAS",
      desc: "Operamos todo tipo de techos y cubiertas industriales que requieran intervención especializada y segura.",
      image: "/assets/real_roof_lifeline.jpg",
      bullets: ["Mantenimiento de canoas", "Filtraciones de agua", "Impermeabilizaciones y terminaciones", "Montaje de cubierta", "Instalación de plataformas"]
    },
    {
      num: "06",
      icon: "fa-paint-roller",
      title: "OBRA BLANCA Y ACABADOS",
      desc: "Acabados profesionales en bodegas, casas y apartamentos, incluyendo adecuaciones y mantenimiento general.",
      image: "/assets/real_obra_blanca.png",
      bullets: ["Pintura y Resanes", "Lavado e hidrófugo", "Fugas de agua", "Reparaciones eléctricas básicas", "Reparaciones en general"]
    },
    {
      num: "07",
      icon: "fa-chalkboard-user",
      title: "FORMACIÓN EN ALTURAS",
      desc: "Espacios de sensibilización para el personal con respecto a los riesgos inminentes previamente identificados en la empresa.",
      image: "/assets/real_rope_access.jpg",
      bullets: ["Cursos: Avanzado, Reentrenamiento, Coordinador, Operativo", "Planes de formación", "Ciclos formativos", "Sensibilización de riesgos"]
    }
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
          <span className="section-eyebrow">Portafolio</span>
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
                      onClick={(e) => { e.stopPropagation(); onItemClick({ id: svc.num, src: svc.image, alt: svc.title }); }}
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
        title: "Garantía de 10 Años",
        desc: "En sistemas de anclaje, con recertificación técnica anual garantizada.",
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
          <span className="about-tag">Valor Agregado</span>
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
    <section className="faq-section" style={{ padding: '100px 0', background: 'var(--navy)' }}>
      <div className="wrap">
        <motion.div
          className="text-center"
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '50px' }}
        >
          <span className="about-tag" style={{ border: '1px solid rgba(255,255,255,0.2)', color: '#fff', background: 'rgba(255,255,255,0.05)' }}>FAQ</span>
          <h2 style={{ color: '#fff', fontSize: '36px', marginTop: '20px' }}>Preguntas Corporativas Frecuentes</h2>
        </motion.div>

        <div className="faq-list" style={{ maxWidth: '800px', margin: '0 auto' }}>
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={`faq-item ${openIndex === i ? 'open' : ''}`}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              style={{
                background: openIndex === i ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.03)',
                marginBottom: '16px',
                borderRadius: '12px',
                padding: '24px',
                cursor: 'pointer',
                border: openIndex === i ? '1px solid var(--orange)' : '1px solid rgba(255,255,255,0.1)',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h4 style={{ margin: 0, fontSize: '18px', color: '#fff', fontFamily: 'var(--font-inter)', fontWeight: 600 }}>
                  {faq.q}
                </h4>
                <i className={`fa-solid fa-chevron-down`} style={{ 
                  color: 'var(--orange)', 
                  transition: 'transform 0.3s ease',
                  transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)'
                }}></i>
              </div>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, marginTop: 0 }}
                    animate={{ height: 'auto', opacity: 1, marginTop: '16px' }}
                    exit={{ height: 0, opacity: 0, marginTop: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p style={{ margin: 0, color: 'rgba(255,255,255,0.7)', fontSize: '15px', lineHeight: '1.6' }}>
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div></section>
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
    { title: "Puntos de anclaje", desc: "Capacidad certificada de 5.000 Libras" },
    { title: "Plan de emergencia", desc: "Protocolo de rescate en alturas" },
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
  
  const teaserData = [
    { src: "/assets/portfolio/21_descenso_extremo_fachada.jpg", alt: "Descenso de gran altura" },
    { src: "/assets/portfolio/22_soldadura_techo.jpg", alt: "Soldadura en techo" },
    { src: "/assets/portfolio/viva_centro_comercial.png", alt: "Lavado Centro Comercial" },
    { src: "/assets/portfolio/facade_painting_building.jpg", alt: "Pintura de Fachadas" },
    { src: "/assets/portfolio/workers_roof_red_shirts.jpg", alt: "Trabajo en Cubiertas" }
  ];

  return (
    <section className="portfolio-teaser" style={{ padding: '80px 0', background: '#f4f5f7' }}>
      <div className="wrap">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '40px' }}
        >
          
          <h2 style={{ fontSize: '32px', color: 'var(--navy)', fontFamily: 'var(--font-head)', marginBottom: '16px', lineHeight: '1.2' }}>
            ALGUNOS DE NUESTROS<br />
            <span style={{ color: 'var(--orange)' }}>TRABAJOS</span>
          </h2>
          
        </motion.div>

        {/* Swipe Native Carousel */}
        <div 
          className="swipe-carousel" 
          style={{ 
            display: 'flex', 
            overflowX: 'auto', 
            scrollSnapType: 'x mandatory',
            gap: '16px',
            paddingBottom: '24px',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none', // Firefox
            msOverflowStyle: 'none' // IE
          }}
        >
          <style>{`.swipe-carousel::-webkit-scrollbar { display: none; }`}</style>
          {teaserData.map((item, i) => {
            const displayIndex = i + 1;
            const badgeNumber = displayIndex < 10 ? `0${displayIndex}` : displayIndex;
            
            return (
              <div
                key={i}
                style={{
                  minWidth: '280px',
                  maxWidth: '300px',
                  height: '400px',
                  scrollSnapAlign: 'start',
                  position: 'relative',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  flexShrink: 0
                }}
              >
                

                <Image src={item.src} alt={item.alt} fill style={{ objectFit: 'cover' }} />

                
              </div>
            );
          })}
        </div>

        

        <div style={{ textAlign: 'center', marginBottom: '16px', fontSize: '14px', color: '#666' }}>
          Mostrando <strong>5</strong> de <strong>30</strong> fotos
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button 
            onClick={() => router.push('/portafolio')}
            style={{
              padding: '18px 32px',
              background: 'var(--orange)',
              border: 'none',
              borderRadius: '8px',
              color: '#fff',
              fontWeight: 800,
              fontSize: '15px',
              boxShadow: '0 10px 20px rgba(243, 107, 34, 0.3)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}
          >
            VER GALERÍA COMPLETA <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
        
        

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
            <span className="section-eyebrow">Contacto Oficial</span>
            <h2>¿Listo para empezar su proyecto?</h2>
            <p className="contact-lead">
              Comuníquese directamente con nuestra gerencia para recibir asesoría personalizada y cotizaciones a la medida.
            </p>
            <div className="contact-methods">
              {[
                { icon: "fa-solid fa-user-tie", lbl: "Representante Legal", val: "Hans Gutiérrez Baena" },
                { icon: "fa-solid fa-envelope", lbl: "Correo Electrónico", val: "losespecialistasenalturas@gmail.com", href: "mailto:losespecialistasenalturas@gmail.com" },
                { icon: "fa-brands fa-whatsapp", lbl: "Celular / WhatsApp", val: "305 343 9984", href: "https://wa.me/573053439984" },
                  { icon: "fa-solid fa-map-pin", lbl: "Sedes Físicas", val: "Medellín: Cll 53A #47-45 | Rionegro: Vereda La Playa" },
                  { icon: "fa-solid fa-clock", lbl: "Horario de Atención", val: "7:30 AM - 4:00 PM" },
                  { icon: "fa-solid fa-route", lbl: "Cobertura", val: "Medellín y Oriente Antioqueño" },
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

function SponsorsSection() {
  const [ref, inView] = useInView(0.1);
  const sponsors = [
    { src: "/assets/clients/udea.png", alt: "Universidad de Antioquia", width: 140 },
    { src: "/assets/clients/escudo.png", alt: "Gobierno de Colombia", width: 90 },
    { src: "/assets/clients/fondo-emprender.png", alt: "Fondo Emprender", width: 170 },
    { src: "/assets/clients/sena.png", alt: "SENA", width: 90 },
    { src: "/assets/clients/alcaldia.png", alt: "Alcaldía de Rionegro", width: 180 },
    { src: "/assets/clients/rionegro.png", alt: "Rionegro Tarea de Todos", width: 140 }
  ];

  return (
    <section style={{ 
      background: 'linear-gradient(to bottom, #f8f9fa, #ffffff)', 
      padding: '70px 0', 
      borderTop: '1px solid rgba(0,0,0,0.05)',
      position: 'relative'
    }}>
      <div className="wrap" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          style={{ width: '100%', textAlign: 'center' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', marginBottom: '40px' }}>
            <div style={{ height: '1px', width: '50px', background: 'linear-gradient(90deg, transparent, var(--navy))' }} />
            <h3 style={{ margin: 0, color: 'var(--navy)', fontSize: '13px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '4px' }}>
              Apoyo Institucional
            </h3>
            <div style={{ height: '1px', width: '50px', background: 'linear-gradient(-90deg, transparent, var(--navy))' }} />
          </div>

          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            alignItems: 'center', 
            gap: 'clamp(30px, 4vw, 50px)',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {sponsors.map((logo, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ 
                  position: 'relative', 
                  width: `${logo.width}px`, 
                  height: '75px',
                  filter: 'grayscale(100%) opacity(0.5)',
                  transition: 'all 0.4s ease',
                  cursor: 'default'
                }}
                onMouseEnter={(e) => { 
                  // Muestra el color original del logo
                  e.currentTarget.style.filter = 'grayscale(0%) opacity(1)';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => { 
                  e.currentTarget.style.filter = 'grayscale(100%) opacity(0.5)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <Image src={logo.src} alt={logo.alt} fill style={{ objectFit: 'contain' }} sizes="(max-width: 768px) 150px, 250px" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MissionVisionSection() {
  const [ref, inView] = useInView();
  const [activeTab, setActiveTab] = useState("mision");

  return (
    <section 
      id="mision-vision"
      style={{
        padding: '80px 0',
        background: 'var(--navy)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Animated Glowing Orbs Behind Glass */}
      <motion.div animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} style={{ position: 'absolute', top: '-10%', left: '10%', width: '50vw', height: '50vw', background: 'radial-gradient(circle, rgba(243,107,34,0.12) 0%, transparent 70%)', filter: 'blur(60px)', zIndex: 0 }} />
      <motion.div animate={{ scale: [1, 1.3, 1], x: [0, -30, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} style={{ position: 'absolute', bottom: '-20%', right: '0%', width: '60vw', height: '60vw', background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)', filter: 'blur(80px)', zIndex: 0 }} />

      <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            background: 'rgba(255, 255, 255, 0.02)',
            backdropFilter: 'blur(30px)',
            WebkitBackdropFilter: 'blur(30px)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '32px',
            padding: 'clamp(32px, 5vw, 56px)',
            boxShadow: '0 30px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)',
            maxWidth: '1000px',
            margin: '0 auto'
          }}
        >
          {/* Custom Tab Switcher */}
          <div style={{ display: 'flex', gap: '16px', marginBottom: '40px', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '32px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              onClick={() => setActiveTab('mision')}
              style={{ 
                background: activeTab === 'mision' ? 'rgba(243,107,34,0.1)' : 'rgba(255,255,255,0.02)',
                border: activeTab === 'mision' ? '1px solid var(--orange)' : '1px solid rgba(255,255,255,0.1)',
                color: activeTab === 'mision' ? 'var(--orange)' : 'rgba(255,255,255,0.5)',
                padding: '14px 40px', borderRadius: '40px', fontSize: '14px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '3px', cursor: 'pointer', transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow: activeTab === 'mision' ? '0 0 20px rgba(243,107,34,0.2)' : 'none'
              }}>
              <i className="fa-solid fa-bullseye" style={{ marginRight: '10px' }}></i> Misión
            </button>
            <button 
              onClick={() => setActiveTab('vision')}
              style={{ 
                background: activeTab === 'vision' ? 'rgba(59,130,246,0.1)' : 'rgba(255,255,255,0.02)',
                border: activeTab === 'vision' ? '1px solid #3b82f6' : '1px solid rgba(255,255,255,0.1)',
                color: activeTab === 'vision' ? '#3b82f6' : 'rgba(255,255,255,0.5)',
                padding: '14px 40px', borderRadius: '40px', fontSize: '14px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '3px', cursor: 'pointer', transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow: activeTab === 'vision' ? '0 0 20px rgba(59,130,246,0.2)' : 'none'
              }}>
              <i className="fa-solid fa-eye" style={{ marginRight: '10px' }}></i> Visión
            </button>
          </div>

          {/* Interactive Content Area */}
          <div style={{ minHeight: '180px', position: 'relative' }}>
            <AnimatePresence mode="wait">
              {activeTab === 'mision' && (
                <motion.div 
                  key="mision" 
                  initial={{ opacity: 0, y: 15, scale: 0.98 }} 
                  animate={{ opacity: 1, y: 0, scale: 1 }} 
                  exit={{ opacity: 0, y: -15, scale: 0.98 }} 
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 'clamp(16px, 2vw, 18px)', lineHeight: '1.9', textAlign: 'center', margin: 0, fontWeight: 300 }}>
                    <strong style={{ color: '#fff', fontWeight: 600 }}>Especialistas en Alturas</strong> brinda soluciones integrales y especializadas en mantenimiento preventivo y correctivo de fachadas y edificaciones, trabajos en alturas e instalación de sistemas de protección contra caídas. Desarrollamos nuestros servicios de manera segura, eficiente y oportuna, mediante personal competente y cumplimiento estricto normativo.
                    <br/><br/>
                    <span style={{ color: 'var(--orange)' }}>Nuestro propósito:</span> proteger la integridad de nuestros colaboradores, conservar y valorizar la infraestructura y garantizar soluciones que favorezcan la seguridad, funcionalidad y durabilidad de las edificaciones bajo los más altos estándares de calidad.
                  </p>
                </motion.div>
              )}
              {activeTab === 'vision' && (
                <motion.div 
                  key="vision" 
                  initial={{ opacity: 0, y: 15, scale: 0.98 }} 
                  animate={{ opacity: 1, y: 0, scale: 1 }} 
                  exit={{ opacity: 0, y: -15, scale: 0.98 }} 
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 'clamp(16px, 2vw, 18px)', lineHeight: '1.9', textAlign: 'center', margin: 0, fontWeight: 300 }}>
                    Para el <strong style={{ color: '#fff', fontWeight: 600 }}>año 2030</strong>, Especialistas en Alturas será reconocida como una empresa referente en el sector de mantenimiento de fachadas, trabajos en alturas y sistemas de protección contra caídas, destacándose por su excelencia técnica, cultura de seguridad, calidad del servicio y cumplimiento.
                    <br/><br/>
                    <span style={{ color: '#3b82f6' }}>Buscaremos consolidar</span> nuestro crecimiento y posicionamiento en el mercado mediante la mejora continua de nuestros procesos, el fortalecimiento de las competencias de nuestro talento, la innovación y la construcción de relaciones comerciales basadas en la confianza total de nuestros clientes.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Page() {
  const [selectedItem, setSelectedItem] = useState(null);
  const yearsOfExperience = new Date().getFullYear() - 2014;

  return (
    <>
      <ProgressBar />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <MissionVisionSection />
        <NotableProjectsSection />
        <ServicesSection onItemClick={setSelectedItem} />
        <BenefitsSection />
        <RiskAnalysisSection />
        <PortfolioTeaser />
        <FAQSection />
        <ContactSection />
          <SponsorsSection />
      </main>
      <Footer />
      {/* Global Fixed Components */}
      <FloatingWhatsApp />
      <FloatingPhone />
      <ScrollToTop />
      <ImageModal selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
    </>
  );
}

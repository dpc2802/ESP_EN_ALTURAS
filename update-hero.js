const fs = require('fs');

let file = 'src/app/page.js';
let text = fs.readFileSync(file, 'utf8');

const newHero = `
/* ============ Hero Section ============ */
function HeroSection() {
  const { scrollY } = useScroll();
  const imgY = useTransform(scrollY, [0, 600], [0, 120]);
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "/assets/hero-2.jpg",
    "/assets/hero-3.jpg",
    "/assets/hero-movil.png",
    "/assets/hero-4.jpg",
    "/assets/hero-5.jpg"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="hero" id="inicio">
      <AnimatePresence>
        <motion.div 
          key={currentSlide}
          className="hero-image" 
          style={{ y: imgY }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <Image 
            src={slides[currentSlide]} 
            alt="Trabajo seguro en alturas" 
            fill 
            priority={currentSlide === 0}
            style={{ objectFit: "cover", objectPosition: "center center" }} 
          />
        </motion.div>
      </AnimatePresence>
      <div className="hero-mesh" style={{ background: 'rgba(0,0,0,0.4)' }} />
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
            style={{ textShadow: '0 4px 10px rgba(0,0,0,0.8)' }}
          >
            EXPERIENCIA, CALIDAD Y SEGURIDAD
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            style={{ textShadow: '0 2px 6px rgba(0,0,0,0.8)' }}
          >
            Soluciones integrales para trabajos verticales. Desde fachadas hasta estructuras complejas, 
            garantizamos eficiencia bajo normas internacionales.
          </motion.p>
`;

// we need to replace from "/* ── Hero Section ── */" to "</section>" inside HeroSection
const regex = /\/\*\s*──\s*Hero Section\s*──\s*\*\/[\s\S]*?<\/section>\n  \);/m;

// wait, the file uses `/* ── Hero Section ── */` or `/* ============ Hero Section ============ */`
// Actually, let's just find the function HeroSection and replace it.
const exactTarget = `/* ── Hero Section ── */
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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
          >
            Soluciones integrales para trabajos verticales. Desde fachadas hasta estructuras complejas, 
            garantizamos eficiencia bajo normas internacionales.
          </motion.p>`;

text = text.replace(exactTarget, newHero);
fs.writeFileSync(file, text);

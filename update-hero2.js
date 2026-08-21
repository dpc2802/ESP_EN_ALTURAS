const fs = require('fs');

let file = 'src/app/page.js';
let text = fs.readFileSync(file, 'utf8');

const replacement = `function HeroSection() {
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
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentSlide}
          className="hero-image" 
          style={{ y: imgY, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
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
      <div className="hero-mesh" style={{ background: 'rgba(0,0,0,0.5)' }} />
      <div className="wrap" style={{ position: 'relative', zIndex: 10 }}>
        <div className="hero-content">
`;

const regex = /function HeroSection\(\) \{[\s\S]*?<div className="hero-content">/;
text = text.replace(regex, replacement);

fs.writeFileSync(file, text);

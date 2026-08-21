"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ImageModal from "../components/ImageModal";

// Datos de prueba (ampliables cuando se suban las 40 fotos reales)
const portfolioData = [
  { id: 1, src: "/assets/real_facade.jpg", cat: "fachadas", alt: "Limpieza de fachada" },
  { id: 2, src: "/assets/real_welding.jpg", cat: "estructuras", alt: "Soldadura en altura" },
  { id: 3, src: "/assets/real_roof_lifeline.jpg", cat: "lineas", alt: "Instalación de línea de vida en techo" },
  { id: 4, src: "/assets/real_tower_structure.jpg", cat: "estructuras", alt: "Mantenimiento de torre" },
  { id: 5, src: "/assets/real_facade_washing.jpg", cat: "fachadas", alt: "Hidrolavado de ladrillo" },
  { id: 6, src: "/assets/real_anchor_testing.jpg", cat: "lineas", alt: "Prueba de anclaje a 23kN" },
  { id: 7, src: "/assets/real_mountain_climber.jpg", cat: "estructuras", alt: "Acceso por cuerdas avanzado" },
  { id: 8, src: "/assets/real_welding_pipe.jpg", cat: "estructuras", alt: "Soldadura de tubería industrial" },
  { id: 9, src: "/assets/real_rope_access.jpg", cat: "fachadas", alt: "Descenso controlado en edificio" },
  { id: 10, src: "/assets/real_city_facade.jpg", cat: "fachadas", alt: "Pintura exterior de edificio" },
  { id: 11, src: "/assets/facade_maintenance.jpg", cat: "fachadas", alt: "Mantenimiento de fachada de vidrio" },
  { id: 12, src: "/assets/lifeline_safety.jpg", cat: "lineas", alt: "Línea de vida certificada" }
];

export default function PortfolioClient() {
  const [filter, setFilter] = useState("todas");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredData = filter === "todas" 
    ? portfolioData 
    : portfolioData.filter(item => item.cat === filter);

  return (
    <>
      <div className="portfolio-filters" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', marginBottom: '40px' }}>
        {[
          { id: "todas", label: "Todas las fotos" },
          { id: "fachadas", label: "Fachadas y Pintura" },
          { id: "estructuras", label: "Estructuras Metálicas" },
          { id: "lineas", label: "Líneas de Vida" }
        ].map((btn) => (
          <button
            key={btn.id}
            onClick={() => setFilter(btn.id)}
            style={{
              padding: '10px 20px',
              borderRadius: '30px',
              border: filter === btn.id ? '2px solid var(--orange)' : '2px solid rgba(11,29,53,0.1)',
              background: filter === btn.id ? 'var(--orange)' : '#fff',
              color: filter === btn.id ? '#fff' : 'var(--navy)',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontSize: '15px'
            }}
          >
            {btn.label}
          </button>
        ))}
      </div>

      <motion.div layout className="masonry-grid">
        <AnimatePresence>
          {filteredData.map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
              key={item.id}
              className="masonry-item"
              onClick={() => setSelectedImage(item.src)}
            >
              <div style={{ position: 'relative', width: '100%', borderRadius: '16px', overflow: 'hidden', cursor: 'zoom-in', boxShadow: '0 10px 20px rgba(0,0,0,0.08)' }}>
                {/* Usamos un truco con padding-bottom si no sabemos el aspect ratio, 
                    o layout="responsive". Para Next Image con objectFit='cover' en masonry, 
                    requiere altura fija. Dado que masonry es fluido, 
                    lo mejor para next/image es darle estilos para no desbordar. */}
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={600}
                  height={600}
                  style={{ width: '100%', height: 'auto', display: 'block', transition: 'transform 0.5s ease' }}
                  className="portfolio-img-hover"
                />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <ImageModal selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
    </>
  );
}

"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ImageModal from "../components/ImageModal";

// Datos de prueba (ampliables cuando se suban las 40 fotos reales)
const portfolioData = [

  { id: 121, src: "/assets/portfolio/21_descenso_extremo_fachada.jpg", cat: "fachadas", alt: "Descenso de gran altura en entorno urbano" },
  { id: 122, src: "/assets/portfolio/22_soldadura_techo.jpg", cat: "estructuras", alt: "Trabajo de soldadura en estructura de techo" },
  { id: 123, src: "/assets/portfolio/23_soldadura_estructura.png", cat: "estructuras", alt: "Soldadura en viga estructural en altura" },
  { id: 124, src: "/assets/portfolio/24_tensor_linea_vida.jpg", cat: "lineas", alt: "Detalle de tensor y absorbedor de energía en línea de vida" },
  { id: 125, src: "/assets/portfolio/25_preparacion_cuerdas_azotea.jpg", cat: "fachadas", alt: "Equipo técnico preparando anclajes en azotea" },


  { id: 116, src: "/assets/portfolio/16_lectura_dinamometro.png", cat: "lineas", alt: "Lectura de tensión en dinamómetro digital" },
  { id: 117, src: "/assets/portfolio/17_lavado_cubierta_doble.jpg", cat: "cubiertas", alt: "Limpieza profunda de cubierta con hidrolavadora" },
  { id: 118, src: "/assets/portfolio/18_descenso_fachada_ladrillo.jpg", cat: "fachadas", alt: "Mantenimiento simultáneo en fachada de ladrillo" },
  { id: 119, src: "/assets/portfolio/19_lavado_fachada_ladrillo.png", cat: "fachadas", alt: "Hidrolavado a presión en edificio de ladrillo" },
  { id: 120, src: "/assets/portfolio/20_trabajador_fachada_ladrillo.png", cat: "fachadas", alt: "Operario especialista en alturas inspeccionando fachada" },


  { id: 111, src: "/assets/portfolio/11_instalacion_linea_techo.jpg", cat: "lineas", alt: "Instalación de sistema de línea de vida en techo" },
  { id: 112, src: "/assets/portfolio/12_ajuste_linea_vida.jpg", cat: "lineas", alt: "Ajuste y tensado de línea de vida estructural" },
  { id: 113, src: "/assets/portfolio/13_inspeccion_cubierta.png", cat: "cubiertas", alt: "Inspección técnica de riesgo en cubierta" },
  { id: 114, src: "/assets/portfolio/14_prueba_extraccion.jpg", cat: "lineas", alt: "Verificación de resistencia de anclaje con Hydrajaws" },
  { id: 115, src: "/assets/portfolio/15_montaje_escalera.jpg", cat: "fachadas", alt: "Montaje seguro de escalera de extensión" },


  { id: 106, src: "/assets/portfolio/6_lavado_cubierta.jpg", cat: "cubiertas", alt: "Limpieza a presión en cubierta termoacústica" },
  { id: 107, src: "/assets/portfolio/7_prueba_anclaje_2.jpg", cat: "lineas", alt: "Certificación de anclaje estructural con dinamómetro" },
  { id: 108, src: "/assets/portfolio/8_pintura_escalera.jpg", cat: "fachadas", alt: "Pintura exterior en baja altura con escalera certificada" },
  { id: 109, src: "/assets/portfolio/9_pintura_fachada_cuerdas.jpg", cat: "fachadas", alt: "Aplicación de recubrimiento en muro ciego" },
  { id: 110, src: "/assets/portfolio/10_pintura_fachada_cuerdas_amplio.jpg", cat: "fachadas", alt: "Trabajo simultáneo de pintura en torre residencial" },


  { id: 101, src: "/assets/portfolio/1_pintura_fachada.jpg", cat: "fachadas", alt: "Aplicación de pintura primera mano" },
  { id: 102, src: "/assets/portfolio/2_prueba_anclaje.png", cat: "lineas", alt: "Prueba de extracción de anclaje con hidrájaws" },
  { id: 103, src: "/assets/portfolio/3_lavado_fachada.jpg", cat: "fachadas", alt: "Lavado de fachada edificio alto" },
  { id: 104, src: "/assets/portfolio/4_lavado_cubierta.jpg", cat: "cubiertas", alt: "Lavado a presión de techo/cubierta" },
  { id: 105, src: "/assets/portfolio/5_mantenimiento_techo_tijera.jpg", cat: "estructuras", alt: "Mantenimiento estructural con elevador de tijera" },

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
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredData = filter === "todas" 
    ? portfolioData 
    : portfolioData.filter(item => item.cat === filter);

  const handleNext = () => {
    if (!selectedItem) return;
    const currentIndex = filteredData.findIndex(item => item.id === selectedItem.id);
    if (currentIndex < filteredData.length - 1) {
      setSelectedItem(filteredData[currentIndex + 1]);
    } else {
      setSelectedItem(filteredData[0]); // Wrap around
    }
  };

  const handlePrev = () => {
    if (!selectedItem) return;
    const currentIndex = filteredData.findIndex(item => item.id === selectedItem.id);
    if (currentIndex > 0) {
      setSelectedItem(filteredData[currentIndex - 1]);
    } else {
      setSelectedItem(filteredData[filteredData.length - 1]); // Wrap around
    }
  };
  

  return (
    <>
      {/* FILTROS TIPO "PILL" CON ANIMACIÓN FLIP */}
      <div 
        className="portfolio-filters" 
        style={{ 
          display: 'flex', 
          flexWrap: 'nowrap', 
          gap: '12px', 
          marginBottom: '24px', 
          overflowX: 'auto', 
          paddingBottom: '12px',
          WebkitOverflowScrolling: 'touch',
          msOverflowStyle: 'none',
          scrollbarWidth: 'none'
        }}
      >
        <style>{`.portfolio-filters::-webkit-scrollbar { display: none; }`}</style>
        {[
          { id: "todas", label: `TODOS (${portfolioData.length})` },
          { id: "fachadas", label: "FACHADAS" },
          { id: "cubiertas", label: "CUBIERTAS" },
          { id: "estructuras", label: "ESTRUCTURAS" },
          { id: "lineas", label: "LÍNEAS DE VIDA" }
        ].map((btn) => (
          <button
            key={btn.id}
            onClick={() => setFilter(btn.id)}
            style={{
              position: 'relative',
              padding: '10px 24px',
              borderRadius: '30px',
              border: filter === btn.id ? '1px solid transparent' : '1px solid rgba(11,29,53,0.15)',
              background: 'transparent',
              color: filter === btn.id ? '#fff' : 'var(--navy)',
              fontWeight: 700,
              cursor: 'pointer',
              fontSize: '13px',
              whiteSpace: 'nowrap',
              outline: 'none',
              transition: 'color 0.3s ease'
            }}
          >
            {filter === btn.id && (
              <motion.div
                layoutId="activeFilterPill"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'var(--orange)',
                  borderRadius: '30px',
                  zIndex: -1
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span style={{ position: 'relative', zIndex: 1 }}>{btn.label}</span>
          </button>
        ))}
      </div>

      <div style={{ fontSize: '13px', color: '#666', marginBottom: '24px' }}>
        Mostrando <strong>{filteredData.length}</strong> de <strong>{portfolioData.length}</strong>
      </div>

      <motion.div layout className="masonry-grid">
        <AnimatePresence mode="popLayout">
          {filteredData.map((item, index) => {
            const displayIndex = index + 1;
            const badgeNumber = displayIndex < 10 ? `0${displayIndex}` : displayIndex;

            return (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "50px" }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ 
                  duration: 0.6, 
                  ease: [0.16, 1, 0.3, 1],
                  delay: (index % 6) * 0.1 
                }}
                key={item.id}
                className="masonry-item"
                onClick={() => setSelectedItem(item)}
              >
                <motion.div 
                  whileHover={{ y: -6 }}
                  style={{ 
                    position: 'relative', 
                    width: '100%', 
                    borderRadius: '16px', 
                    overflow: 'hidden', 
                    cursor: 'zoom-in', 
                    boxShadow: '0 10px 20px rgba(0,0,0,0.08)',
                    background: '#fff'
                  }}
                >
                  

                  <motion.img
                    layoutId={`portfolio-img-${item.id}`}
                    src={item.src}
                    alt={item.alt}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />

                  
                </motion.div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Botón Cargar Más */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '60px' }}>
        <button style={{
          padding: '16px 40px',
          background: '#fff',
          border: '1px solid rgba(0,0,0,0.1)',
          borderRadius: '8px',
          color: 'var(--navy)',
          fontWeight: 800,
          fontSize: '14px',
          boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
          cursor: 'pointer'
        }}>
          CARGAR MÁS FOTOS
        </button>
      </div>

      <ImageModal selectedItem={selectedItem} setSelectedItem={setSelectedItem} onNext={handleNext} onPrev={handlePrev} />
    </>
  );
}

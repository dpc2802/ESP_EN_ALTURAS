"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  { id: "estructuras", title: "Estructuras Metálicas", icon: "fa-layer-group" },
  { id: "fachadas", title: "Trabajos en Fachadas", icon: "fa-building" },
  { id: "lineas", title: "Líneas de Vida y Anclajes", icon: "fa-link" },
  { id: "cubiertas", title: "Trabajos en Cubiertas", icon: "fa-trowel-bricks" },
  { id: "asesoria", title: "Análisis y Asesoría", icon: "fa-helmet-safety" },
];

export default function InteractiveQuote() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    servicio: "",
    tipoProyecto: "",
    urgencia: "",
    nombre: "",
    empresa: "",
    correo: "",
    telefono: "",
    detalles: "",
  });

  const updateForm = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleNext = (e) => {
    if (e) e.preventDefault();
    setStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hola Especialistas en Alturas,

Deseo cotizar un proyecto.

*1. Servicio:* ${formData.servicio}
*2. Tipo de Proyecto:* ${formData.tipoProyecto}
*3. Urgencia:* ${formData.urgencia}

*Datos de Contacto:*
Nombre: ${formData.nombre}
Empresa: ${formData.empresa || "N/A"}
Correo: ${formData.correo || "N/A"}
Teléfono: ${formData.telefono}

*Detalles Adicionales:*
${formData.detalles || "Sin detalles adicionales."}`;

    window.open(`https://wa.me/573053439984?text=${encodeURIComponent(text)}`, "_blank");
    setStep(4); // Success step
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0,
    }),
  };

  return (
    <div className="quote-stepper">
      <div className="stepper-progress">
        <div className={`step-indicator ${step >= 1 ? "active" : ""}`}>1. Servicio</div>
        <div className="step-line" />
        <div className={`step-indicator ${step >= 2 ? "active" : ""}`}>2. Proyecto</div>
        <div className="step-line" />
        <div className={`step-indicator ${step >= 3 ? "active" : ""}`}>3. Datos</div>
      </div>

      <div className="stepper-content">
        <AnimatePresence mode="wait" custom={1}>
          {step === 1 && (
            <motion.div
              key="step1"
              custom={1}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <h3 style={{ marginBottom: "20px", color: "var(--white)" }}>¿Qué servicio necesitas cotizar?</h3>
              <div className="service-cards-grid">
                {services.map((svc) => (
                  <div
                    key={svc.id}
                    className={`service-card-select ${formData.servicio === svc.title ? "selected" : ""}`}
                    onClick={() => {
                      updateForm("servicio", svc.title);
                      setTimeout(() => setStep(2), 300);
                    }}
                  >
                    <i className={`fa-solid ${svc.icon}`} />
                    <span>{svc.title}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.form
              key="step2"
              custom={1}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
              onSubmit={handleNext}
            >
              <h3 style={{ marginBottom: "20px", color: "var(--white)" }}>Detalles del Proyecto</h3>
              
              <div className="form-row">
                <label>Tipo de Proyecto / Sector</label>
                <select 
                  className="form-input" 
                  required 
                  value={formData.tipoProyecto}
                  onChange={(e) => updateForm("tipoProyecto", e.target.value)}
                >
                  <option value="" disabled>Seleccione una opción...</option>
                  <option value="Residencial (Edificio/Conjunto)">Residencial (Edificio/Conjunto)</option>
                  <option value="Industrial (Bodega/Fábrica)">Industrial (Bodega/Fábrica)</option>
                  <option value="Comercial (Centro Comercial/Local)">Comercial (Centro Comercial/Local)</option>
                  <option value="Institucional (Hospital/Colegio)">Institucional (Hospital/Colegio)</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>

              <div className="form-row">
                <label>Urgencia del Servicio</label>
                <select 
                  className="form-input" 
                  required 
                  value={formData.urgencia}
                  onChange={(e) => updateForm("urgencia", e.target.value)}
                >
                  <option value="" disabled>Seleccione una opción...</option>
                  <option value="Inmediata (Emergencia)">Inmediata (Emergencia)</option>
                  <option value="Esta semana">Esta semana</option>
                  <option value="Este mes">Este mes</option>
                  <option value="Solo estoy planeando">Solo planeando/presupuestando</option>
                </select>
              </div>

              <div className="form-row">
                <label>Detalles Breves (Opcional)</label>
                <textarea
                  className="form-input"
                  rows={3}
                  placeholder="Ej: Es un edificio de 10 pisos y necesitamos lavar las ventanas..."
                  style={{ resize: "none" }}
                  value={formData.detalles}
                  onChange={(e) => updateForm("detalles", e.target.value)}
                />
              </div>

              <div className="stepper-actions">
                <button type="button" className="btn-secondary-outline" onClick={handlePrev}>
                  Atrás
                </button>
                <button type="submit" className="form-submit" style={{ width: 'auto', marginTop: 0 }}>
                  Continuar <i className="fa-solid fa-arrow-right" style={{ marginLeft: "8px" }} />
                </button>
              </div>
            </motion.form>
          )}

          {step === 3 && (
            <motion.form
              key="step3"
              custom={1}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
              onSubmit={handleSubmit}
            >
              <h3 style={{ marginBottom: "20px", color: "var(--white)" }}>Datos de Contacto</h3>
              
              <div className="form-row">
                <label>Tu Nombre o Encargado</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Ej. Juan Pérez"
                  required
                  value={formData.nombre}
                  onChange={(e) => updateForm("nombre", e.target.value)}
                />
              </div>

              
              <div className="form-row">
                <label>Correo Electrónico Corporativo</label>
                <input
                  type="email"
                  className="form-input"
                  placeholder="Ej. compras@constructora.com"
                  required
                  value={formData.correo}
                  onChange={(e) => updateForm("correo", e.target.value)}
                />
              </div>

              <div className="form-row">
                <label>Nombre de la Empresa / Conjunto (Opcional)</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Ej. Constructora SAS"
                  value={formData.empresa}
                  onChange={(e) => updateForm("empresa", e.target.value)}
                />
              </div>

              <div className="form-row">
                <label>Teléfono / WhatsApp de Contacto</label>
                <input
                  type="tel"
                  className="form-input"
                  placeholder="Ej. 300 123 4567"
                  required
                  value={formData.telefono}
                  onChange={(e) => updateForm("telefono", e.target.value)}
                />
              </div>

              <div className="stepper-actions">
                <button type="button" className="btn-secondary-outline" onClick={handlePrev}>
                  Atrás
                </button>
                <button type="submit" className="form-submit" style={{ width: 'auto', marginTop: 0 }}>
                  Enviar Cotización <i className="fa-brands fa-whatsapp" style={{ marginLeft: "8px" }} />
                </button>
              </div>
            </motion.form>
          )}

          {step === 4 && (
            <motion.div
              key="step4"
              custom={1}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
              style={{ textAlign: "center", padding: "40px 20px" }}
            >
              <div style={{ fontSize: "48px", color: "#25D366", marginBottom: "16px" }}>
                <i className="fa-solid fa-circle-check" />
              </div>
              <h3 style={{ color: "var(--white)", marginBottom: "12px" }}>¡Solicitud Enviada!</h3>
              <p style={{ color: "rgba(255,255,255,0.7)" }}>
                Si WhatsApp no se abrió automáticamente, asegúrate de no tener bloqueadores de ventanas emergentes. Te contactaremos pronto.
              </p>
              <button 
                className="btn-secondary-outline" 
                style={{ marginTop: "24px" }}
                onClick={() => { setStep(1); setFormData({servicio: "", tipoProyecto: "", urgencia: "", nombre: "", empresa: "", correo: "", telefono: "", detalles: ""}); }}
              >
                Hacer otra cotización
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

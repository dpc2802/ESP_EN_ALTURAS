"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function InteractiveQuote() {
  const [messages, setMessages] = useState([
    { id: 1, sender: "bot", type: "text", text: "¡Hola! Bienvenido a Especialistas en Alturas. ¿Qué servicio necesitas cotizar hoy?" },
    { id: 2, sender: "bot", type: "options", key: "servicio", options: [
      { label: "Estructuras Metálicas", icon: "fa-industry" },
      { label: "Fachadas", icon: "fa-building" },
      { label: "Líneas de Vida", icon: "fa-anchor" },
      { label: "Cubiertas", icon: "fa-roofing" }
    ]}
  ]);
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
  const [isTyping, setIsTyping] = useState(false);
  const chatRef = useRef(null);

  // Autoscroll
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const addMessage = (msg) => {
    setMessages(prev => [...prev, { id: Date.now(), ...msg }]);
  };

  const simulateBot = (botMessages) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      botMessages.forEach(msg => addMessage({ sender: "bot", ...msg }));
    }, 1000);
  };

  const handleOptionSelect = (key, value) => {
    setFormData(prev => ({ ...prev, [key]: value }));
    addMessage({ sender: "user", type: "text", text: value });

    // Remove the options from the chat so they can't be clicked again
    setMessages(prev => prev.map(m => m.id === messages[messages.length - 1].id ? { ...m, disabled: true } : m));

    if (key === "servicio") {
      simulateBot([
        { type: "text", text: `Excelente elección. ¿De qué tipo de proyecto estamos hablando?` },
        { type: "options", key: "tipoProyecto", options: [
          { label: "Residencial", icon: "fa-home" },
          { label: "Industrial", icon: "fa-industry" },
          { label: "Comercial", icon: "fa-store" },
          { label: "Institucional", icon: "fa-school" }
        ]}
      ]);
    } else if (key === "tipoProyecto") {
      simulateBot([
        { type: "text", text: `Entendido. ¿Para cuándo necesitas que ejecutemos este trabajo?` },
        { type: "options", key: "urgencia", options: [
          { label: "Emergencia (Inmediata)", icon: "fa-triangle-exclamation" },
          { label: "Esta semana", icon: "fa-calendar-week" },
          { label: "Este mes", icon: "fa-calendar-days" },
          { label: "Solo planeando", icon: "fa-list-check" }
        ]}
      ]);
    } else if (key === "urgencia") {
      simulateBot([
        { type: "text", text: `¡Perfecto! Ya casi terminamos. Por favor, déjanos tus datos de contacto corporativo para enviarte la propuesta formal.` },
        { type: "input", key: "contact_form" }
      ]);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addMessage({ sender: "user", type: "text", text: "Datos enviados." });
    
    // Disable form
    setMessages(prev => prev.map(m => m.key === "contact_form" ? { ...m, disabled: true } : m));

    simulateBot([
      { type: "text", text: `¡Todo listo, ${formData.nombre}! Estamos preparando tu cotización.` },
      { type: "action", text: "Enviar Cotización por WhatsApp" }
    ]);
  };

  const sendToWhatsApp = () => {
    const text = `Hola Especialistas en Alturas,

Deseo cotizar un proyecto.

*1. Servicio:* ${formData.servicio}
*2. Tipo de Proyecto:* ${formData.tipoProyecto}
*3. Urgencia:* ${formData.urgencia}

*Datos de Contacto:*
Nombre: ${formData.nombre}
Empresa: ${formData.empresa || "N/A"}
Correo: ${formData.correo}
Teléfono: ${formData.telefono}

*Detalles:* ${formData.detalles || "N/A"}`;

    const phone = "573053439984";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="quote-stepper">
      <div className="stepper-header" style={{ justifyContent: 'center' }}>
        <h2 style={{ fontSize: '20px', margin: 0, fontFamily: 'var(--font-head)', color: 'var(--navy)' }}>
          <i className="fa-solid fa-robot" style={{ color: 'var(--orange)', marginRight: '8px' }}></i> Asistente de Cotización
        </h2>
      </div>

      <div className="chat-container" ref={chatRef}>
        <AnimatePresence initial={false}>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.3 }}
              style={{ display: 'flex', flexDirection: 'column', width: '100%' }}
            >
              {msg.type === "text" && (
                <div className={`chat-msg ${msg.sender}`}>
                  {msg.text}
                </div>
              )}

              {msg.type === "options" && !msg.disabled && (
                <div className="chat-options">
                  {msg.options.map(opt => (
                    <button 
                      key={opt.label} 
                      className="chat-option-btn"
                      onClick={() => handleOptionSelect(msg.key, opt.label)}
                    >
                      <i className={`fa-solid ${opt.icon}`}></i> {opt.label}
                    </button>
                  ))}
                </div>
              )}

              {msg.type === "input" && !msg.disabled && (
                <form className="chat-input-area" onSubmit={handleFormSubmit}>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Tu Nombre *"
                    required
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  />
                  <input
                    type="email"
                    className="form-input"
                    placeholder="Correo Corporativo *"
                    required
                    value={formData.correo}
                    onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
                  />
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Nombre de Empresa (Opcional)"
                    value={formData.empresa}
                    onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                  />
                  <input
                    type="tel"
                    className="form-input"
                    placeholder="WhatsApp / Teléfono *"
                    required
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                  />
                  <textarea
                    className="form-input"
                    placeholder="Detalles breves (Opcional)"
                    rows={2}
                    value={formData.detalles}
                    onChange={(e) => setFormData({ ...formData, detalles: e.target.value })}
                  />
                  <button type="submit" className="form-submit" style={{ width: 'fit-content' }}>
                    Confirmar Datos <i className="fa-solid fa-check"></i>
                  </button>
                </form>
              )}

              {msg.type === "action" && (
                <button 
                  onClick={sendToWhatsApp}
                  className="form-submit" 
                  style={{ width: 'fit-content', marginTop: '12px', background: '#25D366' }}
                >
                  <i className="fa-brands fa-whatsapp" style={{ marginRight: '8px' }}></i> {msg.text}
                </button>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {isTyping && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="chat-typing"
          >
            <span></span><span></span><span></span>
          </motion.div>
        )}
      </div>
    </div>
  );
}

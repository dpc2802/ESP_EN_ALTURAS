const fs = require('fs');
let file = 'src/app/page.js';
let text = fs.readFileSync(file, 'utf8');

const faqComponent = `
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
              className={\`faq-item \${openIndex === i ? 'open' : ''}\`}
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
                <i className={\`fa-solid fa-chevron-down\`} style={{ 
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
`;

text = text.replace('/* ── Risk Analysis Section ── */', faqComponent + '\n/* ── Risk Analysis Section ── */');

text = text.replace('<RiskAnalysisSection />', '<FAQSection />\n        <RiskAnalysisSection />');

fs.writeFileSync(file, text);

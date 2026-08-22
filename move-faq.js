const fs = require('fs');

let file = 'src/app/page.js';
let text = fs.readFileSync(file, 'utf8');

// 1. Move <FAQSection /> below <PortfolioTeaser />
text = text.replace(/<FAQSection \/>\s*<RiskAnalysisSection \/>\s*<PortfolioTeaser \/>/, '<RiskAnalysisSection />\n        <PortfolioTeaser />\n        <FAQSection />');

// 2. Change FAQSection styling for a darker, more premium look
const oldFaqRegex = /<section className="faq-section" style={{ padding: '80px 0', background: '#f8f9fc' }}>[\s\S]*?(?=<\/section>\s*\);\s*})/m;

const newFaqContent = `<section className="faq-section" style={{ padding: '100px 0', background: 'var(--navy)' }}>
      <div className="wrap">
        <motion.div
          className="text-center"
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '50px' }}
        >
          <span className="about-tag" style={{ border: '1px solid rgba(255,255,255,0.2)', color: '#fff', background: 'rgba(255,255,255,0.05)' }}>06. FAQ</span>
          <h2 style={{ color: '#fff', fontSize: '36px', marginTop: '20px' }}>Preguntas Corporativas Frecuentes</h2>
        </motion.div>

        <div className="faq-list" style={{ maxWidth: '800px', margin: '0 auto' }}>
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={\`faq-item \${openIndex === i ? 'open' : ''}\`}
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
                <i className={\`fa-solid fa-chevron-down\`} style={{ 
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
      </div>`;

text = text.replace(oldFaqRegex, newFaqContent);
fs.writeFileSync(file, text);

const fs = require('fs');

let file = 'src/app/page.js';
let text = fs.readFileSync(file, 'utf8');

const oldMarquee = /function CompaniesMarquee\(\) \{[\s\S]*?\}\s*<\/div>\s*\);\s*\}/;

const newTrustedSection = `function CompaniesMarquee() {
  const [ref, inView] = useInView(0.1);
  const companies = [
    { name: "Metro de Medellín", icon: "fa-train-subway", desc: "Infraestructura de Transporte" },
    { name: "Viva de La Ceja", icon: "fa-building", desc: "Complejo Comercial" },
    { name: "Colanta", icon: "fa-industry", desc: "Industria Alimenticia" },
    { name: "Jardín Botánico", icon: "fa-leaf", desc: "Patrimonio Ecológico" }
  ];

  return (
    <section style={{ padding: '80px 0', background: 'linear-gradient(to bottom, #f4f6f8, #ffffff)', position: 'relative', overflow: 'hidden' }}>
      {/* Subtle top border glow */}
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', height: '2px', background: 'linear-gradient(90deg, transparent, rgba(243,107,34,0.5), transparent)' }} />
      
      <div className="wrap">
        <motion.div
          ref={ref}
          variants={stagger(0.15)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          style={{ textAlign: 'center' }}
        >
          <motion.span variants={fadeUp} style={{ display: 'inline-block', padding: '6px 16px', background: 'rgba(243,107,34,0.1)', color: 'var(--orange)', borderRadius: '20px', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '24px' }}>
            Nuestro Respaldo
          </motion.span>
          <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-head)', fontWeight: 900, color: 'var(--navy)', marginBottom: '60px', textTransform: 'uppercase' }}>
            Gigantes que confían en <span style={{ color: 'var(--orange)' }}>Nuestra Calidad</span>
          </motion.h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {companies.map((c, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                style={{
                  background: '#fff',
                  border: '1px solid rgba(0,0,0,0.05)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                  borderRadius: '24px',
                  padding: '40px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  cursor: 'default'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(243,107,34,0.15)';
                  e.currentTarget.style.borderColor = 'rgba(243,107,34,0.3)';
                  e.currentTarget.querySelector('.icon-wrap').style.background = 'var(--orange)';
                  e.currentTarget.querySelector('.icon-wrap').style.color = '#fff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.03)';
                  e.currentTarget.style.borderColor = 'rgba(0,0,0,0.05)';
                  e.currentTarget.querySelector('.icon-wrap').style.background = 'rgba(11,29,53,0.04)';
                  e.currentTarget.querySelector('.icon-wrap').style.color = 'var(--navy)';
                }}
              >
                <div 
                  className="icon-wrap"
                  style={{ width: '70px', height: '70px', borderRadius: '50%', background: 'rgba(11,29,53,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', color: 'var(--navy)', fontSize: '28px', transition: 'all 0.4s ease' }} 
                >
                  <i className={\`fa-solid \${c.icon}\`}></i>
                </div>
                <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-head)', fontWeight: 900, color: 'var(--navy)', margin: '0 0 10px 0', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{c.name}</h3>
                <p style={{ margin: 0, fontSize: '14px', color: '#666', textAlign: 'center', fontWeight: 500 }}>{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}`;

text = text.replace(oldMarquee, newTrustedSection);

fs.writeFileSync(file, text);

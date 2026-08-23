export const metadata = {
  title: 'Términos y Condiciones | Especialistas en Alturas SAS',
  description: 'Términos y condiciones de prestación de servicios de Especialistas en Alturas SAS.',
};

export default function TerminosYCondiciones() {
  return (
    <main style={{ padding: '150px 20px 80px', maxWidth: '800px', margin: '0 auto', color: 'var(--navy)', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '36px', fontWeight: 900, marginBottom: '30px', color: 'var(--navy)', fontFamily: 'var(--font-head)' }}>
        TÉRMINOS Y CONDICIONES DE SERVICIO
      </h1>
      
      <div style={{ lineHeight: '1.8', fontSize: '16px' }}>
        <p style={{ marginBottom: '20px' }}>
          Al contratar los servicios de <strong>Especialistas en Alturas S.A.S.</strong>, el cliente acepta los siguientes términos y condiciones de operación, diseñados para garantizar la seguridad de todas las partes bajo el marco de la Resolución 4272 de 2021.
        </p>

        <h3 style={{ fontSize: '20px', fontWeight: 700, margin: '30px 0 15px', color: 'var(--orange)' }}>1. Visitas Técnicas y Cotizaciones</h3>
        <p style={{ marginBottom: '20px' }}>
          Toda ejecución de obra está sujeta a una visita técnica previa obligatoria. Las cotizaciones emitidas tienen una validez de 15 días calendario. Nos reservamos el derecho de modificar la cotización si durante la ejecución se descubren riesgos no declarados por el cliente o vicios ocultos en la infraestructura.
        </p>

        <h3 style={{ fontSize: '20px', fontWeight: 700, margin: '30px 0 15px', color: 'var(--orange)' }}>2. Permisos y Responsabilidad del Cliente</h3>
        <p style={{ marginBottom: '20px' }}>
          El cliente debe garantizar el acceso a las instalaciones en las fechas acordadas y gestionar los permisos de administración necesarios. Así mismo, el cliente es responsable de aislar las zonas de peligro en tierra durante la ejecución de los trabajos en altura.
        </p>

        <h3 style={{ fontSize: '20px', fontWeight: 700, margin: '30px 0 15px', color: 'var(--orange)' }}>3. Cumplimiento de SG-SST</h3>
        <p style={{ marginBottom: '20px' }}>
          Especialistas en Alturas S.A.S. ejecutará todas sus labores bajo estrictos protocolos de Sistema de Gestión de Seguridad y Salud en el Trabajo. Nos reservamos el derecho a suspender cualquier obra si las condiciones climáticas o del entorno comprometen la integridad de nuestro personal certificado.
        </p>

        <h3 style={{ fontSize: '20px', fontWeight: 700, margin: '30px 0 15px', color: 'var(--orange)' }}>4. Garantías</h3>
        <p style={{ marginBottom: '20px' }}>
          Las garantías sobre los trabajos realizados (pintura, impermeabilización, instalación de líneas de vida) serán especificadas en el contrato individual de cada obra. Las líneas de vida requieren una inspección anual obligatoria para mantener su garantía de certificación.
        </p>
        
        <p style={{ marginTop: '40px', fontSize: '14px', color: '#666' }}>
          <em>Última actualización: Agosto de 2026</em>
        </p>
      </div>
    </main>
  );
}

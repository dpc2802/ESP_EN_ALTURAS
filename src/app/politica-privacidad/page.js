export const metadata = {
  title: 'Política de Privacidad | Especialistas en Alturas SAS',
  description: 'Política de privacidad y tratamiento de datos personales de Especialistas en Alturas SAS.',
};

export default function PoliticaPrivacidad() {
  return (
    <main style={{ padding: '150px 20px 80px', maxWidth: '800px', margin: '0 auto', color: 'var(--navy)', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '36px', fontWeight: 900, marginBottom: '30px', color: 'var(--navy)', fontFamily: 'var(--font-head)' }}>
        POLÍTICA DE PRIVACIDAD Y TRATAMIENTO DE DATOS
      </h1>
      
      <div style={{ lineHeight: '1.8', fontSize: '16px' }}>
        <p style={{ marginBottom: '20px' }}>
          De acuerdo con lo establecido en la Ley Estatutaria 1581 de 2012 y el Decreto 1377 de 2013 en Colombia, 
          <strong> Especialistas en Alturas S.A.S.</strong> garantiza la privacidad y seguridad de los datos personales de nuestros clientes, proveedores y empleados.
        </p>

        <h3 style={{ fontSize: '20px', fontWeight: 700, margin: '30px 0 15px', color: 'var(--orange)' }}>1. Finalidad de la recolección de datos</h3>
        <p style={{ marginBottom: '20px' }}>
          Los datos personales suministrados a través de nuestros formularios de contacto, WhatsApp o correo electrónico serán utilizados única y exclusivamente para:
        </p>
        <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
          <li>Gestionar cotizaciones y servicios solicitados.</li>
          <li>Enviar información técnica, comercial o legal relevante para sus proyectos.</li>
          <li>Dar cumplimiento a obligaciones contractuales y regulatorias (Res. 4272/2021).</li>
        </ul>

        <h3 style={{ fontSize: '20px', fontWeight: 700, margin: '30px 0 15px', color: 'var(--orange)' }}>2. Derechos de los titulares</h3>
        <p style={{ marginBottom: '20px' }}>
          Como titular de la información, usted tiene derecho a conocer, actualizar, rectificar y solicitar la eliminación de sus datos personales de nuestras bases de datos en cualquier momento.
        </p>

        <h3 style={{ fontSize: '20px', fontWeight: 700, margin: '30px 0 15px', color: 'var(--orange)' }}>3. Contacto para solicitudes</h3>
        <p style={{ marginBottom: '20px' }}>
          Para ejercer sus derechos, puede comunicarse directamente con nosotros:<br/>
          <strong>Correo electrónico:</strong> losespecialistasenalturas@gmail.com<br/>
          <strong>Teléfono:</strong> 305 343 9984<br/>
          <strong>Representante Legal:</strong> Hans Gutiérrez Baena
        </p>
        
        <p style={{ marginTop: '40px', fontSize: '14px', color: '#666' }}>
          <em>Última actualización: Agosto de 2026</em>
        </p>
      </div>
    </main>
  );
}

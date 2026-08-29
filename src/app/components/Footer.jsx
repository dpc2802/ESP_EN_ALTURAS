
"use client";
import Image from "next/image";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer-pro">
      <div className="footer-overlay"></div>
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-col-brand">
            <div className="footer-brand">
              <Link href="/">
                <Image src="/assets/logo-premium.png" alt="Logo Especialistas en Alturas" className="footer-logo" width={320} height={96} />
              </Link>
            </div>
            <p className="footer-desc">
              Líderes en trabajos seguros de alto riesgo. Garantizamos el estricto cumplimiento de la normativa vigente (Res. 4272 de 2021) en todas nuestras operaciones y diseños estructurales.
            </p>
            <div className="footer-socials">
              <a href="https://wa.me/573053439984" target="_blank" rel="noreferrer"><i className="fa-brands fa-whatsapp"></i></a>
              <a href="https://www.facebook.com/losespecialistasenalturas/" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook"></i></a>
              <a href="https://www.instagram.com/especialistas_en_alturas_sas?utm_source=qr&igsh=anU4cDV3OGZ0dnNz" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
            </div>
          </div>
          
          <div className="footer-col">
            <div className="footer-title">Nuestros Servicios</div>
            <ul className="footer-links">
              <li><Link href="/servicios/estructuras-metalicas"><i className="fa-solid fa-angle-right"></i> Estructuras Metálicas</Link></li>
              <li><Link href="/servicios/trabajos-en-fachadas"><i className="fa-solid fa-angle-right"></i> Trabajos en Fachadas</Link></li>
              <li><Link href="/servicios/lineas-de-vida"><i className="fa-solid fa-angle-right"></i> Líneas de Vida y Anclajes</Link></li>
              <li><Link href="/servicios/trabajos-en-cubiertas"><i className="fa-solid fa-angle-right"></i> Trabajos en Cubiertas</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <div className="footer-title">Contacto Directo</div>
            <ul className="footer-contact-list">
              <li>
                <i className="fa-solid fa-user-tie"></i>
                <span><strong>Hans Gutiérrez Baena</strong><br/>Representante Legal</span>
              </li>
              <li>
                <i className="fa-solid fa-envelope"></i>
                <a href="mailto:losespecialistasenalturas@gmail.com">losespecialistasenalturas@gmail.com</a>
              </li>
              <li>
                <i className="fa-solid fa-phone"></i>
                <a href="tel:+573053439984">305 343 9984</a>
              </li>
              <li>
                <i className="fa-solid fa-location-dot"></i>
                <span>Medellín, Colombia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Especialistas en Alturas S.A.S. Todos los derechos reservados.</p>
          <div className="footer-bottom-links">
            <Link href="/politica-privacidad">Política de Privacidad</Link>
            <span className="separator">|</span>
            <Link href="/terminos-y-condiciones">Términos y Condiciones</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

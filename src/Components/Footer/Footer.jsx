import styles from '../Footer/Footer.module.css' // Importa las clases del módulo CSS

function Footer() {
  return (
    <footer className={styles.site_footer}>
      {/* Línea Horizontal */}
      <hr className={styles.site_footer_hr} />

      {/* Texto en el Pie de Página */}
      <div className={styles.site_footer_text}>
        <p>&copy;2021 Nadine Coelho | Todos los derechos reservados</p>
      </div>

      {/* Enlaces en el Pie de Página */}
      <ul className={styles.footer_links}>
        <li>
          <a href="#">Inicio</a>
        </li>
        <li>
          <a href="#">Acerca de</a>
        </li>
        <li>
          <a href="#">Servicios</a>
        </li>
        <li>
          <a href="#">Equipo</a>
        </li>
        <li>
          <a href="#">Contacto</a>
        </li>
      </ul>

      {/* Iconos de Redes Sociales */}
      <ul className={styles.social_icons}>
        <li className={styles.social_icons_title}>Síguenos:</li>
        <li>
          <a href="#" className={styles.social_icons_a}>
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
        </li>
        <li>
          <a href="#" className={styles.social_icons_a}>
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
        </li>
        <li>
          <a href="#" className={styles.social_icons_a}>
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </li>
        <li>
          <a href="#" className={styles.social_icons_a}>
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer

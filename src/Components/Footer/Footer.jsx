import styles from "../Footer/footer.module.css"
import {NavLink} from "react-router-dom"
function Footer() {
  return (
  <div>
    <footer className={styles.footer}>
  <div className={styles.container}>
    <div className={styles.row}>
      <div className={styles['footer-col']}>
        <h4>The Next Page</h4>
        <ul>
        <NavLink className={styles.NavLink} to="/aboutus">
          <li><a href="#">Sobre Nosotros</a></li>
          </NavLink>       
          <NavLink className={styles.NavLink} to="/privacy-policy">
          <li><a href="#">Politica de privacidad</a></li>
          </NavLink>
          <NavLink className={styles.NavLink} to="/faq">
          <li><a href="#">Preguntas frequentes</a></li>
          </NavLink>
        </ul>
      </div>
      <div className={styles['footer-col']}>
        <h4>Ayuda</h4>
        <ul>          
          <li><a href="#">Devoluciones</a></li>
          <li><a href="#">Estatus de mi orden</a></li>
          <li><a href="#">Opciones de pago</a></li>
        </ul>
      </div>
      <div className={styles['footer-col']}>
        <h4>online shop</h4>
        <ul>
          <li><a href="#">Catálogo</a></li>
          <li><a href="#">Secuelas</a></li>
          <li><a href="#">Novedades</a></li>
          <li><a href="#">Redomendados</a></li>
        </ul>
      </div>
      <div className={styles['footer-col']}>
        <h4>follow us</h4>
        <div className={styles['social-links']}>
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </div>
  </div>
</footer>

  </div>
  )
}

export default Footer

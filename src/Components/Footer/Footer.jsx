import styles from "../Footer/footer.module.css"
import {NavLink} from "react-router-dom"
import {
 
  Facebook,
  Instagram,
  
  Mail,
  Ping,
  
  Twitter,
  Youtube,
} from '../../utils/Icons'
function Footer() {
  return (
  
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
        <NavLink to="/faq" className={styles.NavLink}>          
          <li><a href="#">Devoluciones</a></li>
        </NavLink>
        <NavLink to="/faq" className={styles.NavLink}> 
          <li><a href="#">Opciones de pago</a></li>
          </NavLink>
        </ul>
      </div>
      <div className={styles['footer-col']}>
        <h4>online shop</h4>
        <ul>
        <NavLink to="/catalogue" className={styles.NavLink}>
          <li><a href="#">Catálogo</a></li>
          </NavLink>
          <NavLink to="/catalogue"  className={styles.NavLink}>
          <li><a href="#">Secuelas</a></li>
          </NavLink>
          <NavLink to="/novedades" className={styles.NavLink}>
          <li><a href="#">Novedades</a></li>
          </NavLink>
          <NavLink to="/promociones"  className={styles.NavLink}>
          <li><a href="#">Promociones</a></li>
          </NavLink>
        </ul>
      </div>
      <div className={styles['footer-col']}>
      <div className={styles.socialMedia}>
          <ul
            style={{
              display: 'flex',
              flexDirection: 'row',
              position: 'relative',
              gap: '10px',
              paddingRight: '10px',
              marginBlock: '0',
            }}
          >
            <li>
              <Mail width={'25'} />
            </li>
            <li>
              <Ping width={'25'} />
            </li>
            <li>
              <Facebook width={'25'} />
            </li>
            <li>
              <Twitter width={'25'} />
            </li>
            <li>
              <Instagram width={'25'} />
            </li>
            <li>
              <Youtube width={'25'} />
            </li>
          </ul>
        </div>
        </div>
      </div>
  </div> 
</footer>
 
  )
}

export default Footer

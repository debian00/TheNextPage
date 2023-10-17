// import React from 'react';
import Contacts from './Contacts/Contatcs'
import style from './aboutUsView.module.css'
import imagenAbout from '../../assets/imgaboutus/AboutImg.png'

const AboutUs = () => {
  return (
    <div className={style.about}>
      <div className={`row ${style.content}`}>
        <div className={`col-4 `}>
          <img src={imagenAbout} alt="" />
        </div>
        <div className={`col-8 ${style.conten2}`}>
        <h2 style={{fontWeight: 'bold', justifyContent:'center', display:"flex", marginTop:"1rem"}}>
               SOBRE NOSOTROS
              </h2>
          <p className={style.texto}>
            The Next Page es una librería en línea apasionada por la literatura,
            comprometida con conectar amantes de la lectura con historias
            inspiradoras y conocimientos profundos.Nuestra misión es conectar a
            amantes de la lectura con historias inspiradoras y conocimientos
            profundos. Creemos que los libros tienen el poder de transformar
            vidas, abrir mentes y ampliar horizontes. En The Next Page, no solo
            vendemos libros, sino que también fomentamos un sentido de comunidad
            en torno a la literatura. 
          </p>
          <p className={style.texto}>
            The Next Page es un lugar donde la pasión por la literatura se
            combina con el compromiso de brindar a nuestros clientes una
            experiencia de lectura inigualable. Nuestra librería en línea es el
            hogar de historias inspiradoras, conocimientos profundos y una
            comunidad de amantes de la lectura que comparten la misma pasión.
            Nos enorgullece ser su destino literario de confianza y esperamos
            seguir inspirándolos a medida que exploran las páginas de los libros
            que ofrecemos. ¡Únase a nosotros en esta apasionante aventura
            literaria!
          </p>
        </div>
        {/* <div className={`col-4 ${style.card}`}>
         
        </div> */}
        <div className={`col-12 `}>
          <Contacts />
        </div>
      </div>
    </div>
  )
}

export default AboutUs

// import React from 'react';
import style from './aboutUsView.module.css'

const AboutUs = () => {
  return (
  

    <div className={style.about}>
    <h2 className={style.title}>The Next Page</h2>
    <div className={`row ${style.content}`} >
      <div className={`col-12 ${style.card}`} >
        <p className={style.texto}>The Next Page es una librería en línea apasionada por la literatura, comprometida con conectar amantes de la lectura con historias inspiradoras y conocimientos profundos.</p>
        <p className={style.texto}>Nacimos de la pasión compartida por la lectura, creando una plataforma global para explorar y adquirir una amplia gama de libros.</p>
        <p className={style.texto}>Creemos que los libros enriquecen nuestras vidas y amplían horizontes, ofreciendo una selección cuidadosamente curada en diversos géneros y una comunidad de lectores apasionados.</p>
        <p className={style.texto}>Nuestra plataforma es segura y fácil de navegar, colaboramos con editores y autores destacados, y te invitamos a unirte a nuestra comunidad de lectores. ¡Descubre tu próxima aventura literaria en The Next Page!</p>
      </div>
      <div className={`col-12 ${style.card}`} >
        <p className={style.texto}>The Next Page es una librería en línea apasionada por la literatura, comprometida con conectar amantes de la lectura con historias inspiradoras y conocimientos profundos.</p>
        <p className={style.texto}>Nacimos de la pasión compartida por la lectura, creando una plataforma global para explorar y adquirir una amplia gama de libros.</p>
        <p className={style.texto}>Creemos que los libros enriquecen nuestras vidas y amplían horizontes, ofreciendo una selección cuidadosamente curada en diversos géneros y una comunidad de lectores apasionados.</p>
        <p className={style.texto}>Nuestra plataforma es segura y fácil de navegar, colaboramos con editores y autores destacados, y te invitamos a unirte a nuestra comunidad de lectores. ¡Descubre tu próxima aventura literaria en The Next Page!</p>
      </div>
    </div>
  </div>
  
  );
}

export default AboutUs;

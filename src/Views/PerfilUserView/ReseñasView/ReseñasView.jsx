// import React from 'react'
import style from './reseñasview.module.css'

const ReseñasView = () => {
  return (
    <div className={style.container}>
      <div className={style.postCard}>
        <textarea placeholder="¿Danos tu opinion sobre el libro?"></textarea>
        <hr />
        <h3>Nombre del Libro</h3>
        <div id="first" className={style.buttonRow}>
          ⭐⭐⭐⭐⭐
        </div>
        <button className={style.post}>Post</button>
      </div>

      <div className={style.postCard}>
        <textarea placeholder="¿Danos tu opinion sobre el libro?"></textarea>
        <hr />
        <h3>Nombre del Libro</h3>
        <div id="first" className={style.buttonRow}>
          ⭐⭐⭐⭐⭐
        </div>
        <button className={style.post}>Post</button>
      </div>
      
      <div className={style.postCard}>
        <textarea placeholder="¿Danos tu opinion sobre el libro?"></textarea>
        <hr />
        <h3>Nombre del Libro</h3>
        <div id="first" className={style.buttonRow}>
          ⭐⭐⭐⭐⭐
        </div>
        <button className={style.post}>Post</button>
      </div>

      <div className={style.postCard}>
        <textarea placeholder="¿Danos tu opinion sobre el libro?"></textarea>
        <hr />
        <h3>Nombre del Libro</h3>
        <div id="first" className={style.buttonRow}>
          ⭐⭐⭐⭐⭐
        </div>
        <button className={style.post}>Post</button>
      </div>
    </div>
  )
}

export default ReseñasView

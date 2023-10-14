// import React from 'react';
import style from './aboutUsView.module.css'

const AboutUs = () => {
  return (
    <div className={style.about}>
      <h2 className={style.title}>The Next Page</h2>
      <div className={`row ${style.content}`}>
        <div className={`col-12 ${style.card}`}>
          <p className={style.texto}>
            The Next Page es una librería en línea apasionada por la literatura,
            comprometida con conectar amantes de la lectura con historias
            inspiradoras y conocimientos profundos.
          </p>
        </div>
        <div className={`col-12 ${style.card}`}>
          <form action="#">
            <label htmlFor="customerName">
              NOMBRE <em>&#x2a;</em>
            </label>
            <input
              id="customerName"
              name="customerName"
              required=""
              type="text"
            />
            <label htmlFor="customerEmail">
              EMAIL <em>&#x2a;</em>
            </label>
            <input
              id="customerEmail"
              name="customerEmail"
              required=""
              type="email"
            />
            <label htmlFor="customerPhone">TELÉFONO</label>
            <input
              id="customerPhone"
              name="customerPhone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              type="tel"
            />
            <label htmlFor="orderNumber">NÚMERO DE ORDEN</label>
            <input id="orderNumber" name="orderNumber" type="text" />
            <label htmlFor="customerNote">
              TU MENSAJE: <em>&#x2a;</em>
            </label>
            <textarea
              id="customerNote"
              name="customerNote"
              required=""
              rows="4"
            ></textarea>
            <h3>Por favor proporciona toda la informacion necesaria.</h3>

            <button id="customerOrder">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AboutUs

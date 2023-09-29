// import React from 'react'
import principal from '../../assets/imghome/banner.jpg'
import novedades from '../../assets/imghome/novedades.png'
import tendencias from '../../assets/imghome/tendencias.png'
import CardsTop3View from './CardsTop3View/CardsTop3View'
import style from './HomeView.module.css'

const HomeView = () => {
  return (
    <div>
      {/* Imagen principal del Home */}
      <img src={principal} alt="" style={{ width: '100%', height: '60vh' }} />
      {/* Seccion de Novedades y Tendencias */}
      <section>
        <div style={{ textAlign: 'left' }}>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>
            Descubre Harry Potter
          </h3>
          <p style={{ color: '#92779E' }}>
            Embárcate en las aventuras de Harry, Hermione y Ron en el mundo
            mágico de Hogwarts.
          </p>
        </div>
      </section>
    </div>
  )
}
export default HomeView

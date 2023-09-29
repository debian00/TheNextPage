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
      <div className="row d-flex justify-content-center">
        <h2 className={style.subTitulo}>Lo mas destacado</h2>
        <div className={`col-5 m-5 ${style.containerImages}`}>
          <div className={`card text-bg-dark ${style.imagesNovTen}`}>
            <img src={novedades} className="card-img" alt="..." />
          </div>
        </div>
        <div className={`col-5 m-5 ${style.containerImages}`}>
          <div className={`card text-bg-dark ${style.imagesNovTen}`}>
            <img src={tendencias} className="card-img" alt="..." />
          </div>
        </div>
      </div>
      {/* Seccion de top 3 */}
      <div className="row d-flex justify-content-center mb-5">
        <div className={style.separador}></div>
        <h2 className={style.subTitulo}>Top 3 libros mas buscado del mes</h2>
        <div className="col-4">
          <CardsTop3View />
        </div>
        <div className="col-4">
          <CardsTop3View />
        </div>
        <div className="col-4">
          <CardsTop3View />
        </div>
      </div>
      {/* Seccion libros de interes */}
      <div className="row d-flex justify-content-center mb-5">
        <div className={style.separador}></div>
        <h2 className={style.subTitulo}>Libros que quizas te interesan</h2>
        <div className="col-2 m-2">
          <CardsTop3View />
        </div>
        <div className="col-2 m-2">
          <CardsTop3View />
        </div>
        <div className="col-2 m-2">
          <CardsTop3View />
        </div>
        <div className="col-2 m-2">
          <CardsTop3View />
        </div>
        <div className="col-2 m-2">
          <CardsTop3View />
        </div>
      </div>
    </div>
  )
}
export default HomeView

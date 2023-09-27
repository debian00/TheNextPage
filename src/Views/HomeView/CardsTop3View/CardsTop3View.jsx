// import React from 'react'
import style from './Cardstop3.module.css'

const CardsTop3View = () => {
  return (
    <div className="d-flex justify-content-center">
      <div style={{ width: '15rem', padding: '0%', margin: '0%' }}>
        <div className={style.cardsCont}>
          <div className={style.book}>
            <div>
              <p className={style.parrafo}></p>
            </div>
            <div className={style.cover}>
              <div className="row-1">
                <div className="col-12 justify-content-center d-flex"></div>
                <div className="col-12">
                  <h1 className={style.text}></h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.infoLibro}>
          <ul className="list-group list-group-flush">
            <h3 style={{ paddingTop: '5px' }}>Nombre del Libro</h3>
            <li className="list-group-item color-blue justify-content-center d-flex">
              ⭐⭐⭐⭐⭐
            </li>
            <li className="list-group-item color-blue justify-content-center d-flex">
              $10.000{' '}
            </li>
            <button
              type="button"
              className="btn btn-success d-flex align-items-center justify-content-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                fill="currentColor"
                className="bi bi-journal-album me-2"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 4a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-5zm1 7a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3z"></path>
                <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"></path>
                <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"></path>
              </svg>
              Detalle
            </button>

            <button type="button" className="btn btn-primary mt-1 mb-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                fill="currentColor"
                className="bi bi-bag-fill me-2"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"></path>
              </svg>
              Comprar
            </button>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CardsTop3View

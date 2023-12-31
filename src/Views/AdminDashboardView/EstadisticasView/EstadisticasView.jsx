// import React from 'react'

import Bars from './GraficoBarrasView/GraficoBarrasView'
import LinesChart from './GraficoLinealView/GraficoLinealView'
import Pies from './GraficoTortaView/GraficoTortaView'
import Widget from './Balance/Balance'
import style from './estadisticas.module.css'

const EstadisticasView = () => {
  return (
    <div>
      {/* Aquí las gráficas (un componente por cada uno). */}
      <h1
        className=" text-center fw-bold lh-base"
        style={{
          fontFamily: 'Avenir, sans-serif',
          backgroundColor: '#6F5475',
          borderColor: '#6F5475',
          color: '#ffffff',
        }}
      >
        Mis métricas
      </h1>
      <div className={style.widgets}>
        <Widget type="user" />
        <Widget type="order" />
        <Widget type="earning" />
        <Widget type="balance" />
      </div>
      <div>
        <p className="m-2">
          <b>Ventas Mensuales </b>Gráfico de líneas
        </p>
        <div
          className="bg-light mx-auto px-2 border border-2 border-primary"
          style={{ width: '450px', height: '230px' }}
        >
          <LinesChart />
        </div>
      </div>
      <hr className="mt-3 mb-2" />
      <div>
        <p className="m-2">
          <b>Top 10 libros mas vendidos </b>Gráfico de barras
        </p>
        <div
          className="bg-light mx-auto px-2 border border-2 border-primary"
          style={{ width: '450px', height: '225px' }}
        >
          <Bars />
        </div>
      </div>
      <hr className="mt-3 mb-2" />
      <div>
        <p className="m-2">
          <b>Top 5 géneros más comunes que se encuentran en los libros. </b>
          Gráfico circular
        </p>
        <div
          className="bg-light mx-auto border border-2 border-primary"
          style={{ width: '450px', height: '250px' }}
        >
          <div style={{ width: '100%', height: '100%', padding: '10px 0' }}>
            <Pies />
          </div>
        </div>
      </div>
    </div>
  )
}

export default EstadisticasView

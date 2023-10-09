// import React from 'react'

import Bars from "./GraficoBarrasView/GraficoBarrasView"
import LinesChart from "./GraficoLinealView/GraficoLinealView"
import Pies from "./GraficoTortaView/GraficoTortaView"

const EstadisticasView = () => {
  return (
    <div>
            {/* Aquí las gráficas (un componente por cada uno). */}
            <h1 className=" text-center font-monospace fw-bold lh-base">Estadisticas The Next Page</h1>
            <div>
                <p className="m-2"><b>Ventas Mensuales </b>Gráfico de líneas</p>
                <div className="bg-light mx-auto px-2 border border-2 border-primary" style={{width:"450px", height:"230px"}}>
                    <LinesChart />
                </div>
            </div>
            <hr className="mt-3 mb-2"/>
            <div>
                <p className="m-2"><b>Top 10 libros mas vendidos </b>Gráfico de barras</p>
                <div className="bg-light mx-auto px-2 border border-2 border-primary" style={{width:"450px", height:"225px"}}>
                    <Bars />
                </div>
            </div>
            <hr className="mt-3 mb-2"/>
            <div>
                <p className="m-2"><b>Generos mas vendidos </b>Gráfico circular</p>
                <div className="bg-light mx-auto border border-2 border-primary" style={{width:"450px", height:"250px"}}>
                    <div style={{width:"100%", height:"100%", padding:"10px 0"}}>
                        <Pies />                       
                    </div>
                </div>
            </div>
        </div>
  )
}

export default EstadisticasView
// import React from 'react'
import { Suspense } from 'react'
import CardHome from '../../Components/CardHome/CardHome'
import principal from '../../assets/imghome/banner.jpg'
import style from './HomeView.module.css'
import Carrousel from './Carrousel/Carrousel'

const HomeView = () => {
  return (
    <div>
      {/* Imagen principal del Home */}
      <img src={principal} alt="" style={{ width: '100%', height: '60vh' }} />
      {/* Seccion de Novedades y Tendencias */}
      <Suspense fallback={<p>Loading</p>}>
        <section
          style={{
            paddingInline: '50px',
            paddingTop: '20px',
          }}
        >
          {/* <img
            src={harry}
            style={{
              width: '100%',
              height: '300px',
              objectFit: 'cover',
              objectPosition: 'center -150px',
            }}
          ></img> */}
          <div
            style={{
              marginTop: '20px',
              display: 'flex',
              flexDirection: 'column',
              padding: '20px',
              border: '2px solid rgb(215 215 215)',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <h3 style={{ margin: '0', fontSize: '22px', fontWeight: 'bold' }}>
                Descubre Harry Potter
              </h3>
              <p
                style={{
                  alignItems: 'center',
                  display: 'center',
                  textAlign: 'center',
                  margin: '0',
                }}
              >
                Ver mas
              </p>
            </div>
            <p style={{ color: '#92779E', textAlign: 'left' }}>
              Embárcate en las aventuras de Harry, Hermione y Ron en el mundo
              mágico de Hogwarts.
            </p>
            <CardHome books="Harry"></CardHome>
          </div>
        </section>
        <section style={{ paddingInline: '50px', paddingTop: '20px' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '20px',
              border: '2px solid rgb(215 215 215)',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <h3 style={{ margin: '0', fontSize: '22px', fontWeight: 'bold' }}>
                El señor de los anillos
              </h3>
              <p
                style={{
                  alignItems: 'center',
                  display: 'center',
                  textAlign: 'center',
                  margin: '0',
                }}
              >
                Ver mas
              </p>
            </div>
            <p style={{ color: '#92779E', textAlign: 'left' }}>
              Explora tierras lejanas, encuentra personajes inolvidables y vive
              aventuras inigualables en un mundo lleno de magia y peligro.
            </p>

            <CardHome books="Ani"></CardHome>
          </div>
        </section>
        <Carrousel></Carrousel>
        <section style={{ paddingInline: '50px', paddingTop: '20px' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '20px',
              border: '2px solid rgb(215 215 215)',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <h3 style={{ margin: '0', fontSize: '22px', fontWeight: 'bold' }}>
                Lo mejor de Gabriel Garcia Marquez
              </h3>
              <p
                style={{
                  alignItems: 'center',
                  margin: '0',
                  display: 'center',
                  textAlign: 'center',
                }}
              >
                Ver mas
              </p>
            </div>
            <p style={{ color: '#92779E', textAlign: 'left' }}>
              Explora tierras lejanas, encuentra personajes inolvidables y vive
              aventuras inigualables en un mundo lleno de magia y peligro.
            </p>

            <CardHome author="Gabriel García Márquez"></CardHome>
          </div>
        </section>
      </Suspense>
    </div>
  )
}
export default HomeView

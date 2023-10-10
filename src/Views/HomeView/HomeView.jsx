// import React from 'react'
import { Suspense } from 'react'
import CardHome from '../../Components/CardHome/CardHome'
import principal from '../../assets/imghome/THE NEXT PAGE.png'
import style from './HomeView.module.css'
import Carrousel from './Carrousel/Carrousel'

const HomeView = () => {
  return (
    <div style={{ background: '#f7f7f7' }}>
      {/* Imagen principal del Home */}

      <img
        src={principal}
        alt=""
        style={{
          width: '100%',
          height: '60vh',
          objectFit: 'cover',
          objectPosition: 'center 80%',
          position: 'relative',
        }}
      />
      {/* Seccion de Novedades y Tendencias */}
      <Suspense fallback={<p>Loading</p>}>
        <section
          style={{
            paddingInline: '50px',
            paddingTop: '20px',
          }}
        >
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
                Nuestras novedades!
              </h3>
              <p
                style={{
                  alignItems: 'center',
                  textAlign: 'center',
                  margin: '0',
                }}
              >
                Ver mas
              </p>
            </div>
            <p style={{ color: '#92779E', textAlign: 'left', width: '60%' }}>
              Aquí encontrarás las últimas tendencias, historias emocionantes y
              conocimientos que te inspirarán. Sumérgete en un mundo de
              descubrimientos literarios y deja que tu imaginación vuele alto.
            </p>
            <CardHome order="createdAtDesc"></CardHome>
          </div>
        </section>
        <section
          style={{
            paddingInline: '50px',
            paddingTop: '20px',
          }}
        >
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

            <CardHome author="J.R.R. Tolkien"></CardHome>
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

            <CardHome author="Gabriel Garc"></CardHome>
          </div>
        </section>
      </Suspense>
      <section className={style.triangle}></section>
      {/* <section
        className={style.triangleEnd}
        style={{ height: '70vh', background: '#95659f' }}
      >
        <div className={style.news}>
          <div className={style.letter}>
            <div>
              <h2>Suscribete a nuestro newsletter.</h2>
              <p>
                Entérate antes de nuestros descuentos, novedades y artículos de
                interés!
              </p>
            </div>
            <div></div>
            <div></div>
          </div>
          <div></div>
        </div>
      </section> */}
    </div>
  )
}
export default HomeView

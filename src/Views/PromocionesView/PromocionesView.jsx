// import React from 'react'
import style from './promocionesview.module.css'
import landind1 from '../../assets/imgPromo/images.jpg'
import landing2 from '../../assets/imgPromo/images2.jpg'
import landing3 from '../../assets/imgPromo/images3.jpg'
import landing4 from '../../assets/imgPromo/images4.jpg'
import landing5 from '../../assets/imgPromo/images5.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {getAllBooksOffer } from '../../redux/actions/actionGet'
import Card from '../../Components/CardIndividual/Card'

const PromocionesView = () => {
  const allBooks = useSelector((state) => state.books)
  console.log('Libros', allBooks);
  const filtrado = allBooks?.rows?.filter((ele) => ele.forSale === true);

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllBooksOffer(true))
  }, [])
  return (
    <div>
      <section className={style.select}>
        <div className={style.textOverlay}>
          <h1 className={style.text}>Disfruta de nuestras </h1>
          <h2 className={style.text2}>Promociones</h2>
          <hr></hr>
        </div>
        <img className={style.ima} name="S02" src={landing2} alt="" />
        <img className={style.ima} name="S05" src={landing5} alt="" />
        <img name="S04" src={landing4} alt="" />
        <img name="S01" src={landind1} alt="" />
        <img className={style.ima} name="S03" src={landing3} alt="" />
      </section>
      <div>
        <h1 style={{ marginTop: '3rem', fontSize: '52px', fontWeight: 'bold', justifyContent:'center', display:'flex' }} >¡Oferta Especial!</h1>
        <h1 style={{ marginTop: '0rem', fontSize: '40px', fontWeight: 'bold', justifyContent:'center', display:'flex' }} >¡Descubre Nuestros Libros con Descuento del 25%!</h1>
        <div className={style.cardCont}>
          {filtrado?.map((ele) => (
            <div key={ele.id} className={style.individualCard}>
              <Card
                title={ele.title}
                image={ele.images[0]}
                price={ele.sellPrice}
                id={ele.id}
                author={ele.author}
                availability={ele.availability}
                forSale={ele.forSale}
              ></Card>
               <div className={style.buttonsEdit}>
                {/* Quitar oferta */}
                <button
                  type="button"
                  className={style.cardBtn}
                >
                  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z"></path>
                  <path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path>
                  <path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path>
                  <path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z"></path>
                </svg>
                </button> 

                {/* Dar oferta */}
                {/* <button
                  type="button"
                  // onClick={(e) => handlePromocion(e, ele.id)}
                  className="btn btn-success"
                  style={{ marginLeft: '0.5rem' }}
                  disabled={ele.forSale}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-tags"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 2v4.586l7 7L14.586 9l-7-7H3zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2z"></path>
                    <path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1v5.086z"></path>
                  </svg>
                </button> */}
              </div> 
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PromocionesView

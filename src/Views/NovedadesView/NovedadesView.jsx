// import React from 'react'
import style from './novedadesView.module.css'
import landind1 from '../../assets/imgnovedades/dlb.png'
import landing2 from '../../assets/imgnovedades/dlb2.png'
import landing3 from '../../assets/imgnovedades/dlb3.png'
import landing4 from '../../assets/imgnovedades/dlb4.png'
import landing5 from '../../assets/imgnovedades/dlb5.png'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllBooksCopy } from '../../redux/actions/actionGet'
import Card from '../../Components/CardIndividual/Card'
import axios from 'axios'
import { showSuccessNotification } from '../../utils/Toast'

const NovedadesView = () => {
  const allBooks = useSelector((state) => state.books)

  const handleCart = async (e, id) => {
    e.preventDefault()
    const idUser = JSON.parse(localStorage.getItem('user'))
    const userId = idUser.id
    await axios.post(`/cart/add/${userId}`, { bookId: id })
    showSuccessNotification('¡Se añadio al carrito con exito!')

    console.log('Se guardo en el carrito')
  }
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllBooksCopy(1, 'averageScoreDesc'))
  }, [])
  return (
    <div>
      <section className={style.select}>
        <div className={style.textOverlay}>
          <h1 className={style.text}>Novedades </h1>

          <hr></hr>
        </div>
        <img className={style.ima} name="S02" src={landing2} alt="" />
        <img className={style.ima} name="S05" src={landing5} alt="" />
        <img name="S04" src={landing4} alt="" />
        <img name="S01" src={landind1} alt="" />
        <img className={style.ima} name="S03" src={landing3} alt="" />
      </section>
      <div>
        <h1
          style={{
            marginTop: '3rem',
            fontSize: '52px',
            fontWeight: 'bold',
            justifyContent: 'center',
            display: 'flex',
          }}
        >
          Top 10 libros mejor evaluados!
        </h1>
        <div className={style.cardCont}>
          {allBooks?.rows?.map((ele) => (
            <div key={ele.id} className={style.individualCard}>
              <Card
                title={ele.title}
                image={ele.images[0]}
                price={ele.sellPrice}
                id={ele.id}
                author={ele.author}
                availability={ele.availability}
              ></Card>
              <div
                style={{
                  position: 'absolute',
                  display: 'flex',
                  bottom: '20px',
                  width: '35%',
                  left: '10%',
                }}
              >
                
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  style={{ color: '#fdd835' }}
                  fill="currentColor"
                  className="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <p
                  style={{
                    padding: '5px',
                    paddingInline: '7px',
                    fontWeight: 'bold',
                    fontSize: '14px',
                  }}
                >
                  {ele.averageScore}
                  {'  '}
                </p>
              </div>
              <div className={style.buttonsEdit}>
                <button
                  type="button"
                  className={style.cardBtn}
                  onClick={(e) => handleCart(e, ele.id)}
                >
                  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z"></path>
                    <path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path>
                    <path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path>
                    <path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z"></path>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NovedadesView

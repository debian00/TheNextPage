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
import { Cart } from '../../utils/Icons'

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
            <div key={ele.id} className={style.card}>
              <Card
                title={ele.title}
                image={ele.images[0]}
                price={ele.sellPrice}
                id={ele.id}
                author={ele.author}
                availability={ele.availability}
              ></Card>
              <div
                onClick={(e) => handleCart(e, ele.id)}
                className={style.cart}
                style={{ zIndex: '20' }}
              >
                <Cart width={20}></Cart>
                <p>Agregar al carrito!</p>
              </div>
              <div
                style={{
                  position: 'absolute',
                  display: 'flex',
                  bottom: '20px',
                  width: '35%',
                  zIndex: '1',
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
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NovedadesView

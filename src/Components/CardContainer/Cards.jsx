/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom'
import { Cart } from '../../utils/Icons'
import {
  showErrorNotification,
  showSuccessNotification,
} from '../../utils/Toast'
import Card from '../CardIndividual/Card'
import style from './Cards.module.css'
import axios from 'axios'
import { cartAnonymous, postCart } from '../../redux/actions/actionPost'
import { useDispatch } from 'react-redux'
const Cards = ({ allBooks }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleCart = async (id) => {
    const isLoggedIn = localStorage.getItem('token')
    if (!isLoggedIn) {
      cartAnonymous(id, allBooks)
      showSuccessNotification('¡Se añadió al carrito con éxito!')
    } else {
      const idUser = JSON.parse(localStorage.getItem('user'))
      const userId = idUser.id
      dispatch(postCart(userId, id))
      showSuccessNotification('¡Se añadió al carrito con éxito!')
    }
    console.log('Se guardó en el carrito')
  }
  return (
    <div className={style.container}>
      {allBooks?.map((ele) => {
        return (
          <div key={ele.id} className={style.card}>
            <Card
              id={ele.id}
              image={ele.images[0]}
              title={ele.title}
              price={ele.sellPrice}
              author={ele.author}
              availability={ele.availability}
            />
            {ele.availability && (
              <div onClick={() => handleCart(ele.id)} className={style.cart}>
                <Cart width={20}></Cart>
                <p>Agregar al carrito!</p>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Cards

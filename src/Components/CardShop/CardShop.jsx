/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import style from './CardShop.module.css'
import { Trash } from '../../utils/Icons'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateQuantity } from '../../redux/actions/actionPatch'
import { deleteCart } from '../../redux/actions/actionDelete'

const CardShop = ({ title, image, quantity, price, id, author, userId }) => {
  const [newQuantity, setNewQuantity] = useState(quantity)
  const dispatch = useDispatch()

  const plusQuantity = () => {
    setNewQuantity(quantity + 1)
    dispatch(updateQuantity(userId, id, quantity + 1)) // Disparar acción de Redux para actualizar el carrito
  }

  const minusQuantity = () => {
    if (quantity > 1) {
      setNewQuantity(quantity - 1)
      dispatch(updateQuantity(userId, id, quantity - 1)) // Disparar acción de Redux para actualizar el carrito
    }
  }

  const deleteBook = () => {
    dispatch(deleteCart(userId, id))
  }

  return (
    <div
      style={{
        padding: '20px',
        paddingBottom: '0',
        maxHeight: '530px',
        width: '100%',
        boxShadow:
          '0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1 )',
        display: 'flex',
      }}
    >
      <div
        style={{
          display: 'flex',
          margin: 'auto 0',
          justifyContent: 'center',
          padding: '20px',
        }}
      >
        <img
          src={image}
          style={{
            width: '140px',
            height: '160px',
            objectFit: 'cover',
            borderRadius: '20px',
          }}
        />
      </div>
      <div className={style.title}>
        <div>
          <p
            style={{
              textAlign: 'left',
              marginBottom: '0',
              color: 'grey',
              fontFamily: 'sans-serif',
              marginTop: '5px',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
            }}
          >
            {title}
          </p>
          <p
            style={{
              textAlign: 'left',
              marginBottom: '0',
              color: 'grey',
              fontFamily: 'sans-serif',
            }}
          >
            Por{' '}
            <span
              style={{
                color: '#033d7b',
                fontFamily: "'Roboto'",
                fontSize: '16px',
                height: '0',
              }}
            >
              {author}
            </span>
          </p>
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <div>
            <p style={{ textAlign: 'center', margin: '0' }}>Precio:</p>
            <h3 style={{ textAlign: 'right', paddingBottom: '5px' }}>
              ${price}
            </h3>
          </div>
          <div>
            <p style={{ textAlign: 'center', margin: '0' }}>Cantidad:</p>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <button onClick={() => minusQuantity()}>Bajar</button>
              <p>{quantity}</p>
              <button onClick={() => plusQuantity()}>Subir</button>
            </div>
          </div>
        </div>
        <div className={style.trash} onClick={deleteBook}>
          <Trash width={25}></Trash>
        </div>
      </div>
    </div>
  )
}

export default CardShop

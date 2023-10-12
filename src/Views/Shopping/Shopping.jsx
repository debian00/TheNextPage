import CardShop from '../../Components/CardShop/CardShop'
import { Bag, Check } from '../../utils/Icons'
import style from './Shopping.module.css'
import { Trash } from './../../utils/Icons'
import { Link, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getCartUser } from './../../redux/actions/actionGet'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Shopping = () => {
  const { id } = useParams()
  const cartUser = useSelector((state) => state.cart)
  const [allCart, setAllCart] = useState([])

  // const allCart = useSelector((state) => state.cart)
  console.log(allCart)
  const priceTotal = () => {
    let price = 0
    allCart.map((ele) => {
      price += ele.price
    })
    return price
  }
  const dispatch = useDispatch()
  useEffect(() => {
    if (id) {
      dispatch(getCartUser(id))
    } else if (localStorage.getItem('cart')) {
      setAllCart(JSON.parse(localStorage.getItem('cart')))
    }
  }, [id, localStorage])

  useEffect(() => {
    if (id) {
      setAllCart(cartUser)
    }
  }, [cartUser])

  return (
    <div className={style.container}>
      <div className={style.cart}>
        <div className={style.buttons}>
          <button id={style.shop}>
            <Bag width={20} /> Seguir comprando
          </button>
          <button id={style.reset}>
            {' '}
            <Trash width={20}></Trash> Restablecer carrito
          </button>
        </div>
        {allCart?.map((ele) => {
          return (
            <div style={style.card} key={ele.id}>
              <CardShop
                userId={id}
                title={ele.book.title}
                price={ele.book.sellPrice}
                author={ele.book.author}
                image={ele.book.images[0]}
                id={ele.book.id}
                quantity={ele.quantity}
                isLocal={ele.isLocal}
                setAllCart={setAllCart}
              />
            </div>
          )
        })}
      </div>
      <div className={style.checkout}>
        <div className={style.price}>
          <h3
            style={{
              display: 'flex',
              textAlign: 'center',
              justifyContent: 'center',
              fontSize: '18px',
              marginBottom: '15px',
            }}
          >
            Resumen de Compra
          </h3>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <p>Subtotal</p>
            <p>{priceTotal()}</p>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <p>Impuesto:</p>
            <p>(10%)</p>
          </div>
          <div className={style.line}></div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <h3 style={{ textAlign: 'left' }}>Total: </h3>
            <h3>{Math.round(priceTotal() * 1.1)}</h3>
          </div>
        </div>
        {id ? (
          <Link to={`/checkout/${id}`} style={{ width: '100%' }}>
            <button className={style.pago} style={{ width: '100%' }}>
              <Check width={20} />
              Completar el pago
            </button>
          </Link>
        ) : (
          <Link to={`/check`} style={{ width: '100%' }}>
            <button className={style.pago} style={{ width: '100%' }}>
              <Check width={20} />
              Completar el pago
            </button>
          </Link>
        )}
      </div>
    </div>
  )
}

export default Shopping

import { Link, useParams } from 'react-router-dom'
import { MercadoPago, Stripe, Warning } from '../../utils/Icons'
import style from './Checkout.module.css'
import { useDispatch, useSelector } from 'react-redux'
import {
  getCartUser,
  getUrlPayment,
  getUrlPaymentMercadoPago,
} from '../../redux/actions/actionGet'
import CardCheckout from '../../Components/CardCheckout/CardCheckout'
import { useEffect, useState } from 'react'
import svgStripe from '../../assets/png/2560px-Stripe_Logo,_revised_2016.svg.png'
const Checkout = () => {
  const { id } = useParams()
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const [payment, setPayment] = useState('')
  useEffect(() => {
    dispatch(getCartUser(id))
  }, [id])

  const paymentSetter = (e) => {
    setPayment(e.target.value)
  }

  const handlePayment = () => {
    dispatch(getUrlPayment(cart, id))
  }

  const handleMercadoPago = () => {
    dispatch(getUrlPaymentMercadoPago(cart, id))
  }

  const priceTotal = () => {
    let price = 0
    cart.map((ele) => {
      price += ele.price
    })
    return price
  }

  return (
    <div className={style.container}>
      <div className={style.checkout}>
        <h1>Finalizar el pago!</h1>
        <div className={style.line}></div>
        <div className={style.warning}>
          <div>
            <Warning width={20}></Warning>
            <strong>Atención</strong>
          </div>
          <p>
            Esta compra no es reembolsable. Por favor, revise cuidadosamente
            antes de confirmar.
          </p>
        </div>
        <div className={style.form}>
          <div>
            <label>Nombre:</label>
            <input></input>
          </div>
          <div>
            <label>Email:</label>
            <input></input>
          </div>
          <div>
            <label>Numero de telefono:</label>
            <input></input>
          </div>
          <div className={style.method}>
            <label>Metodo de pago</label>

            <select onChange={paymentSetter} style={{ padding: '10px' }}>
              <option value={'stripe'}>Stripe</option>
              <option value={'mercadoPago'}>Mercado Pago</option>
            </select>
            {payment == 'stripe' ? (
              <button onClick={() => handlePayment()} className={style.stripe}>
                <Stripe width={80} />
              </button>
            ) : (
              <button
                className={style.mercadoPago}
                onClick={() => handleMercadoPago()}
              >
                <MercadoPago width={120} />
              </button>
            )}
          </div>
          <div className={style.pago}>
            <p>
              Al comprar esta orden, aceptas los{' '}
              <Link>Términos y Condiciones</Link>
            </p>
          </div>
        </div>
      </div>
      <div className={style.finalPrice}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {cart.map((ele) => {
            return (
              <div key={ele.id}>
                <CardCheckout
                  image={ele.book.images[0]}
                  title={ele.book.title}
                  quantity={ele.quantity}
                  sellPrice={ele.book.sellPrice}
                  price={ele.price}
                />
              </div>
            )
          })}
        </div>
        <div
          style={{
            width: '100%',
            height: '1.5px',
            background:
              'linear-gradient(to right, #d3d2d300, #d3d2d3, #d3d2d300)',
            marginBlock: '20px',
          }}
        ></div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            fontSize: '22px',
          }}
          className={style.total}
        >
          <p>Precio total</p>
          <p>${priceTotal()}</p>
        </div>
        <div className={style.security}>
          <h3>Atención al cliente</h3>
          <p>+01 653 235 211 (Internacional)</p>
          <p>support@thenextpage.com (Email)</p>
          <p>Contáctanos ahora por cuestiones relacionadas al pago.</p>
        </div>
      </div>
    </div>
  )
}

export default Checkout

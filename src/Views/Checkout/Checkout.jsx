import { Link } from 'react-router-dom'
import { Warning } from '../../utils/Icons'
import style from './Checkout.module.css'
import { useSelector } from 'react-redux'
import { getUrlPayment } from '../../redux/actions/actionGet'
const Checkout = () => {
  const cart = useSelector((state) => state.cart)
  const handlePayment = () => {
    getUrlPayment(cart)
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
            <button onClick={() => handlePayment()}>PAGAR</button>
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
        {cart.map((ele) => {
          return <h1 key={ele.id}>{ele.book.title}</h1>
        })}
      </div>
    </div>
  )
}

export default Checkout

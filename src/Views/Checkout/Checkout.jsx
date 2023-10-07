import { Link } from 'react-router-dom'
import { Warning } from '../../utils/Icons'
import style from './Checkout.module.css'
const Checkout = () => {
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
            <select>
              <option>Seleccione un metodo de pago</option>
              <option>Mercado Pago</option>
              <option>Stripe</option>
            </select>
          </div>
          <div className={style.pago}>
            <p>
              Al comprar esta orden, aceptas los{' '}
              <Link>Términos y Condiciones</Link>
            </p>
          </div>
        </div>
      </div>
      <div className={style.finalPrice}></div>
    </div>
  )
}

export default Checkout
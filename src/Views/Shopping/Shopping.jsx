import CardHome from '../../Components/CardHome/CardHome'
import CardShop from '../../Components/CardShop/CardShop'
import { Check } from '../../utils/Icons'
import style from './Shopping.module.css'

const Shopping = () => {
  return (
    <div className={style.container}>
      <div className={style.cart}>
        <div style={style.card}>
          <CardShop
            title={'El señor de los anillos'}
            price={'5100$'}
            author={'J.J.K Rowling'}
          />
        </div>
        <div style={style.buttons}></div>
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
          <p>Subtotal</p>
          <p>Impuesto (10%)</p>
          <div className={style.line}></div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <h3 style={{ textAlign: 'left' }}>Total: </h3>
            <h3>$2000</h3>
          </div>
        </div>

        <button className={style.pago}>
          <Check width={20} />
          Completar el pago
        </button>
      </div>
    </div>
  )
}

export default Shopping

import styles from './Success.module.css'

const Cancelled = () => {
  return (
    <div className={styles.body}>
      <div className={styles.card}>
        <div className={styles.circle}>
          <i className={styles.checkmark}>✓</i>
        </div>
        <h1 className={styles.success}>Exitoso</h1>
        <p className={styles.text}>
          Pago realizado con
          <br /> exito!
        </p>
      </div>
    </div>
  )
}

export default Cancelled

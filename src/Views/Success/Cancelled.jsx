import styles from './cancelled.module.css'

const Cancelled = () => {
  return (
    <div className={styles.body}>
      <div className={styles.card}>
        <div className={styles.circle}>
          <i className={styles.checkmark}>x</i>
        </div>
        <h1 className={styles.success}>Cancelado</h1>
        <p className={styles.text}>
          Su pago ha sido
          <br /> cancelado!
        </p>
      </div>
    </div>
  )
}

export default Cancelled

import styles from './Success.module.css';

const Cancelled = () => {
 return (
    <div className={styles.body}>
    <div className={styles.card}>
      <div className={styles.circle}>
        <i className={styles.checkmark}>x</i>
      </div>
      <h1 className={styles.success}>Exitoso</h1> 
      <p className={styles.text}>Pago realiza con<br/> exito!</p>
    </div>
    </div>
 );
};

export default Cancelled;
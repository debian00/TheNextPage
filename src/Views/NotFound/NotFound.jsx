import React from 'react';
import styles from "./notFound.module.css"

const NotFound = () => {
  return (
    <div className={styles.container}>
    <nav className={styles.shelf}> 
      <span className={`${styles.door} ${styles.left}`}></span>
      <span className={`${styles.door} ${styles.right}`}></span>
    </nav>
    <h1>Error 404</h1>
    <p>La página que buscas no está disponible</p>
  </div>
  );
};

export default NotFound;

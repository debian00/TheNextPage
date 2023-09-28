import styles from "../CatalogueView/catalogue.module.css";

function CatalogueView() {
  return (
    <div className={styles.container}>
<div className={`${styles['grid-7']} ${styles['element-animation']}`}>
        <div className={`${styles.card} ${styles['color-card']}`}>
          <ul>
            <li><i className={`fas fa-arrow-left ${styles['i-l']} ${styles['w']}`}></i></li>
            <li><i className={`fas fa-ellipsis-v ${styles['i-r']} ${styles['w']}`}></i></li>
            <li><i className={`far fa-heart ${styles['i-r']} ${styles['w']}`}></i></li>
          </ul>
          <img src="https://media.revistaad.es/photos/60c227359ae22619e08751b2/master/w_1600,c_limit/247747.jpg" alt="profile-pic" className={styles.profile} />
          <h1 className={styles.title}>Cómo matar a un ruiseñor</h1>
          <p className={styles['job-title']}>Harper Lee</p>
          <div className={`${styles.desc}`}>
            <p>$30 USD</p>
          </div>
          <button className={`${styles.btn} ${styles.top}`}>Comprar</button>

          <hr />
          <div className={styles.container2}>
            <div className={styles.content}>
              <div className={`${styles['grid-2']}`}>
                <button className={`${styles['color-b']} ${styles.circule}`}> <i className={`fab fa-dribbble fa-2x`}></i></button>
                <h2 className={styles.title2}>12.3k</h2>
                <p className={styles.followers}>Reseñas</p>
              </div>
              <div className={`${styles['grid-2']}`}>
                <button className={`${styles['color-c']} ${styles.circule2}`}><i className={`fab fa-behance fa-2x`}></i></button>
                <h2 className={styles.title2}>+2k</h2>
                <p className={styles.followers}>Vendidos</p>
              </div>
              <div className={`${styles['grid-2']}`}>
                <button className={`${styles['color-d']} ${styles.circule3}`}><i className={`fab fa-github-alt fa-2x`}></i></button>
                <h2 className={styles.title2}>4.5</h2>
                <p className={styles.followers}>Puntuación</p>
              </div>
            </div>
          </div>
        </div>
</div>
<div className={`${styles['grid-7']} ${styles['element-animation']}`}>
        <div className={`${styles.card} ${styles['color-card']}`}>
          <ul>
            <li><i className={`fas fa-arrow-left ${styles['i-l']} ${styles['w']}`}></i></li>
            <li><i className={`fas fa-ellipsis-v ${styles['i-r']} ${styles['w']}`}></i></li>
            <li><i className={`far fa-heart ${styles['i-r']} ${styles['w']}`}></i></li>
          </ul>
          <img src="https://media.revistaad.es/photos/60c227359ae22619e08751b2/master/w_1600,c_limit/247747.jpg" alt="profile-pic" className={styles.profile} />
          <h1 className={styles.title}>Cómo matar a un ruiseñor</h1>
          <p className={styles['job-title']}>Harper Lee</p>
          <div className={`${styles.desc}`}>
            <p>$30 USD</p>
          </div>
          <button className={`${styles.btn} ${styles.top}`}>Comprar</button>

          <hr />
          <div className={styles.container2}>
            <div className={styles.content}>
              <div className={`${styles['grid-2']}`}>
                <button className={`${styles['color-b']} ${styles.circule}`}> <i className={`fab fa-dribbble fa-2x`}></i></button>
                <h2 className={styles.title2}>12.3k</h2>
                <p className={styles.followers}>Reseñas</p>
              </div>
              <div className={`${styles['grid-2']}`}>
                <button className={`${styles['color-c']} ${styles.circule2}`}><i className={`fab fa-behance fa-2x`}></i></button>
                <h2 className={styles.title2}>+2k</h2>
                <p className={styles.followers}>Vendidos</p>
              </div>
              <div className={`${styles['grid-2']}`}>
                <button className={`${styles['color-d']} ${styles.circule3}`}><i className={`fab fa-github-alt fa-2x`}></i></button>
                <h2 className={styles.title2}>4.5</h2>
                <p className={styles.followers}>Puntuación</p>
              </div>
            </div>
          </div>
        </div>
</div>   
<div className={`${styles['grid-7']} ${styles['element-animation']}`}>
        <div className={`${styles.card} ${styles['color-card']}`}>
          <ul>
            <li><i className={`fas fa-arrow-left ${styles['i-l']} ${styles['w']}`}></i></li>
            <li><i className={`fas fa-ellipsis-v ${styles['i-r']} ${styles['w']}`}></i></li>
            <li><i className={`far fa-heart ${styles['i-r']} ${styles['w']}`}></i></li>
          </ul>
          <img src="https://media.revistaad.es/photos/60c227359ae22619e08751b2/master/w_1600,c_limit/247747.jpg" alt="profile-pic" className={styles.profile} />
          <h1 className={styles.title}>Cómo matar a un ruiseñor</h1>
          <p className={styles['job-title']}>Harper Lee</p>
          <div className={`${styles.desc}`}>
            <p>$30 USD</p>
          </div>
          <button className={`${styles.btn} ${styles.top}`}>Comprar</button>

          <hr />
          <div className={styles.container2}>
            <div className={styles.content}>
              <div className={`${styles['grid-2']}`}>
                <button className={`${styles['color-b']} ${styles.circule}`}> <i className={`fab fa-dribbble fa-2x`}></i></button>
                <h2 className={styles.title2}>12.3k</h2>
                <p className={styles.followers}>Reseñas</p>
              </div>
              <div className={`${styles['grid-2']}`}>
                <button className={`${styles['color-c']} ${styles.circule2}`}><i className={`fab fa-behance fa-2x`}></i></button>
                <h2 className={styles.title2}>+2k</h2>
                <p className={styles.followers}>Vendidos</p>
              </div>
              <div className={`${styles['grid-2']}`}>
                <button className={`${styles['color-d']} ${styles.circule3}`}><i className={`fab fa-github-alt fa-2x`}></i></button>
                <h2 className={styles.title2}>4.5</h2>
                <p className={styles.followers}>Puntuación</p>
              </div>
            </div>
          </div>
        </div>
</div>      
<div className={`${styles['grid-7']} ${styles['element-animation']}`}>
        <div className={`${styles.card} ${styles['color-card']}`}>
          <ul>
            <li><i className={`fas fa-arrow-left ${styles['i-l']} ${styles['w']}`}></i></li>
            <li><i className={`fas fa-ellipsis-v ${styles['i-r']} ${styles['w']}`}></i></li>
            <li><i className={`far fa-heart ${styles['i-r']} ${styles['w']}`}></i></li>
          </ul>
          <img src="https://media.revistaad.es/photos/60c227359ae22619e08751b2/master/w_1600,c_limit/247747.jpg" alt="profile-pic" className={styles.profile} />
          <h1 className={styles.title}>Cómo matar a un ruiseñor</h1>
          <p className={styles['job-title']}>Harper Lee</p>
          <div className={`${styles.desc}`}>
            <p>$30 USD</p>
          </div>
          <button className={`${styles.btn} ${styles.top}`}>Comprar</button>

          <hr />
          <div className={styles.container2}>
            <div className={styles.content}>
              <div className={`${styles['grid-2']}`}>
                <button className={`${styles['color-b']} ${styles.circule}`}> <i className={`fab fa-dribbble fa-2x`}></i></button>
                <h2 className={styles.title2}>12.3k</h2>
                <p className={styles.followers}>Reseñas</p>
              </div>
              <div className={`${styles['grid-2']}`}>
                <button className={`${styles['color-c']} ${styles.circule2}`}><i className={`fab fa-behance fa-2x`}></i></button>
                <h2 className={styles.title2}>+2k</h2>
                <p className={styles.followers}>Vendidos</p>
              </div>
              <div className={`${styles['grid-2']}`}>
                <button className={`${styles['color-d']} ${styles.circule3}`}><i className={`fab fa-github-alt fa-2x`}></i></button>
                <h2 className={styles.title2}>4.5</h2>
                <p className={styles.followers}>Puntuación</p>
              </div>
            </div>
          </div>
        </div>
</div>         
      
       
    </div>
  );
}

export default CatalogueView;

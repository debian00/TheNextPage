// import React from 'react';
import style from './comprasview.module.css'

const ComprasView = () => {
  return (
    <div>
        <h1 className={style.titulo}>Compras hechas</h1>
        <div className={style.sepator}></div>
      <div className={style.wrapper}>
        <div className={style.productImg}>
          <img src="http://bit.ly/2tMBBTd" style={{height:"420px", width:"327"}}  alt="Product" />
        </div>
        <div className={style.productInfo}>
          <div className={style.productText}>
            <h1>Harvest Vase</h1>
            <h2>by Studio and Friends</h2>
            <p>
              Harvest Vases are a reinterpretation
              <br />
              of peeled fruits and vegetables as
              <br />
              functional objects. The surfaces
              <br />
              appear to be sliced and pulled aside,
              <br />
              allowing room for growth.
            </p>
          </div>
          <div className={style.productPriceBtn}>
            <p>
              <span>$78</span>
            </p>
            <button type="button">Buy Now</button>
          </div>
        </div>
      </div>
      <div className={style.sepator}></div>
      <div className={style.wrapper}>
        <div className={style.productImg}>
          <img src="https://marketplace.canva.com/EADzX-9e-Qk/1/0/1003w/canva-marr%C3%B3n-steampunk-sombrerero-creativo-portada-de-libro-electr%C3%B3nico-J4oYUx8TT4s.jpg" style={{height:"420px", width:"327"}}  alt="Product" />
        </div>
        <div className={style.productInfo}>
          <div className={style.productText}>
            <h1>Harvest Vase</h1>
            <h2>by Studio and Friends</h2>
            <p>
              Harvest Vases are a reinterpretation
              <br />
              of peeled fruits and vegetables as
              <br />
              functional objects. The surfaces
              <br />
              appear to be sliced and pulled aside,
              <br />
              allowing room for growth.
            </p>
          </div>
          <div className={style.productPriceBtn}>
            <p>
              <span>$78</span>
            </p>
            <button type="button">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprasView;

// import React from 'react'
import style from './promocionesview.module.css'
import landind1 from '../../assets/imgPromo/images.jpg'
import landing2 from '../../assets/imgPromo/images2.jpg'
import landing3 from '../../assets/imgPromo/images3.jpg'
import landing4 from '../../assets/imgPromo/images4.jpg'
import landing5 from '../../assets/imgPromo/images5.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllBooksCopy } from '../../redux/actions/actionGet'
import Cards from '../../Components/CardContainer/Cards'

const PromocionesView = () => {
  const books = useSelector(state => state.books)
  const order = books?.rows?.slice().sort((a, b) => a.title - b.title);
  const filtradoPromedio = order?.filter((ele) => ele.averageScore < 5.00)
  console.log('filtrado', order);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllBooksCopy(1))
  },[])
  return (
    <div>
      <section className={style.select}>
        <div className={style.textOverlay}>
          <h1 className={style.text}>Disfruta de nuestras </h1>
          <h2  className={style.text2}>Promociones</h2>
          <hr></hr>
        </div>
        <img className={style.ima} name='S02' src={landing2} alt="" />
        <img className={style.ima} name='S05' src={landing5} alt="" />
        <img name='S04' src={landing4} alt="" />
        <img name='S01' src={landind1} alt="" />
        <img className={style.ima} name='S03' src={landing3} alt="" />
      </section>
      <div>
        <h1>Holasas</h1>
        <div className={`${style.cardCont} `}>
          <Cards allBooks={filtradoPromedio}/>
        </div>
      </div>
    </div>
  )
}

export default PromocionesView
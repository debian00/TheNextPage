// import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from './promocionlibro.module.css'
import { useEffect, useState } from 'react'
import {
  getAllBooksCopy,
} from '../../../redux/actions/actionGet'
import axios from 'axios'
import { getBookByOffer } from '../../../redux/actions/actionPatch'


const PromocionLibroView = () => {
  //Hook para traer todos los libros
  const allBooks = useSelector((state) => state.books)

  // console.log('Libros cargaditos los nene',books)

  const dispatch = useDispatch()
  //Funcion para recortar la cantinda de letras en la descripcion
  const descripctionCut = (descripcion) => {
    if (descripcion.length > 50) {
      const newDescription = descripcion.split('').slice(0, 50).join('')
      return <div>{newDescription}</div>
    }
    return <div>{descripcion}</div>
  }
  //Funcion para recortar la cantinda de letras en la descripcion
  const tittleCut = (title) => {
    if (title.length > 20) {
      const newTittle = title.split('').slice(0, 20).join('')
      return <div>{newTittle}</div>
    }
    return <div>{title}</div>
  }

  //Filtrado combinado
  const [filter, setFilter] = useState({
    page: 0,
    forSale: '',
    order: 'titleAsc',
    title: '',
  })

  //Funcion para dar la promocion
  const handlePromocion = async (e, id) => {
    console.log('LLego el id', id)

    e.preventDefault()
    const confirmed = window.confirm(
      '¿Deseas poner este libro en oferta?'
    )
    if (confirmed) {
      await axios.patch(`/books/forSale/` + id)
      dispatch(getAllBooksCopy())
    }
  }
   //Funcion para ver cual estan en oferta
   const handleOffer = (e) => {
    const opcion = e.target.value;
    const newFilter = { ...filter, forSale: opcion };
    setFilter(newFilter);
    setCurrentPage(0);
    dispatch(getBookByOffer(newFilter));
  };
  //Funcion para ordenar
  const handleOrder = (e) => {
    const selectedOrder = e.target.value
    const newFilter = { ...filter, order: selectedOrder }
    setFilter(newFilter)
    setCurrentPage(0)
    dispatch(getBookByOffer(newFilter))
  }

  //Funcion para buscar por titulo
  const handlerInputChange = (e) => {
    const opcion = e.target.value
    const newFilter = { ...filter, title: opcion }
    setFilter(newFilter)
    setCurrentPage(0)
    dispatch(getBookByOffer(newFilter))
  }

  //Paginado
  const scrollToTop = () => {
    window.scrollTo({ behavior: 'smooth', top: 0 })
  }

  const [currentPage, setCurrentPage] = useState(0)
  const totalProp = Math.ceil(allBooks.count / 10)

  const nextHandler = () => {
    scrollToTop()
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalProp - 1))
  }

  const prevHandler = () => {
    scrollToTop()
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0))
  }

  useEffect(() => {
    dispatch(getAllBooksCopy(currentPage))
  }, [currentPage, dispatch])

  //Manejo ciclo de vida del componente con useEffect
  useEffect(() => {
    dispatch(getAllBooksCopy())
  }, [dispatch])

  return (
    <div>
      <div className={style.miNavbar}>
        <div className="row">
          <div className="col-3">
            <select onChange={handleOffer} className={style.select}>
             
              <option value={'true'}>Promocion</option>
              <option value={'false'}>No Promocion</option>
            </select>
          </div>
          <div className="col-3">
            <select className={style.select} onChange={handleOrder}>
              <option value={'titleAsc'} name={'order'}>
                Ordernar A-Z
              </option>
              <option value={'titleDesc'} name={'order'}>
                Ordernar Z-A
              </option>
              <option value={'stockAsc'} name={'order'}>
                Ordernar Stock menor - mayor
              </option>
              <option value={'stockDesc'} name={'order'}>
                Ordernar Stock mayor - menor
              </option>
              <option value={'averageScoreAsc'} name={'order'}>
                Ordernar Promedio menor - mayor
              </option>
              <option value={'averageScoreDesc'} name={'order'}>
                Ordernar Promedio mayor - menor
              </option>
            </select>
          </div>

          <div className="col-6">
            <input
              type="text"
              id="myInput"
              className={style.myInput}
              name={'title'}
              onChange={(e) => handlerInputChange(e)}
              placeholder="🔍   Search for names.."
            />
          </div>
        </div>
      </div>
      <div className={style.cardCont}>
        {allBooks?.rows?.map((ele) => (
          <div className={style.card} key={ele.id}>
            <div className={style.cardImg}>
              <div className={style.img}>
                <img
                  style={{ width: '110px', height: '150px' }}
                  src={ele.images}
                  alt=""
                />
              </div>
            </div>
            <div className={style.cardTitle}>{tittleCut(ele.title)}</div>
            <div className={style.cardSubtitle}>
              {descripctionCut(ele.description)}
            </div>
            <div>{ele.averageScore}</div>
            <div className={style.cardPrice}>
              <span>$</span> {ele.sellPrice}
            </div>
            <div className={style.cardDivider}></div>
            <div className={style.cardFooter}>
              <div className="d-flex justify-content-center">
                {/* Quitar oferta */}

                <button type="button" className="btn btn-danger">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-tags"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 2v4.586l7 7L14.586 9l-7-7H3zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2z"></path>
                    <path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1v5.086z"></path>
                  </svg>
                  Oferta📉
                </button>

                {/* Dar oferta */}
                <button
                  type="button"
                  onClick={(e) => handlePromocion(e, ele.id)}
                  className="btn btn-success"
                  style={{ marginLeft: '0.5rem' }}
                  disabled={ele.forSale}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-tags"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 2v4.586l7 7L14.586 9l-7-7H3zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2z"></path>
                    <path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1v5.086z"></path>
                  </svg>
                  Oferta📈
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={style.buttonContainer}>
        <button onClick={prevHandler} className={style.button}>
          PREV
        </button>
        <p>
          Pagina {currentPage + 1} de {totalProp}
        </p>
        <button onClick={nextHandler} className={style.button}>
          NEXT
        </button>
      </div>
    </div>
  )
}

export default PromocionLibroView

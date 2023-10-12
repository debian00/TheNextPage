// import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from './promocionlibro.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { getBookByOffer } from '../../../redux/actions/actionPatch'
import Card from '../../../Components/CardIndividual/Card'
import Swal from 'sweetalert2';
import { showSuccessNotification, showErrorNotification } from '../../../utils/Toast'


const PromocionLibroView = () => {
  //Hook para traer todos los libros
  const allBooks = useSelector((state) => state.books)

  const dispatch = useDispatch()

  //Filtrado combinado
  const [filter, setFilter] = useState({
    page: 1,
    forSale: 'true',
    order: 'titleAsc',
    title: '',
  })

  //Funcion para dar la promocion
  const handlePromocion = async (e, id) => {
    console.log('Llegó el id', id);
  
    e.preventDefault();
  
    // Utiliza SweetAlert en lugar de window.confirm
    Swal.fire({
      title: '¿Deseas poner este libro en oferta?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'No',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          // Realiza tu acción si se confirma la promoción
          await axios.patch(`/books/forSale/` + id);
          dispatch(getBookByOffer());
          showSuccessNotification('Oferta enviada con exito!')
        } catch (error) {
          // Maneja errores aquí si es necesario
          showErrorNotification('Error al poner el libro en oferta:', error);
        }
      }
    });
  };
  //Funcion para quitar la promocion
  const handleDeletePromocion = async(e, id) => {
    e.preventDefault();
    Swal.fire({
      title: '¿Estás seguro que quieres quitar la oferta de este libro?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'No',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          // Realiza tu acción si se confirma quitar la oferta
          await axios.patch(`/books/fullPrice/` + id);
          dispatch(getBookByOffer());
          showSuccessNotification('Oferta quitada con exito!')
        } catch (error) {
          // Maneja errores aquí si es necesario
          showErrorNotification('Error al quitar la oferta del libro:', error);
        }
      }
    });
  }
  //Funcion para ordenar
  const handleOrder = (e) => {
    const selectedOrder = e.target.value
    const newFilter = { ...filter, order: selectedOrder }
    setFilter(newFilter)
    dispatch(getBookByOffer(newFilter))
  }
  //Funcion para ver cual estan en oferta
  const handleFilter = (e) => {
    const { value, name } = e.target
    const newFilter = { ...filter, [name]: value, page: 1 }
    setFilter(newFilter)
  }
  //Paginado
  const totalProp = Math.ceil(allBooks.count / 10)

  const scrollToTop = () => {
    window.scrollTo({ behavior: 'smooth', top: 0 })
  }

  const nextHandler = () => {
    scrollToTop()
    setFilter((prevPage) => {
      const nextPage = prevPage.page + 1
      return { ...prevPage, page: Math.min(nextPage, totalProp) }
    })
  }

  const prevHandler = () => {
    scrollToTop()
    setFilter((prevFilter) => {
      const prevPage = prevFilter.page - 1
      return { ...prevFilter, page: Math.max(prevPage, 1) }
    })
  }

  //Manejo ciclo de vida del componente con useEffect
  useEffect(() => {
    dispatch(getBookByOffer(filter))
  }, [filter, dispatch])

  return (
    <div>
      <div className={style.miNavbar}>
        <div className="row">
          <div className="col-3">
            <select
              onChange={handleFilter}
              name="forSale"
              className={style.select}
            >
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
              onChange={handleFilter}
              placeholder="🔍   Search for names.."
            />
          </div>
        </div>
      </div>
      <div className={style.cardCont}>
        {allBooks?.rows?.map((ele) => (
          <div key={ele.id} className={style.individualCard}>
            <Card
              title={ele.title}
              image={ele.images[0]}
              price={ele.sellPrice}
              id={ele.id}
              author={ele.author}
              availability={ele.availability}
              forSale={ele.forSale}
            ></Card>
            <div className={style.buttonsEdit}>
              {/* Quitar oferta */}
              <button type="button" className="btn btn-danger" onClick={(e) => handleDeletePromocion(e, ele.id)} disabled={!ele.forSale}>
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
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className={style.buttonContainer}>
        <button onClick={() => prevHandler()} className={style.button}>
          PREV
        </button>
        <p>
          Pagina {filter.page} de {totalProp}
        </p>
        <button onClick={() => nextHandler()} className={style.button}>
          NEXT
        </button>
      </div>
    </div>
  )
}

export default PromocionLibroView

// import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from './librosview.module.css'
import { useEffect } from 'react'
import { getAllBooks } from '../../../redux/actions/actionGet'

const Librosview = () => {
  //Hook para traer todos los libros
  const allBooks = useSelector((state) => state.books)
  console.log(allBooks)

  const dispatch = useDispatch()
  //Funcion para recortar la cantinda de letras en la descripcion
  const descripctionCut = (descripcion) => {
    if (descripcion.length > 90) {
      const newDescription = descripcion.split('').slice(0, 100).join('')
      return <div>{newDescription}</div>
    }
    return <div>{descripcion}</div>
  }
  //Manejo ciclo de vida del componente con useEffect
  useEffect(() => {
    dispatch(getAllBooks())
  }, [])

  return (
    <div>
      <div className={style.miNavbar}>
        <div className="row">
          <div className="col-3">
            <select className={style.select}>
              <option value="opcion1">Filtros Autor</option>
              <option value="opcion2">Opción 2</option>
              <option value="opcion3">Opción 3</option>
              <option value="opcion4">Opción 4</option>
            </select>
          </div>
          <div className="col-3">
            <select className={style.select}>
              <option value="opcion1">Filtros Libros</option>
              <option value="opcion2">Opción 2</option>
              <option value="opcion3">Opción 3</option>
              <option value="opcion4">Opción 4</option>
            </select>
          </div>
          <div className="col-6">
            <input
              type="text"
              id="myInput"
              className={style.myInput}
              name="search"
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
            <div className={style.cardTitle}>{ele.title}</div>
            <div className={style.cardSubtitle}>
              {descripctionCut(ele.description)}
            </div>
            <hr className={style.cardDivider} />
            <div className={style.cardFooter}>
              <div className={style.cardPrice}>
                <span>$</span> {ele.sellPrice}
              </div>
              <button className={style.cardBtn}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="7"
                  height="9"
                  fill="currentColor"
                  className="bi bi-pencil-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                </svg>
              </button>
              <button
                type="button"
                className="btn btn-outline-danger"
                style={{ height: '35px' }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="15"
                  //    color='black'
                  color="black"
                  className="bi bi-file-excel"
                  viewBox="0 7 16 4"
                >
                  <path d="M5.18 4.616a.5.5 0 0 1 .704.064L8 7.219l2.116-2.54a.5.5 0 1 1 .768.641L8.651 8l2.233 2.68a.5.5 0 0 1-.768.64L8 8.781l-2.116 2.54a.5.5 0 0 1-.768-.641L7.349 8 5.116 5.32a.5.5 0 0 1 .064-.704z"></path>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Librosview

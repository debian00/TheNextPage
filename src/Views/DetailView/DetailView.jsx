import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getBookById } from '../../redux/actions/actionGet'
import styles from './detail.module.css' // Importa los estilos CSS
import { useParams } from 'react-router-dom'
import { getGenres } from '../../redux/actions/actionGet'
import axios from 'axios'

function DetailView() {
  const { id } = useParams()
  const bookData = useSelector((state) => state.bookById)
  const genres = useSelector((state) => state.genres)
  console.log('trae los géneros', genres)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBookById(id))
    dispatch(getGenres())
  }, [dispatch, id])

  const getGenreName = (genreId) => {
    const genreNames = genreId.genre?.map((id) => {
      const genre = genres.find((genre) => genre.id === id)
      return genre ? genre.name : ''
    })

    return genreNames?.join(', ')
  }

  const handleCart = async () => {
    const idUser = JSON.parse(localStorage.getItem('user'))
    const userId = idUser.id
    await axios.post(`/cart/add/${userId}`, { bookId: id })
    console.log('Se guardo en el carrito')
  }

  return (
    <div>
      <div className={styles.container}>
        <div className={`cover ${styles.cover}`}>
          <div className={`book ${styles.book}`}>
            <label
              htmlFor="page-1"
              className={`book__page book__page--1 ${styles['book__page']} ${styles['book__page--1']}`}
            >
              <img src={bookData.images} alt="" />
            </label>

            <label
              htmlFor="page-2"
              className={`book__page book__page--4 ${styles['book__page']} ${styles['book__page--4']}`}
            >
              <div className={`page__content ${styles['page__content']}`}>
                <h1
                  className={`page__content-title ${styles['page__content-title']}`}
                >
                  Descripción:
                </h1>
                <div
                  className={`page__content-blockquote ${styles['page__content-blockquote']}`}
                >
                  <p
                    className={`page__content-blockquote-text ${styles['page__content-blockquote-text']}`}
                  >
                    {bookData.description}{' '}
                  </p>

                  <span
                    className={`page__content-blockquote-reference ${styles['page__content-blockquote-reference']}`}
                  >
                    The Next Page Library
                  </span>
                </div>
                <div className={`page__number ${styles['page__number']}`}>
                  3
                </div>
              </div>
            </label>

            <input type="radio" name="page" id="page-1" />

            <input type="radio" name="page" id="page-2" />
            <label
              htmlFor="page-2"
              className={`book__page book__page--2 ${styles['book__page']} ${styles['book__page--2']}`}
            >
              <div className={`book__page-front ${styles['book__page-front']}`}>
                <div className={`page__content ${styles['page__content']}`}>
                  <h1
                    className={`page__content-book-title ${styles['page__content-book-title']}`}
                  >
                    {bookData.title}{' '}
                  </h1>
                  <h2
                    className={`page__content-author ${styles['page__content-author']}`}
                  >
                    {bookData.author}{' '}
                  </h2>

                  <p
                    className={`page__content-credits ${styles['page__content-credits']}`}
                  >
                    GÉNERO
                    <span>{getGenreName(bookData)} </span>
                  </p>

                  <p
                    className={`page__content-credits ${styles['page__content-credits']}`}
                  >
                    PRECIO DE VENTA
                    <span>$ {bookData.sellPrice} </span>
                  </p>

                  <div
                    className={`page__content-copyright ${styles['page__content-copyright']}`}
                  >
                    <p>Fecha de publicación</p>
                    <p>{bookData.publicationYear} </p>
                  </div>
                </div>
              </div>
              <div className={`book__page-back ${styles['book__page-back']}`}>
                <div className={`page__content ${styles['page__content']}`}>
                  <h1
                    className={`page__content-title ${styles['page__content-title']}`}
                  >
                    Contents
                  </h1>
                  <table
                    className={`page__content-table ${styles['page__content-table']}`}
                  >
                    <tr>
                      <td align="left">Puntuación general</td>
                      <td align="right">{bookData.averageScore}</td>
                    </tr>
                    <tr>
                      <td align="left">Número de reseñas</td>
                      <td align="right">{bookData.numberOfReviews}</td>
                    </tr>
                    <tr>
                      <td align="left">Stock</td>
                      <td align="right">{bookData.stock}</td>
                    </tr>
                    <tr>
                      <td align="left">Autor</td>
                      <td align="right">{bookData.author}</td>
                    </tr>
                    <tr>
                      <td align="left">Año de publicación</td>
                      <td align="right">{bookData.publicationYear}</td>
                    </tr>
                  </table>

                  <div className={`page__number ${styles['page__number']}`}>
                    2
                  </div>
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>

      <div style={{ height: '40vh' }}>
        <button onClick={handleCart}>Añadir al carrito</button>
      </div>
    </div>
  )
}

export default DetailView

import { useEffect,} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllFavs, getBookById } from '../../redux/actions/actionGet'
import styles from './detail.module.css' // Importa los estilos CSS
import { useNavigate, useParams } from 'react-router-dom'
import { getGenres } from '../../redux/actions/actionGet'
import axios from 'axios'
import { Favorite, MercadoPago, Stripe } from '../../utils/Icons'
import {
  showErrorNotification,
  showSuccessNotification,
} from '../../utils/Toast'
import ReviewCard from '../../Components/Review/ReviewCard'
import { addFavorite } from '../../redux/actions/actionPut'

function DetailView() {
  const { id } = useParams()
  const bookData = useSelector((state) => state.bookById)
  const genres = useSelector((state) => state.genres)
  const allFavs = useSelector((state) => state.favorites)
  console.log(allFavs)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // const [color, setColor] = useState('currentColor')

  useEffect(() => {
    const idUser = JSON.parse(localStorage.getItem('user'))
    const userId = idUser.id
    dispatch(getBookById(id))
    dispatch(getGenres())
    dispatch(getAllFavs(userId))
  }, [dispatch, id])

  const getGenreName = (genreId) => {
    const genreNames = genreId.genre?.map((id) => {
      const genre = genres.find((genre) => genre.id === id)
      return genre ? genre.name : ''
    })

    return genreNames?.join(', ')
  }

  const handleAddFav = async (e, bookId) => {
    e.preventDefault()
    const isLoggedIn = !!localStorage.getItem('token')
    if (!isLoggedIn) {
      showErrorNotification('¡Debes iniciar sesion!')
      navigate('/check')
      return
    }
    const idUser = JSON.parse(localStorage.getItem('user'))
    const userId = idUser.id

    const isBookInFavs = allFavs?.some((fav) => fav === bookId)
    if (isBookInFavs) {
      // setColor('blue')
      showErrorNotification('¡El libro ya se encuentra en favoritos!')
    } else {
      try {
        await dispatch(addFavorite(userId, bookId))
        dispatch(getAllFavs(userId))
        showSuccessNotification('¡Se añadió a favoritos con éxito!')
        // setColor('blue')
      } catch (error) {
        showErrorNotification('Ocurrió un error al agregar a favoritos.')
      }
    }
  }

  const handleCart = async () => {
    const isLoggedIn = !!localStorage.getItem('token')
    if (!isLoggedIn) {
      showErrorNotification('¡Debes iniciar sesion!')
      navigate('/check')
      return
    }
    const idUser = JSON.parse(localStorage.getItem('user'))
    const userId = idUser.id
    await axios.post(`/cart/add/${userId}`, { bookId: id })
    showSuccessNotification('¡Se añadió al carrito con éxito!')
    console.log('Se guardó en el carrito')
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
                    <span> $ {bookData.sellPrice} </span>
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

      <div
        style={{
          padding: '40px',
          width: '80%',
          margin: '0 auto',
          border: '2px solid rgba(234, 234, 234, 0.8)',
          marginBlock: '20px',
        }}
      >
        <div className={styles.card}>
          <div className={styles.image}>
            <img src={bookData.images} />
            <div className={styles.info}>
              <h2>{bookData.title}</h2>
              <p>
                Por: <span>{bookData.author}</span>
              </p>
              <div className={styles.genres}>
                <ul>
                  {bookData.genre?.map((ele) => {
                    const infoGenre = genres.find((genre) => {
                      return genre.id === ele
                    })
                    return <li key={infoGenre.id}>{infoGenre.name}</li>
                  })}
                </ul>
              </div>
              <div className={styles.sipnosis}>
                <h3>Sinopsis:</h3>
                <p>{bookData.description}</p>
              </div>
            </div>
            <div
              className={styles.checkout}
              onClick={(e) => handleAddFav(e, bookData.id)}
            >
              <div className={styles.icons}>
                {allFavs?.some((fav) => fav === bookData.id) ? (
                  <div>
                    <Favorite width={30} fill="blue" />
                  </div>
                ) : (
                  <div>
                    <Favorite width={30} fill="currentColor" />
                  </div>
                )}
              </div>

              <h3>${bookData.sellPrice}</h3>
              <button onClick={handleCart}>Añadir al carrito</button>
              <div className={styles.method}>
                <h4>Metodos de pago</h4>
                <Stripe width={120}></Stripe>
                <MercadoPago width={120}></MercadoPago>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.reseñas}>
          <h2>Reseñas de nuestros clientes</h2>
          {bookData.Reviews ? (
            bookData.Reviews?.map((ele) => {
              return (
                <ReviewCard
                  id={ele.id}
                  key={ele.id}
                  comment={ele.comment}
                  score={ele.score}
                  userId={ele.userId}
                />
              )
            })
          ) : (
            <p>Sin reseñas para este libro, se el primero en darle una!</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default DetailView

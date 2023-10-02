/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux'
import Cards from '../../../Components/CardContainer/Cards'
import styles from './RenderCard.module.css'
import { getAllBooks } from '../../../redux/actions/actionGet'
import { useEffect, useState } from 'react'

// eslint-disable-next-line react/prop-types
function RenderCard({ filter, setFilter }) {
  const [books, setBooks] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('Llegaste al final de la página, cargando más libros...')

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight
      const scrollPosition = window.scrollY + window.innerHeight
      const scrollThreshold = 0.9
      if (scrollPosition >= scrollHeight * scrollThreshold) {
        // Si el usuario ha llegado al final de la página, carga más libros
        const nextPage = filter.page + 1
        setFilter({ ...filter, page: nextPage })
      }
    }

    let throttleTimer

    const throttleScroll = () => {
      if (!throttleTimer) {
        throttleTimer = setTimeout(() => {
          throttleTimer = null
          handleScroll()
        }, 200) // Espera 200ms antes de ejecutar la función nuevamente
      }
    }

    window.addEventListener('scroll', throttleScroll)

    return () => {
      window.removeEventListener('scroll', throttleScroll)
    }
  }, [dispatch, filter])

  useEffect(() => {
    dispatch(getAllBooks(filter)).then((response) => {
      if (filter.page === 1) {
        console.log('aaaaaaaaapaa', response)
        setBooks(response.payload.books)
      } else {
        setBooks((prevBooks) => [...prevBooks, ...response.payload.books])
      }
    })
  }, [filter, dispatch])

  return (
    <div className={`${styles.cardCont} `}>
      <Cards allBooks={books}></Cards>
    </div>
  )
}

export default RenderCard

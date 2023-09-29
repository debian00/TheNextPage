import { useDispatch, useSelector } from 'react-redux'
import Cards from '../../../Components/CardContainer/Cards'
import styles from './RenderCard.module.css'
import { getAllBooks } from '../../../redux/actions/actionGet'
import { useEffect, useState } from 'react'

function RenderCard() {
  const allBooks = useSelector((state) => state.books)
  const dispatch = useDispatch()
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    console.log('Llegaste al final de la página, cargando más libros...')
    dispatch(getAllBooks({ page: 1 }))

    const handleScroll = () => {
      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight
      ) {
        // Si el usuario ha llegado al final de la página, carga más libros
        const nextPage = currentPage + 1
        dispatch(getAllBooks({ page: nextPage }))
        setCurrentPage(nextPage)
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
  }, [dispatch, currentPage])

  return (
    <div className={`${styles.cardCont} `}>
      <Cards allBooks={allBooks}></Cards>
    </div>
  )
}

export default RenderCard

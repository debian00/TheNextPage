// import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../../../Components/CardIndividual/Card'
import style from './favoritosview.module.css'
import { useEffect, useState } from 'react'
import { getAllBooksCopy, getAllFavs } from '../../../redux/actions/actionGet'
import { Delete } from '../../../utils/Icons'
import { deleteFavorite } from '../../../redux/actions/actionPut'
import Swal from 'sweetalert2'
import { showSuccessNotification } from '../../../utils/Toast'
const FavoritosView = () => {
  // const allBooks = useSelector((state) => state.books)
  // console.log('loasas', allBooks)
  const allFavs = useSelector((state) => state.favorites)
  console.log('Todos mis favs', allFavs)
  const dispatch = useDispatch()
  

  // const favoriteBooks = allBooks?.rows?.filter((book) =>
  //   allFavs.includes(book.id)
  // // )
  // console.log('fasas', favoriteBooks);

  

  // console.log('Libros favoritos:', favoriteBooks)

  const handleFavDelete = async (id) => {
    const idUser = JSON.parse(localStorage.getItem('user'))
    const userId = idUser.id

    // Muestra un cuadro de diálogo de confirmación
    const result = await Swal.fire({
      title: '¿Seguro que quiere quitar de favoritos este libro?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'No',
    })

    if (result.isConfirmed) {
      // Si el usuario hace clic en "Sí", elimina el libro de favoritos
      await dispatch(deleteFavorite(userId, id))
      await dispatch(getAllFavs(userId))

      // Muestra una notificación de éxito
      showSuccessNotification(
        'Eliminado de favoritos',
        'El libro ha sido eliminado de tus favoritos.',
        'success'
      )
    }
  }
  
  useEffect(() => {
    const idUser = JSON.parse(localStorage.getItem('user'))
    const userId = idUser.id
    dispatch(getAllBooksCopy())
    dispatch(getAllFavs(userId))
  }, [])

  // Paginado
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  // Calcular el índice del primer y último autor en la página actual
  const indexOfLastAuthor = currentPage * itemsPerPage;
  const indexOfFirstAuthor = indexOfLastAuthor - itemsPerPage;

  // Obtener los autores para la página actual
  const currentFavs = allFavs?.slice(
    indexOfFirstAuthor,
    indexOfLastAuthor
  );

  // Calcular el número total de páginas
  const totalAuthors = allFavs.length;
  const totalPages = Math.ceil(totalAuthors / itemsPerPage);

    // Manejar el cambio de página
    const handlePageChange = (newPage) => {
      setCurrentPage(newPage);
    };

  return (
    <div>
      <div className={style.cardCont}>
        {
        currentFavs?.map((ele) => {
          return (
            <div key={ele.id} className={style.individualCard}>
              <Card
                id={ele.id}
                image={ele.images[0]}
                title={ele.title}
                price={ele.sellPrice}
                author={ele.author}
                availability={ele.availability}
              />
              <div className={style.buttonsEdit}>
                <button
                  id={style.delete}
                  type="button"
                  onClick={() => handleFavDelete(ele.id)}
                >
                  <Delete width={20}></Delete>
                </button>
              </div>
            </div>
          )
        })}
      </div>
        {/* Botones de paginación */}
        <div className={style.buttonContainer}>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className={`${style.button} ${currentPage === 1 && style.disabled}`}
            disabled={currentPage === 1}
          >
            PREV
          </button>
          <p>
            Página {currentPage} de {totalPages}
          </p>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className={`${style.button} ${
              currentPage === totalPages && style.disabled
            }`}
            disabled={currentPage === totalPages}
          >
            NEXT
          </button>
        </div>
    </div>
  )
}

export default FavoritosView

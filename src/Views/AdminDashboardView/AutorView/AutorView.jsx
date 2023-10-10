import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllBooksCopy, getAuthors } from '../../../redux/actions/actionGet'
import style from './autorview.module.css'
import { postAuthor } from '../../../redux/actions/actionPost'
import axios from 'axios'

const AutorView = () => {
  // Traer todos los autores
  const Authors = useSelector((state) => state.authors)
  const allAuthors = Authors.slice().sort((a, b) => a.name.localeCompare(b.name));
  const allBooks = useSelector((state) => state.books)

  console.log('Libros', allBooks)
  console.log('Autores', allAuthors)
  const dispatch = useDispatch()
  

  // Estado local para rastrear si cada autor está en modo de edición o no
  const [isEditing, setIsEditing] = useState({})

  // Estado local para rastrear el contenido editado del campo de entrada de texto
  const [editedName, setEditedName] = useState({})
  const [authorName, setAuthorName] = useState('');
  // Manejar el cambio en el contenido editado del campo de entrada de texto
  const handleNameChange = (event, authorId) => {
    const newName = event.target.value
    setEditedName((prevNames) => ({ ...prevNames, [authorId]: newName }))
  }
  const handleSaveAuthor = async (authorId) => {
    // Obtener el nuevo nombre editado del autor
    const newAuthorName = editedName[authorId]

    try {
      await axios.put(`/author/update/${authorId}`, {name:newAuthorName})
      // await dispatch(updateAuthor({ id: authorId, name: newAuthorName }))
    } catch (error) {
      console.error('Error al actualizar el autor:', error)
    }

    // Deshabilitar el modo de edición para el autor
    setIsEditing((prevEditing) => ({ ...prevEditing, [authorId]: false }))
  }
  //Funcion para crear autor
 
  const handlerCreateAutor = () => {
    // Verifica si el nombre del autor no está vacío antes de crearlo
    if (authorName.trim() !== '') {
      console.log('Nombre escrio',authorName);
      dispatch(postAuthor(authorName));
      // Cierra el modal
      document.getElementById('exampleModal2').click();
      // Limpia el campo del nombre del autor
      setAuthorName('');
    }
  };
  //Funcion para eliminar
  const handleDelete = async(e, id) => {
    e.preventDefault();
    const confirmed = window.confirm(
      '¿Estás seguro que quieres eliminar este libro?'
    )
    if (confirmed) {
    await axios.delete('/author/delete/' + id)
    dispatch(getAuthors())
    }
  }
  // Paginado
  const itemsPerPage = 10
  const [currentPage, setCurrentPage] = useState(1)

  // Calcular el índice del primer y último autor en la página actual
  const indexOfLastAuthor = currentPage * itemsPerPage
  const indexOfFirstAuthor = indexOfLastAuthor - itemsPerPage

  // Obtener los autores para la página actual
  const currentAuthors = allAuthors?.slice(
    indexOfFirstAuthor,
    indexOfLastAuthor
  )

  // Calcular el número total de páginas
  const totalAuthors = allAuthors.length
  const totalPages = Math.ceil(totalAuthors / itemsPerPage)

  // Ciclo de vida del componente
  useEffect(() => {
    dispatch(getAuthors())
    dispatch(getAllBooksCopy())
  }, [dispatch])

  // Manejar el cambio de página
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage)
  }

  return (
    <div>
      <div className="d-flex justify-content-end m-2">
        <button
          className={style.buttonAgr}
          data-bs-toggle="modal"
          data-bs-target="#exampleModal2"
          data-bs-whatever="@mdo"
        >
          Agregar 🧑🏽‍🔬
        </button>
      </div>
      <table className="table table-bordered" style={{ borderRadius: '10px' }}>
        <thead style={{ borderRadius: '10px' }}>
          <tr style={{ borderRadius: '10px' }}>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Libros Relacionados</th>
            <th scope="col">Editar Autor</th>
            <th scope="col">Eliminar Autor</th>
          </tr>
        </thead>
        <tbody>
          {currentAuthors.length > 0 ? (
            currentAuthors.map((ele) => (
              <tr key={ele.id}>
                <th>{ele.id}</th>
                {/* Nombre autor */}
                <td>
                  <input
                    disabled={!isEditing[ele.id]}
                    type="text"
                    value={editedName[ele.id] || ele.name}
                    onChange={(e) => handleNameChange(e, ele.id)}
                    style={{ border: 'none', outline: 'none', width: '80%' }}
                  />
                  <button
                    disabled={!isEditing[ele.id]}
                    className="btn btn-success"
                    onClick={() => handleSaveAuthor(ele.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-check-square-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"></path>
                    </svg>
                  </button>
                </td>
                {/* Libros relacionados */}
                <td>
                  <select>
                    <option value="">Libros publicados</option>
                  </select>
                </td>
                {/*Editar Autor */}
                <td>
                  <button
                    className={style.buttonEdi}
                    onClick={() =>
                      setIsEditing((prevEditing) => ({
                        ...prevEditing,
                        [ele.id]: !prevEditing[ele.id],
                      }))
                    }
                    disabled={isEditing[ele.id]}
                  >
                    Editar 🧑🏽‍🔬
                  </button>
                </td>
                
                {/*Eliminar Autor */}
                <td>
                  <button className={style.buttonEli} onClick={(e) => handleDelete(e,ele.id)}>Eliminar 🧑🏽‍🔬</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No se encontraron autores</td>
            </tr>
          )}
        </tbody>
      </table>

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

      {/* Modal para crear Autor */}
      <div
        className="modal fade mt-4"
        id="exampleModal2"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel2"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel2">
                Crear Autor
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handlerCreateAutor}>
                <div className="mb-3">
                  <label className="col-form-label">Nombre del Autor:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AutorView

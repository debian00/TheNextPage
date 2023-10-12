// import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from './librosview.module.css'
import { useEffect, useState } from 'react'
import {
  getBookByAvailability,
  getBookPause,
  getBookRestore,
} from '../../../redux/actions/actionGet'
// import { updateBook } from '../../../redux/actions/actionPut'
import axios from 'axios'
import { deleteBookById } from '../../../redux/actions/actionDelete'
import Card from '../../../Components/CardIndividual/Card'
import { CheckWithLine, Delete, Pencil, Stop } from '../../../utils/Icons'
import { updateBook } from '../../../redux/actions/actionPut'
import { showSuccessNotification } from '../../../utils/Toast'
import Swal from 'sweetalert2'

const Librosview = () => {
  //Hook para traer todos los libros
  const allBooks = useSelector((state) => state.books)

  

  console.log(allBooks)
  //Estado para manejar el modal

  const dispatch = useDispatch()

  //! EDITADO ------------------------

  const [form, setForm] = useState({
    id: '',
    title: '',
    author: [],
    description: '',
    genre: [],
    publicationYear: '',
    images: [],
    sellPrice: '',
    stock: '',
    availability: true,
  })
  //Estado para manejar los errores
  const [errors, setErrors] = useState({
    title: '',
    author: '',
    description: '',
    genre: [],
    publicationYear: '',
    images: [],
    sellPrice: '',
    stock: '',
  })

  const handleUpdate = async (e) => {
    e.preventDefault()
    dispatch(updateBook(form, form.id))
    showSuccessNotification('Libro editado con exito!')
    
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  //! --------------------- NO TOCAR --

  //? BORRADO LOGICO -----------------------

  //* Funcion para eliminar el libro
  const handleDeleteBook = (e, id) => {
    Swal.fire({
      title: '¿Estás seguro que quieres eliminar este libro?',
      text: 'Esta acción es irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteBookById(id))
        showSuccessNotification('¡Operación exitosa!')
      }
    });

  }
  //* Funcion para suspender el libro
  const handlePauseBook = (e, id) => {
    e.preventDefault()
    Swal.fire({
      title: '¿Estás seguro que quieres suspender este libro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, suspender',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(getBookPause(id))
        showSuccessNotification('¡Operación exitosa!');
      }
    });
  }
  //* Funcion para restaurar el libro
  const handleRestoreBook = (e, id) => {
    e.preventDefault()
    Swal.fire({
      title: '¿Estás seguro que quieres restaurar este libro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, restaurar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        // Realiza la acción de restaurar el libro aquí
        showSuccessNotification('¡Operación exitosa!');
        dispatch(getBookRestore(id))
      }
    });
  }

  //? ----------------------- NO TOCAR ---

  //! EDITADO (IMAGEN) -----------------------
  const handleDrop = (event) => {
    event.preventDefault()
    const file = event.dataTransfer.files[0]
    handleFile(file)
  }
  // Función para manejar el archivo seleccionado
  const handleFile = async (file) => {
    console.log(file)

    if (!file.type.includes('image')) {
      setErrors({ ...errors, images: 'Solo puedes subir imagenes' })
      return
    } else {
      setErrors({ ...errors, images: '' })
      const imageURL = URL.createObjectURL(new Blob([file]))
      setForm({ ...form, images: imageURL })

      const fileData = new FormData()
      fileData.append('file', file)
      fileData.append('upload_preset', 'Imagenes')
      fileData.append('cloud_name', 'dkdounmsa')
      const { data } = await axios.post(
        `https://api.cloudinary.com/v1_1/dkdounmsa/image/upload`,
        fileData
      )

      setForm({ ...form, images: data.secure_url })
    }
  }

  const handleDelete = () => {
    setForm({ ...form, images: '' })
  }

  //! ----------------------- NO TOCAR ----

  //Filtrado combinado
  const [filter, setFilter] = useState({
    page: 1,
    availability: 'true',
    order: 'titleAsc',
    title: '',
  })
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Para una transición suave
    })
  }
  //Funcion para ver cual estan disponibles
  const handleFilter = (e) => {
    const { value, name } = e.target
    const newFilter = { ...filter, [name]: value, page: 1 }
    setFilter(newFilter)
  }

  const totalProp = Math.ceil(allBooks.count / 10)

  const nextHandler = () => {
    scrollToTop()
    setFilter((prevFilter) => {
      const nextPage = prevFilter.page + 1
      return { ...prevFilter, page: Math.min(nextPage, totalProp) }
    })
  }

  const prevHandler = () => {
    scrollToTop()
    setFilter((prevFilter) => {
      const prevPage = prevFilter.page - 1
      return { ...prevFilter, page: Math.max(prevPage, 1) }
    })
  }

  useEffect(() => {
    dispatch(getBookByAvailability(filter))
  }, [filter, dispatch])

  //Manejo ciclo de vida del componente con useEffect

  return (
    <div>
      <div className={style.miNavbar}>
        <div className="row">
          <div className="col-2">
            <select
              onChange={handleFilter}
              name="availability"
              className={style.select}
            >
              <option value={'true'}>Disponible</option>
              <option value={'false'}>No Disponible</option>
            </select>
          </div>
          <div className="col-4">
            <select
              className={style.select}
              name="order"
              onChange={handleFilter}
            >
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
              <option value={'createdAtAsc'} name={'order'}>
                Ordernar Fecha libro creacion menor - mayor
              </option>
              <option value={'createdAtDesc'} name={'order'}>
                Ordernar Fecha libro creacion mayor - menor
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
            ></Card>
            <div className={style.buttonsEdit}>
              <button
                disabled={!ele.availability}
                id={style.edit}
                data-bs-target="#exampleModalXl"
                data-bs-toggle="modal"
                onClick={() => {
                  setForm({
                    id: ele.id,
                    title: ele.title,
                    author: ele.author,
                    description: ele.description,
                    genre: ele.genre,
                    publicationYear: ele.publicationYear,
                    images: ele.images[0],
                    sellPrice: ele.sellPrice,
                    stock: ele.stock,
                  })
                }}
              >
                <Pencil width={30} />
              </button>
              <button
                disabled={!ele.availability}
                id={style.delete}
                type="button"
                onClick={(e) => {
                  handleDeleteBook(e, ele.id)
                }}
              >
                <Delete width={30} />
              </button>

              {ele.availability ? (
                <button
                  id={style.stop}
                  type="button"
                  onClick={(e) => {
                    handlePauseBook(e, ele.id)
                  }}
                  disabled={!ele.availability}
                >
                  <Stop width={30} />
                </button>
              ) : (
                <button
                  disabled={ele.availability}
                  type="button"
                  id={style.restore}
                  onClick={(e) => {
                    handleRestoreBook(e, ele.id)
                  }}
                >
                  <CheckWithLine width={30} />
                </button>
              )}
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
      <div
        className={`modal fade ${style.customFade}`}
        id="exampleModalXl"
        aria-labelledby="exampleModalXlLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content ">
            <div className="modal-header">
              <h1 className="modal-title fs-4" id="exampleModalXlLabel">
                Libro Elegido {form.title}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleUpdate}>
                <div className="card mb-12">
                  <div className="row g-0">
                    <div className="col-md-4">
                      {/* Agregar Imagenes */}
                      <div
                        style={{
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          height: '100%',
                        }}
                      >
                        <div
                          className="row "
                          style={{
                            backgroundColor: '#6f5475',
                            width: '100%',
                            height: '85% ',
                            borderTopLeftRadius: '10px',
                            //   borderBottomLeftRadius: "10px",
                          }}
                        >
                          <div
                            className={`d-flex text-center justify-content-center align-items-center ${style.divDrop}`}
                            style={{
                              border: '10px  #ccc',
                              background: 'rgba(255, 255, 255, 0.801)',
                              margin: `20px`,
                              textAlign: 'center',
                              width: '334.77px',
                              position: 'relative',
                              height: '367.88px',
                              borderRadius: '10px',
                            }}
                            onDragEnter={(e) => e.preventDefault()}
                            onDragOver={(e) => e.preventDefault()}
                            onDrop={handleDrop}
                          >
                            {form.images ? (
                              <div>
                                <img
                                  style={{
                                    borderRadius: '10px',
                                    width: '334.77px',
                                    height: '367.88px',

                                    objectFit: 'cover',
                                  }}
                                  src={form.images}
                                  alt={`Image ${form.images}`}
                                />

                                <button
                                  className={`${style.buton}`}
                                  onClick={handleDelete}
                                >
                                  X
                                </button>
                              </div>
                            ) : (
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="50"
                                  height="50"
                                  fill="black"
                                  className="bi bi-card-image"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                  <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z" />
                                </svg>
                                <br></br>
                                Arrastra o haz click{' '}
                                <span
                                  className={style.click}
                                  onClick={() =>
                                    document
                                      .getElementById('imageInput')
                                      .click()
                                  }
                                >
                                  {' '}
                                  aquí
                                </span>
                              </div>
                            )}
                          </div>

                          {errors.images ? (
                            <p
                              style={{
                                color: 'red',
                                visibility: 'visible',
                                marginBottom: '0',
                              }}
                            >
                              {errors.images}
                            </p>
                          ) : (
                            <p style={{ visibility: 'hidden' }}>&nbsp;</p>
                          )}
                          <div
                            style={{
                              backgroundColor: '#6f5475',
                              borderBottomLeftRadius: '10px',
                            }}
                            className="d-flex flex-column justify-content-center align-items-center"
                          >
                            <div>
                              <input
                                type="file"
                                id="imageInput"
                                accept="image/*"
                                className={style.inputfile}
                                onChange={(e) => handleFile(e.target.files[0])}
                              />
                            </div>
                            <div></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-8">
                      <div className="card-body">
                        <div className="row justify-content-center d-flex">
                          <div className="col-6 mb-3">
                            <h5 className="card-title mt-1">
                              Título del Libro
                            </h5>
                            <input
                              type="text"
                              className="form-control"
                              name="title"
                              onChange={handleChange}
                              value={form.title}
                              placeholder="Título"
                              required
                            />
                          </div>
                          <div className="col-6">
                            <h5 className="card-title mt-1">Autor del Libro</h5>
                            <input
                              type="text"
                              className="form-control"
                              name="author"
                              onChange={handleChange}
                              value={form.author}
                              placeholder="Autor"
                              required
                            />
                          </div>
                        </div>
                        <div className="row justify-content-center d-flex">
                          <div className="col-6 mb-3">
                            <h5 className="card-title mt-1">
                              Género del Libro
                            </h5>
                            <input
                              type="text"
                              className="form-control"
                              name="genre"
                              onChange={handleChange}
                              value={form.genre}
                              placeholder="Género"
                              required
                            />
                          </div>
                          <div className="col-6">
                            <h5 className="card-title mt-1">
                              Año de Publicación del Libro
                            </h5>
                            <input
                              type="text"
                              className="form-control"
                              name="publicationYear"
                              onChange={handleChange}
                              value={form.publicationYear}
                              placeholder="Año de Publicación"
                              required
                            />
                          </div>
                        </div>
                        <div className="row justify-content-center d-flex">
                          <div className="col-6 mb-3">
                            <h5 className="card-title mt-1">
                              Precio del Libro
                            </h5>
                            <input
                              type="text"
                              className="form-control"
                              name="sellPrice"
                              onChange={handleChange}
                              value={form.sellPrice}
                              placeholder="Precio"
                              required
                            />
                          </div>
                          <div className="col-6">
                            <h5 className="card-title mt-1">Stock</h5>
                            <input
                              type="text"
                              className="form-control"
                              name="stock"
                              onChange={handleChange}
                              value={form.stock}
                              placeholder="Stock"
                              required
                            />
                          </div>
                        </div>

                        <div className="row justify-content-center d-flex">
                          <div className="col-12 mb-3">
                            <h5 className="card-title mt-1">
                              Descripción del Libro
                            </h5>
                            <textarea
                              className="form-control"
                              name="description"
                              onChange={handleChange}
                              value={form.description}
                              placeholder="Descripción"
                              required
                            ></textarea>
                          </div>
                        </div>
                        <div className="row justify-content-center d-flex">
                          <div className="col-12 mt-3">
                            <button
                              type="submit"
                              className="btn btn-primary"
                              data-bs-dismiss="modal"
                            >
                              Editar Libro
                            </button>
    
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Librosview

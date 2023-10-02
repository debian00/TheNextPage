// import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from './librosview.module.css'
import { useEffect, useState } from 'react'
import { getAllBooksCopy } from '../../../redux/actions/actionGet'
import { updateBook } from '../../../redux/actions/actionPut'
import axios from 'axios'

const Librosview = () => {
  //Hook para traer todos los libros
  const allBooks = useSelector((state) => state.books)
  console.log(allBooks)
  //Estado para manejar el modal
  const [isModalOpen, setIsModalOpen] = useState(false)
  //Estado para el formulario
  const [form, setForm] = useState({
    tittle: '',
    author: [],
    description: '',
    genre: [],
    publicationYear: '',
    images: [],
    sellPrice: '',
    stock: '',
  })
  //Estado para manejar los errores
  const [errors, setErrors] = useState({
    tittle: '',
    author: [],
    description: '',
    genre: [],
    publicationYear: '',
    images: [],
    sellPrice: '',
    stock: '',
  })

  const dispatch = useDispatch()
  //Funcion para recortar la cantinda de letras en la descripcion
  const descripctionCut = (descripcion) => {
    if (descripcion.length > 90) {
      const newDescription = descripcion.split('').slice(0, 80).join('')
      return <div>{newDescription}</div>
    }
    return <div>{descripcion}</div>
  }
  //Funcion para recortar la cantinda de letras en la descripcion
  const tittleCut = (tittle) => {
    if (tittle.length > 20) {
      const newTittle = tittle.split('').slice(0, 20).join('')
      return <div>{newTittle}</div>
    }
    return <div>{tittle}</div>
  }
  //Funcion para enviar la info
  const handleUpdate = async (e) => {
    e.preventDefault()
    await dispatch(updateBook(form))
  }
  //Funcion para manejar los campos
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }
  //Funcio para manejar la imagen de la portada
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
  //Funcion para eliminar la imagen seleccionada
  const handleDelete = () => {
    setForm({ ...form, images: '' })
  }
  //Manejo ciclo de vida del componente con useEffect
  useEffect(() => {
    dispatch(getAllBooksCopy())
  }, [])

  return (
    <div>
      {/* <div className={style.miNavbar}>
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
      </div> */}
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
            <hr className={style.cardDivider} />
            <div className={style.cardFooter}>
              <div className={style.cardPrice}>
                <span>$</span> {ele.sellPrice}
              </div>
              <button
                className={style.cardBtn}
                onClick={() => {
                  setIsModalOpen(true)
                  setForm({
                    tittle: ele.title,
                    author: ele.author, 
                    description: ele.description,
                    genre: ele.genre, 
                    publicationYear: ele.publicationYear,
                    images: ele.images,
                    sellPrice: ele.sellPrice,
                    stock: ele.stock,
                  })
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="7"
                  height="9"
                  fill="currentColor"
                  className="bi bi-pencil-fill"
                  viewBox="0 0 16 16"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModalXl"
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
      <div
        className={`modal fade ${style.customFade}`}
        id="exampleModalXl"
        aria-labelledby="exampleModalXlLabel"
        aria-hidden="true"
        style={{ display: isModalOpen ? 'block' : 'none' }}
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content ">
            <div className="modal-header">
              <h1 className="modal-title fs-4" id="exampleModalXlLabel">
                Libro Elegido {form.tittle}
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
                          <div className="col-6">
                            <h5 className="card-title mt-1">
                              Título del Libro
                            </h5>
                            <input
                              type="text"
                              className="form-control"
                              name="tittle"
                              onChange={handleChange}
                              value={form.tittle}
                              placeholder="Título"
                              required
                            />
                          </div>
                        </div>
                        <div className="row justify-content-center d-flex">
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
                          <div className="col-6">
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
                        </div>
                        <div className="row justify-content-center d-flex">
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
                          <div className="col-6">
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
                        </div>
                        <div className="row justify-content-center d-flex">
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
                          <div className="col-6">
                            <h5 className="card-title mt-1">Disponibilidad</h5>
                            <input
                              type="text"
                              className="form-control"
                              name="disponibilidad"
                              placeholder="Disponibilidad"
                              required
                            />
                          </div>
                        </div>
                        <div className="row justify-content-center d-flex">
                          <div className="col-12">
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
                            <button type="submit" className="btn btn-primary">
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

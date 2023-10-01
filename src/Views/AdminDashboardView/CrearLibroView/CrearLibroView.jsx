// import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import style from './crearlibro.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { createBook } from '../../../redux/actions/actionPost'
import { getGenres } from '../../../redux/actions/actionGet'

const CrearLibroView = () => {
  //Traer todos los gener
  const allGenres = useSelector((state) => state.genres)
  console.log('Tdosos', allGenres)
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
  console.log('formulario', form)
  const dispatch = useDispatch()
  //Funcion para enviar los datos
  const handleSubmit = async (e) => {
    e.preventDefault()
    await dispatch(createBook(form))
    //Volvemos a dejar vacio el formulario
    setForm({
      tittle: '',
      author: [],
      description: '',
      genre: [],
      publicationYear: '',
      images: [],
      sellPrice: '',
      stock: '',
    })
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
  //Montamos el componente para traer los genres
  useEffect(() => {
    dispatch(getGenres())
  }, [])
  return (
    <div>
      <h1>Componente Crear Libro</h1>
      <form onSubmit={handleSubmit}>
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
                      width: '295px',
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
                            width: '250.77px',
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
                            document.getElementById('imageInput').click()
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
                    <h5 className="card-title mt-1">Título del Libro</h5>
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
                    <h5 className="card-title mt-1">Género del Libro</h5>
                    <select
                      className="form-select"
                      name="genre"
                      onChange={handleChange}
                      value={form.genre}
                      required
                    >
                      <option value="">Selecciona un género</option>
                      {allGenres.map((ele) => (
                        <option key={ele.id} value={ele.id}>
                          {ele.name}
                        </option>
                      ))}
                    </select>
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
                    <h5 className="card-title mt-1">Precio del Libro</h5>
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
                    <h5 className="card-title mt-1">Descripción del Libro</h5>
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
                      Crear Libro
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CrearLibroView

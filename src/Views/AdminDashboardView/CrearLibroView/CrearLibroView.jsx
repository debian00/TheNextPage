// import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import style from './crearlibro.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { createBook } from '../../../redux/actions/actionPost'
import { getAuthors, getGenres } from '../../../redux/actions/actionGet'
import { showSuccessNotification } from '../../../utils/Toast'

const CrearLibroView = () => {
  //Traer todos los gener
  const allGenres = useSelector((state) => state.genres)
  const allAuthor = useSelector((state) => state.authors)
  console.log('Tdosos', allGenres)
  //Estado para el formulario
  const [form, setForm] = useState({
    title: '',
    author: [],
    description: '',
    genre: [],
    publicationYear: '',
    images: [],
    sellPrice: '',
    stock: '',
  })

  const [errors, setErrors] = useState({
    title: '',
    author: [],
    description: '',
    genre: [],
    publicationYear: '',
    images: [],
    sellPrice: '',
    stock: '',
  })
  console.log('formulario', form)
  const [isChecked, setIsChecked] = useState(false)
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked) // Invierte el estado actual
  }

  const dispatch = useDispatch()
  //Funcion para enviar los datos
  const handleSubmit = async (e) => {
    e.preventDefault()
    await dispatch(createBook(form))
    //Volvemos a dejar vacio el formulario
    setForm({
      title: '',
      author: '',
      description: '',
      genre: [],
      publicationYear: '',
      images: [],
      sellPrice: '',
      stock: '',
      availability: true,
    })
    showSuccessNotification('Libro creado con exito')
  }

  //Funcion para manejar los campos
  const handleChange = (e) => {
    const { name, value } = e.target
    if (name == 'genre') {
      setForm({
        ...form,
        genre: [...form.genre, Number(value)],
      })
    } else {
      setForm({
        ...form,
        [name]: value,
      })
    }
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
    dispatch(getAuthors())
  }, [])
  const filteredGenres = allGenres.filter((genre) =>
    form.genre.includes(genre.id)
  )
  return (
    <div>
      <h1
        className=" text-center fw-bold lh-base"
        style={{
          fontFamily: 'Avenir, sans-serif',
          backgroundColor: '#6F5475',
          borderColor: '#6F5475',
          color: '#ffffff',
        }}
      >
        Agregar un nuevo libro
      </h1>

      <form onSubmit={handleSubmit}>
        <div className={` card mb-12`}>
          <div className={` row g-0`} style={{ margin: '0' }}>
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
                    margin: '0',
                    //   borderBottomLeftRadius: "10px",
                  }}
                >
                  <div
                    className={`d-flex text-center justify-content-center align-items-center ${style.divDrop}`}
                    style={{
                      border: '10px  #ccc',
                      background: 'rgba(255, 255, 255, 0.801)',
                      textAlign: 'center',
                      position: 'relative',
                      height: '367.88px',
                      padding: '0',
                    }}
                    onDragEnter={(e) => e.preventDefault()}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={handleDrop}
                  >
                    {form.images.length ? (
                      <div>
                        <img
                          style={{
                            width: '100%',
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

                  <div
                    style={{
                      backgroundColor: '#6f5475',
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
                  </div>
                </div>
              </div>
            </div>

            <div className={` col-md-8`}>
              <div className="card-body">
                <div className="row justify-content-center d-flex">
                  <div className="col-6 mb-3">
                    <h5 className="card-title mt-1">Título del Libro</h5>
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
                    <h5 className="card-title mt-1">Género del Libro</h5>
                    <select
                      className="form-select"
                      name="genre"
                      onChange={handleChange}
                      value={form.genre}
                    >
                      <option value="">Selecciona un género</option>
                      {allGenres.map((ele) => (
                        <option key={ele.id} value={ele.id}>
                          {ele.name}
                        </option>
                      ))}
                    </select>
                    {form.genre.length != 0 && (
                      <div className={style.genres}>
                        {filteredGenres.map((genre) => (
                          <p key={genre.id}>{genre.name}</p>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="col-6 mb-3" style={{ gridArea: 'autor' }}>
                    <h5 className="card-title mt-1">Autor del Libro</h5>
                    {!isChecked ? (
                      <select
                        className="form-select"
                        name="author"
                        onChange={handleChange}
                        value={form.author}
                        required
                      >
                        <option value="">Selecciona un autor</option>
                        {allAuthor.map((ele) => (
                          <option key={ele.id} value={ele.name}>
                            {ele.name}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <div>
                        <div className="d-flex">
                          <input
                            type="text"
                            className="form-control"
                            name="author"
                            value={form.author}
                            onChange={handleChange}
                            placeholder="Agregar nuevo autor"
                            required
                          />
                        </div>
                      </div>
                    )}
                    <label>
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                      />
                      &nbsp; ¿No se encuentra el autor? ¡Agrégalo!
                    </label>
                  </div>
                </div>
                <div className="row justify-content-center d-flex">
                  <div className="col-6 mb-3">
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
                  {/* <div className="col-6">
                    <h5 className="card-title mt-1">Disponibilidad</h5>
                    <input
                      type="text"
                      className="form-control"
                      name="disponibilidad"
                      placeholder="Disponibilidad"
                      required
                    />
                  </div> */}
                </div>
                <div className="row justify-content-center d-flex">
                  <div className="col-12 mb-3">
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
                    <button
                      type="submit"
                      className="btn btn-primary"
                      style={{
                        backgroundColor: '#6F5475',
                        borderColor: '#6F5475',
                        color: '#ffffff',
                      }}
                    >
                      Crear libro
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

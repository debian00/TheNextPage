// import React from 'react'

const CrearLibroView = () => {
  return (
    <div>
      <h1>Componente Crear Libro</h1>
      <form action="procesar_formulario.php" method="POST"> 
        <div className="card mb-12">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="..." className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <div className="row justify-content-center d-flex">
                            <div className="col-6">
                                <h5 className="card-title mt-1">Título del Libro</h5>
                                <input type="text" className="form-control" name="titulo" placeholder="Título" required />
                            </div>
                        </div>
                        <div className="row justify-content-center d-flex">
                            <div className="col-6">
                                <h5 className="card-title mt-1">Autor del Libro</h5>
                                <input type="text" className="form-control" name="autor" placeholder="Autor" required />
                            </div>
                            <div className="col-6">
                                <h5 className="card-title mt-1">Género del Libro</h5>
                                <input type="text" className="form-control" name="genero" placeholder="Género" required />
                            </div>
                        </div>
                        <div className="row justify-content-center d-flex">
                            <div className="col-6">
                                <h5 className="card-title mt-1">Año de Publicación del Libro</h5>
                                <input type="text" className="form-control" name="ano_publicacion" placeholder="Año de Publicación" required />
                            </div>
                            <div className="col-6">
                                <h5 className="card-title mt-1">Precio del Libro</h5>
                                <input type="text" className="form-control" name="precio" placeholder="Precio" required />
                            </div>
                        </div>
                        <div className="row justify-content-center d-flex">
                            <div className="col-6">
                                <h5 className="card-title mt-1">Stock</h5>
                                <input type="text" className="form-control" name="stock" placeholder="Stock" required />
                            </div>
                            <div className="col-6">
                                <h5 className="card-title mt-1">Disponibilidad</h5>
                                <input type="text" className="form-control" name="disponibilidad" placeholder="Disponibilidad" required />
                            </div>
                        </div>
                        <div className="row justify-content-center d-flex">
                            <div className="col-12">
                                <h5 className="card-title mt-1">Descripción del Libro</h5>
                                <textarea className="form-control" name="descripcion" placeholder="Descripción" required></textarea>
                            </div>
                        </div>
                        <div className="row justify-content-center d-flex">
                            <div className="col-12 mt-3">
                                <button type="submit" className="btn btn-primary">Crear Libro</button>
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

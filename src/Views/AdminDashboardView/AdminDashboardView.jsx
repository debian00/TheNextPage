// import React from 'react'
import style from './admindashboard.module.css'
import perfil from '../../assets/imghome/perfil.jpg'

import { useEffect, useState } from 'react'
import EditarPerfilView from '../PerfilUserView/EditarPerfilView/EditarPerfilView'
import UsersView from './UsersView/UsersView'
import Librosview from './LibrosView/LibrosView'
import CrearLibroView from './CrearLibroView/CrearLibroView'

const AdminDashboardView = () => {
  //Manejo de componentes
  const [componenteActual, setComponenteActual] = useState('A')

  //Manejo de color del perfil usuario
  const [color, setColor] = useState('#59415b')
  const [selectedLink, setSelectedLink] = useState(null)

  //Manejar la opcion seleccionada mediante color
  const handleSelect = (linkName) => {
    setComponenteActual(linkName)
    setColor('#59415b')
    setSelectedLink(linkName)
  }
  useEffect(() => {
    setSelectedLink('A')
    setColor('#59415b')
  }, [])

  return (
    <div>
      <div className={`${style.panel} row`}>
        {/* Perfil admin Lista de opciones*/}
        <div className={`${style.profilePanel} col-2`}>
          <div className={`${style.menu}`}>
            <div className={style.profile}>
              <img src={perfil} alt="Foto de perfil" />
            </div>
            <h4>Nombre Admin</h4>
            <ul className={style.menuList}>
              <li>
                <a
                  onClick={() => {
                    handleSelect('A')
                  }}
                  href="#"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    borderRadius: '15px',
                    height: '70px',
                    width: '100%',
                    paddingInline: '5px',
                    backgroundColor: selectedLink === 'A' ? color : 'white',
                    color: selectedLink === 'A' ? 'white' : 'black',
                  }}
                >
                  {' '}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill={selectedLink === 'A' ? 'white' : 'black'}
                    className="bi bi-person-fill-gear"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Zm9.886-3.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382l.045-.148ZM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
                  </svg>{' '}
                  &nbsp; Editar Perfil
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    handleSelect('B')
                  }}
                  href="#"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    borderRadius: '15px',
                    height: '70px',
                    width: '100%',
                    paddingInline: '5px',
                    backgroundColor: selectedLink === 'B' ? color : 'white',
                    color: selectedLink === 'B' ? 'white' : 'black',
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill={selectedLink === 'B' ? 'white' : 'black'}
                    className="bi bi-people-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                  </svg>{' '}
                  &nbsp; Usuarios
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    handleSelect('C')
                  }}
                  href="#"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    borderRadius: '15px',
                    height: '70px',
                    width: '100%',
                    paddingInline: '5px',
                    backgroundColor: selectedLink === 'C' ? color : 'white',
                    color: selectedLink === 'C' ? 'white' : 'black',
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill={selectedLink === 'C' ? 'white' : 'black'}
                    className="bi bi-journals"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2z" />
                    <path d="M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0z" />
                  </svg>{' '}
                  &nbsp; Libros
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    handleSelect('D')
                  }}
                  href="#"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    borderRadius: '15px',
                    height: '70px',
                    width: '100%',
                    paddingInline: '5px',
                    backgroundColor: selectedLink === 'D' ? color : 'white',
                    color: selectedLink === 'D' ? 'white' : 'black',
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill={selectedLink === 'D' ? 'white' : 'black'}
                    className="bi bi-tags-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2zm3.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                    <path d="M1.293 7.793A1 1 0 0 1 1 7.086V2a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l.043-.043-7.457-7.457z" />
                  </svg>{' '}
                  &nbsp; Ofertas
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    handleSelect('E')
                  }}
                  href="#"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    borderRadius: '15px',
                    height: '70px',
                    width: '100%',
                    paddingInline: '5px',
                    backgroundColor: selectedLink === 'E' ? color : 'white',
                    color: selectedLink === 'E' ? 'white' : 'black',
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill={selectedLink === 'E' ? 'white' : 'black'}
                    className="bi bi-journal-plus"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5z"
                    />
                    <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                    <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
                  </svg>{' '}
                  &nbsp; Publicar Libro
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    handleSelect('F')
                  }}
                  href="#"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    borderRadius: '15px',
                    height: '70px',
                    width: '100%',
                    paddingInline: '5px',
                    backgroundColor: selectedLink === 'F' ? color : 'white',
                    color: selectedLink === 'F' ? 'white' : 'black',
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill={selectedLink === 'F' ? 'white' : 'black'}
                    className="bi bi-box-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                    />
                  </svg>{' '}
                  &nbsp; Salir
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Contenido del admin */}
        {componenteActual === 'A' ? (
          <div className={`col-9 ${style.content}`}>
            <EditarPerfilView />
          </div>
        ) : componenteActual === 'B' ? (
          <div className={`col-9 ${style.content}`}>
            <UsersView />
          </div>
        ) : componenteActual === 'C' ? (
          <div className={`col-9 ${style.content}`}>
            <Librosview />
          </div>
        ) : componenteActual === 'E' ? (
          <div className={`col-9 ${style.content}`}>
            <CrearLibroView />
          </div>
        ) : (
          <h1>No hay nada</h1>
        )}
      </div>
    </div>
  )
}

export default AdminDashboardView

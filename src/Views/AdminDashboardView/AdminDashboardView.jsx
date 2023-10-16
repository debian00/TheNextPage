// import React from 'react'
import style from './admindashboard.module.css'
// import perfil from '../../assets/imghome/pngtree-user-vector-avatar-png-image_1541962.jpg'

import { useEffect, useState } from 'react'
import UsersView from './UsersView/UsersView'
import Librosview from './LibrosView/LibrosView'
import CrearLibroView from './CrearLibroView/CrearLibroView'
import PromocionLibroView from './PromocionLibrosView/PromocionLibroView'
import { Link } from 'react-router-dom'
import EstadisticasView from './EstadisticasView/EstadisticasView'

const AdminDashboardView = () => {
  //Manejo de componentes
  const [componenteActual, setComponenteActual] = useState('A')
  const token = localStorage.getItem('token')
  const user = JSON.parse(localStorage.getItem('user'))
  console.log('inforusres', user)

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
      <div className={`${style.panel} row`} style={{ marginRight: '0' }}>
        {/* Perfil admin Lista de opciones*/}
        <div className={`${style.profilePanel} col-2`}>
          <div className={`${style.menu}`}>
            {token ? (
              <div>
                <div className={style.profile}>
                  <img src={user.profilePic} alt="Foto de perfil" />
                </div>
                <div>
                  <h4>{user.userName}</h4>
                </div>
              </div>
            ) : null}
            <ul className={style.menuList}>
              <li>
                <Link
                  onClick={() => {
                    handleSelect('A')
                  }}
                  href="#"
                  style={{
                    display: 'flex',
                    alignItems: 'center',              
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
                    className="bi bi-graph-up-arrow"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z"
                    />
                  </svg>
                  &nbsp; Mis estadisticas
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    handleSelect('B')
                  }}
                  href="#"
                  style={{
                    display: 'flex',
                    alignItems: 'center',                    
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
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    handleSelect('C')
                  }}
                  href="#"
                  style={{
                    display: 'flex',
                    alignItems: 'center',                   
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
                </Link>
              </li>

              <li>
                <Link
                  onClick={() => {
                    handleSelect('E')
                  }}
                  href="#"
                  style={{
                    display: 'flex',
                    alignItems: 'center',                    
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
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    handleSelect('D')
                  }}
                  href="#"
                  style={{
                    display: 'flex',
                    alignItems: 'center',                    
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
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Contenido del admin */}
        {componenteActual === 'A' ? (
          <div className={`col-9 ${style.content}`}>
            <EstadisticasView />
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
        ) : componenteActual === 'D' ? (
          <div className={`col-9 ${style.content}`}>
            <PromocionLibroView />
          </div>
        ) : (
          <div className={`col-9 ${style.content}`}>
            <h1>SALIR</h1>
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminDashboardView

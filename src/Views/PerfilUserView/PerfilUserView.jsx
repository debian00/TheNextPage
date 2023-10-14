// import React from 'react';
import style from './perfiluserview.module.css'
// import perfil from '../../assets/imghome/pngtree-user-vector-avatar-png-image_1541962.jpg'
import EditarPerfilView from './EditarPerfilView/EditarPerfilView'
import { useEffect, useState } from 'react'
import FavoritosView from './FavoritosView/FavoritosView'
import ComprasView from './ComprasView/ComprasView'
import ReseñasView from './ReseñasView/ReseñasView'
import {  signOut } from 'firebase/auth'
import { auth } from '../../redux/actions/firebase.js'
import { useNavigate } from 'react-router-dom'

const PerfilUserdView = () => {
  //Manejo de componentes
  const [componenteActual, setComponenteActual] = useState('A')
  const token = localStorage.getItem('token')
  const user = JSON.parse(localStorage.getItem('user'))
  const navigate = useNavigate()
  //Manejo de color del perfil usuario
  const [color, setColor] = useState('#59415b')
  const [selectedLink, setSelectedLink] = useState(null)

  
  const LogOut = async () => {
     await signOut(auth);
    localStorage.removeItem('token'),
    localStorage.removeItem('user')
    navigate("/home")
  }
  //Manejar la opcion seleccionada mediante color
  const handleSelect = (linkName) => {
    setComponenteActual(linkName)
    setColor('#59415b')
    setSelectedLink(linkName)
  }
  useEffect(() => {
    console.log(auth);
    setSelectedLink('A')
    setColor('#59415b')
  }, [])
  return (
    <div>
      <div className={`${style.panel} row`}>
        {/* Perfil usuario Lista de opciones*/}
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
                <a
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
                    className="bi bi-bookmark-heart-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 15.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v13.5zM8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z" />
                  </svg>{' '}
                  &nbsp; Mis Favoritos
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
                    className="bi bi-layout-text-window-reverse"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13 6.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5zm0 3a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5zm-.5 2.5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5z" />
                    <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM2 1a1 1 0 0 0-1 1v1h14V2a1 1 0 0 0-1-1H2zM1 4v10a1 1 0 0 0 1 1h2V4H1zm4 0v11h9a1 1 0 0 0 1-1V4H5z" />
                  </svg>{' '}
                  &nbsp; Mis reseñas &nbsp;
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill={selectedLink === 'C' ? 'white' : '#d82424'}
                    className="bi bi-bell-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                  </svg>
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
                    className="bi bi-bag-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z" />
                  </svg>{' '}
                  &nbsp; Mis compras
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
            <div>
              {auth.currentUser ? 
              (<span> Tu cuenta está asociada con :</span>
                )
              : null
              }
            </div>
          </div>
        </div>
        {/* Contenido del usuario */}
        {componenteActual === 'A' ? (
          <div className={`col-9 ${style.content}`}>
            <EditarPerfilView />
          </div>
        ) : componenteActual === 'B' ? (
          <div className={`col-9 ${style.content}`}>
            <FavoritosView />
          </div>
        ) : componenteActual === 'C' ? (
          <div className={`col-9 ${style.content}`}>
            <ReseñasView />
          </div>
        ) : componenteActual === 'D' ? (
          <div className={`col-9 ${style.content}`}>
            <ComprasView />
          </div>
        ) : componenteActual === 'E' ? (
          <div>
            <h5>Estas seguro que quieres salir?</h5>
            <div>
              <button
                type="button"
                onClick={
                    LogOut
                }
              >
                Si
              </button>
              <button type="button">No </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default PerfilUserdView

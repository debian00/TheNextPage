// import React from 'react'

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers, searchUserByName } from '../../../redux/actions/actionGet'
import {
  adminToUser,
  restoreUserById,
  stopUserById,
  userToAdmin,
} from '../../../redux/actions/actionPatch'
import { deleteUserById } from '../../../redux/actions/actionDelete'
import style from './usersview.module.css'
import { postPromotion } from '../../../redux/actions/actionPost'

const UsersView = () => {
  //Estado para traer todos los usuarios
  const users = useSelector((state) => state.users)
  const [refresh, setRefresh] = useState()

  //Hook useDispatch
  const dispatch = useDispatch()

  //Funcion para suspender usuario
  const handlePauseUser = (e, id) => {
    e.preventDefault()
    const confirmed = window.confirm(
      '¿Estás seguro que quieres suspender este usuario?'
    )
    if (confirmed) {
      setRefresh(getAllUsers())
      dispatch(stopUserById(id))
    }
  }
  //Funcion para reactivaar usuario
  const handlerRestoreUser = (e, id) => {
    e.preventDefault()
    const confirmed = window.confirm('¿Deseas reactivar este usuario?')
    if (confirmed) {
      setRefresh(getAllUsers())
      dispatch(restoreUserById(id))
    }
  }
  //Funcion para eliminar usuario
  const handleDelete = (e, id) => {
    e.preventDefault()
    const confirmed = window.confirm(
      '¿Estás seguro que quieres eliminar este usuario?'
    )
    if (confirmed) {
      setRefresh(getAllUsers())
      dispatch(deleteUserById(id))
    }
  }

  //Funcion para buscar por nombre y email
  const handlerInputChange = (event) => {
    const newName = event.target.value
    dispatch(searchUserByName(newName))
  }

  //Funcion para dar permisos de admin al usuario
  const handlerUserToAdmin = (e, id) => {
    const confirmed = window.confirm(
      '¿Estas seguro que quieres cambiar el rol a admin?'
    )
    if (confirmed) {
      setRefresh(getAllUsers())
      dispatch(userToAdmin(id))
    }
  }

  //Funcion para pasar de usuario a admin
  const handlerAdminToUser = (e, id) => {
    const confirmed = window.confirm(
      '¿Estas seguro que quieres cambiar el rol a usuario?'
    )
    if (confirmed) {
      setRefresh(getAllUsers())
      dispatch(adminToUser(id))
    }
  }
  //Funcion para enviar las promociones
  const handleSendMessage = (email) => {
    const confirmed = window.confirm(
      '¿Deseas enviar esta promocion al usuario?'
    )
    if (confirmed) {
    dispatch(postPromotion(email))
    }
  }

  //Ciclo de vida del componente con el useEffect
  useEffect(() => {
    dispatch(getAllUsers())
  }, [refresh])
  return (
    <div>
      <div className="col-md-6 mt-4 justify-content-center d-flex">
        <input
          type="text"
          id="myInput"
          className={style.myInput}
          name="search"
          onChange={(e) => handlerInputChange(e)}
          placeholder="🔍   Search for names.."
        />
      </div>
      <table className="table table-bordered" style={{ borderRadius: '10px' }}>
        <thead style={{ borderRadius: '10px' }}>
          <tr style={{ borderRadius: '10px' }}>
            <th scope="col">#</th>
            <th scope="col">Avatar</th>
            <th scope="col">Usuario</th>
            <th scope="col">Nombre</th>
            <th scope="col">Email</th>
            <th scope="col">Tipo usuario</th>
            <th scope="col">Cambiar rol a</th>
            <th scope="col">Promocion</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users?.map((ele, index) => (
              <tr key={ele.id}>
                <th
                  style={{ backgroundColor: ele.hide ? '#edd55e' : '#9bdb92' }}
                  scope="row"
                >
                  {index + 1}
                </th>
                {/* Avatar */}
                <td
                  style={{ backgroundColor: ele.hide ? '#edd55e' : '#9bdb92' }}
                >
                  <img
                    src={ele.profilePic}
                    alt=""
                    style={{
                      width: '35px',
                      height: '35px',
                      borderRadius: '100%',
                    }}
                  />
                </td>
                {/* Usuario Name */}
                <td
                  style={{ backgroundColor: ele.hide ? '#edd55e' : '#9bdb92' }}
                >
                  {ele.userName}
                </td>
                {/* Nombre Completo */}
                <td
                  style={{ backgroundColor: ele.hide ? '#edd55e' : '#9bdb92' }}
                >
                  {ele.name}
                </td>
                {/* Email */}
                <td
                  style={{ backgroundColor: ele.hide ? '#edd55e' : '#9bdb92' }}
                >
                  {ele.email}
                </td>
                {/* Tipo Usuario */}
                <td
                  style={{ backgroundColor: ele.hide ? '#edd55e' : '#9bdb92' }}
                >
                  {ele.userType === 'admin' ? (
                    <button type="button" className="btn btn-danger" disabled>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="black"
                        className="bi bi-person-fill-gear"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Zm9.886-3.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382l.045-.148ZM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"></path>
                      </svg>
                      Admin
                    </button>
                  ) : (
                    <button type="button" className="btn btn-success" disabled>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="black"
                        className="bi bi-person-fill-up"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.354-5.854 1.5 1.5a.5.5 0 0 1-.708.708L13 11.707V14.5a.5.5 0 0 1-1 0v-2.793l-.646.647a.5.5 0 0 1-.708-.708l1.5-1.5a.5.5 0 0 1 .708 0ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
                        <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z"></path>
                      </svg>
                      User
                    </button>
                  )}
                </td>
                {/* Rol */}
                <td
                  style={{ backgroundColor: ele.hide ? '#edd55e' : '#9bdb92' }}
                >
                  {ele.userType === 'user' ? (
                    <button
                      onClick={(e) => handlerUserToAdmin(e, ele.id)}
                      type="button"
                      className="btn btn-danger"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="black"
                        className="bi bi-person-fill-gear"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Zm9.886-3.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382l.045-.148ZM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"></path>
                      </svg>
                      Admin
                    </button>
                  ) : (
                    <button
                      onClick={(e) => handlerAdminToUser(e, ele.id)}
                      type="button"
                      className="btn btn-success"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="black"
                        className="bi bi-person-fill-up"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.354-5.854 1.5 1.5a.5.5 0 0 1-.708.708L13 11.707V14.5a.5.5 0 0 1-1 0v-2.793l-.646.647a.5.5 0 0 1-.708-.708l1.5-1.5a.5.5 0 0 1 .708 0ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
                        <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z"></path>
                      </svg>
                      User
                    </button>
                  )}
                </td>
                {/* Promocion */}
                <td
                  style={{ backgroundColor: ele.hide ? '#edd55e' : '#9bdb92' }}
                >
                  <button type="button" className="btn btn-info" onClick={() => handleSendMessage(ele.email)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="Black"
                      className="bi bi-gift-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zm6 4v7.5a1.5 1.5 0 0 1-1.5 1.5H9V7h6zM2.5 16A1.5 1.5 0 0 1 1 14.5V7h6v9H2.5z"></path>
                    </svg>
                    
                  </button>
                </td>
                {/* Acciones */}
                <td
                  style={{ backgroundColor: ele.hide ? '#edd55e' : '#9bdb92' }}
                >
                  <button
                    className="btn btn-danger"
                    onClick={(e) => handleDelete(e, ele.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-x-square-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 1 1 .708-.708z"></path>
                    </svg>
                  </button>
                  <button
                    className="btn btn-warning"
                    onClick={(e) => handlePauseUser(e, ele.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-pause-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5zm3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5z"></path>
                    </svg>
                  </button>
                  <button
                    className="btn btn-success"
                    onClick={(e) => handlerRestoreUser(e, ele.id)}
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
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9">No se encontraron usuarios</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default UsersView

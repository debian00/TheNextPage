/* eslint-disable react/no-unknown-property */
/* eslint-disable react/display-name */
import React, { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import style from './Login.module.css'
import {
  getLogin,
  handleGoogleLogin,
  handleGitHubLogin,
} from '../../redux/actions/actionPost'
import { Modal } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import '../../Views/Login&Register/Login&Register.css'
import 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../../redux/actions/actionGet'
import Swal from 'sweetalert2'

const Login = React.forwardRef((props, ref) => {
  const users = useSelector((state) => state.users)
  console.log('Usuarios', users)
  const dispatch = useDispatch()
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm()
  const [modal, setModal] = useState({ access: false, body: '' })
  const navigate = useNavigate()
  const [passwordType, setPasswordType] = useState(false)

  const onSubmit = handleSubmit((data) => {
    console.log('info papa', data.email)
    console.log('Usuario', users)
    const existUser = users.find((user) => user.email === data.email)
    console.log('puede pasar el usuario', existUser)

    if (!existUser) {
      // Muestra un SweetAlert para indicar que el usuario no se encuentra registrado
      Swal.fire({
        icon: 'error',
        title: 'Usuario no registrado',
        text: 'El usuario no se encuentra registrado en el sistema',
      })
      return
    }

    if (existUser.hide) {
      // Muestra un SweetAlert para indicar que el usuario está suspendido
      Swal.fire({
        icon: 'error',
        title: 'Usuario suspendido',
        text: 'El usuario se encuentra suspendido',
      })
      return
    }

    // Si no se cumple ninguna de las condiciones anteriores, realiza el inicio de sesión
    getLogin(data, setModal, navigate)
  })

  const handleNextPage = () => {
    if (ref.current) {
      ref.current.pageFlip().flipNext('bottom')
    }
  }

  const handleHide = (e) => {
    const icon = e.target.id

    if (icon === 'hide1') {
      if (passwordType) {
        setPasswordType(false)
      } else {
        setPasswordType(true)
      }
    } else if (icon === 'hide2') {
      if (passwordType2) {
        setPasswordType2(false)
      } else {
        setPasswordType2(true)
      }
    }
  }

  const iconVisible = (
    <svg
      style={{ pointerEvents: 'none' }}
      onClick={handleHide}
      xmlns="http://www.w3.org/2000/svg"
      id="hide1"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-eye-fill"
      viewBox="0 0 16 16"
    >
      <path
        id="hide1"
        onClick={handleHide}
        d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"
      />
      <path
        id="hide1"
        onClick={handleHide}
        d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
      />
    </svg>
  )

  const iconInvisible = (
    <svg
      onClick={handleHide}
      xmlns="http://www.w3.org/2000/svg"
      id="hide1"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-eye-slash-fill"
      viewBox="0 0 16 16"
    >
      <path
        id="hide1"
        d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"
        onClick={handleHide}
      />
      <path
        id="hide1"
        d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"
        onClick={handleHide}
      />
    </svg>
  )
  useEffect(() => {
    dispatch(getAllUsers())
  }, [])
  return (
    <div ref={ref}>
      <div style={{ height: '100%' }} className={style.form}>
        <form onSubmit={onSubmit}>
          <fieldset
            className={` d-flex flex-column justify-content-center align-items-center text-center ${style.formLogin}`}
          >
            <legend className={style.legend}>Login</legend>
            <div className="d-flex ">
              <div className=" d-flex flex-row mb-4">
                <label htmlFor="email" className={style.label}>
                  EMAIL :{' '}
                </label>
                <input
                  className={style.inputs}
                  placeholder="Escribe tu email aqui"
                  {...register('email', {
                    required: {
                      value: true,
                      message: 'Debes escribir un email',
                    },
                    pattern: {
                      value:
                        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                      message: 'Debe ser un email válido',
                    },
                  })}
                ></input>
              </div>
              <div className="d-flex flex-row">
                {errors.email ? (
                  <p
                    style={{
                      color: 'red',
                      fontSize: '15px',
                      visibility: 'visible',
                      margin: 'none',
                      zIndex: '1',
                    }}
                  >
                    {errors.email.message}
                  </p>
                ) : (
                  <p style={{ visibility: 'hidden' }}> &nbsp; </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="password" className={style.label}>
                PASSWORD :{' '}
              </label>
              <input
                className={style.inputs}
                {...register('password', {
                  required: {
                    value: true,
                    message: 'Escribe tu contraseña',
                  },
                })}
                placeholder="Tu contraseña aquí..."
                type={passwordType ? 'text' : 'password'}
              ></input>

              <button
                class={style.iconPassword}
                id="hide1"
                type="button"
                onClick={(e) => handleHide(e)}
              >
                {passwordType ? iconVisible : iconInvisible}
              </button>

              {errors.password ? (
                <p
                  style={{
                    color: 'red',
                    fontSize: '15px',
                    visibility: 'visible',
                    margin: 'none',
                    zIndex: '1',
                  }}
                >
                  {errors.password.message}
                </p>
              ) : (
                <p style={{ visibility: 'hidden' }}> &nbsp; </p>
              )}
            </div>
            <Link to="/forgot-password">
              <span
                style={{ fontSize: '1em', cursor: 'pointer', color: 'black' }}
              >
                ¿Olvidaste tu contraseña?{' '}
                <span className={style.spanLink}>Haz click aquí </span>
              </span>
            </Link>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div className="m-1">
                <button type="submit" className={style.butonlogin}>
                  Enviar
                </button>
              </div>
              <hr></hr>
              <div className=" d-flex flex-column justify-content-around align-items-center">
                <span className={style.span}>
                  No estas registrado?{' '}
                  <span
                    className={style.spanLink}
                    onClick={() => handleNextPage()}
                  >
                    Regístrate aquí
                  </span>
                </span>
                <p>o </p>

                <button
                  type="button"
                  className={style.butonGoogle}
                  onClick={() => handleGoogleLogin(setModal, navigate)}
                ></button>
                <button
                  type="button"
                  className={style.buton}
                  onClick={() => handleGitHubLogin(setModal, navigate)}
                >
                  Accede con GitHub
                </button>
              </div>
            </div>
          </fieldset>
          {modal.access && typeof modal.body === 'object' ? (
            <div class="justify-self-center align-self-center">
              <Modal show={modal}>
                <Modal.Header>
                  <Modal.Title>Registrado con éxito✅</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  {console.log(modal.body)}
                  <div>
                    <h3>Bienvenido</h3>
                    <div
                      className={`d-flex text-center justify-content-center align-items-center ${style.divDrop}`}
                      style={{
                        border: '10px  #ccc',
                        background: 'rgba(169, 181, 197, 0.562)',
                        margin: `15px 15px`,
                        textAlign: 'center',
                        width: '200px',
                        height: '200px',
                        borderRadius: '100px',
                      }}
                    >
                      <img
                        style={{
                          borderRadius: '100px',
                          width: '200px',
                          height: '200px',
                          maxHeight: '200px',
                          objectFit: 'cover',
                        }}
                        src={modal.body.profilePic}
                        alt="foto de perfil"
                      />
                    </div>
                    <h4>{modal.body.userName}</h4>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <p> Redirigiendo...</p>
                </Modal.Footer>
              </Modal>
            </div>
          ) : modal.access && typeof modal.body === 'string' ? (
            <div class="justify-self-center align-self-center">
              <Modal show={modal}>
                <Modal.Header>
                  <Modal.Title>Algo salió mal❌</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div>
                    <h6>{modal.body}</h6>
                    <br></br>
                    <h6> Inténtalo de nuevo </h6>
                  </div>
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
              </Modal>
            </div>
          ) : null}
        </form>
      </div>
    </div>
  )
})

export default Login

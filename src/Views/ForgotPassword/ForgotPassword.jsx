import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../../redux/actions/actionGet'
import { sendPassword } from '../../redux/actions/actionPost'
import Swal from 'sweetalert2';

const ForgotPassword = () => {
  const [email, setEmail] = useState()

  const allUsers = useSelector((state) => state.users)
  console.log('infoUsers', allUsers)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // eslint-disable-next-line react-hooks/rules-of-hooks

  useEffect(() => {
    dispatch(getAllUsers())
  }, [dispatch])

  // axios.defaults.withCredentials = true
  const handleSubmitBack = () => {
    navigate('/check')
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const existEmail = allUsers.find((user) => user.email === email)
      if (existEmail) {
        await dispatch(sendPassword(email))
        Swal.fire({
          icon: 'success', // Icono de éxito
          title: 'Email enviado',
          text: 'Revisa tu bandeja de entrada.',
        });
        navigate('/check')
      } else {
        Swal.fire({
          icon: 'error', // Icono de error
          title: 'Error',
          text: 'Hubo un problema al enviar el email.',
        });
        return
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div
      className="d-flex justify-content-center align-items-center bg-secondary vh-100"
      style={{
        background:
          'linear-gradient(45deg, rgb(146, 119, 158) 7%, rgb(165, 138, 165) 100%) ',
        border: 'none',
        width: '100vw',
        display: 'flex',
        padding: '50px',
        paddingInline: '10%',
        paddingBlock: '5%',
        position: 'relative',
        margin: 'auto',
      }}
    >
      <div
        className="bg-white p-3 rounded w-30"
        style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 1)' }}
      >
        <h4>¿Olvidaste tu contraseña?</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 mt-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div style={{ justifyContent: 'center', display: 'flex' }}>
            <button
              type="submit"
              className="btn btn-success rounded-15"
              style={{ marginRight: '5px' }}
            >
              Enviar
            </button>
            <button
              type="button" // Cambia el tipo de botón a "button"
              className="btn btn-danger rounded-15"
              onClick={(e) => handleSubmitBack(e)} // Redirige al hacer clic
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword

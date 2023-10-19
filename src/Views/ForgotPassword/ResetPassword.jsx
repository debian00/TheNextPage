import { useState } from 'react';
import {  useNavigate, useParams } from 'react-router-dom';
// import axios from 'axios';
import { useDispatch } from 'react-redux';
import { sendNewPassword } from '../../redux/actions/actionPost';

function ResetPassword() {
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { id, token } = useParams();

    const dispatch = useDispatch();

    // axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
        e.preventDefault();
      
        if (password.length >= 5) {
          dispatch(sendNewPassword(id, token, password))
          navigate('/check');
         

        } else {
          alert('Contraseña muy corta');
        }
      };
      

    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100"
        style={{
          background:
          "linear-gradient(45deg, rgb(146, 119, 158) 7%, rgb(165, 138, 165) 100%) ",
          border: "none",
          width: "100vw",
          display: "flex",
          padding: "50px",
          paddingInline: "10%",
          paddingBlock: "5%",
          position: "relative",
          margin: "auto",
        }}
        >
            <div className="bg-white p-3 rounded w-25" style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 1)' }}>
                <h4>Restablecer Contraseña</h4>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 mt-3">
                        <label htmlFor="email">
                            <strong>Nueva Contraseña</strong>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            autoComplete="off"
                            name="password"
                            className="form-control rounded-0"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-15">
                        Actualizar
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ResetPassword;

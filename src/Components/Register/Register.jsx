import React, {useState} from "react";
import {useForm} from "react-hook-form"
import style from "./Register.module.css"
import { CreateUser } from "../../redux/actions/actionPost";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Register = React.forwardRef((props, ref) => {


const {register ,
   formState : {errors , },
    watch ,
    handleSubmit , 
    setError, 
    setValue
  } = useForm()

  const halfData = JSON.parse(localStorage.getItem("registration"))
  const [modal ,setModal] = useState({access : false, body : ""});
  const navigate = useNavigate() 


    const handleSwitch = () => {
        ref.current.pageFlip().flipPrev()
    };


    const onSubmit =  handleSubmit(async (data) => { 
     console.log(halfData);

      halfData ? (
        setValue("profilePic" , halfData.profilePic),
        setValue("name" , halfData.name) ,
        setValue("userName" , halfData.userName)
        ) : 
        null;
         await CreateUser(watch(), setModal, navigate)
        
    });

    const handleForgotPassword = () => {
      
    };
  
    return (
    <div>
        <form onSubmit={onSubmit}>
            <fieldset>
                <legend>
                    Regístrate
                </legend>
           <div className="d-flex flex-row justify-content-center alig-items-center">
          <div>
            <label>Número de teléfono</label>
            <input type="number" {...register("phoneNumber" , {
              required : {
                value : true,
                message : "Se requiere número telefónico"
              },
              maxLength : {
                value : 15, 
                message : "No es un número válido"
              },
              minLength : {
                value : 3,
                message : "Es demaciado corto"
              }
            })} placeholder="Número telefónico"></input>
          
          {errors.phoneNumber ? (
                            <p
                            style={{
                                color: "red",
                                fontSize: "15px",
                                visibility: "visible",
                                margin: "none",
                                zIndex : "1"
                            }}
                            >
                            {errors.phoneNumber.message}
                            </p>
                            ) : (
                            <p style={{ visibility: "hidden" }}> &nbsp; </p>
                            )}

          </div>

          <div>
            <label>Fecha de nacimiento</label>
            <input type="date" format="yyyy-mm-dd" {...register("birthDate" , {
              required : {
                value : true,
                message : "Se requiere fecha de nacimiento"
              },
              validate : (value) => {
                
                const inputDate = new Date(value)
                const actualDate =  new Date()   
                const age = actualDate.getFullYear() - inputDate.getFullYear()
                if(age < 18) {
                  return "Tienes que ser mayor de edad"
                } else if(age > 90) {
                  return "Revisa el año seleccionado "
                } 
              }
            })}></input>
            {errors.birthDate ? (
                            <p
                            style={{
                                color: "red",
                                fontSize: "15px",
                                visibility: "visible",
                                margin: "none",
                                zIndex : "1"
                            }}
                            >
                            {errors.birthDate.message}
                            </p>
                            ) : (
                            <p style={{ visibility: "hidden" }}> &nbsp; </p>
                            )}
          </div>
            </div>    

                <div>
                    <label>Email : </label>
                    <input {...register("email" , {
                        required : {
                            value : true, 
                            message : "Se requiere un email"
                        }, 
                        pattern : {
                            value : /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                            message  : "Debe ser un email válido ( @ + . )"
                        }
                    })} placeholder="Escribe tu email" ></input>

                    {errors.email ? (
                            <p
                            style={{
                                color: "red",
                                fontSize: "15px",
                                visibility: "visible",
                                margin: "none",
                                zIndex : "1"
                            }}
                            >
                            {errors.email.message}
                            </p>
                            ) : (
                            <p style={{ visibility: "hidden" }}> &nbsp; </p>
                            )}

                </div>
                <div>
                    <label> Contraseña </label> 
                    <input {...register("password" , {
                        required : {
                            value : true,
                            message  : "Se requiere una contraseña "
                        },
                        maxLength : {
                            value : 25, 
                            message : "Demasiado largo"
                        },
                        pattern : {
                            value : /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                            message : "Debe tener al menos un número y una mayúscula"
                        }
                    })} placeholder="Escribe tu contraseña"></input>
                    {errors.password ? (
                            <p
                            style={{
                                color: "red",
                                fontSize: "15px",
                                visibility: "visible",
                                margin: "none",
                                zIndex : "1"
                            }}
                            >
                            {errors.password.message}
                            </p>
                            ) : (
                            <p style={{ visibility: "hidden" }}> &nbsp; </p>
                            )}

                </div>
                <div>
                    <label>Confirmar Contraseña</label>
                    <input {...register("confirmPassword" , {
                        required : {
                            value : true, 
                            message : "Reescribe tu contraseña"
                        }, 
                        validate : (value) => {
                            value === watch("password") ?
                            true : "Las contraseñas no coinciden"
                        }
                    })} placeholder="Reescribe tu contraseña"></input>
                    {errors.confirmPassword ? (
                            <p
                            style={{
                                color: "red",
                                fontSize: "15px",
                                visibility: "visible",
                                margin: "none",
                                zIndex : "1"
                            }}
                            >
                            {errors.confirmPassword.message}
                            </p>
                            ) : (
                            <p style={{ visibility: "hidden" }}> &nbsp; </p>
                            )}
                </div>

                <div>
                    <span>¿Has olvidado tu contraseña? <p style={{ cursor: "pointer", color: "blueviolet" }} onClick={handleForgotPassword}>Haz click aqui</p></span>
                </div>
                <div>
                    <button type="submit"> Registrarse</button>
                </div>
                <hr></hr>
                <div>
                    <span>Ya estas registrado ? <span style={{ cursor: "pointer", color: "blueviolet" }}  onClick={handleSwitch}>Inicar sesión</span></span>
                    <p> O </p>
                    <button type="button">Logueate con Google</button>
                </div>

            </fieldset>
            {modal.access && typeof modal.body === "object" ? (
            <div class="justify-self-center align-self-center">
              <Modal show={modal}>
                <Modal.Header>
                  <Modal.Title>Registrado con éxito✅</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div>
                    <h3>Bienvenido</h3>
                    <div
                      className={`d-flex text-center justify-content-center align-items-center ${style.divDrop}`}
                      style={{
                        border: "10px  #ccc",
                        background: "rgba(169, 181, 197, 0.562)",
                        margin: `15px 15px`,
                        textAlign: "center",
                        width: "200px",
                        height: "200px",
                        borderRadius: "100px",
                      }}
                    >
                      <img
                        style={{
                          borderRadius: "100px",
                          width: "200px",
                          height: "200px",
                          maxHeight: "200px",
                          objectFit: "cover",
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
          ) : (modal.access && typeof modal.body === "string") ? (
            <div class="justify-self-center align-self-center">
              <Modal show={modal}>
                <Modal.Header>
                  <Modal.Title>Algo salio mal❌</Modal.Title>
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
    )
});
export default Register;
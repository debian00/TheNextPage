import React , {useRef, useState} from "react";
import { useForm } from "react-hook-form";
import style from "./Login.module.css"
import { getLogin } from "../../redux/actions/actionPost";
import { Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../../Views/Login&Register/Login&Register.css"
import "react-bootstrap"

const Login = React.forwardRef((props,ref ) => {

    
    const {register , formState : {errors},watch , handleSubmit } = useForm();
    const [modal ,setModal] = useState({access : false, body : ""});
    const navigate = useNavigate() 

   const onSubmit = handleSubmit((data) =>  {
       getLogin(data, setModal, navigate)
       
   })

    const handleNextPage = () => {
        if(ref.current) {
            ref.current.pageFlip().flipNext("bottom")
        }
    }



    return (
    <div ref={ref} 
        
      >
        <div style={{padding : "10px" , height : "100%"}} className={style.form}>
            <form onSubmit={onSubmit}  >
                <fieldset className={` d-flex flex-column justify-content-center align-items-center text-center ${style.formLogin}`} >
                    <legend className={style.legend}>Logueate</legend>
                    <div className="d-flex ">
                      <div className=" d-flex flex-row mb-4">
                        <label htmlFor="email" className={style.label}>EMAIL : </label>
                        <input  
                        className={style.inputs}
                         placeholder="Escribe tu email aqui"
                         {...register("email" , {
                            required : {
                                value : true,
                                message : "Debes escribir un email"
                            }, 
                            pattern : {
                                value : /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                                message : "Debe ser un email válido"
                            }
                         })}
                        >
                        </input> 
                      </div>
                        <div className="d-flex flex-row">

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
                    
                              </div>
                      
                   
                    <div>
                        <label htmlFor="password" className={style.label} >PASSWORD : </label>
                        <input className={style.inputs} {...register("password" , {
                            required : {
                                value:true,
                                message : "Escibe tu contraseña"
                            }
                        })} placeholder="Tu contraseña aqui...">

                        </input>

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
                    <Link to="/forgot-password"><span style={{ fontSize: "20px",cursor: "pointer", color: "black" }}>¿Olvidaste tu contraseña? <span className={style.spanLink} >Haz click aqui! </span></span></Link>
                    <div className = "d-flex flex-column justify-content-center align-items-center">
                    <div className = "m-1">
                        <button type="submit" className={style.butonlogin}>Enviar</button>
                    </div>
                    <hr></hr>
                    <div className = " d-flex flex-column justify-content-around align-items-center">
                        <span className={style.span}>No estas registrado? <span  className={style.spanLink}  onClick={() => handleNextPage()}>Regístrate aqui</span></span>
                        
                        <p >o </p>
                        
                        <button type="button" className={style.buton}>Accede con Google</button>
                    </div>
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
    </div>
    )
}) ;

export default Login
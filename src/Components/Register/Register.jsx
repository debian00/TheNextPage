import React, {useState} from "react";
import {useForm} from "react-hook-form"
import style from "./Register.module.css"


const Register = React.forwardRef((props, ref) => {


const {register ,
   formState : {errors , },
    watch ,
    handleSubmit , 
  } = useForm()
  const [passwordType, setPasswordType] = useState(false);
  const [passwordType2, setPasswordType2] = useState(false);


  const handleHide = (e) => {
    const icon = e.target.id;

    if (icon === "hide1") {
      if (passwordType) {
        setPasswordType(false);
      } else {
        setPasswordType(true);
      }
    } else if (icon === "hide2") {
      if (passwordType2) {
        setPasswordType2(false);
      } else {
        setPasswordType2(true);
      }
    }
  };

  const iconVisible = (
    <svg
      style={{pointerEvents : "none"}}
      onClick={handleHide}
      xmlns="http://www.w3.org/2000/svg"
      id="hide1"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-eye-fill"
      viewBox="0 0 16 16"
    >
      <path  id="hide1" onClick={handleHide} d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
      <path  id="hide1" onClick={handleHide} d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
    </svg>
  );

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
  );

  const iconVisible2 = (
    <svg
      onClick={handleHide}
      xmlns="http://www.w3.org/2000/svg"
      id="hide2"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-eye-fill"
      viewBox="0 0 16 16"
    >
      <path  id="hide2" onClick={handleHide} d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
      <path id="hide2" onClick={handleHide} d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
    </svg>
  );

  const iconInvisible2 = (
    <svg
      onClick={handleHide}
      xmlns="http://www.w3.org/2000/svg"
      id="hide2"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-eye-slash-fill"
      viewBox="0 0 16 16"
    >
      <path
      id="hide2"
        d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"
        onClick={handleHide}
      />
      <path
      id="hide2"
        d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"
        onClick={handleHide}
      />
    </svg>
  );


    const handleSwitch = () => {
        ref.current.pageFlip().flipPrev()
    };


    const onSubmit =  handleSubmit(async (data) => { 
   
        localStorage.setItem("registration" , JSON.stringify(data))
         return ref.current.pageFlip().flipNext()
    });

    
   
  
    return (
    <div>
        <form onSubmit={onSubmit}>
            <fieldset className={` d-flex flex-column justify-content-center align-items-center text-center ${style.formLogin}`}>
                <legend className={style.legend}>
                    Regístrate
                </legend>
             

                <div>
                    <label className={style.label}>EMAIL: </label>
                    <input className={style.inputs}
                    {...register("email" , {
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
                    <label className={style.label}>CONTRASEÑA: </label> 
                    <input className={style.inputs}
                    
                    {...register("password" , {
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
                    })} placeholder="Escribe tu contraseña"
                    type={passwordType ? "text" : "password"}></input>
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
                <div >
                    <label className={style.label} >Confirmar Contraseña</label>
                    <input  className={style.inputs} 
                    style={{marginLeft : "50px"}}
                    {...register("confirmPassword" , {
                        required : {
                            value : true, 
                            message : "Reescribe tu contraseña"
                        }, 
                        validate : (value) => {
                          return value === watch("password") || "Las contraseñas no coinciden";
                        }
                    })} placeholder="Reescribe tu contraseña"
                        type={passwordType2 ? "text" : "password"}></input>
                      
                         <button
                        className={style.iconPassword}
                        id="hide2"
                        type="button"
                        onClick={(e) => handleHide(e)}
                      >
                        {passwordType2 ? iconVisible2 : iconInvisible2}
                      </button>
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
                <div className={style.space}>
                    <span className={style.span}>Ya estas registrado ? <span className={style.spanLink}  onClick={handleSwitch}>Inicar sesión</span></span>
                   
                </div>

                <hr className={style.hr}></hr>
                <div className="d-flex flex-column align-items-center justify-content-center">
                <div>
                    <button type="submit" style={{marginTop : "30px"}} className={style.butonlogin } > Continuar </button>
                </div>
                </div>

            </fieldset>
            
        </form>
    </div>
    )
});
export default Register;
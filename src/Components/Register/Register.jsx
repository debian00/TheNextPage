import React, {useState} from "react";
import {useForm} from "react-hook-form"
import style from "./Register.module.css"


const Register = React.forwardRef((props, ref) => {


const {register ,
   formState : {errors , },
    watch ,
    handleSubmit , 
  } = useForm()


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
                    <label className={style.label}>Email : </label>
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
                    <label className={style.label}> Contraseña </label> 
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
                    <label className={style.label} >Confirmar Contraseña</label>
                    <input  className={style.inputs} 
                    {...register("confirmPassword" , {
                        required : {
                            value : true, 
                            message : "Reescribe tu contraseña"
                        }, 
                        validate : (value) => {
                          return value === watch("password") || "Las contraseñas no coinciden";
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
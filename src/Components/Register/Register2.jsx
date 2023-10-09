import React, {useCallback, useEffect, useState} from "react";
import {useForm} from "react-hook-form"
import style from "./Register.module.css"
import "react-bootstrap"
import { CreateUser } from "../../redux/actions/actionPost";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";

const Register2 = React.forwardRef((props, ref) => {

    const {register , formState : {errors},watch ,clearErrors, handleSubmit, setValue , setError } = useForm()
    const [modal ,setModal] = useState({access : false, body : ""});
    const navigate = useNavigate() 

    //*-------------setear key/values del form anterior a este --------------------------

    const halfForm = JSON.parse(localStorage.getItem("registration"));
    
    const setKyP = useCallback(() => {
        if (halfForm) {
          const das = Object.entries(halfForm);
          das?.map((key) => {
            setValue(key[0], key[1], { shouldDirty: true });
          });
        }
      }, [halfForm, setValue]);
    
      useEffect(() => {
        setKyP();
      }, [setKyP]);
    

//!--------------------------------------- handlers Pictures ---------------------------------------------------
const handleDelete = () => {
    setValue("profilePic" , "")
  };
  
  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    handleFile(file);
  };
  
  
  const handleFile = async (file) => {
    console.log(file);
  
    if (!file.type.includes("image")) {
      setError("profilePic",{ type: "validate", message: "Solo se permiten imágenes" })
        setTimeout(() => {
          clearErrors("profilePic")
        }, [2000]);
      return;
    } else {
  
        
        const fileData = new FormData();
        fileData.append("file", file);
        fileData.append("upload_preset", "Imagenes");
        fileData.append("cloud_name", "dkdounmsa");

        const fetched = await fetch(`https://api.cloudinary.com/v1_1/dkdounmsa/image/upload`, {
            method : "post" , 
            body : fileData
        });
  
        const url = await fetched.json()
        setValue("profilePic" , url.secure_url);
        console.log(watch());
        return
        }
    };
  
  //!-----------------------------------------------------------------------------------------------------------

  const handleBack = (e) => {
    e.preventDefault();
    ref.current.pageFlip().flipPrev()
  
    return
  } ;
  
  
  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
   /*  return localStorage.removeItem("registration") */
    await CreateUser(data, setModal, navigate) 
  })

    return(
        <form onSubmit={onSubmit}>
        < div className={`d-flex  flex-column  align-items-center justify-content-center ${style.fieldset}`}>
    <div className={` ${style.ima} d-flex flex-row  align-items-center justify-content-center`} >

      <div
                  
                  style={{
                    display : "flex",
                    justifyContent : "center",
                    alignItems : "center",
                    border: "10px  #ccc",
                    background: "rgba(255, 255, 255, 0.801)",
                    margin: `20px 35px`,
                    textAlign: "center",
                    width: "200px",
                    boxShadow: "0 5px 15px 1px rgba(0, 0, 0, 0.671)",
                    position:"relative",
                    height: "200px",
                    borderRadius: "100px",
                  }}
                  {...register("profilePic")}
                  onDragEnter={(e) => e.preventDefault()}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={handleDrop}
                >
                  {watch("profilePic") ? (
                    <div> 
                      <img
                      style={{
                        borderRadius: "100px",
                        width: "200px",
                        height: "200px",
                        maxHeight: "200px",
                        objectFit: "cover",
                       
                      }}
                      src={watch("profilePic")}
                      alt={`Image ${watch("profilePic")}`}
                    />
                   
                    <button
                           className={`${style.buton}`}
                           onClick={handleDelete}
                         >
                           X
                         </button>
                         </div>
                  ) : (
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        fill="currentColor"
                        class="bi bi-card-image"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                        <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z" />
                      </svg>
                      <br style={{marginTop : "5px"}}></br>
                      Arrastra o haz click{" "}
                      <span
                        className={style.span}
                        onClick={() =>
                          document.getElementById("imageInput").click()
                        }
                      >
                        {" "}
                        aquí
                      </span>
                      !
                    </div>
                  )}

                
                          
          </div>
           
          <div className={`d-flex flex-column ${style.cont}`}>
        <label className={style.label1} htmlFor="imageInput">
              Selecciona un archivo
            </label>
            <input
              type="file"
              id="imageInput"
              accept="image/*"
              className={style.inputfile}
              onChange={(e) => handleFile(e.target.files[0])}
            /> 
    <div>
          {errors.profilePic ? (
                            <p
                            style={{
                                color: "red",
                                fontSize: "20px",
                                visibility: "visible",
                                margin: "none",
                                zIndex : "1",
                                
                            }}
                            >
                            {errors.profilePic.message}
                            </p>
                            ) : (
                            <p style={{ display : "block", visibility: "hidden",fontSize: "20px" }}> &nbsp; </p>
                            )}
             
            </div>
      </div>
    </div> 

      <div style={{marginTop : "15px"}}>
                    <label htmlFor="name">Nombre</label>
                    <input {...register("name" , {
                        required : {
                            value : true, 
                            message : "Ingresa tu nombre"
                        },
                        minLength : {
                          value : 3,
                          message : "Tu nombre es muy corto"
                        },
                        maxLength : {
                          value : 25,
                          message : "Tu nombre es demasiado largo"
                        }
                    })} placeholder="Escribe tu nombre aqui " 
                        className={style.inputs}  
                        >

                    </input>

                    
                </div>
                <div>
                  {errors.name ? (
                            <p
                            style={{
                                color: "red",
                                fontSize: "20px",
                                visibility: "visible",
                                margin: "none",
                                zIndex : "1"
                            }}
                            >
                            {errors.name.message}
                            </p>
                            ) : (
                            <p style={{ visibility: "hidden" }}> &nbsp; </p>
                            )}
                  </div>

                <div style={{margin : "15px"}}>
                    <label>Nombre de Usuario </label>
                    <input {...register("userName" , {
                        required : {
                            value : true,
                            message : "Debes ingresar un nombre de usuario"
                        }, 
                        minLength : {
                          value : 5,
                          message : "Tiene que ser mas largo"
                        },
                        maxLength : {
                          value : 15,
                          message : "Es muy largo"
                        }
                    })} placeholder="Nombre de usuario"
                        className={style.inputs}  >

                    </input>

                     {errors.userName ? (
                            <p
                            style={{
                                color: "red",
                                fontSize: "20px",
                                visibility: "visible",
                                margin: "none",
                                zIndex : "1"
                            }}
                            >
                            {errors.userName.message}
                            </p>
                            ) : (
                            <p style={{ visibility: "hidden" }}> &nbsp; </p>
                            )}
                </div>
                <div className="d-flex flex-row justify-content-center alig-items-center">
          <div>
            <label className={style.label}>Número de teléfono</label>
            <input className={style.inputs}
            type="number" {...register("phoneNumber" , {
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
            <label className={style.label}>Fecha de nacimiento</label>
            <input className={style.inputs}
            type="date" format="yyyy-mm-dd" {...register("birthDate" , {
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
                <div className="d-flex flex-row">
                <p className={style.span}>Te equivocaste en algo? </p>
                  <p onClick={handleBack}>Volver atras ৲</p>
                </div>
                    <div className="d-flex justify-content-center">
                        <button type="submit"  className={style.label1}>Registrarse</button>
                    </div>
                </div>
                
      </div>
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
     
    )
});
export default Register2;

import { useForm } from 'react-hook-form';
import style from './editarperfilview.module.css';
import { useDispatch } from 'react-redux'
import { updateUser } from '../../../redux/actions/actionPut'
import { useEffect, useState } from 'react'
import { Modal } from "react-bootstrap";


import "react-bootstrap"

const EditarPerfilView = () => {
  const token = localStorage.getItem('token')
  const user = JSON.parse(localStorage.getItem('user'))
  const dispatch = useDispatch()
  const [modal ,setModal] = useState({access : false, body : ""});
 
  const {
    formState : {errors} ,
     setError ,
      setValue ,
      watch ,
      clearErrors,
       register ,
        handleSubmit 
      } = useForm({ 
        defaultValues : 
        {profilePic : user.profilePic,
          userName : user.userName,
          email : user.email
        }})                                                                                                       
  
        
    

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

  //!---------------------------------- handle pictures --------------------------------------------------------------------

  
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
        return
        }
    };
  
  //!-----------------------------------------------------------------------------------------------------------
  const onSubmit = handleSubmit((data) => {
    console.log(data);
     dispatch(updateUser(data, user.id , setModal))

  })
  
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className={`d-flex flex-column align-items-center ${style.row}`} style={{width : "100%" , height : "100vh" , borderRadius : "30px"}} >
            <div style={{ width : "100%" , justifyContent: "center" , alignItems : "center", display : "flex", borderTopLeftRadius : "30px" , borderTopRightRadius : "30px"}} className={style.photo}>

              <img src={watch("profilePic")} 
              alt='user photo'
               style={{
                 borderRadius: '50%',
                 objectFit: 'cover',
                 border: '10px  #ccc',
                 // background: "rgba(169, 181, 197, 0.562)",
                 margin: `15px 15px`,
                 textAlign: 'center',
                 width: '200px',
                 top: '40px',
                 height: '200px',
                 
              }}>

              </img>

               <div className={`d-flex flex-column ${style.cont}`}>
        <label className={style.label1} htmlFor="imageInput">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                </svg>
            </label>
            <input
              type="file"
              id="imageInput"
              accept="image/*"
              className={style.inputfile}
              onChange={(e) => handleFile(e.target.files[0])}
            /> 
            </div>
            <div>
              <input value={user.userName} disabled></input>
            </div>
            </div>


            <div className={`d-flex flex-column ${style.body} p-3`}>
              <div className='d-flex flex-row '>
                <div>
                  
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
                        })}
                         placeholder='Nueva contraseña'  
                         type={passwordType ? "text" : "password"}>

                         </input>
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
              <input  className={style.inputsDer} {...register("confirmPassword" , {
                        required : {
                            value : true, 
                            message : "Reescribe tu contraseña"
                        }, 
                        validate : (value) => {
                          return value === watch("password") || "Las contraseñas no coinciden";
                        }
                    })} placeholder='Confirmar contraseña'  type={passwordType ? "text" : "password"}></input>
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
            </div>
             
           
            <div className='d-flex flex-row'>

            <div>
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
            <input className={style.inputsDer}
            type="date" format="yyyy-mm-dd"  {...register("birthDate" , {
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
             </div>
            <div> 
              <button className={style.butonlogin } type='submit'>Editar</button>
            </div>
        </div>
        {modal.access && typeof modal.body === "object" ? (
            <div class="justify-self-center align-self-center">
              <Modal show={modal}>
                <Modal.Header>
                  <Modal.Title> Editado con éxito ✅</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className='d-flex flex -column justify-content-center align-items-center'>
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
                  <div className='d-flex flex -column justify-content-center align-items-center'>
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
}

export default EditarPerfilView

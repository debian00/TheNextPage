import "./Login&Register.css";
import React , {useEffect, useState} from "react";
import Register from "../../Components/Register/Register";
import { useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import Login from "../../Components/Login/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from "react-hook-form";
import style from "../../Components/Register/Register.module.css"
import { Logo } from "../../utils/Icons";


export default function LoginAndRegister() {
  
  const ref = useRef()
 const {setValue, formState : {errors}, setError, register, watch} = useForm()


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
    console.log(errors);
    return;
  } else {

      setError("profilePic" , {type : "validate" , message : ""})
      const imageURL = URL.createObjectURL(new Blob([file]));
      setValue("profilePic" , imageURL)
      
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

useEffect(() => {
  if (ref.current) {
    const timer = setTimeout(() => {
      ref.current.pageFlip().flipNext()
    }, 700)

    return () => clearTimeout(timer)
  }
}, []);

  useEffect(() => {
    if(watch("profilePic") && watch("name") && watch("userName")) {
      localStorage.setItem("registration",JSON.stringify(watch()))
     
    }
  }, [watch()]);



  const handleNextPage = () => {
    if(ref.current) {
        ref.current.pageFlip().flipNext("bottom")
    }
}
const handlePrevPage = () => {
  if(ref.current) {
      ref.current.pageFlip().flipPrev("bottom")
  }
}



 
  return ( 
  <div className="index">

    <div className="container">
    <HTMLFlipBook  ref={ref} className="book-container book"  clickEventForward={false}  startPage={1} useMouseEvents={false} maxShadowOpacity={0.3} disableFlipByClick={true} width={600} height={670} maxHeight={730} maxWidth={1000} usePortrait={false}>

    <div className="demoPage1 left" number={1} key={1} >
      <h1>WELCOME</h1>
    </div>

    <div className="demoPage1 right page" number={2} key={2}>
      <div className="demoPage 2 right page">
        <Logo color={'#CCCFCE'} width={'80'}/>
      </div>
    </div>

      <div className="demoPage1 left page" number={3} key={3}>
        <img style={{width :"100%" , height :"100%" , objectFit : "fill" }} src="https://acdn.mitiendanube.com/stores/865/441/products/biblioteca-modelo-grecia-factorymuebles-melamina1-f6fe7788fcb2091e9a16208362610871-1024-1024.webp" >
          </img>
          </div>
      <div key={4} number={4}   className="demoPage1 right page">

      <Login  ref={ref} />
     
      </div>
      <div className="demoPage1 left page" key={5}>
      <div
                  className={`d-flex text-center justify-content-center align-items-center ${style.divDrop}`}
                  style={{
                    border: "10px  #ccc",
                    background: "rgba(255, 255, 255, 0.801)",
                    margin: `20px 35px`,
                    textAlign: "center",
                    width: "200px",
                    
                    position:"relative",
                    height: "200px",
                    borderRadius: "10px",
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
                        borderRadius: "10px",
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
                      <br></br>
                      Arrastra o haz click{" "}
                      <span
                        className={style.click}
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

                
                            {errors.profilePic ? (
                            <p
                            style={{
                                color: "red",
                                fontSize: "15px",
                                visibility: "visible",
                                margin: "none",
                                zIndex : "1"
                            }}
                            >
                            {errors.profilePic.message}
                            </p>
                            ) : (
                            <p style={{ visibility: "hidden" }}> &nbsp; </p>
                            )}
             
          </div>
          <div>
        <label className={style.label} htmlFor="imageInput">
              Selecciona un archivo
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
                    <label>Nombre</label>
                    <input {...register("name" , {
                        required : {
                            value : true, 
                            message : "Ingresa tu nombre"
                        }
                    })} placeholder="Escribe tu nombre aqui "></input>

                    {errors.name ? (
                            <p
                            style={{
                                color: "red",
                                fontSize: "15px",
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
                <div>
                    <label>Nombre de Usuario </label>
                    <input {...register("userName" , {
                        required : {
                            value : true,
                            message : "Debes ingresar un nombre de usuario"
                        }
                    })} placeholder="Nombre de usuario"></input>

                     {errors.userName ? (
                            <p
                            style={{
                                color: "red",
                                fontSize: "15px",
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
      </div>
      <div className="demoPage1 right page" key={6}>
        <Register props={null} ref={ref}/>
      </div>
  
    </HTMLFlipBook>
      
    </div> 
        <div className = "container-arrows">
          <div className="svg-container">
          <svg  onClick={() => handlePrevPage()} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
          <path onClick={() => handlePrevPage()} fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
        </svg>
                    </div>
             <div className="svg-container">
             <svg  onClick={() => handleNextPage()} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                <path onClick={() => handleNextPage()} fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                </svg>
                       
                    </div>
                    </div>
    </div>
  );
}


import "./Login&Register.css";
import React , {useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Register from "../../Components/Register/Register";
import { useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import Login from "../../Components/Login/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from "react-hook-form";
import style from "../../Components/Register/Register.module.css"
import { Logo } from "../../utils/Icons";
import { animateScroll as scroll, scroller } from "react-scroll";
import Register2 from "../../Components/Register/Register2";

export default function LoginAndRegister() {
  
  const navigate = useNavigate()
  const ref = useRef()


  const token = JSON.parse(localStorage.getItem("token"));
  const entry = useCallback(() => {
    if(token) {
      navigate("/home")
    }
  })

  useEffect(() => {
    entry()
  }, [entry])


  const scrollToComponent = (componentId) => {
    scroller.scrollTo(componentId, {
      duration: 1000,
      delay: 350,
      smooth: "easeInOutQuart",
      offset : -40
    });
  };
  const scroll = useCallback(() => {
    window.scrollTo({top : 0});
     scrollToComponent("book")
  });
  
  useEffect(() => {
    scroll()
  }, []);






 
  return ( 
  <div className="index" >

    <div className="container"id="book" style={{marginLeft : "600px"}} >
    <HTMLFlipBook  ref={ref} className="book-container book"  clickEventForward={false}  startPage={1} useMouseEvents={false} maxShadowOpacity={0} disableFlipByClick={true} width={630} height={810} maxHeight={1000} maxWidth={1200} usePortrait={false}>

    

      <div className={`demoPage1 left page `} number={3} key={3} >

        <div  className={`d-flex  flex-column  align-items-center justify-content-center ${style.imagen1}`}>
           <h1 style={{color : "white"  ,fontSize : "50px", marginTop : "0px !important"}}>¡Hola! Tanto tiempo</h1>
           <h1 style={{color : "white"  ,fontSize : "50px"}}>Te extrañamos en</h1> 
          <div style={{marginTop :  "80px" ,display: "flex", justifyContent : "center" , flexDirection : "column", alignItems : "center"}}>
           <Logo width={"100px"} height={"90px"} color={"white"} ></Logo>
        <h3  style={{color : "white", margin :"20px"}}> The Next Page</h3>

          </div>
        </div>
      </div>

      <div key={4} number={4}   className="demoPage2 right page">

      <Login  ref={ref} />
     
      </div>
      <div className="demoPage1 left page   " key={5} >
        <div className={`d-flex  flex-column  align-items-center justify-content-center ${style.imagen}`}>
          <h1 style={{color : "white"  ,fontSize : "50px"}}>Bienvenido a </h1>
          <div style={{marginTop :  "50px" ,display: "flex", justifyContent : "center" , flexDirection : "column", alignItems : "center"}}>
           <Logo width={"100px"} height={"90px"} color={"white"} ></Logo>
        <h3  style={{color : "white", margin :"20px"}}> The Next Page</h3>

          </div>
      </div>
      </div>
      <div className="demoPage2 right page" key={6}>
        <Register props={null} ref={ref}/>
      </div>
    <div className="demoPage1 left page" key={7}>
        <Register2 props={null} ref={ref}/>
    </div>
    <div className="demoPage2 right page"></div>
    </HTMLFlipBook>
      
    </div> 
       {/*  <div className = "container-arrows">
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
                    </div> */}
    </div>
  );
}


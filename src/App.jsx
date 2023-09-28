import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomeView from './Views/HomeView/HomeView'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import PerfilUserdView from './Views/PerfilUserView/PerfilUserView'

import DetailView from './Views/DetailView/DetailView.jsx'
import CatalogueView from "./Views/CatalogueView/CatalogueView"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<><HomeView/><Footer/></>}/>
        <Route path='/userPanel' element={<><PerfilUserdView/></>}/>
        <Route path="/" element={
            <>
              <HomeView />
          
            </>
          }
        />
        <Route path="/home" element={
            <>
              <HomeView />
          
            </>
          }
        />
        <Route path="/detail" element={
            <>
              <DetailView />
           
            </>
          }
        />
         <Route path="/catalogue" element={
            <>
              <CatalogueView/>
          
            </>
          }
        />
      </Routes>
     
    </>
  )
}

export default App

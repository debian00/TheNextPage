// import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomeView from './Views/HomeView/HomeView'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'

function App() {


  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<><HomeView/><Footer/></>}/>
      </Routes>
    </>
  )
}

export default App

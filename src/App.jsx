import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomeView from './Views/HomeView/HomeView'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import DetailView from './Views/DetailView/DetailView'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
            <>
              <HomeView />
              <Footer />
            </>
          }
        />
        <Route path="/home" element={
            <>
              <HomeView />
              <Footer />
            </>
          }
        />
        <Route path="/detail" element={
            <>
              <DetailView />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  )
}

export default App

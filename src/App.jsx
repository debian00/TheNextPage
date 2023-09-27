import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomeView from './Views/HomeView/HomeView'
import Navbar from './Components/Navbar/Navbar'
import DetailView from './Views/DetailView/DetailView.jsx'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
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
      </Routes>
    </>
  )
}

export default App

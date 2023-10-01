import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomeView from './Views/HomeView/HomeView'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import PerfilUserdView from './Views/PerfilUserView/PerfilUserView'
import DetailView from './Views/DetailView/DetailView'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3001'
import CatalogueView from './Views/CatalogueView/CatalogueView'
import AdminDashboardView from './Views/AdminDashboardView/AdminDashboardView'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomeView />
              <Footer />
            </>
          }
        />
        <Route
          path="/userPanel"
          element={
            <>
              <PerfilUserdView />
              <Footer />
            </>
          }
        />
        <Route
          path='/adminDashboard'
          element={
            <>
              <AdminDashboardView/>
              <Footer />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <HomeView />
              <Footer />
            </>
          }
        />
        <Route
          path="/home"
          element={
            <>
              <HomeView />
              <Footer />
            </>
          }
        />
        <Route
         path='/detail/:id'
          element={
            <>
              <DetailView />
              <Footer />
            </>
          }
        />
        <Route
          path="/catalogue"
          element={
            <>
              <CatalogueView />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  )
}

export default App

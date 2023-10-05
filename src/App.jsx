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
import LoginAndRegister from "./Views/Login&Register/Login&Register"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import AboutUs from "./Views/AboutUsView/AboutUsView"
import FAQ from './Views/FaqView/FaqView'
import ForgotPassword from './Views/ForgotPassword/ForgotPassword'
import ResetPassword from './Views/ForgotPassword/ResetPassword'
// import ChatBot from "../src/Components/Chatbot/Chatbot"

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
          path="/adminDashboard"
          element={
            <>
              <AdminDashboardView />
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
          path="/detail/:id"
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
        <Route
          path='/check'
          element={
            <>
              <LoginAndRegister/>
              <Footer/>
            </>
          }
          />

         <Route
          path="/aboutus"
          element={
            <>
              <AboutUs />
              <Footer />
            </>
          }
        />
         <Route
          path="/faq"
          element={
            <>
              <FAQ />
              <Footer />
            </>
          }
        />
         <Route path='/forgot-password' element={<ForgotPassword/>}></Route>
      <Route path="/reset_password/:id/:token" element={<ResetPassword/>}></Route>
        <Route
          path="/chatbot"
          element={
            <>
            {/* <ChatBot/> */}
              <FAQ />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  )
}

export default App;

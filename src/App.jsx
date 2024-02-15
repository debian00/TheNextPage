import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomeView from './Views/HomeView/HomeView'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import PerfilUserdView from './Views/PerfilUserView/PerfilUserView'
import DetailView from './Views/DetailView/DetailView'
import axios from 'axios'
axios.defaults.baseURL = 'https://unisync-production.up.railway.app/'
import CatalogueView from './Views/CatalogueView/CatalogueView'
import AdminDashboardView from './Views/AdminDashboardView/AdminDashboardView'
import LoginAndRegister from './Views/Login&Register/Login&Register'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import AboutUs from './Views/AboutUsView/AboutUsView'
import FAQ from './Views/FaqView/FaqView'
import Shopping from './Views/Shopping/Shopping'
import ForgotPassword from './Views/ForgotPassword/ForgotPassword'
import ResetPassword from './Views/ForgotPassword/ResetPassword'
import Checkout from './Views/Checkout/Checkout'
import PromocionesView from './Views/PromocionesView/PromocionesView'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ChatBot from './Components/Chatbot/Chatbot'
import NotFound from './Views/NotFound/NotFound'
import Success from './Views/Success/Success'
import Cancelled from './Views/Success/Cancelled'
import NovedadesView  from './Views/NovedadesView/NovedadesView'

function App() {
  return (
    <>
      <Navbar />
      <ToastContainer position="bottom-right"></ToastContainer>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomeView />
              <ChatBot />
              <Footer />
            </>
          }
        />
        <Route
          path="/success"
          element={
            <>
              <Success />
              <Footer />
            </>
          }
        />
        <Route
          path="/cancelled"
          element={
            <>
              <Cancelled />
              <Footer />
            </>
          }
        />
        <Route
          path="/userPanel"
          element={
            <>
              <PerfilUserdView />
              <ChatBot />
              <Footer />
            </>
          }
        />
        <Route
          path="/adminDashboard"
          element={
            <>
              <AdminDashboardView />
              <ChatBot />
              <Footer />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <HomeView />
              <ChatBot />
              <Footer />
            </>
          }
        />
        <Route
          path="/home"
          element={
            <>
              <HomeView />
              <ChatBot />
              <Footer />
            </>
          }
        />
        <Route
          path="/detail/:id"
          element={
            <>
              <DetailView />
              <ChatBot />
              <Footer />
            </>
          }
        />
        <Route
          path="/catalogue"
          element={
            <>
            
              <CatalogueView />
              <ChatBot />
              <Footer />
            </>
          }
        />
        <Route
          path="/check"
          element={
            <>
              <LoginAndRegister />
              <ChatBot />
              <Footer />              
            </>
          }
        />

        <Route
          path="/aboutus"
          element={
            <>
              <AboutUs />
              <ChatBot />
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
              <ChatBot />
            </>
          }
        />
        <Route
          path="/shoppingCart/:id"
          element={
            <>
              {/* <ChatBot/> */}
              <Shopping></Shopping>
              <Footer />
            </>
          }
        />
        <Route
          path="/shoppingCart"
          element={
            <>
              {/* <ChatBot/> */}
              <Shopping></Shopping>
              <Footer />
            </>
          }
        />
        <Route
          path="/checkout/:id"
          element={
            <>
              <Checkout />
              <Footer />
            </>
          }
        />
        <Route path="/forgot-password" element={<ForgotPassword />}></Route>
        <Route
          path="/reset_password/:id/:token"
          element={<ResetPassword />}
        ></Route>
        <Route
          path="/promociones"
          element={
            <>
              <PromocionesView />
              <ChatBot />
              <Footer />
            </>
          }
        />
        <Route
          path="/chatbot"
          element={
            <>
              <ChatBot />
              <Footer />
            </>
          }
        />
          <Route
          path="/novedades"
          element={
            <>
            <NovedadesView/>
              <ChatBot />
              <Footer />
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <NotFound />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  )
}

export default App

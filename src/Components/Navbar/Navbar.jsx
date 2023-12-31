// import React from 'react'
import style from './navbar.module.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {
  Cart,
  Facebook,
  Instagram,
  Logo,
  Mail,
  Ping,
  Profile,
  Twitter,
  Youtube,
} from '../../utils/Icons'
import { useEffect, useRef, useState } from 'react'
import SearchBar from './SearchBar/SearchBar'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getCartUser, getGenres } from '../../redux/actions/actionGet'
import { NavLink } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../../redux/actions/firebase'


const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [fixed, setFixed] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  const genres = useSelector((state) => state.genres)
  const dropdownRef = useRef(null)
  const dispatch = useDispatch()
  const token = localStorage.getItem('token')
  const user = JSON.parse(localStorage.getItem('user'))
  const [cart, setCart] = useState([])
  const cartUser = useSelector((state) => state.cart)

  useEffect(() => {
    if (user) {
      dispatch(getCartUser(user.id))
    } else if (localStorage.getItem('cart')) {
      setCart(JSON.parse(localStorage.getItem('cart')))
    }
    dispatch(getGenres())
  }, [localStorage.getItem('cart')])

  useEffect(() => {
    if (user) {
      setCart(cartUser)
    }
  }, [cartUser])
  useEffect(() => {
    if (localStorage.getItem('cart') && !user) {
      const localdata = JSON.parse(localStorage.getItem('cart'))
      setCart(localdata)
    }
  }, [localStorage.getItem('cart')])

  const handleDrop = () => {
    setDropdown(true)
  }
  
  
  const handleScroll = () => {
    if (window.scrollY > 80) {
      setFixed(true)
    } else {
      setFixed(false)
    }
  }

  const logOut = async (auth) => {
    try {
      const localdata = JSON.parse(localStorage.getItem('cart'))
      await signOut(auth)
      setCart(localdata)
      localStorage.removeItem('user')
      localStorage.removeItem('token')
      setDropdown(false)
      navigate('/')
      
    } catch (error) {
      console.log(error);
    }
  }

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      event.target.id !== 'dropdown'
    ) {
      setDropdown(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleSubmit = (e) => {
    navigate(`/catalogue?genre=${e}`)
  }

  return (
    <>
      <nav
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          zIndex: '5',
          backgroundColor: '#6f5475',
          
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            padding: '20px',
            position: 'relative',
          }}
        >
          <NavLink to="/home">
          <Logo color={fixed ? 'CCCFCE' : '#CCCFCE'} width={'35'} />
          </NavLink>
          <div className={style.verticalBar}></div>
          <h3 className={style.logoName}>The Next Page Library</h3>
        </div>
        <div className={style.socialMedia}>
          <ul
            style={{
              display: 'flex',
              flexDirection: 'row',
              position: 'relative',
              gap: '10px',
              paddingRight: '10px',
              marginBlock: '0',
            }}
          >
            <li>
              <Mail width={'25'} />
            </li>
            <li>
              <Ping width={'25'} />
            </li>
            <li className={style.line}></li>
            <li>
              <Facebook width={'25'} />
            </li>
            <li>
              <Twitter width={'25'} />
            </li>
            <li>
              <Instagram width={'25'} />
            </li>
            <li>
              <Youtube width={'25'} />
            </li>
          </ul>
        </div>
      </nav>
      <nav
        style={{
          background: '#6f5475',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          transition: 'all 0.3s ease',
          
        }}
        className={`${style.downNav}`}
      >
        <div>
          <ul>
            <li>
              <Link to={'/'}>INICIO</Link>
            </li>
            <li>
              <Link to="/catalogue">CATÁLOGO</Link>
            </li>          
            <li>
              <Link to="/novedades">NOVEDADES</Link>
            </li>
            <li>
              <Link to="/aboutus">CONTACTO</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
          </ul>
        </div>
        <SearchBar></SearchBar>
       
        <div className={style.profile}>
          {token ? (
            <>
              <img
                style={{
                  borderRadius: '990px',
                  width: '50px',
                  height: '50px',
                  objectFit: 'cover',
                }}
                src={user.profilePic}
              ></img>
              <p
                onClick={handleDrop}
                style={{ cursor: 'pointer' }}
                id="dropdown"
              >
                {' '}
                {user.userName}
              </p>
            </>
          ) : (
            <>
              <Link to="/check">INGRESAR</Link>
              <Profile width={40}></Profile>
            </>
          )}
          <div className={style.cart}>
            {user ? (
              <Link to={`/shoppingCart/${user.id}`}>
                <Cart width={40}></Cart>
              </Link>
            ) : (
              <Link to={`/shoppingCart`}>
                <Cart width={40}></Cart>
              </Link>
            )}
            {cart?.length > 0 ? (
              <div className={style.cartLength}>{cart.length}</div>
            ) : null }
          </div>
        </div>
      </nav>
      {user && token && (
        <div
          ref={dropdownRef}
          className={`${style.dropdown} ${
            dropdown && user.userType == 'user'
              ? style.open
              : dropdown && user.userType == 'admin'
              ? style.openAdmin
              : ''
          }`}
        >
          <ul>
            <li>
              <Link to={`/userpanel/`}>Mi perfil</Link>
            </li>
            {user.userType == 'admin' && (
              <li>
                <Link to={'/admindashboard'}>Admin</Link>
              </li>
            )}

            <li onClick={() => logOut(auth)} style={{ color: '#d65555' }}>
              Salir
            </li>
          </ul>
        </div>
      )}
    </>
  )
}

export default Navbar

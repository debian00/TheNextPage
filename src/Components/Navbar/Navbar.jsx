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
import { getGenres } from '../../redux/actions/actionGet'

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

  useEffect(() => {
    dispatch(getGenres())
  }, [])

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

  const logOut = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    setDropdown(false)
    navigate('/')
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
          <Link to="/">
          <Logo color={fixed ? 'CCCFCE' : '#CCCFCE'} width={'35'} />
          </Link>
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
              <Link to="/aboutus">NOSOTROS</Link>
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
          {user ? (
            <Link to={`/shoppingCart/${user.id}`}>
              <Cart width={40}></Cart>
            </Link>
          ) : (
            <Link to={`/check`}>
              <Cart width={40}></Cart>
            </Link>
          )}
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

            <li onClick={logOut} style={{ color: '#d65555' }}>
              Salir
            </li>
          </ul>
        </div>
      )}
    </>
  )
}

export default Navbar

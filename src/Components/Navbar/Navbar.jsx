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

  useEffect(() => {
    dispatch(getGenres())
  }, [])

  const handleScroll = () => {
    if (window.scrollY > 80) {
      setFixed(true)
    } else {
      setFixed(false)
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

  const handleDrop = () => {
    if (dropdown) {
      setDropdown(false)
    } else {
      setDropdown(true)
    }
  }

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
          <Logo color={fixed ? 'CCCFCE' : '#CCCFCE'} width={'35'} />
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
        className={`${style.downNav} ${
          fixed &&
          location.pathname !== '/shoppingCart' &&
          location.pathname !== '/checkout'
            ? style.fixed
            : ''
        }`}
      >
        <div>
          <ul>
            <li>
              <Link to={'/'}>INICIO</Link>
            </li>
            <li>
              <Link to="/catalogue">CATALOGO</Link>
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
          <Link
            to={'/admindashboard'}
            // id="dropdown"
            // onClick={handleDrop}
            // style={{
            //   color: '#AAEEC4',
            //   fontFamily: "'Avenir'",
            //   cursor: 'pointer',
            // }}
          >
            ADMIN
          </Link>

          {token ? (
            <>
              <Link to="/userPanel" id="dropdown">
                {' '}
                MI PERFIL
              </Link>
            </>
          ) : (
            <>
              <Link to="/check">INGRESAR</Link>
              <Profile width={40}></Profile>
            </>
          )}
          <Link>
            <Cart width={40}></Cart>
          </Link>
        </div>
      </nav>
      <div
        ref={dropdownRef}
        className={`${style.dropdown} ${dropdown ? style.open : ''}`}
      >
        <ul>
          {genres?.map((ele) => {
            return (
              <li onClick={() => handleSubmit(ele.id)} key={ele.id}>
                {ele.name}
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default Navbar

// import React from 'react'
import style from './navbar.module.css'
import { Link } from 'react-router-dom'
import {
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

const Navbar = () => {
  const [fixed, setFixed] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  const dropdownRef = useRef(null)

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setFixed(true)
    } else {
      setFixed(false)
    }
  }

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
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
    setDropdown(!dropdown)
  }

  return (
    <>
      <nav
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
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
          <Logo color={fixed ? 'white' : '#033d7b'} width={'35'} />
          <div className={style.verticalBar}></div>
          <h3 className={style.logoName}>Biblioteca Nacional The Next Page</h3>
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
        className={style.downNav}
        style={{
          background: '#033d7b',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <ul>
            <li>
              <Link>INICIO</Link>
            </li>
            <li
              onClick={handleDrop}
              style={{
                color: 'white',
                fontFamily: "'Roboto'",
                cursor: 'pointer',
              }}
            >
              CATALOGO
            </li>

            <li>
              <Link>NOSOTROS</Link>
            </li>
          </ul>
        </div>
        <div className={style.profile}>
          <Link>INGRESAR</Link>
          <Profile width={40}></Profile>
        </div>
      </nav>

      <div
        ref={dropdownRef}
        className={`${style.dropdown} ${dropdown ? style.open : ''}`}
      >
        <ul>
          <li>FILTROS</li>
          <li>FILTROS</li>
          <li>FILTROS</li>
          <li>FILTROS</li>
        </ul>
      </div>
    </>
    // <nav className={`${style.nav} ${fixed ? style.active : ''}`}>
    //   <div style={{ margin: 'auto 0' }}>
    //     <ul>
    //       <li>
    //         <Link to={'/'} style={{ color: fixed ? 'white' : 'black' }}>
    //           Inicio
    //         </Link>
    //       </li>
    //       <li>
    //         <Link to={'/'} style={{ color: fixed ? 'white' : 'black' }}>
    //           Productos
    //         </Link>
    //       </li>
    //       <li>
    //         <Link to={'/about'} style={{ color: fixed ? 'white' : 'black' }}>
    //           Nosotros
    //         </Link>
    //       </li>
    //       <li>
    //         <Link to={'/'} style={{ color: fixed ? 'white' : 'black' }}>
    //           FAQs
    //         </Link>
    //       </li>
    //     </ul>
    //   </div>
    //   <div style={{ marginTop: '12px' }}>
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       width="45"
    //       height="45"
    //       fill={fixed ? 'white' : 'black'}
    //       viewBox="0 0 16 16"
    //     >
    //       <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
    //       <path
    //         fillRule="evenodd"
    //         d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
    //       />
    //     </svg>
    //   </div>
    // </nav>
  )
}

export default Navbar

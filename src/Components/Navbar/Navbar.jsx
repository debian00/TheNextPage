// import React from 'react'
import style from './navbar.module.css';

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <a className={style.active} href="#home">
        Home
      </a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
    </div>
  );
};

export default Navbar;


import React, { useRef, useState } from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {

  const [menu, setMenu] = useState('home');
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  }

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  }

  return (
    <div className='navbar'>
      <h2 className='nav-logo'>Priya</h2>
      

      <img
        src={menu_open}
        onClick={openMenu}
        alt="Open Menu"
        className='nav-mob-open'
      />

      <ul ref={menuRef} className="nav-menu">

        <img
          src={menu_close}
          onClick={closeMenu}
          alt="Close Menu"
          className="nav-mob-close"
        />


        <li className={menu === "home" ? "active" : ""}>
          <AnchorLink className='anchor-link' href='#home'>
            <p onClick={() => { setMenu("home"); closeMenu(); }}>Home</p>
          </AnchorLink>
        </li>

        <li className={menu === "about" ? "active" : ""}>
          <AnchorLink className='anchor-link' offset={50} href='#about'>
            <p onClick={() => { setMenu("about"); closeMenu(); }}>About Me</p>
          </AnchorLink>
        </li>

        <li className={menu === "services" ? "active" : ""}>
          <AnchorLink className='anchor-link' offset={50} href='#skills'>
            <p onClick={() => { setMenu("skills"); closeMenu(); }}>Skills</p>
          </AnchorLink>
        </li>

        <li className={menu === "work" ? "active" : ""}>
          <AnchorLink className='anchor-link' offset={50} href='#work'>
            <p onClick={() => { setMenu("work"); closeMenu(); }}>Portfolio</p>
          </AnchorLink>
        </li>

        <li className={menu === "contact" ? "active" : ""}>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            <p onClick={() => { setMenu("contact"); closeMenu(); }}>Contact</p>
          </AnchorLink>
        </li>

      </ul>

      <div className="nav-connect">
        <AnchorLink className='anchor-link' offset={50} href='#contact'>
          Connect With Me
        </AnchorLink>
      </div>

    </div>
  )
}

export default Navbar;

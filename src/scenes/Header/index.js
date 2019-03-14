import React, { Component } from 'react'
import HeaderMenu from './components/HeaderMenu'
import { NavLink } from 'react-router-dom'

import './header.sass'

const Header = () => (
  <div className="header flex flex-row flex-justify-between">
    <LogoComponent />
    <HeaderMenu />
  </div>
)

const LogoComponent = () => (
  <NavLink to="/" className="header__menu__logo">
    <img src="https://github.com/mathitos.png" />
  </NavLink>
)

export default Header

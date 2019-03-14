import React, { Component } from 'react'
import HeaderMenu from './components/HeaderMenu'
import { NavLink } from 'react-router-dom'

import './header.sass'

const Header = () => (
  <div className="header flex flex-row flex-justify-between">
    <NavLink to="/" className="header__menu__logo" >Matheus\nWebSite</NavLink>
    <HeaderMenu />
  </div>
)

export default Header

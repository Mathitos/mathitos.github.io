import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import placeholder from 'assets/images/placeholder-profilepic.jpg'

import './header.sass'

const Header = () => (
  <div className="header flex flex-row flex-justify-between">
    <LogoComponent />
    <HeaderMenu />
  </div>
)

const LogoComponent = () => (
  <div className="header__menu__title">
    <NavLink to="/" className="header__menu__title__content">
      Matheus Anzzulin
    </NavLink>
  </div>
)

const HeaderMenu = () => (
  <div className="header__menu">
    <MenuItem name="Resume" url="/resume" />
    <MenuItem name="Rpg Sheets" url="/rpg-sheets" />
    <MenuItem name="To Do List" url="/to-do-list" />
  </div>
)

const MenuItem = ({ name, url }) => (
  <div className="header__menu__item">
    <NavLink
      to={url}
      className="header__menu__item__content"
      activeClassName="header__menu__item__content--selected"
    >
      {name}
    </NavLink>
  </div>
)

export default Header

import React, { Component } from 'react'
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
    <img className="header__menu__logo__image" src="https://scontent.fpoa8-1.fna.fbcdn.net/v/t1.0-1/c0.0.160.160a/p160x160/13332752_1202231293120533_4165613431556447213_n.jpg?_nc_cat=109&_nc_ht=scontent.fpoa8-1.fna&oh=8be498a7fbcab26d86c6834cea38ccb3&oe=5D201509" />
    {/* https://github.com/mathitos.png */}
  </NavLink>
)

const HeaderMenu = () => (
  <div className="header__menu  flex flex-row flex-justify-end flex-align-center">
    <MenuItem name="Resume" url="/resume" />
    <MenuItem name="Rpg Sheets" url="/rpg-sheets" />
    <MenuItem name="To Do List" url="/to-do-list" />
  </div>
)

const MenuItem = ({ name, url }) => (
  <div className="header__menu__item flex flex-justify-center flex-align-center">
    <NavLink to={url} className="header__menu__item__content" activeClassName="header__menu__item__content--selected">{name}</NavLink>
  </div>
)


export default Header
